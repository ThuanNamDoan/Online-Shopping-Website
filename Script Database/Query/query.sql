-- 1
select SP.MaSP, SP.TenSP, SP.GiaBan, SP.GiaGiam, SP.SoLuongTon, SP.SoSaoTB, Anh, LoaiHang.TenLH, DanhMuc.MaDM
from SanPham as SP left join SanPham_HinhAnh as HA on SP.MaSP = HA.MaSP
join LoaiHang on SP.MaLH = LoaiHang.MaLH
join DanhMuc on DanhMuc.MaDM = LoaiHang.MaDM
where  DanhMuc.MaDM = 5 and (Anh is null or Anh in (select top 1 Anh from SanPham_HinhAnh as HAP where HAP.MaSP = SP.MaSP))


-- 2
select CH.SDT, CH.Email, CH.SoSP, CH.TenCH, CH.TenNB 
from CuaHang as CH 
where CH.MaCH = 1000

-- 3
select KMCH.MaKMCH, KMCH.LoaiKM, KMCH.SoLuong, KMCH.GTAD, KMCH.NgayKT, KMCH.GTGiam 
from KMCuaHang as KMCH where KMCH.MaCH = 1

-- 4
select * from KMHeThong where cast (GetDate() as Date) = NgayBD


--5
select dh.MaDH, ch.TenCH, dh.PhiVC, dh.TongTien, ctdh.MaSP, ctdh.SoLuong, ctdh.ThanhTien, sp.TenSP, ttdh.TinhTrang, ctdh.GiaBan 
from DonHang dh inner join CuaHang ch 
on dh.MaCH = ch.MaCH and dh.MaKH = 1
inner join CT_DonHang ctdh 
on dh.MaDH = ctdh.MaDH 
inner join TinhTrang_DonHang ttdh 
on ttdh.MaDH = dh.MaDH
inner join SanPham sp 
on ctdh.MaSP = sp.MaSP


--6
select top(10) ch.TenCH as TenCuaHang, SUM(dh.TienTT) as DoanhThu
from DonHang dh, CuaHang ch
where dh.MaCH = ch.MaCH and MONTH(dh.NgayLap) = MONTH(GETDATE()) and YEAR(dh.NgayLap) = YEAR(GETDATE())
group by ch.TenCH
order by SUM(dh.TienTT) desc


-- 7
select top(10) sp.TenSP as TenSP, SUM(ct.SoLuong) as TongSL 
from SanPham sp, CT_DonHang ct
where sp.MaSP = ct.MaSP and YEAR(ct.NgayDG) = YEAR(GETDATE())
group by sp.TenSP
order by SUM(ct.SoLuong)  desc


--8
select R1.MaCH, R1.TenCH, R1.NgayTG, R2.SoLuongTon, R4.SoDonHang, R6.SoLuongDHTC
from
	(
		select MaCH, TenCH, NgayTG from CuaHang
	) as R1
	left outer join
	(
		-- Số lượng tồn của từng cửa hàng (MaCH, SoLuongTon)
		select CuaHang.MaCH, sum(SanPham.SoLuongTon) as SoLuongTon
		from SanPham, CuaHang
		where SanPham.MaCH = CuaHang.MaCH
		group by CuaHang.MaCH
	) as R2
	on R1.MaCH = R2.MaCH
	left outer join
	(
		-- Số lượng đơn hàng của cửa hàng (MaCH, SoDonHang)
		select R3.MaCH, R3.SoDonHang
		from 
			(select CuaHang.MaCH, count(*) as SoDonHang
			from CuaHang, DonHang
			where CuaHang.MaCH = DonHang.MaCH
			group by CuaHang.MaCH) R3
	) as R4
	on R2.MaCH = R4.MaCH
	left outer join
	(
	-- Số lượng đơn hàng thành công của cửa hàng (MaCH, SoLuongDHTC)
		select CuaHang.MaCH, count(*) as SoLuongDHTC
		from 
			(select DonHang.MaDH, DonHang.MaCH, TinhTrang_DonHang.TinhTrang
			from DonHang full outer join TinhTrang_DonHang
			on DonHang.MaDH = TinhTrang_DonHang.MaDH
			where TinhTrang_DonHang.TinhTrang = 'GTC') 
			R5, CuaHang
		where CuaHang.MaCH = R5.MaCH
	group by CuaHang.MaCH
	) as R6
on R6.MaCH = R4.MaCH

--9
select ch.MaCH, SUM(dh.TienTT) as 'DoanhThu', DAY(dh.NgayLap) as ngay 
from CuaHang ch inner join SanPham sp 
on ch.MaCH = sp.MaCH 
inner join DonHang dh 
on dh.MaCH = ch.MaCH  
group by ch.MaCH, DAY(dh.NgayLap) 
having DAY(dh.NgayLap) = DAY(getdate()) and ch.MaCH = 1