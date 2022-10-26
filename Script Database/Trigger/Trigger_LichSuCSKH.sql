create trigger Trigger_LichSuCSKH_insert on LichSu_CSKH for insert
as
begin 
	/*khai bao cursor*/
	declare cursorInserted_insert cursor for
	select * from inserted;
	
	declare @MaNV int, @ThoiGian date, @TenKH nvarchar(50), @DanhGia int, @NDPH nvarchar(50), @SDT char(10);
	
	/*mo cursor va lay du lieu record dau tien*/
	open cursorInserted_insert;
	fetch next from cursorInserted_insert into @MaNV, @ThoiGian, @TenKH, @DanhGia, @NDPH, @SDT;

	while (@@fetch_status = 0)
	begin
	/*-----------------------------------------------------------------------------------------------------*/
		
		declare @LoaiNV varchar(4);
		set @LoaiNV = (select LoaiNV from NhanVien where NhanVien.MaNV = @MaNV);
		
		if (@LoaiNV != 'CSKH')
		begin
			rollback tran
		end

		/*doc du lieu record tiep theo*/
		fetch next from cursorInserted_insert into @MaNV, @ThoiGian, @TenKH, @DanhGia, @NDPH, @SDT;

	/*-----------------------------------------------------------------------------------------------------*/
	end

	
	close cursorInserted_insert;
	deallocate cursorInserted_insert;
end 


go


create trigger Trigger_LichSuCSKH_update on LichSu_CSKH for update
as
begin
	/*khai bao cursor*/
	declare cursorInserted_update cursor for
	select * from inserted;

	declare @MaNV int, @ThoiGian date, @TenKH nvarchar(50), @DanhGia int, @NDPH nvarchar(50), @SDT char(10);
	
	/*mo cursor, lay record dau tien trong bang inserted*/
	open cursorInserted_update;

	fetch next from cursorInserted_update into @MaNV, @ThoiGian, @TenKH, @DanhGia, @NDPH, @SDT;

	while (@@fetch_status = 0)
	begin
	/*-----------------------------------------------------------------------------------------------------*/
		declare @LoaiNV varchar(4);
		set @LoaiNV = (select LoaiNV from NhanVien where NhanVien.MaNV = @MaNV);
		
		if (@LoaiNV != 'CSKH')
		begin
			rollback tran
		end
		
		fetch next from cursorInserted_update into @MaNV, @ThoiGian, @TenKH, @DanhGia, @NDPH, @SDT;

	/*-----------------------------------------------------------------------------------------------------*/
	end
	
	close cursorInserted_update;
	deallocate cursorInserted_update;
end




