const sql = require("mssql/msnodesqlv8");

const conn = new sql.ConnectionPool({
    database: "Shopee",
    server: "localhost",
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true
    }
});

async function queryEachStore(input){
    return await new Promise((res,rej)=>{
        conn.connect()
        .then(() => {
            
            conn.query("select ch.MaCH, SUM(convert(BIGINT, sp.SoLuongTon)) as SoSP, count(CONVERT(BIGINT, dh.MaDH)) as SoDonHang, SUM(CONVERT(BIGINT, dh.TienTT)) as DoanhThu from CuaHang ch inner join SanPham sp on ch.MaCH = sp.MaCH inner join DonHang dh on dh.MaCH = ch.MaCH group by ch.MaCH having ch.MaCH = 1" + input, function (err, recordset) {
                
                if (err) console.log(err)
    
                let eachStore = JSON.stringify(recordset.recordset);
                //let products = recordset.recordset;
                res(eachStore);
            });
        })
        .catch(err => {rej("error! " + err)});
    })
}

module.exports = {queryEachStore}