create trigger Trigger_TT_NhanDon_insert on TT_NhanDon for insert
as
begin
	
	declare cursorInserted_insert cursor for
	select * from inserted;

	declare @MaDH int, @NgayDat date, @sdt int, @TenNG nvarchar(50), @SoNha int, @PX nvarchar(50), @QH nvarchar(50)

	open cursorInserted_insert;
	fetch next from cursorInserted_insert into @MaDH, @NgayDat, @sdt, @TenNG, @SoNha, @PX, @QH;

	while (@@fetch_status = 0)
	begin
	/*-----------------------------------------------------------------------------------------------------*/
		
		if(@SoNha is NULL)
			begin
				declare @SoNha_KH int
				set @SoNha_KH = (select kh.SoNha from 
										DonHang dh inner join KhachHang kh
										on dh.MaKH = kh.MaKH
										inner join TT_NhanDon ttnd
										on ttnd.MaDH = dh.MaDH)
				update TT_NhanDon set SoNha = @SoNha_KH where MaDH = @MaDH
			end

		if(@PX is NULL)
		begin
			declare @PX_KH int
			set @PX_KH = (select kh.PX from 
									DonHang dh inner join KhachHang kh
									on dh.MaKH = kh.MaKH
									inner join TT_NhanDon ttnd
									on ttnd.MaDH = dh.MaDH)
			update TT_NhanDon set PX = @PX_KH where MaDH = @MaDH
		end

		if(@QH is NULL)
		begin
			declare @QH_KH int
			set @QH_KH = (select kh.SoNha from 
									DonHang dh inner join KhachHang kh
									on dh.MaKH = kh.MaKH
									inner join TT_NhanDon ttnd
									on ttnd.MaDH = dh.MaDH)
			update TT_NhanDon set QH = @QH_KH where MaDH = @MaDH
		end

		
		fetch next from cursorInserted_insert into @MaDH, @NgayDat, @sdt, @TenNG, @SoNha, @PX, @QH;

	/*-----------------------------------------------------------------------------------------------------*/
	end

	close cursorInserted_insert;
	deallocate cursorInserted_insert;

end
