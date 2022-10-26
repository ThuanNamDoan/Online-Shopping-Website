create trigger Trigger_TinhTrangDH_insert on TinhTrang_DonHang for insert
as
begin
	
	declare cursorInserted_insert cursor for
	select * from inserted;

	declare @MaDH int, @TinhTrang nvarchar(50), @NgayCN date

	open cursorInserted_insert;
	fetch next from cursorInserted_insert into @MaDH, @TinhTrang, @NgayCN;

	while (@@fetch_status = 0)
	begin
	/*-----------------------------------------------------------------------------------------------------*/
		
		if(@TinhTrang is NULL)
			begin
				set @TinhTrang = 'CXN';
				update TinhTrang_DonHang set TinhTrang = @TinhTrang where MaDH = @MaDH
			end

		if(@NgayCN is NULL)
			begin
				set @NgayCN = getdate();
				update TinhTrang_DonHang set NgayCN = @NgayCN where MaDH = @MaDH
			end

		fetch next from cursorInserted_insert into @MaDH, @TinhTrang, @NgayCN;

	/*-----------------------------------------------------------------------------------------------------*/
	end

	close cursorInserted_insert;
	deallocate cursorInserted_insert;

end