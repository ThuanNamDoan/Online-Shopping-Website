const sql = require("mssql/msnodesqlv8");

const conn = new sql.ConnectionPool({
    database: "Shopee",
    server: "localhost",
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true
    }
});


async function queryDH_All(maKH){
    
     return new Promise((res,rej)=>{
        conn.connect()
        .then(() => {
            
            conn.query("select dh.MaDH, ch.TenCH, dh.PhiVC, dh.TongTien, ctdh.MaSP, ctdh.SoLuong, ctdh.ThanhTien, sp.TenSP, ttdh.TinhTrang, ctdh.GiaBan, spha.Anh  from DonHang dh inner join CuaHang ch on dh.MaCH = ch.MaCH inner join CT_DonHang ctdh  on dh.MaDH = ctdh.MaDH  inner join SanPham sp on ctdh.MaSP = sp.MaSP inner join TinhTrang_DonHang ttdh on ttdh.MaDH = dh.MaDH inner join SanPham_HinhAnh spha on spha.MaSP = sp.MaSP and dh.MaKH = "+maKH, function (err, recordset) {    
                if (err) console.log(err)
    
                let eachStore = JSON.stringify(recordset.recordset);
                //let products = recordset.recordset;
                res(eachStore);
            });
        })
        .catch(err => {rej("error! " + err)});
            
            
    })
}

async function queryDH_CXN(maKH){
    return new Promise((res,rej)=>{
        conn.connect()
        .then(() => {
            
            conn.query("select dh.MaDH, ch.TenCH, dh.PhiVC, dh.TongTien, ctdh.MaSP, ctdh.SoLuong, ctdh.ThanhTien, sp.TenSP, ttdh.TinhTrang, ctdh.GiaBan, spha.Anh from DonHang dh inner join CuaHang ch on dh.MaCH = ch.MaCH inner join CT_DonHang ctdh on dh.MaDH = ctdh.MaDH inner join SanPham sp on ctdh.MaSP = sp.MaSP inner join TinhTrang_DonHang ttdh on ttdh.MaDH = dh.MaDH inner join SanPham_HinhAnh spha on spha.MaSP = sp.MaSP and TinhTrang = 'CXN' and dh.MaKH = " +maKH, function (err, recordset) {
                
                if (err) console.log(err)
    
                let eachStore = JSON.stringify(recordset.recordset);
                //let products = recordset.recordset;
                res(eachStore);
            });
        })
        .catch(err => {rej("error! " + err)});
    })
}

async function queryDH_CLH(maKH){
    return new Promise((res,rej)=>{
        conn.connect()
        .then(() => {
            
            conn.query("select dh.MaDH, ch.TenCH, dh.PhiVC, dh.TongTien, ctdh.MaSP, ctdh.SoLuong, ctdh.ThanhTien, sp.TenSP, ttdh.TinhTrang, ctdh.GiaBan, spha.Anh from DonHang dh inner join CuaHang ch on dh.MaCH = ch.MaCH inner join CT_DonHang ctdh on dh.MaDH = ctdh.MaDH inner join SanPham sp on ctdh.MaSP = sp.MaSP inner join TinhTrang_DonHang ttdh on ttdh.MaDH = dh.MaDH inner join SanPham_HinhAnh spha on spha.MaSP = sp.MaSP and TinhTrang = 'CLH' and dh.MaKH = "+maKH, function (err, recordset) {
                
                if (err) console.log(err)
    
                let eachStore = JSON.stringify(recordset.recordset);
                //let products = recordset.recordset;
                res(eachStore);
            });
        })
        .catch(err => {rej("error! " + err)});
    })
}

async function queryDH_DG(maKH){
    return new Promise((res,rej)=>{
        conn.connect()
        .then(() => {
            
            conn.query("select dh.MaDH, ch.TenCH, dh.PhiVC, dh.TongTien, ctdh.MaSP, ctdh.SoLuong, ctdh.ThanhTien, sp.TenSP, ttdh.TinhTrang, ctdh.GiaBan, spha.Anh from DonHang dh inner join CuaHang ch on dh.MaCH = ch.MaCH inner join CT_DonHang ctdh on dh.MaDH = ctdh.MaDH inner join SanPham sp on ctdh.MaSP = sp.MaSP inner join TinhTrang_DonHang ttdh on ttdh.MaDH = dh.MaDH inner join SanPham_HinhAnh spha on spha.MaSP = sp.MaSP and TinhTrang = 'DG' and dh.MaKH = "+maKH, function (err, recordset) {
                
                if (err) console.log(err)
    
                let eachStore = JSON.stringify(recordset.recordset);
                //let products = recordset.recordset;
                res(eachStore);
            });
        })
        .catch(err => {rej("error! " + err)});
    })
}

async function queryDH_GTC(maKH){
    return new Promise((res,rej)=>{
        conn.connect()
        .then(() => {
            
            conn.query("select dh.MaDH, ch.TenCH, dh.PhiVC, dh.TongTien, ctdh.MaSP, ctdh.SoLuong, ctdh.ThanhTien, sp.TenSP, ttdh.TinhTrang, ctdh.GiaBan, spha.Anh from DonHang dh inner join CuaHang ch on dh.MaCH = ch.MaCH inner join CT_DonHang ctdh on dh.MaDH = ctdh.MaDH inner join SanPham sp on ctdh.MaSP = sp.MaSP inner join TinhTrang_DonHang ttdh on ttdh.MaDH = dh.MaDH inner join SanPham_HinhAnh spha on spha.MaSP = sp.MaSP and TinhTrang = 'GTC' and dh.MaKH = "+maKH, function (err, recordset) {
                
                if (err) console.log(err)
    
                let eachStore = JSON.stringify(recordset.recordset);
                //let products = recordset.recordset;
                res(eachStore);
            });
        })
        .catch(err => {rej("error! " + err)});
    })
}

async function queryDH_DH(maKH){
    return new Promise((res,rej)=>{
        conn.connect()
        .then(() => {
            
            conn.query("select dh.MaDH, ch.TenCH, dh.PhiVC, dh.TongTien, ctdh.MaSP, ctdh.SoLuong, ctdh.ThanhTien, sp.TenSP, ttdh.TinhTrang, ctdh.GiaBan, spha.Anh from DonHang dh inner join CuaHang ch on dh.MaCH = ch.MaCH inner join CT_DonHang ctdh on dh.MaDH = ctdh.MaDH inner join SanPham sp on ctdh.MaSP = sp.MaSP inner join TinhTrang_DonHang ttdh on ttdh.MaDH = dh.MaDH inner join SanPham_HinhAnh spha on spha.MaSP = sp.MaSP and TinhTrang = 'DH' and dh.MaKH = "+maKH, function (err, recordset) {
                
                if (err) console.log(err)
    
                let eachStore = JSON.stringify(recordset.recordset);
                //let products = recordset.recordset;
                
                res(eachStore);
            });
        })
        .catch(err => {rej("error! " + err)});
    })
}

module.exports = {queryDH_All, queryDH_CXN, queryDH_CLH, queryDH_DG, queryDH_GTC, queryDH_DH};
