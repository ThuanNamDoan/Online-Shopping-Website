const sql = require("mssql/msnodesqlv8");

const conn = new sql.ConnectionPool({
    database: "Shopee",
    server: "localhost",
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true
    }
});


let store = new Promise((res,rej)=>{
    conn.connect()
    .then(() => {
        
        conn.query(`select * from CuaHang`, function (err, recordset) {
            
            if (err) console.log(err)

            let store = JSON.stringify(recordset.recordset);
            res(store);
        });
    })
    .catch(err => {rej("error! " + err)});
})

module.exports = {store};
