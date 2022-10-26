create database Shopee

go

use Shopee


create table SanPham		--ok
(
	MaSP int primary key,
	SoSaoTB float check (SoSaoTB >= 0 and SoSaoTB <= 5),
	SoLuongTon int,
	TenSP nvarchar(100),
	NgayDK date,
	GiaBan int,
	GiaGiam int,
	MoTa nvarchar(100),
	SoDanhGia int,
	MaLH int,
	MaCH int
)

create table LoaiHang		-- ok			
(
	MaLH int primary key, 
	TenLH nvarchar(50),
	MaDM int
)


create table SanPham_HinhAnh	-- ok
(
	MaSP int,
	Anh varchar(100),
	CONSTRAINT PK_SANPHAM_HINHANH PRIMARY KEY (MaSP, Anh)
)

create table SanPham_KichThuoc -- ok
(
	MaSP int,
	KichThuoc nvarchar(20),
	CONSTRAINT PK_SANPHAM_KICHTHUOC PRIMARY KEY (MaSP, KichThuoc)
)

create table SanPham_MauSac		--ok	
(
	MaSP int,
	Mau nvarchar(20),
	CONSTRAINT PK_SANPHAM_MAUSAC PRIMARY KEY (MaSP, Mau)
)

create table SanPham_DongSP -- ok
(
	MaSP int, --
	DongSP nvarchar(50) not null,
	CONSTRAINT PK_SanPham_DongSP PRIMARY KEY (MaSP, DongSP)
)

create table DanhMuc	--ok
(
	MaDM int primary key, 
	Ten nvarchar(50)
)

create table CuaHang -- ok
(
	MaCH int primary key,
	TenCH nvarchar(50),
	TenNB nvarchar(50),
	GioiTinh nchar(5),
	NgaySinh date ,
	SDT char(10),
	Email char(30),
	SoNha nvarchar(100),
	PX nvarchar(50),
	QH nvarchar(50),
	SoSP int,
	NgayTG date 
)

create table TT_DangNhapCH -- ok
(
	TenDN varchar(20) primary key, 
	MaCH int, -- 
	MatKhau varchar(20)
)

create table ThongtinTTCH -- ok
(
	MaTDCH int  primary key, 
	TenCT nvarchar(50), 
	SoThe varchar(20), 
	TenNH nvarchar(50), 
	SoTK int, 
	SDT char(10) CHECK (SDT not like '%[^0-9]%'), 
	MaCH int --
)

create table KMCuaHang -- ok
(
	MaKMCH int primary key,   
	SoLuong int, 
	GTAD int, 
	NgayBD date, 
	NgayKT date, 
	LoaiKM varchar(4),
	GTGiam int, 
	MaCH int --
)

create table KMHeThong-- ok
(
	MaKMHT int primary key, 
	SoLuong int check (SoLuong >= 0), 
	GTAD int, 
	NgayBD date, 
	NgayKT date, 
	LoaiKM varchar(4),
	GTGiam int
)

create table DonHang	-- ok
(
	MaDH int primary key,
	NgayLap date, 
	PTThanhToan char(2),
	TongTien int, 
	MaCH int,--
	MaKH int, --
	KMHT int, --
	KMCH int, -- 
	TienKM int, 
	PhiVC int, 
	TienTT int
)

create table TTHD_ThanhToanTD -- ok
(
	MaDH int primary key, --
	SoThe varchar(20), 
	TenNH nvarchar(50), 
	SDT char(10) CHECK (SDT not like '%[^0-9]%'), 
	SoTienTT int, 
	ThoiGianTT date, 
	NDCK nvarchar(100)
)


create table TT_NhanDon -- ok
(
	MaDH int primary key, --
	NgayDat date, 
	SDT char(10) CHECK (SDT not like '%[^0-9]%'), 
	TenNN nvarchar(50),
	SoNha nvarchar(100), 
	PX nvarchar(50), 
	Qh nvarchar(50), 
)

create table TinhTrang_DonHang -- ok
(
	MaDH int primary key, --
	TinhTrang varchar(3),
	NgayCN date
)

create table CT_DonHang -- ok
(
	MaDH int not null, 
	MaSP int not null, 
	SoLuong int, 
	GiaBan int, 
	GiaGiam int, 
	Mau nvarchar(20),
	KichThuoc nvarchar(20),
	DongSP nvarchar(50),
	NgayDG date,
	SoSao int,
	BinhLuan nvarchar(50),
	ThanhTien int,
	MaKH int,
	CONSTRAINT PK_CT_DonHang PRIMARY KEY (MaDH, MaSP)
)

create table LichSu_CSKH -- ok
(
	MaNV int,
	ThoiGian date,
	TenKH nvarchar(50),
	DanhGia int,
	NoiDungPH nvarchar(100),
	SDT char(10) CHECK (SDT not like '%[^0-9]%'),
	CONSTRAINT PK_LichSuCSKH PRIMARY KEY (MaNV, ThoiGian)
)

