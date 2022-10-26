const sql = require("mssql/msnodesqlv8");

const conn = new sql.ConnectionPool({
    database: "Shopee",
    server: "localhost",
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true
    }
});


let discount = new Promise((res,rej)=>{
    conn.connect()
    .then(() => {
        
        conn.query(`select * from KMHeThong where cast (GETDATE() as DATE) = NgayBD`, function (err, recordset) {
            
            if (err) console.log(err)

            let discounts = JSON.stringify(recordset.recordset);
            res(discounts);
        });
    })
    .catch(err => {rej("error! " + err)});
})

module.exports = {discount};
