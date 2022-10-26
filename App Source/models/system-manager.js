const sql = require("mssql/msnodesqlv8");

const conn = new sql.ConnectionPool({
    database: "Shopee",
    server: "localhost",
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true
    }
});

function queryRevenueMonth(){
    return new Promise((res,rej)=> { 
         conn.connect()
        .then(() => {
            conn.query(`select top(10) ch.TenCH as TenCuaHang, SUM(dh.TienTT) as DoanhThu
            from DonHang dh, CuaHang ch
            where dh.MaCH = ch.MaCH and MONTH(dh.NgayLap) = MONTH(GETDATE()) and YEAR(dh.NgayLap) = YEAR(GETDATE())
            group by ch.TenCH
            order by SUM(dh.TienTT) desc`, function (err, recordset) {
                console.log(recordset.recordset);

                if (err) console.log(err)
    
                let account = JSON.stringify(recordset.recordset);

                res(account);
            });
        })
        .catch(err => {rej("error! " + err)});
    })
}

function queryRevenueYear(){
    return new Promise((res,rej)=> { 
         conn.connect()
        .then(() => {
            conn.query(`select top(10) ch.TenCH as TenCuaHang, SUM(dh.TienTT) as DoanhThu
            from DonHang dh, CuaHang ch
            where dh.MaCH = ch.MaCH and YEAR(dh.NgayLap) = YEAR(GETDATE())
            group by ch.TenCH
            order by SUM(dh.TienTT) desc`, function (err, recordset) {
                console.log(recordset.recordset);

                if (err) console.log(err)
    
                let account = JSON.stringify(recordset.recordset);

                res(account);
            });
        })
        .catch(err => {rej("error! " + err)});
    })
}

function queryRevenueAll(){
    return new Promise((res,rej)=> { 
         conn.connect()
        .then(() => {
            conn.query(`select top(10) ch.TenCH as TenCuaHang, SUM(dh.TienTT) as DoanhThu
            from DonHang dh, CuaHang ch
            where dh.MaCH = ch.MaCH
            group by ch.TenCH
            order by SUM(dh.TienTT) desc`, function (err, recordset) {
                console.log(recordset.recordset);

                if (err) console.log(err)
    
                let account = JSON.stringify(recordset.recordset);

                res(account);
            });
        })
        .catch(err => {rej("error! " + err)});
    })
}

function queryStoreNumber(){
    return new Promise((res,rej)=> { 
         conn.connect()
        .then(() => {
            conn.query(`select count(*) number from KhachHang`, function (err, recordset) {
                console.log(recordset.recordset);

                if (err) console.log(err)
    
                let userNumber = JSON.stringify(recordset.recordset);

                res(userNumber);
            });
        })
        .catch(err => {rej("error! " + err)});
    })
}

function queryUserNumber(){ // chua co db
    return new Promise((res,rej)=> { 
         conn.connect()
        .then(() => {
            conn.query(`select count(*) numberuser from KhachHang`, function (err, recordset) {
                console.log(recordset.recordset);

                if (err) console.log(err)
    
                let userNumber = JSON.stringify(recordset.recordset);

                res(userNumber);
            });
        })
        .catch(err => {rej("error! " + err)});
    })
}

function queryProductNumber(){ // chua co db
    return new Promise((res,rej)=> { 
         conn.connect()
        .then(() => {
            conn.query(`select count(*) numberproduct from SanPham`, function (err, recordset) {
                console.log(recordset.recordset);

                if (err) console.log(err)
    
                let productNumber = JSON.stringify(recordset.recordset);

                res(productNumber);
            });
        })
        .catch(err => {rej("error! " + err)});
    })
}

function queryOrderNumber(){ // chua co db
    return new Promise((res,rej)=> { 
         conn.connect()
        .then(() => {
            conn.query(`select count(*) numberorder from DonHang`, function (err, recordset) {
                console.log(recordset.recordset);

                if (err) console.log(err)
    
                let ordertNumber = JSON.stringify(recordset.recordset);

                res(ordertNumber);
            });
        })
        .catch(err => {rej("error! " + err)});
    })
}

