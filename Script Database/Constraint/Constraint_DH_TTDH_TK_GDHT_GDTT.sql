USE Shopee
GO
/*R11 R12*/
ALTER Table DonHang
ADD Constraint PTTT
check (PTThanhToan = 'TM' or PTThanhToan = 'TD')

ALTER Table DonHang
ADD Constraint NgayLap_DH
check (NgayLap >= getdate())

/*R13*/
ALTER Table TT_DangNhapCH
ADD Constraint TaiKhoanDuyNhat_CH
unique(TenDN)

ALTER Table TT_DangNhapKH
ADD Constraint TaiKhoanDuyNhat_KH
unique(TenDN)

ALTER Table TaiKhoan_NQT
ADD Constraint TaiKhoanDuyNhat_QT
unique(TenDangNhap)

ALTER Table TaiKhoan_NQL
ADD Constraint TaiKhoanDuyNhat_QL
unique(TenDangNhap)

/*R14*/
ALTER Table TinhTrang_DonHang
ADD Constraint TinhTrang_DH
check (TinhTrang = 'CXN' or TinhTrang = 'CLH' or TinhTrang = 'DG' or TinhTrang = 'GTC' or TinhTrang = 'DH')

/*R15*/
ALTER Table SanPham
ADD Constraint SoLuongTon
check (SoLuongTon > 0)

/*R16*/
ALTER Table SanPham
ADD Constraint GiaBan
check (GiaBan > 0)

/*R17*/
ALTER Table SanPham
ADD Constraint TinhTrang_SP
check (NgayDK >= getdate())

/*R28*/
ALTER Table GD_ThanhToan
ADD Constraint TinhTrangGD_TT
check (TinhTrang = 'TC' or TinhTrang = 'TB')

ALTER Table GDHoanTra
ADD Constraint TinhTrangGD_HT
check (TinhTrang = 'TC' or TinhTrang = 'TB')

/*R29*/
ALTER Table GD_ThanhToan
ADD Constraint SoTienGD_TT
check (SoTienGD > 0)

ALTER Table GDHoanTra
ADD Constraint SoTienGD_HT
check (SoTienGD > 0)

/*R30*/
ALTER Table GD_ThanhToan
ADD Constraint NgayGD_TT
check (NgayTH > getdate())

ALTER Table GDHoanTra
ADD Constraint NgayGD_HT
check (NgayTH >= getdate())





