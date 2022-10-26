const sql = require("mssql/msnodesqlv8");

const conn = new sql.ConnectionPool({
    database: "Shopee",
    server: "localhost",
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true
    }
});

function DoanhThu_Day(maCH, ngay){
    return new Promise((res,rej)=>{
        conn.connect()
        .then(() => {
            
            conn.query("select ch.MaCH, SUM(dh.TienTT) as 'DoanhThu', DAY(dh.NgayLap) as ngay from CuaHang ch inner join SanPham sp on ch.MaCH = sp.MaCH inner join DonHang dh on dh.MaCH = ch.MaCH  group by ch.MaCH, DAY(dh.NgayLap) having DAY(dh.NgayLap) = "+ngay+" and ch.MaCH = "+maCH, function (err, recordset) {
                
                if (err) console.log(err)
    
                let eachStore = JSON.stringify(recordset.recordset);
                //let products = recordset.recordset;
                res(eachStore);
            });
        })
        .catch(err => {rej("error! " + err)});
    })
}

function DoanhThu_Month(maCH, thang){
    return new Promise((res,rej)=>{
        conn.connect()
        .then(() => {
            
            conn.query("select ch.MaCH, SUM(dh.TienTT) as 'DoanhThu', MONTH(dh.NgayLap) as thang from CuaHang ch inner join SanPham sp on ch.MaCH = sp.MaCH inner join DonHang dh on dh.MaCH = ch.MaCH  group by ch.MaCH, MONTH(dh.NgayLap) having MONTH(dh.NgayLap) = "+thang+" and ch.MaCH = "+maCH, function (err, recordset) {
                
                if (err) console.log(err)
    
                let eachStore = JSON.stringify(recordset.recordset);
                //let products = recordset.recordset;
                res(eachStore);
            });
        })
        .catch(err => {rej("error! " + err)});
    })
}
// let DoanhThu_Ngay = new Promise((res,rej)=>{
//     conn.connect()
//     .then(() => {
        
//         conn.query("select ch.MaCH, SUM(dh.TienTT) as 'DoanhThu', DAY(dh.NgayLap) as ngay from CuaHang ch inner join SanPham sp on ch.MaCH = sp.MaCH inner join DonHang dh on dh.MaCH = ch.MaCH  group by ch.MaCH, DAY(dh.NgayLap) having DAY(dh.NgayLap) = DAY(getdate()) and ch.MaCH = 1", function (err, recordset) {
            
//             if (err) console.log(err)

//             let store = JSON.stringify(recordset.recordset);
//             res(store);
//         });
//     })
//     .catch(err => {rej("error! " + err)});
// })

// let DoanhThu_Thang = new Promise((res,rej)=>{
//     conn.connect()
//     .then(() => {
        
//         conn.query("select ch.MaCH, SUM(dh.TienTT) as 'DoanhThu', MONTH(dh.NgayLap) as ngay from CuaHang ch inner join SanPham sp on ch.MaCH = sp.MaCH inner join DonHang dh on dh.MaCH = ch.MaCH  group by ch.MaCH, MONTH(dh.NgayLap) having MONTH(dh.NgayLap) = MONTH(getdate()) and ch.MaCH = 1", function (err, recordset) {
            
//             if (err) console.log(err)

//             let store = JSON.stringify(recordset.recordset);
//             res(store);
//         });
//     })
//     .catch(err => {rej("error! " + err)});
// })

module.exports = {DoanhThu_Day, DoanhThu_Month};