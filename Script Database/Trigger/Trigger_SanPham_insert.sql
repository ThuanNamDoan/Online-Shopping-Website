create trigger Trigger_SanPham_insert on SanPham for insert
as
begin
	/*khai bao cursor*/
	declare cursorInserted cursor for select MaCH from inserted;
	declare @MaCH int;
	
	/*mo cursor, lay record dau tien trong bang inserted*/
	open cursorInserted;
	fetch next from cursorInserted into @MaCH;

	declare @total int;
	set @total = 0;

	while (@@fetch_status = 0)
	begin
	/*-----------------------------------------------------------------------------------------------------*/
		
		set @total = (select count(MaSP) from SanPham where MaCH = @MaCH);
		update CuaHang set SoSP = @total where MaCH = @MaCH;

		fetch next from cursorInserted into @MaCH;
	/*-----------------------------------------------------------------------------------------------------*/
	end
end