create table KhachHang -- ok
(
	MaKH int primary key,
	TenKH nvarchar(50),
	NgaySinh date,
	GioiTinh nchar(5),
	SDT char(10),
	Email char(30),
	SoNha nvarchar(100),
	QH nvarchar(50),
	PX nvarchar(50)
)

create table TT_DangNhapKH -- ok
(
	TenDN varchar(20) primary key, 
	MatKhau varchar(20), 
	MaKH int --
)

create table TT_DangNhapNV -- ok
(
	TenDN varchar(20) primary key, 
	MatKhau varchar(20), 
	MaNV int --
)

create table NhanVien -- ok
(
	MaNV int primary key, 
	TenNV nvarchar(50),
	SDT char(10),
	GioiTinh nchar(5),
	NgaySinh date,
	SoNha nvarchar(100),
	PX nvarchar(50),
	QH nvarchar(50),
	TP nvarchar(50),
	LoaiNV varchar(4),
	TenDN varchar(20)
)

create table GD_ThanhToan	-- ok
(
	MaGDTT int primary key,
	TinhTrang char(2),
	SoTienGD int,
	NoiDung nvarchar(100),
	NgayTH date,
	MaTDCH int,
	MaNV int,
	MaDH int
)

create table TaiKhoanTDKH -- ok
(
	SoThe varchar(20) not null,
	TenNH nvarchar(50) not null,
	SoTK varchar(20),
	TenCT nvarchar(50),
	CONSTRAINT PK_TaiKhoanTDKH PRIMARY KEY (SoThe, TenNH)
)

create table GDHoanTra	-- ok
(
	MaGDHT int primary key, 
	TinhTrang char(2),
	SoTienGD int,
	NoiDung nvarchar(100),
	NgayTH date,
	MaNV int,
	MaKH int,
	MaDH int
)

create table NguoiQuanTri -- ok
(
	Ma int primary key,
	TenDangNhap varchar(20),
	Ten nvarchar(50),
	SDT char(10),
	NgaySinh date,
	GioiTinh nchar(5),
	Email char(20),
	SoNha nvarchar(100),
	QH nvarchar(50),
	PX nvarchar(50),
	TP nvarchar(50)
)

create table TaiKhoan_NQT -- ok
(
	TenDangNhap varchar(20) primary key, --
	MatKhau varchar(20),

)

create table NguoiQuanLy -- ok
(
	Ma int primary key,
	TenDangNhap varchar(20),
	Ten nvarchar(50),
	SDT char(10),
	NgaySinh date,
	GioiTinh nchar(5),
	Email char(20),
	SoNha nvarchar(100),
	PX nvarchar(50),
	QH nvarchar(50),
	ThanhPho nvarchar(50)
)

create table TaiKhoan_NQL
(
	TenDangNhap varchar(20) primary key, --
	MatKhau varchar(20)
)


-- fk table SanPham
ALTER TABLE SanPham ADD CONSTRAINT FK_LH_SP FOREIGN KEY (MaLH)
REFERENCES LoaiHang(MaLH)

ALTER TABLE SanPham ADD	CONSTRAINT FK_CH_SP FOREIGN KEY (MaCH)
REFERENCES CuaHang(MaCH) -- ok

-- fk table LoaiHang
ALTER TABLE LoaiHang ADD CONSTRAINT FK_DM_LHH FOREIGN KEY (MaDM)
REFERENCES DanhMuc(MaDM) -- ok

-- fk table TT_DangNhap_CH
ALTER TABLE TT_DangNhapCH ADD CONSTRAINT FK_CH_TTDN FOREIGN KEY (MaCH)
REFERENCES CuaHang(MaCH) -- ok

-- fk table Thongtin_TTCH
ALTER TABLE ThongtinTTCH ADD CONSTRAINT FK_TTCH_TTDN FOREIGN KEY (MaCH)
REFERENCES CuaHang(MaCH) -- ok

-- fk table KM_CuaHang
ALTER TABLE KMCuaHang ADD CONSTRAINT FK_KMCH_CH FOREIGN KEY (MaCH)
REFERENCES CuaHang(MaCH) -- ok

-- fk table DonHang
ALTER TABLE DonHang ADD CONSTRAINT FK_CH_DH FOREIGN KEY (MaCH)
REFERENCES CuaHang(MaCH)
ALTER TABLE DonHang ADD CONSTRAINT FK_KH_DH FOREIGN KEY (MaKH)
REFERENCES KhachHang(MaKH)
ALTER TABLE DonHang ADD CONSTRAINT FK_KMHT_DH FOREIGN KEY (KMHT)
REFERENCES KMHeThong(MaKMHT)
ALTER TABLE DonHang ADD CONSTRAINT FK_KMCH_DH FOREIGN KEY (KMCH)
REFERENCES KMCuaHang(MaKMCH) -- ok