// query PRODUCT_SALE
function queryProductSaleMonth(){ // chua co db
    return new Promise((res,rej)=> { 
         conn.connect()
        .then(() => {
            conn.query(`select top(10) sp.TenSP as TenSP, SUM(ct.SoLuong) as TongSL 
            from SanPham sp, CT_DonHang ct
            where sp.MaSP = ct.MaSP and YEAR(ct.NgayDG) = YEAR(GETDATE()) and MONTH(ct.NgayDG) = MONTH(GETDATE())
            group by sp.TenSP
            order by SUM(ct.SoLuong)  desc`, function (err, recordset) {
                console.log(recordset.recordset);

                if (err) console.log(err)
    
                let ordertNumber = JSON.stringify(recordset.recordset);

                res(ordertNumber);
            });
        })
        .catch(err => {rej("error! " + err)});
    })
}

function queryProductSaleYear(){ // chua co db
    return new Promise((res,rej)=> { 
         conn.connect()
        .then(() => {
            conn.query(`select top(10) sp.TenSP as TenSP, SUM(ct.SoLuong) as TongSL 
            from SanPham sp, CT_DonHang ct
            where sp.MaSP = ct.MaSP and YEAR(ct.NgayDG) = YEAR(GETDATE())
            group by sp.TenSP
            order by SUM(ct.SoLuong)  desc`, function (err, recordset) {
                console.log(recordset.recordset);

                if (err) console.log(err)
    
                let ordertNumber = JSON.stringify(recordset.recordset);

                res(ordertNumber);
            });
        })
        .catch(err => {rej("error! " + err)});
    })
}


function queryProductSaleAll(){ // chua co db
    return new Promise((res,rej)=> { 
         conn.connect()
        .then(() => {
            conn.query(`select top(10) sp.TenSP as TenSP, SUM(ct.SoLuong) as TongSL 
            from SanPham sp, CT_DonHang ct
            where sp.MaSP = ct.MaSP
            group by sp.TenSP
            order by SUM(ct.SoLuong)  desc`, function (err, recordset) {
                console.log(recordset.recordset);

                if (err) console.log(err)
    
                let ordertNumber = JSON.stringify(recordset.recordset);

                res(ordertNumber);
            });
        })
        .catch(err => {rej("error! " + err)});
    })
}

// Order Chart
function queryOrderMonth(){ // chua co db
    return new Promise((res,rej)=> { 
         conn.connect()
        .then(() => {
            conn.query(`select CONCAT('Ngày ' , day(dh.NgayLap)) as Thang, SUM(dh.MaDH) as SLDon
            from DonHang dh
            where month(GETDATE()) = month(dh.NgayLap) and year(GETDATE()) = year(dh.NgayLap) 
            group by day(dh.NgayLap)`, function (err, recordset) {
                console.log(recordset.recordset);

                if (err) console.log(err)
    
                let ordertNumber = JSON.stringify(recordset.recordset);

                res(ordertNumber);
            });
        })
        .catch(err => {rej("error! " + err)});
    })
}

function queryOrderYear(){ // chua co db
    return new Promise((res,rej)=> { 
         conn.connect()
        .then(() => {
            conn.query(`select CONCAT('Tháng ' , MONTH(dh.NgayLap)) as Thang, SUM(dh.MaDH) as SLDon
            from DonHang dh
            where YEAR(GETDATE()) = YEAR(dh.NgayLap)
            group by MONTH(dh.NgayLap)`, function (err, recordset) {
                console.log(recordset.recordset);

                if (err) console.log(err)
    
                let ordertNumber = JSON.stringify(recordset.recordset);

                res(ordertNumber);
            });
        })
        .catch(err => {rej("error! " + err)});
    })
}



module.exports = { 
    queryRevenueMonth,
    queryStoreNumber, 
    queryUserNumber, 
    queryProductNumber, 
    queryOrderNumber,
    queryRevenueYear,
    queryRevenueAll,      
    queryProductSaleMonth,
    queryProductSaleYear,
    queryProductSaleAll,
    queryOrderMonth,
    queryOrderYear
};