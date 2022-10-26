
--SanPham
create NONCLUSTERED INDEX SanPham_MaLH_idx
ON SanPham (MaLH)
include (TenSP, GiaBan, GiaGiam, SoLuongTon, SoSaoTB)

create NONCLUSTERED INDEX SanPham_MaCH_idx
ON SanPham (MaCH)
include (SoLuongTon)

--DonHang
CREATE NONCLUSTERED INDEX DonHang_MaCH_idx
ON DonHang (MaCH)
INCLUDE ([NgayLap], [TienTT])

CREATE NONCLUSTERED INDEX DonHang_MaKH_IDX
ON DonHang (MaKH)
INCLUDE ([TongTien], [MaCH], [PhiVC])

--CT_DonHang
CREATE NONCLUSTERED INDEX CT_DonHang_MaSP_idx
ON CT_DonHang (MaSP)
INCLUDE ([NgayDG], [SoLuong], [GiaBan], [ThanhTien])


--TinhTrang_DonHang
create NONCLUSTERED INDEX TinhTrang_DonHang_TinhTrang_idx
ON TinhTrang_DonHang (TinhTrang)




