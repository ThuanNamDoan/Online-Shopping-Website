-- R23
ALTER TABLE CT_DonHang
ADD CONSTRAINT CK_CT_DonHang_R23 CHECK (GiaGiam > 0);

-- R24
ALTER TABLE CT_DonHang
ADD CONSTRAINT CK_CT_DonHang_R24 CHECK (GiaBan > GiaGiam);

-- R26
ALTER TABLE CT_DonHang
ADD CONSTRAINT CK_CT_DonHang_R26 CHECK (SoSao >= 0 and SoSao <=5);

-- R27
ALTER TABLE CT_DonHang
ADD CONSTRAINT CK_CT_DonHang_R27 CHECK (SoLuong > 0);