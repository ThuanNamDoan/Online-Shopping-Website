/* ------------------------------------------------------------
   Description:  Script for object(s)
     Tables:
          [dbo].[DanhMuc]
   Database DESKTOP-7C65RST.Shopee

   ------------------------------------------------------------ */

BEGIN TRAN 
-- =======================================================
-- Inserting script for Table: [dbo].[DanhMuc]
-- =======================================================
SET QUOTED_IDENTIFIER OFF
Print "Inserting Script for Table: [dbo].[DanhMuc]"
SET QUOTED_IDENTIFIER ON
INSERT INTO [dbo].[DanhMuc]([MaDM],[Ten]) VALUES (1,N'Điện Thoại-Máy Tính Bảng
')
INSERT INTO [dbo].[DanhMuc]([MaDM],[Ten]) VALUES (2,N'Điện Tử-Điện Lạnh
')
INSERT INTO [dbo].[DanhMuc]([MaDM],[Ten]) VALUES (3,N'Phụ Kiện-Thiệt Bị Số
')
INSERT INTO [dbo].[DanhMuc]([MaDM],[Ten]) VALUES (4,N'Laptop-Thiệt bị IT
')
INSERT INTO [dbo].[DanhMuc]([MaDM],[Ten]) VALUES (5,N'Máy Ảnh-Quay Phim
')
INSERT INTO [dbo].[DanhMuc]([MaDM],[Ten]) VALUES (6,N'Điện Gia Dụng
')
INSERT INTO [dbo].[DanhMuc]([MaDM],[Ten]) VALUES (7,N'Nhà Cửa Đời Sống
')
INSERT INTO [dbo].[DanhMuc]([MaDM],[Ten]) VALUES (8,N'Hàng Tiêu Dùng-Thực PHẩm
')
INSERT INTO [dbo].[DanhMuc]([MaDM],[Ten]) VALUES (9,N'Đồ Chời Mẹ & Bé
')
INSERT INTO [dbo].[DanhMuc]([MaDM],[Ten]) VALUES (10,N'Làm Đẹp-Sức Khỏe
')
INSERT INTO [dbo].[DanhMuc]([MaDM],[Ten]) VALUES (11,N'Thời Trang-Phụ Kiện
')
INSERT INTO [dbo].[DanhMuc]([MaDM],[Ten]) VALUES (12,N'Thể Thao-Dã Ngoại
')
INSERT INTO [dbo].[DanhMuc]([MaDM],[Ten]) VALUES (13,N'Xe Máy, Ô tô, Xe Đạp
')
INSERT INTO [dbo].[DanhMuc]([MaDM],[Ten]) VALUES (14,N'Hàng quốc tế
')
GO
-- TRANSACTION HANDLING
IF @@ERROR<>0 OR @@TRANCOUNT=0 BEGIN IF @@TRANCOUNT>0 ROLLBACK SET NOEXEC ON END
GO
IF @@TRANCOUNT>0
	COMMIT

SET NOEXEC OFF
GO