-- fk table TT_HD_ThanhToanTD
ALTER TABLE TTHD_ThanhToanTD ADD CONSTRAINT FK_TTTD_DH FOREIGN KEY (MaDH)
REFERENCES DonHang(MaDH)
ALTER TABLE TTHD_ThanhToanTD ADD CONSTRAINT FK_TKTDKH_TTTDD FOREIGN KEY (SoThe,TenNH)
REFERENCES TaiKhoanTDKH(SoThe,TenNH) -- ok

-- fk table CT_DonHang
ALTER TABLE CT_DonHang ADD CONSTRAINT FK_KH_CTDH FOREIGN KEY (MaKH)
REFERENCES KhachHang(MaKH)
ALTER TABLE CT_DonHang ADD CONSTRAINT FK_HD_CTDH FOREIGN KEY (MaDH)
REFERENCES DonHang(MaDH)
ALTER TABLE CT_DonHang ADD CONSTRAINT FK_HD_SP FOREIGN KEY (MaSP)
REFERENCES SanPham(MaSP) -- ok

-- fk table LichSu_CSKH
ALTER TABLE LichSu_CSKH ADD CONSTRAINT FK_LSCS_NV FOREIGN KEY (MaNV)
REFERENCES NhanVien(MaNV) -- ok

-- fk table TT_DangNhap_KH
ALTER TABLE TT_DangNhapKH ADD CONSTRAINT FK_KH_TTKHDN FOREIGN KEY (MaKH)
REFERENCES KhachHang(MaKH) -- ok

-- fk table TT_DangNhapNV
ALTER TABLE TT_DangNhapNV ADD CONSTRAINT FK_NV_TTDNNV FOREIGN KEY (MaNV)
REFERENCES NhanVien(MaNV) -- ok

-- fk table GD_ThanhToan
ALTER TABLE GD_ThanhToan ADD CONSTRAINT FK_TTCHH_GDTT FOREIGN KEY (MaTDCH)
REFERENCES ThongtinTTCH(MaTDCH)

ALTER TABLE GD_ThanhToan ADD CONSTRAINT FK_NV_GDTT FOREIGN KEY (MaNV)
REFERENCES NhanVien(MaNV)

ALTER TABLE GD_ThanhToan ADD CONSTRAINT FK_DM_GDTT FOREIGN KEY (MaDH)
REFERENCES DonHang(MaDH) -- ok

-- fk table GD_HoanTra
ALTER TABLE GDHoanTra ADD CONSTRAINT FK_NVv_HDHT FOREIGN KEY (MaNV)
REFERENCES NhanVien(MaNV)

ALTER TABLE GDHoanTra ADD CONSTRAINT FK_KH_GDHT FOREIGN KEY (MaKH)
REFERENCES KhaChHang(MaKH)


-- fk table NguoiQuanTri
ALTER TABLE NguoiQuanTri ADD CONSTRAINT FK_NQT_TK FOREIGN KEY (TenDangNhap)
REFERENCES TaiKhoan_NQT(TenDangNhap) -- ok

-- fk table NguoiQuanLy
ALTER TABLE NguoiQuanLy ADD CONSTRAINT FK_NQL_TK FOREIGN KEY (TenDangNhap)
REFERENCES TaiKhoan_NQL(TenDangNhap) -- ok

-- fk table TT_NhanDon
ALTER TABLE TT_NhanDon ADD CONSTRAINT FK_DH_TTND FOREIGN KEY (MaDH)
REFERENCES DonHang(MaDH) -- ok

-- fk table TinhTrang_DonHang
ALTER TABLE TinhTrang_DonHang ADD CONSTRAINT FK_DH_TTDH FOREIGN KEY (MaDH)
REFERENCES DonHang(MaDH) 

-- fk table SANPHAM_HINHANH
ALTER TABLE SanPham_HinhAnh ADD CONSTRAINT FK_SP_SPPHOTO FOREIGN KEY (MaSP)
REFERENCES SanPham(MaSP) -- ok

-- fk table SANPHAM_KICHTHUOC
ALTER TABLE SanPham_KichThuoc ADD CONSTRAINT FK_SP_SPKT FOREIGN KEY (MaSP)
REFERENCES SanPham(MaSP) -- ok

-- fk table SANPHAM_MAUSAC
ALTER TABLE SanPham_MauSac ADD CONSTRAINT FK_SP_SPMS FOREIGN KEY (MaSP)
REFERENCES SanPham(MaSP) -- ok

-- fk table SANPHAM_DONGSP
ALTER TABLE SanPham_DongSP ADD CONSTRAINT FK_SP_DSP FOREIGN KEY (MaSP)
REFERENCES SanPham(MaSP) -- ok




























