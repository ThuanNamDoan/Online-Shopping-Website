const sql = require("mssql/msnodesqlv8");

const conn = new sql.ConnectionPool({
    database: "Shopee",
    server: "localhost",
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true
    }
});

function queryAccount(userName, passWord){

    return new Promise((res,rej)=>{
        conn.connect()
        .then(() => {
            
            conn.query(`select * from TT_DangNhapKH where TenDN = '${userName}' and MatKhau = '${passWord}'`, function (err, recordset) {
                
                if (err) console.log(err)
                
                let account = JSON.stringify(recordset.recordset);

                res(account);
            });
        })
        .catch(err => {rej("error! " + err)});
    })
}

async function InsertUser(MaKH, HoTen, Email, SDT, GioiTinh, SoNha, Phuong, Quan, TenDangNhap, MatKhau){

    return await new Promise((res,rej)=>{
        conn.connect()
        .then(() => {
            
            let query = `insert into KhachHang(MaKH, TenKH, SDT, Email, SoNha, PX, QH, GioiTinh) values (${MaKH}, N'${HoTen}', ${SDT}, '${Email}', N'${SoNha}', N'${Phuong}', N'${Quan}', N'${GioiTinh}')`;
            
            conn.query(query, function (err, recordset) {
                
                if (err) console.log(err);
                //
                conn.connect()
                .then(() => {

                    query = `insert into TT_DangNhapKH(TenDN, MatKhau, MaKH) values ('${TenDangNhap}', '${MatKhau}', ${MaKH})`;
                    
                    conn.query(query, function (err, recordset) {
                        if (err) console.log(err);
                    });
                })
                .catch(err => {rej("error! " + err)});
                //
            });
        })
        .catch(err => {rej("error! " + err)});
    })
}

async function getInfoUser(IDUser){
    
    let query = `select * from KhachHang where MaKH = ${IDUser};`;

    return await new Promise((res,rej)=>{
        conn.connect()
        .then(() => {
            
            conn.query(query, function (err, recordset) {
                let info = JSON.stringify(recordset.recordset);
                res(info);
            });
        })
        .catch(err => {rej("error! " + err)});
    })
}


module.exports = { queryAccount, InsertUser, getInfoUser };