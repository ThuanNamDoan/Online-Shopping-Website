create trigger Trigger_TTHD_ThanhToanTD_insert on TTHD_ThanhToanTD for insert
as
begin 
	/*khai bao cursor*/
	declare cursorInserted_insert cursor for
	select * from inserted;
	
	declare @MaDH int, @SoThe int, @TenNH nvarchar(50), @SDT char(10), @SoTienTT int, @ThoiGianTT date, @NDCK nvarchar(50);
	
	/*mo cursor va lay du lieu record dau tien*/
	open cursorInserted_insert;
	fetch next from cursorInserted_insert into @MaDH, @SoThe, @TenNH, @SDT, @SoTienTT, @ThoiGianTT, @NDCK;

	while (@@fetch_status = 0)
	begin
	/*-----------------------------------------------------------------------------------------------------*/
		
		declare @MaNV int;
		set @MaNV = (select MaNV from GD_ThanhToan where GD_ThanhToan.MaDH = @MaDH);

		declare @PTTT varchar(2);
		set @PTTT = (select PTThanhToan from DonHang where DonHang.MaDH = @MaDH);

		declare @LoaiNV varchar(4);
		set @LoaiNV = (select LoaiNV from NhanVien where NhanVien.MaNV = @MaNV);
		
		if (@LoaiNV != 'GD' or @PTTT != 'TD')
		begin
			rollback tran
		end

		/*doc du lieu record tiep theo*/
		fetch next from cursorInserted_insert into @MaDH, @SoThe, @TenNH, @SDT, @SoTienTT, @ThoiGianTT, @NDCK;

	/*-----------------------------------------------------------------------------------------------------*/
	end

	
	close cursorInserted_insert;
	deallocate cursorInserted_insert;
end 