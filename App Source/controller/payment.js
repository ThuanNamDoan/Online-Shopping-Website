///id ma don hang
var id_pay = 101157;

const sql = require("mssql/msnodesqlv8");

const conn = new sql.ConnectionPool({
    database: "Shopee",
    server: "localhost",
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true
    }
});

const getPayment = (req, res, next) => {
    res.render('./payment/index');
}



// Insert DonHang (return MaDH)
function insertDonHang(MaKH, PTTT, orderStoreInfo) {     
    return new Promise((resolve, reject) => {

        
        let TongTien = orderStoreInfo.ThanhTien + orderStoreInfo.PhiVC;
        let TienTT = TongTien - orderStoreInfo.TienKM;

        let KMHT = null;
        let KMCH = null;

        if (orderStoreInfo.KMHT != "")
            KMHT = orderStoreInfo.KMHT;

        if (orderStoreInfo.KMCH != "")
            KMCH = orderStoreInfo.KMCH;
        
        
        let sql = "INSERT INTO DonHang (MaDH, NgayLap, PTThanhToan, TongTien, MaCH, MaKH, KMHT, KMCH, TienKM, PhiVC, TienTT) OUTPUT Inserted.MaDH " 
        + "VALUES (" + id_pay++ + ", getdate(), '" + PTTT + "', " + TongTien + ", " + orderStoreInfo.MaCH + "," + MaKH + ", " + KMHT
        + ", " + KMCH + "," + orderStoreInfo.TienKM + ", " + orderStoreInfo.PhiVC + ", " + TienTT
        + ")";
       
        
        conn.connect()
        .then(() => {

            conn.query(sql, function(err, recordset) {
                if (err) console.log(err);

                let res = JSON.parse(JSON.stringify(recordset.recordset))
                //console.log(res);
                let MaDH = res[0].MaDH;
                return resolve(MaDH);
            });
        })
        .catch((error) => {
            console.log(error)
        })

    });
}


// Insert TT_NhanDon
function insertTT_NhanDon(MaDH, SDT, TenNguoiNhan, SoNhaDuong, PhuongXa, QuanHuyen) {
    
    let sql = "INSERT INTO TT_NhanDon (MaDH, NgayDat, SDT, TenNN, SoNha, PX, QH) " 
    + "VALUES (" + MaDH + ", getdate(), '" + SDT + "', N'" + TenNguoiNhan + "', N'" + SoNhaDuong + "', N'" + PhuongXa + "', N'" + QuanHuyen + "'"
    + ")";
   
    conn.connect()
    .then(() => {
        conn.query(sql, function(err, recordset) {
            if (err) console.log(err);
    });
    }) 
}




// Insert CT_DonHang
function insertCT_DonHang(MaDH, DSSanPham, MaKH) {

    for (let i = 0; i < DSSanPham.length; i++) {
        //DSSanPham[i].MaSP

        let ThanhTien = (DSSanPham[i].GiaBan - DSSanPham[i].GiaGiam)* DSSanPham[i].SoLuong;

        let sql = "INSERT INTO CT_DonHang (MaDH, MaSP, SoLuong, GiaBan, GiaGiam, ThanhTien, MaKH, Mau, KichThuoc, DongSP) " 
        + "VALUES (" + MaDH + ", " + DSSanPham[i].MaSP + ", " + DSSanPham[i].SoLuong + ", " + DSSanPham[i].GiaBan + "," + DSSanPham[i].GiaGiam
        + ", " + ThanhTien + ", " + MaKH + ", N'" + DSSanPham[i].Mau + "', N'" + DSSanPham[i].KichThuoc + "', N'" + DSSanPham[i].DongSP + "'"
        + ")";
    
        conn.connect()
        .then(() => {
            conn.query(sql, function(err, recordset) {
                if (err) console.log(err);
        });
        }) 
    }
}


const postOrder = (req, res) => {
    let orderInfo = {...req.body};

    let MaKH = orderInfo.MaKH;
    let PTTT = orderInfo.PTTT;
    let TenNguoiNhan = orderInfo.TenNguoiNhan;
    let SDT = orderInfo.SDT;
    let SoNhaDuong = orderInfo.SoNhaDuong;
    let PhuongXa = orderInfo.PhuongXa;
    let QuanHuyen = orderInfo.Quan;

    let DSDonHang = orderInfo.DSDonHang;

    
    for (let i = 0; i < DSDonHang.length; i++) {
        insertDonHang(MaKH, PTTT, DSDonHang[i])
        .then(res => {
            let MaDH = res;
            console.log(MaDH);

            // Insert TT_NhanDon
            insertTT_NhanDon(MaDH, SDT, TenNguoiNhan, SoNhaDuong, PhuongXa, QuanHuyen)

            // Insert CT_DonHang
            insertCT_DonHang(MaDH, DSDonHang[i].DSSanPham, MaKH)
        })
        .catch(err => {
            console.log(err);
        });
    }
};

module.exports = {
    getPayment, postOrder
}