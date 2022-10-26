const sql = require("mssql/msnodesqlv8");

const conn = new sql.ConnectionPool({
    database: "Shopee",
    server: "localhost",
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true
    }
});

function queryEachStore(input){
    return new Promise((res,rej)=>{
        conn.connect()
        .then(() => {
            
            conn.query('select ch.MaCH, ch.TenCH, ch.NgayTG, ch.SoNha, ch.PX, ch.QH  from CuaHang ch where ch.MaCH =  ' + input, function (err, recordset) {
                
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