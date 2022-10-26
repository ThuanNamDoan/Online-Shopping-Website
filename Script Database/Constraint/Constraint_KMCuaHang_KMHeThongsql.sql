-- R18
ALTER TABLE KMCuaHang
ADD CONSTRAINT CK_KM_CuaHang_R18 CHECK (NgayBD < NgayKT);

ALTER TABLE KMHeThong
ADD CONSTRAINT CK_KM_HeThong_R18 CHECK (NgayBD < NgayKT);

-- R19
ALTER TABLE KMCuaHang
ADD CONSTRAINT CK_KM_CuaHang_R19 CHECK (GTGiam > 0);

ALTER TABLE KMHeThong
ADD CONSTRAINT CK_KM_HeThong_R19 CHECK (GTGiam > 0);

-- R20
ALTER TABLE KMCuaHang
ADD CONSTRAINT CK_KM_CuaHang_R20 CHECK (GTAD > GTGiam);

ALTER TABLE KMHeThong
ADD CONSTRAINT CK_KM_HeThong_R20 CHECK (GTAD > GTGiam);


-- R21
ALTER TABLE KMCuaHang
ADD CONSTRAINT CK_KM_CuaHang_R21 CHECK (SoLuong > 0);

ALTER TABLE KMHeThong
ADD CONSTRAINT CK_KM_HeThong_R21 CHECK (SoLuong > 0);

-- R22
ALTER TABLE KMCuaHang
ADD CONSTRAINT CK_KM_CuaHang_R22 CHECK (LoaiKM = 'GTPT' or LoaiKM = 'GTDH' or LoaiKM = 'VC');

ALTER TABLE KMHeThong
ADD CONSTRAINT CK_KM_HeThong_R22 CHECK (LoaiKM = 'PTTT' or LoaiKM = 'VC');