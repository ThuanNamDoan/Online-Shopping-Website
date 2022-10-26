const sql = require("mssql/msnodesqlv8");

const conn = new sql.ConnectionPool({
    database: "Shopee",
    server: "localhost",
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true
    }
});

function getDetail(IDProducts){

    let results = {};
    
    let query = null
    if (IDProducts != 0){
        query = `select SP.MaSP, SP.MaLH, SP.SoDanhGia, SP.MoTa, SP.MaCH, SP.TenSP, SP.SoSaoTB, SP.GiaBan, SP.GiaGiam, SP.SoLuongTon from SanPham as SP where SP.MaSP = ${IDProducts};`
    }
    
    return new Promise((res,rej)=>{
        conn.connect()
        .then(() => {
            conn.query(query, function (err, recordset) {
                let item = recordset.recordset[0]
                
                results.MaCH = item.MaCH;
                results.TenSP = item.TenSP;
                results.SoSaoTB = item.SoSaoTB;
                results.GiaBan = item.GiaBan;
                results.GiaGiam = item.GiaGiam;
                results.SoLuongTon = item.SoLuongTon;
                results.MoTa = item.MoTa;
                results.SoDanhGia = item.SoDanhGia;
                results.TiLeGiam = Math.ceil((item.GiaGiam/item.GiaBan)*100)
                results.MaLH = item.MaLH;
                results.MaSP = item.MaSP;
                
                //loop
                query = `select Mau from SanPham_MauSac as SPMS where SPMS.MaSP = ${IDProducts};`
                conn.connect()
                .then(() => {
                    conn.query(query, function (err, recordset) {
                        let Mau = []
                        recordset.recordset.forEach(element => {
                            Mau.push(element.Mau)
                        });
                        
                        results.Mau = Mau;

                        //loop
                        query = `select KichThuoc from SanPham_KichThuoc as SPKT where SPKT.MaSP = ${IDProducts};`
                        conn.connect()
                        .then(() => {
                            conn.query(query, function (err, recordset) {
                                let KichThuoc = []
                                recordset.recordset.forEach(element => {
                                    KichThuoc.push(element.KichThuoc)
                                });
                                
                                results.KichThuoc = KichThuoc;
                                
                                //loop
                                query = `select DongSP from SanPham_DongSP as SPD where SPD.MaSP = ${IDProducts};`
                                conn.connect()
                                .then(() => {
                                    conn.query(query, function (err, recordset) {
                                        let DongSP = []
                                        recordset.recordset.forEach(element => {
                                            DongSP.push(element.DongSP)
                                        });
                                        
                                        results.DongSP = DongSP;
                                        
                                        //loop
                                        query = `select CH.SDT, CH.Email, CH.SoSP, CH.TenCH, CH.TenNB from CuaHang as CH where CH.MaCH = ${results.MaCH};`
                                        conn.connect()
                                        .then(() => {
                                            conn.query(query, function (err, recordset) {
                                                let item = recordset.recordset[0]
                                                results.SDT = item.SDT;
                                                results.Email = item.Email;
                                                results.SoSP = item.SoSP;
                                                results.TenCH = item.TenCH;
                                                results.TenNB = item.TenNB;
                                                
                                                //loop
                                                query = `select KMCH.MaKMCH, KMCH.LoaiKM, KMCH.SoLuong, KMCH.GTAD, KMCH.NgayKT, KMCH.GTGiam from KMCuaHang as KMCH where KMCH.MaCH = ${results.MaCH};`
                                                conn.connect()
                                                .then(() => {
                                                    conn.query(query, function (err, recordset) {
                                                        results.KMCH = recordset.recordset
                                                        
                                                        //loop
                                                        query = `select Anh from SanPham_HinhAnh as SPHA where SPHA.MaSP = ${IDProducts};`
                                                        conn.connect()
                                                        .then(() => {
                                                            conn.query(query, function (err, recordset) {

                                                                let Anh = []
                                                                recordset.recordset.forEach(element => {
                                                                    Anh.push(element.Anh)
                                                                });
                                                                
                                                                results.Anh = Anh;
                                                                
                                                                //loop
                                                                query = `select TenLH, MaDM from LoaiHang where MaLH = ${results.MaLH};`
                                                                conn.connect()
                                                                .then(() => {
                                                                    conn.query(query, function (err, recordset) {
                                                                        //here
                                                                        item = recordset.recordset[0]
                                                                        
                                                                        results.TenLH = item.TenLH;
                                                                        results.MaDM = item.MaDM

                                                                        //loop
                                                                        query = `select Ten from DanhMuc where MaDM = ${results.MaDM};`
                                                                        conn.connect()
                                                                        .then(() => {
                                                                            conn.query(query, function (err, recordset) {
                                                                                //here
                                                                                results.TenDM = recordset.recordset[0].Ten
                                                                                
                                                                                res(JSON.stringify(results));
                                                                                
                                                                            });
                                                                        })
                                                                        .catch(err => {rej("error! " + err)});
                                                                        //loop
                                                                    });
                                                                })
                                                                .catch(err => {rej("error! " + err)});
                                                                //loop
                                                            });
                                                        })
                                                        .catch(err => {rej("error! " + err)});
                                                        //loop
                                                    });
                                                })
                                                .catch(err => {rej("error! " + err)});
                                                //loop
                                            });
                                        })
                                        .catch(err => {rej("error! " + err)});
                                        //loop
                                    });
                                })
                                .catch(err => {rej("error! " + err)});
                                //loop
                            });
                        })
                        .catch(err => {rej("error! " + err)});
                        //loop  
                        
                    });
                })
                .catch(err => {rej("error! " + err)});
                //loop  
                
            });
        })
        .catch(err => {rej("error! " + err)});
    })
}

module.exports = {getDetail};