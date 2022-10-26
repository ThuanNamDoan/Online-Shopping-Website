create trigger Trigger_GDHoanTra_insert_update on GDHoanTra for insert, update
as
begin
	
	declare cursorInserted_insert cursor for
	select * from inserted;

	declare @MaGDHT int, @TinhTrang char(2), @SoTienGD int, @NoiDung nvarchar(100), @NgayTH date, @MaNV int, @MaKH int, @MaDH int

	open cursorInserted_insert;
	fetch next from cursorInserted_insert into @MaGDHT, @TinhTrang, @SoTienGD, @NoiDung, @NgayTH, @MaNV, @MaKH, @MaDH

	while (@@fetch_status = 0)
	begin
	/*-----------------------------------------------------------------------------------------------------*/
		declare @CheckMaKH int
		--Kiểm tra xem khách hàng được thêm vào có đơn hàng TD cần hoàn trả không
		set @CheckMaKH = (select MaKH from DonHang dh
							inner join TinhTrang_DonHang ttdh
							on dh.MaDH = ttdh.MaDH and dh.PTThanhToan = 'TD' and dh.MaDH = @MaDH)
		--Nếu đúng thì thực hiện thêm vào, sai thì rollback
		if(@MaKH = @CheckMaKH)
			update GDHoanTra
			set TinhTrang = @TinhTrang, SoTienGD = @SoTienGD, NoiDung = @NoiDung, NgayTH = @NgayTH, MaNV = @MaNV, MaKH = @MaKH, MaDH = @MaDH
			where MaGDHT = @MaGDHT
		else
			rollback tran;
		fetch next from cursorInserted_insert into @MaGDHT, @TinhTrang, @SoTienGD, @NoiDung, @NgayTH, @MaNV, @MaKH, @MaDH

	/*-----------------------------------------------------------------------------------------------------*/
	end

	close cursorInserted_insert;
	deallocate cursorInserted_insert;

end
