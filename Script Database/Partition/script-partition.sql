USE Shopee
GO

/*tạo các file group*/
ALTER DATABASE Shopee
ADD FILEGROUP Gia_0_100
GO

ALTER DATABASE Shopee
ADD FILEGROUP Gia_100_100000
GO

ALTER DATABASE Shopee
ADD FILEGROUP Gia_100000
GO


SELECT name AS AvailableFileGroups
FROM sys.filegroups
WHERE type = 'FG'

/*tạo đường dẫn cho các file group*/
ALTER DATABASE Shopee
ADD FILE
(
	NAME = [Gia_0_100],
	FILENAME = 'D:\Gia_0_100.ndf',
	SIZE = 3072KB,
	MAXSIZE = UNLIMITED,
	FILEGROWTH = 1024KB
) TO FILEGROUP [Gia_0_100]
GO

ALTER DATABASE Shopee
ADD FILE
(
	NAME = [Gia_100_100000],
	FILENAME = 'D:\Gia_100_100000.ndf',
	SIZE = 3072KB,
	MAXSIZE = UNLIMITED,
	FILEGROWTH = 1024KB
) TO FILEGROUP [Gia_100_100000]
GO

ALTER DATABASE Shopee
ADD FILE
(
	NAME = [Gia_100000],
	FILENAME = 'D:\Gia_100000.ndf',
	SIZE = 3072KB,
	MAXSIZE = UNLIMITED,
	FILEGROWTH = 1024KB
) TO FILEGROUP [Gia_100000]
GO

SELECT name as [FileName],
physical_name as [FilePath] 
FROM sys.database_files
where type_desc = 'ROWS'
GO

/*tạo function*/
CREATE PARTITION FUNCTION [Func_Partition_By_Price](int) 
AS RANGE RIGHT FOR VALUES (100, 100000)

/*tạo scheme*/
CREATE PARTITION SCHEME Scheme_Partition_By_Price 
	AS PARTITION [Func_Partition_By_Price]
	TO (Gia_0_100, Gia_100_100000, Gia_100000)
GO

/*tạo table*/
CREATE TABLE SanPhamTheoGia
(
	MaSP int,
	SoSaoTB float,
	SoLuongTon int,
	TenSP nvarchar(100),
	NgayDK date,
	GiaBan int,
	GiaGiam int,
	MoTa nvarchar(100),
	SoDanhGia int,
	MaLH int,
	MaCH int,
	PRIMARY KEY (MaSP, GiaBan)
)
ON Scheme_Partition_By_Price (GiaBan)
GO

/*thêm dữ liệu vào bảng*/
INSERT INTO SanPhamTheoGia
SELECT * FROM SanPham

/*truy vấn dữ liệu*/
SELECT * FROM SanPhamTheoGia WHERE $PARTITION.Func_Partition_By_Price(GiaBan) = 2 and GiaBan = 103