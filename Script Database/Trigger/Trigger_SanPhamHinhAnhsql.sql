create trigger Trigger_SanPhamHinhAnh_insert on SanPham_HinhAnh for insert
as
begin
	/*khai bao cursor*/
	declare cursorInserted_insert cursor for
	select * from inserted;
	
	declare @MaSP int, @Anh varchar(50);
	
	/*mo cursor va lay du lieu record dau tien*/
	open cursorInserted_insert;
	fetch next from cursorInserted_insert into @MaSP, @Anh;

	while (@@fetch_status = 0)
	begin
	/*-----------------------------------------------------------------------------------------------------*/
		
		declare @SoLuongAnh int;
		set @SoLuongAnh = (select count(*) from SANPHAM_HINHANH where SANPHAM_HINHANH.MaSP = @MaSP)
		
		if (@SoLuongAnh > 9)
		begin
			rollback tran
		end
		
		/*doc du lieu record tiep theo*/
		fetch next from cursorInserted_insert into @MaSP, @Anh;

	/*-----------------------------------------------------------------------------------------------------*/
	end
	
	close cursorInserted_insert;
	deallocate cursorInserted_insert;
end