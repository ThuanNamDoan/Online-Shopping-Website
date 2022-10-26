const sql = require("mssql/msnodesqlv8");

const conn = new sql.ConnectionPool({
    database: "Shopee",
    server: "localhost",
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true
    }
});


let CuaHang = new Promise((res,rej)=>{
    conn.connect()
    .then(() => {
       let qr = "select R1.MaCH, R1.TenCH, R1.NgayTG, R2.SoLuongTon, R4.SoDonHang, R6.SoLuongDHTC from ( select * from CuaHang ) as R1 left outer join ( select CuaHang.MaCH, sum(SanPham.SoLuongTon) as SoLuongTon from SanPham, CuaHang where SanPham.MaCH = CuaHang.MaCH group by CuaHang.MaCH ) as R2 on R1.MaCH = R2.MaCH left outer join ( select R3.MaCH, R3.SoDonHang from (select CuaHang.MaCH, count(*) as SoDonHang from CuaHang, DonHang where CuaHang.MaCH = DonHang.MaCH group by CuaHang.MaCH) R3 ) as R4 on R2.MaCH = R4.MaCH left outer join ( select CuaHang.MaCH, count(*) as SoLuongDHTC from (select DonHang.MaDH, DonHang.MaCH, TinhTrang_DonHang.TinhTrang from DonHang full outer join TinhTrang_DonHang on DonHang.MaDH = TinhTrang_DonHang.MaDH where TinhTrang_DonHang.TinhTrang = 'GTC') R5, CuaHang where CuaHang.MaCH = R5.MaCH group by CuaHang.MaCH ) as R6 on R6.MaCH = R4.MaCH"
        conn.query(qr, function (err, recordset) {
            
            if (err) console.log(err)

            let store = JSON.stringify(recordset.recordset);
            res(store);
        });
    })
    .catch(err => {rej("error! " + err)});
})

module.exports = {CuaHang};
