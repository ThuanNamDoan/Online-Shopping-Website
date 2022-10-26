create trigger Trigger_CTHD_insert on CT_DonHang for insert
as
begin
	/*khai bao cursor*/
	declare cursorInserted cursor for select SoSao, MaDH, MaSP, GiaBan, GiaGiam, SoLuong, ThanhTien from inserted;

	/*khai bao bien chua*/
	declare @MaDH int, @MaSP int, @GiaBan int, @GiaGiam int, @SoLuong int, @ThanhTien_inserted int, @SoSao int;

	/*mo cursor, lay record dau tien trong bang inserted va deleted*/
	open cursorInserted;
	fetch next from cursorInserted into @SoSao, @MaDH, @MaSP, @GiaBan, @GiaGiam, @SoLuong, @ThanhTien_inserted;

	while (@@fetch_status = 0)
	begin
	/*-----------------------------------------------------------------------------------------------------*/
		/*check null value*/
		if(@GiaBan is NULL) set @GiaBan = 0;
		if(@GiaGiam is NULL) set @GiaGiam = 0;
		if(@ThanhTien_inserted is NULL) set @ThanhTien_inserted = 0;
		if(@SoLuong is NULL) set @SoLuong = 0;
		/*check null value*/

		/*G5: xét số lượng tồn kho trong bảng*/
		declare @SoLuongTon int;
		set @SoLuongTon = (select SoLuongTon from SanPham where SanPham.MaSP = @MaSP);

		if (@SoLuongTon is not NULL and @SoLuongTon >= @SoLuong)
			update SanPham set SoLuongTon = @SoLuongTon - @SoLuong where MaSP = @MaSP;
		else
			rollback tran;
		/*G5*/

		/*G1: xét giá bán, giá giảm của sản phẩm trong đơn hàng*/
		declare @GiaBanSP int;
		declare @GiaGiamSP int;
		set @GiaBanSP = (select GiaBan from SanPham where SanPham.MaSP = @MaSP);
		set @GiaGiamSP = (select GiaGiam from SanPham where SanPham.MaSP = @MaSP);

		if(@GiaBanSP is NULL) set @GiaBanSP = 0;
		if(@GiaGiamSP is NULL) set @GiaGiamSP = 0;

		if(@GiaBan != @GiaBanSP)
			update CT_DonHang set GiaBan = @GiaBanSP where MaSP = @MaSP;

		if(@GiaGiam != @GiaGiamSP)
			update CT_DonHang set GiaGiam = @GiaGiamSP where MaSP = @MaSP;
		/*G1*/

		/*R4: Kiểm tra thành tiền trong chi tiết hóa đơn*/
		declare @ThanhTien_check int;
		set @ThanhTien_check = @SoLuong * (@GiaBan - @GiaGiam);
		
		/*Kiem tra dieu kien thanh tien*/
		if (@ThanhTien_inserted != @ThanhTien_check)
		begin
			/*cap nhat thanh tien moi*/
			update CT_DonHang set ThanhTien = @ThanhTien_check where MaSP = @MaSP and MaDH = @MaDH;
		end
		/*R4*/
		
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
			update SanPham set SoDanhGia = @SoDG + 1 where MaSP = @MaSP;
		/*G2*/

		/*R7: Cập nhật số sao TB của sản phẩm*/
		if(@SoSao is not NULL)
		begin
			declare @SoSaoTB float;
			set @SoSaoTB = (select SoSaoTB from SanPham where SanPham.MaSP = @MaSP);
			if(@SoSaoTB is NULL) set @SoSaoTB = 0;

			declare @New_SoSaoTB float;
			set @New_SoSaoTB = (@SoSaoTB*@SoDG + @SoSao)/(@SoDG + 1);
			
			update SanPham set SoSaoTB = ROUND(@New_SoSaoTB, 2) where MaSP = @MaSP;
		end
		/*R7*/
		
		fetch next from cursorInserted into @SoSao, @MaDH, @MaSP, @GiaBan, @GiaGiam, @SoLuong, @ThanhTien_inserted;
	/*-----------------------------------------------------------------------------------------------------*/
	end
	
	close cursorInserted;
	deallocate cursorInserted;

end