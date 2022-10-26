create trigger Trigger_CTHD_update on CT_DonHang for update
as
begin
	/*khai bao cursor*/
	declare cursorInserted_update cursor for select SoSao, MaDH, MaSP, GiaBan, GiaGiam, SoLuong, ThanhTien from inserted;
	declare cursorDeleted_update cursor for select SoSao, SoLuong from deleted;

	declare @SoSaoThem float, @SoSaoXoa float, @MaDH int, @MaSP int, @GiaBan int, @GiaGiam int, @SLThem int, @SLXoa int, @ThanhTien_inserted int;
	
	/*mo cursor, lay record dau tien trong bang inserted va deleted*/
	open cursorInserted_update;
	open cursorDeleted_update;

	fetch next from cursorInserted_update into @SoSaoThem, @MaDH, @MaSP, @GiaBan, @GiaGiam, @SLThem, @ThanhTien_inserted;
	fetch next from cursorDeleted_update into @SoSaoXoa, @SLXoa;

	while (@@fetch_status = 0)
	begin
	/*-----------------------------------------------------------------------------------------------------*/
		
		/*check null value*/
		if(@GiaBan is NULL) set @GiaBan = 0;
		if(@GiaGiam is NULL) set @GiaGiam = 0;
		if(@ThanhTien_inserted is NULL) set @ThanhTien_inserted = 0;
		if(@SLThem is NULL) set @SLThem = 0;
		if(@SLXoa is NULL) set @SLXoa = 0;
		/*check null value*/


		/*G5: xét số lượng tồn kho trong bảng*/
		declare @SoLuongTon int;
		set @SoLuongTon = (select SoLuongTon from SanPham where SanPham.MaSP = @MaSP);

		if (@SoLuongTon is not NULL and (@SoLuongTon + @SLXoa) >= @SLThem)
			update SanPham set SoLuongTon = @SoLuongTon + @SLXoa - @SLThem where MaSP = @MaSP;
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
		set @ThanhTien_check = @SLThem * (@GiaBan - @GiaGiam);
		
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

		if(@SoSaoThem is NULL)
			update SanPham set SoDanhGia = @SoDG - 1 where MaSP = @MaSP;
		/*G2*/
		

		/*R7: Cập nhật số sao TB của sản phẩm*/
		declare @SoSaoTB float;
		set @SoSaoTB = (select SoSaoTB from SanPham where SanPham.MaSP = @MaSP);
		if(@SoSaoTB is NULL) set @SoSaoTB = 0;

		declare @New_SoSaoTB float;
		if(@SoSaoXoa is null) set @SoSaoXoa = 0;

		if(@SoSaoThem is not NULL)
		begin
			set @New_SoSaoTB = (@SoSaoTB*@SoDG - @SoSaoXoa + @SoSaoThem)/(@SoDG);
			update SanPham set SoSaoTB = ROUND(@New_SoSaoTB, 2) where MaSP = @MaSP;
		end
		else
		begin
			if((@SoDG - 1) != 0)
			begin
				set @New_SoSaoTB = (@SoSaoTB*@SoDG - @SoSaoXoa)/(@SoDG - 1);
				update SanPham set SoSaoTB = ROUND(@New_SoSaoTB, 2) where MaSP = @MaSP;
			end
			else
				update SanPham set SoSaoTB = 0 where SanPham.MaSP = @MaSP;
			
		end
		/*R7*/
		
		fetch next from cursorInserted_update into @SoSaoThem, @MaDH, @MaSP, @GiaBan, @GiaGiam, @SLThem, @ThanhTien_inserted;
		fetch next from cursorDeleted_update into @SoSaoXoa, @SLXoa;

	/*-----------------------------------------------------------------------------------------------------*/
	end
	
	close cursorInserted_update;
	close cursorDeleted_update;

	deallocate cursorInserted_update;
	deallocate cursorDeleted_update;

end