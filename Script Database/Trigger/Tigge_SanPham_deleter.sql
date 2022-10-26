create trigger Trigger_SanPham_delete on SanPham for delete
as
begin
	/*khai bao cursor*/
	declare cursorDeleted cursor for select MaCH from deleted;
	declare @MaCH int;
	
	/*mo cursor, lay record dau tien trong bang inserted*/
	open cursorDeleted;
	fetch next from cursorDeleted into @MaCH;

	declare @total int;
	set @total = 0;

	while (@@fetch_status = 0)
	begin
	/*-----------------------------------------------------------------------------------------------------*/
		
		set @total = (select count(MaSP) from SanPham where MaCH = @MaCH);
		update CuaHang set SoSP = @total where MaCH = @MaCH;

		fetch next from cursorDeleted into @MaCH;
	/*-----------------------------------------------------------------------------------------------------*/
	end
end