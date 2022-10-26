const sql = require("mssql/msnodesqlv8");

const conn = new sql.ConnectionPool({
    database: "Shopee",
    server: "localhost",
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true
    }
});

function getCategory(IDCategory, count){
    
    let query = null
    if (IDCategory != 0){
        query = `select top ${count} SP.MaSP, SP.TenSP, SP.GiaBan, SP.GiaGiam, SP.SoLuongTon, SP.SoSaoTB, Anh, LoaiHang.TenLH, DanhMuc.MaDM
        from SanPham as SP left join SanPham_HinhAnh as HA on SP.MaSP = HA.MaSP
             join LoaiHang on SP.MaLH = LoaiHang.MaLH
             join DanhMuc on DanhMuc.MaDM = LoaiHang.MaDM
        where  DanhMuc.MaDM = ${IDCategory} and (Anh is null or Anh in (select top 1 Anh from SanPham_HinhAnh as HAP where HAP.MaSP = SP.MaSP))`
    }
    
    return new Promise((res,rej)=>{
        conn.connect()
        .then(() => {
            
            conn.query(query, function (err, recordset) {
                let products = JSON.stringify(recordset.recordset);
                res(products);
            });
        })
        .catch(err => {rej("error! " + err)});
    })
}

function getAllProducts(){
    
    let query = `select SanPham.MaSP, SanPham.TenSP, SanPham.GiaBan, SanPham.GiaGiam, SanPham.SoLuongTon, SanPham.SoSaoTB from SanPham`;

    return new Promise((res,rej)=>{
        conn.connect()
        .then(() => {
            
            conn.query(query, function (err, recordset) {
                let products = JSON.stringify(recordset.recordset);
                res(products);
            });
        })
        .catch(err => {rej("error! " + err)});
    })
}

module.exports = {getCategory, getAllProducts};