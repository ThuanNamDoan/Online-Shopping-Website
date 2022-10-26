create trigger Trigger_CTHD_delete on CT_DonHang for delete
as
begin
	/*khai bao cursor*/
	declare cursorDeleted cursor for select SoSao, MaDH, MaSP, GiaBan, GiaGiam, SoLuong, ThanhTien from deleted;

	/*khai bao bien chua*/
	declare @MaDH int, @MaSP int, @GiaBan int, @GiaGiam int, @SoLuong int, @ThanhTien_deleted int, @SoSao int;

	/*mo cursor, lay record dau tien trong bang inserted va deleted*/
	open cursorDeleted;
	fetch next from cursorDeleted into @SoSao, @MaDH, @MaSP, @GiaBan, @GiaGiam, @SoLuong, @ThanhTien_deleted;

	while (@@fetch_status = 0)
	begin
	/*-----------------------------------------------------------------------------------------------------*/
		/*check null value*/
		if(@GiaBan is NULL) set @GiaBan = 0;
		if(@GiaGiam is NULL) set @GiaGiam = 0;
		if(@ThanhTien_deleted is NULL) set @ThanhTien_deleted = 0;
		if(@SoLuong is NULL) set @SoLuong = 0;
		/*check null value*/

		/*G5: xét số lượng tồn kho trong bảng*/
		declare @SoLuongTon int;
		set @SoLuongTon = (select SoLuongTon from SanPham where SanPham.MaSP = @MaSP);
		if (@SoLuongTon is NULL) set @SoLuongTon = 0;

		update SanPham set SoLuongTon = @SoLuongTon + @SoLuong where MaSP = @MaSP;
		/*G5*/
		
		/*R3: kiểm tra tổng tiền trong hóa đơn*/
		declare @total int;
		set @total = (select sum(ThanhTien) from CT_DonHang where MaDH = @MaDH);
		if(@total is NULL) set @total = 0;
		update DonHang set TongTien = @total where MaDH = @MaDH;
		/*R3*/

		/*R5: Kiểm tra số tiền thanh toán trong hóa đơn*/
		declare @PhiVC int, @TienKM int;
		set @PhiVC = (select PhiVC from DonHang where MaDH = @MaDH);
		set @TienKM = (select TienKM from DonHang where MaDH = @MaDH);
		
		if(@PhiVC is NULL) set @PhiVC = 0;
		if(@TienKM is NULL) set @TienKM = 0;
		
		update DonHang set TienTT = @total + @PhiVC - @TienKM where MaDH = @MaDH;
		/*R5*/

		/*G2: Cập nhật số lượt đánh giá*/
		declare @SoDG int;
		set @SoDG = (select SoDanhGia from SanPham where SanPham.MaSP = @MaSP);

		if(@SoDG is NULL) set @SoDG = 0;

		if(@SoSao is not NULL)
			update SanPham set SoDanhGia = @SoDG - 1 where MaSP = @MaSP;
		/*G2*/

		/*R7: Cập nhật số sao TB của sản phẩm*/
		if(@SoSao is not NULL)
		begin
			declare @SoSaoTB float;
			set @SoSaoTB = (select SoSaoTB from SanPham where SanPham.MaSP = @MaSP);
			if(@SoSaoTB is NULL) set @SoSaoTB = 0;
			
			if((@SoDG - 1) != 0)
			begin
				declare @New_SoSaoTB float;
				set @New_SoSaoTB = (@SoSaoTB*@SoDG - @SoSao)/(@SoDG - 1);
				update SanPham set SoSaoTB = ROUND(@New_SoSaoTB, 2) where MaSP = @MaSP;
			end
			else
				update SanPham set SoSaoTB = 0 where MaSP = @MaSP;
		end
		/*R7*/
		
		fetch next from cursorDeleted into @SoSao, @MaDH, @MaSP, @GiaBan, @GiaGiam, @SoLuong, @ThanhTien_deleted;
	/*-----------------------------------------------------------------------------------------------------*/
	end
	
	close cursorDeleted;
	deallocate cursorDeleted;

end