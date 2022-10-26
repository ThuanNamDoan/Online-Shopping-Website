var needle = require('needle');

const getAccount_All = (req, res, next) => {
    
    let name = req.params.name;

    let url = `http://localhost:3001/api/account/${name}`;
    
    needle('get', url)
    .then(function(resp) {
        let list = JSON.parse(resp.body);

        let result = {};
        let kq = [];
        let LaySP_moiDH_1 = {};
        let LaySP_moiDH_2 = {};
        let SP_moiDH = [];
        for (let i = 0; i < Object.keys(list).length - 1; i++){
            if(list[i].MaDH == list[i+1].MaDH){
                result = {};
                SP_moiDH = [];
                LaySP_moiDH_2 = {};
                LaySP_moiDH_1 = {};

                result.MaDH = list[i].MaDH;
                result.TenCH = list[i].TenCH;
                result.PhiVC = list[i].PhiVC;
                result.TongTien = list[i].TongTien;

                LaySP_moiDH_1.TenSP = list[i].TenSP;
                LaySP_moiDH_1.GiaBan = list[i].GiaBan;
                LaySP_moiDH_1.SoLuong = list[i].SoLuong;
                LaySP_moiDH_1.ThanhTien = list[i].ThanhTien;
                LaySP_moiDH_1.Anh = list[i].Anh;
                SP_moiDH.push(LaySP_moiDH_1);

                LaySP_moiDH_2.TenSP = list[i+1].TenSP;
                LaySP_moiDH_2.GiaBan = list[i+1].GiaBan;
                LaySP_moiDH_2.SoLuong = list[i+1].SoLuong;
                LaySP_moiDH_2.ThanhTien = list[i+1].ThanhTien;
                LaySP_moiDH_2.Anh = list[i+1].Anh
                SP_moiDH.push(LaySP_moiDH_2);

                result.SP_moiDH = SP_moiDH;
                kq.push(result);
                i++;
            }else{
                result = {};
                SP_moiDH = [];
                LaySP_moiDH_2 = {};
                LaySP_moiDH_1 = {};

                result.MaDH = list[i].MaDH;
                result.TenCH = list[i].TenCH;
                result.PhiVC = list[i].PhiVC;
                result.TongTien = list[i].TongTien;

                LaySP_moiDH_1.TenSP = list[i].TenSP;
                LaySP_moiDH_1.GiaBan = list[i].GiaBan;
                LaySP_moiDH_1.SoLuong = list[i].SoLuong;
                LaySP_moiDH_1.ThanhTien = list[i].ThanhTien;
                LaySP_moiDH_1.Anh = list[i].Anh;
                SP_moiDH.push(LaySP_moiDH_1);

                result.SP_moiDH = SP_moiDH;
                kq.push(result);
            }
        }
        console.log(result)
        res.render('./account/account', {purcharse: kq});
    })
    .catch(function(err) {
        console.log("error!");
    });
}

const getAccount_cxn = (req, res, next) => {
    
    let name = req.params.name;

    let url = `http://localhost:3001/api/account/${name}`;
    
    needle('get', url)
    .then(function(resp) {
        let list = JSON.parse(resp.body);

        let result = {};
        let kq = [];
        let LaySP_moiDH_1 = {};
        let LaySP_moiDH_2 = {};
        let SP_moiDH = [];
        for (let i = 0; i < Object.keys(list).length - 1; i++){
            if(list[i].MaDH == list[i+1].MaDH){
                result = {};
                SP_moiDH = [];
                LaySP_moiDH_2 = {};
                LaySP_moiDH_1 = {};

                result.MaDH = list[i].MaDH;
                result.TenCH = list[i].TenCH;
                result.PhiVC = list[i].PhiVC;
                result.TongTien = list[i].TongTien;

                LaySP_moiDH_1.TenSP = list[i].TenSP;
                LaySP_moiDH_1.GiaBan = list[i].GiaBan;
                LaySP_moiDH_1.SoLuong = list[i].SoLuong;
                LaySP_moiDH_1.ThanhTien = list[i].ThanhTien;
                LaySP_moiDH_1.Anh = list[i].Anh;
                SP_moiDH.push(LaySP_moiDH_1);

                LaySP_moiDH_2.TenSP = list[i+1].TenSP;
                LaySP_moiDH_2.GiaBan = list[i+1].GiaBan;
                LaySP_moiDH_2.SoLuong = list[i+1].SoLuong;
                LaySP_moiDH_2.ThanhTien = list[i+1].ThanhTien;
                LaySP_moiDH_2.Anh = list[i+1].Anh
                SP_moiDH.push(LaySP_moiDH_2);

                result.SP_moiDH = SP_moiDH;
                kq.push(result);
                i++;
            }else{
                result = {};
                SP_moiDH = [];
                LaySP_moiDH_2 = {};
                LaySP_moiDH_1 = {};

                result.MaDH = list[i].MaDH;
                result.TenCH = list[i].TenCH;
                result.PhiVC = list[i].PhiVC;
                result.TongTien = list[i].TongTien;

                LaySP_moiDH_1.TenSP = list[i].TenSP;
                LaySP_moiDH_1.GiaBan = list[i].GiaBan;
                LaySP_moiDH_1.SoLuong = list[i].SoLuong;
                LaySP_moiDH_1.ThanhTien = list[i].ThanhTien;
                LaySP_moiDH_1.Anh = list[i].Anh;
                SP_moiDH.push(LaySP_moiDH_1);

                result.SP_moiDH = SP_moiDH;
                kq.push(result);
            }
        }
        console.log(list);
        console.log(kq);
        res.render('./account/account_cxn', {purcharse: kq});
    })
    .catch(function(err) {
        console.log("error!");
    });
}

const getAccount_clh = (req, res, next) => {
    
    let name = req.params.name;

    let url = `http://localhost:3001/api/account/${name}`;
    
    needle('get', url)
    .then(function(resp) {
        let list = JSON.parse(resp.body);

        let result = {};
        let kq = [];
        let LaySP_moiDH_1 = {};
        let LaySP_moiDH_2 = {};
        let SP_moiDH = [];
        for (let i = 0; i < Object.keys(list).length - 1; i++){
            if(list[i].MaDH == list[i+1].MaDH){
                result = {};
                SP_moiDH = [];
                LaySP_moiDH_2 = {};
                LaySP_moiDH_1 = {};

                result.MaDH = list[i].MaDH;
                result.TenCH = list[i].TenCH;
                result.PhiVC = list[i].PhiVC;
                result.TongTien = list[i].TongTien;

                LaySP_moiDH_1.TenSP = list[i].TenSP;
                LaySP_moiDH_1.GiaBan = list[i].GiaBan;
                LaySP_moiDH_1.SoLuong = list[i].SoLuong;
                LaySP_moiDH_1.ThanhTien = list[i].ThanhTien;
                LaySP_moiDH_1.Anh = list[i].Anh;
                SP_moiDH.push(LaySP_moiDH_1);

                LaySP_moiDH_2.TenSP = list[i+1].TenSP;
                LaySP_moiDH_2.GiaBan = list[i+1].GiaBan;
                LaySP_moiDH_2.SoLuong = list[i+1].SoLuong;
                LaySP_moiDH_2.ThanhTien = list[i+1].ThanhTien;
                LaySP_moiDH_2.Anh = list[i+1].Anh
                SP_moiDH.push(LaySP_moiDH_2);

                result.SP_moiDH = SP_moiDH;
                kq.push(result);
                i++;
            }else{
                result = {};
                SP_moiDH = [];
                LaySP_moiDH_2 = {};
                LaySP_moiDH_1 = {};

                result.MaDH = list[i].MaDH;
                result.TenCH = list[i].TenCH;
                result.PhiVC = list[i].PhiVC;
                result.TongTien = list[i].TongTien;

                LaySP_moiDH_1.TenSP = list[i].TenSP;
                LaySP_moiDH_1.GiaBan = list[i].GiaBan;
                LaySP_moiDH_1.SoLuong = list[i].SoLuong;
                LaySP_moiDH_1.ThanhTien = list[i].ThanhTien;
                LaySP_moiDH_1.Anh = list[i].Anh;
                SP_moiDH.push(LaySP_moiDH_1);

                result.SP_moiDH = SP_moiDH;
                kq.push(result);
            }
        }
        console.log(list);
        console.log(kq);
        res.render('./account/account_clh', {purcharse: kq});
    })
    .catch(function(err) {
        console.log("error!");
    });
}

const getAccount_dg = (req, res, next) => {
    
    let name = req.params.name;

    let url = `http://localhost:3001/api/account/${name}`;
    
    needle('get', url)
    .then(function(resp) {
        let list = JSON.parse(resp.body);

        let result = {};
        let kq = [];
        let LaySP_moiDH_1 = {};
        let LaySP_moiDH_2 = {};
        let SP_moiDH = [];
        for (let i = 0; i < Object.keys(list).length - 1; i++){
            if(list[i].MaDH == list[i+1].MaDH){
                result = {};
                SP_moiDH = [];
                LaySP_moiDH_2 = {};
                LaySP_moiDH_1 = {};

                result.MaDH = list[i].MaDH;
                result.TenCH = list[i].TenCH;
                result.PhiVC = list[i].PhiVC;
                result.TongTien = list[i].TongTien;

                LaySP_moiDH_1.TenSP = list[i].TenSP;
                LaySP_moiDH_1.GiaBan = list[i].GiaBan;
                LaySP_moiDH_1.SoLuong = list[i].SoLuong;
                LaySP_moiDH_1.ThanhTien = list[i].ThanhTien;
                LaySP_moiDH_1.Anh = list[i].Anh;
                SP_moiDH.push(LaySP_moiDH_1);

                LaySP_moiDH_2.TenSP = list[i+1].TenSP;
                LaySP_moiDH_2.GiaBan = list[i+1].GiaBan;
                LaySP_moiDH_2.SoLuong = list[i+1].SoLuong;
                LaySP_moiDH_2.ThanhTien = list[i+1].ThanhTien;
                LaySP_moiDH_2.Anh = list[i+1].Anh
                SP_moiDH.push(LaySP_moiDH_2);

                result.SP_moiDH = SP_moiDH;
                kq.push(result);
                i++;
            }else{
                result = {};
                SP_moiDH = [];
                LaySP_moiDH_2 = {};
                LaySP_moiDH_1 = {};

                result.MaDH = list[i].MaDH;
                result.TenCH = list[i].TenCH;
                result.PhiVC = list[i].PhiVC;
                result.TongTien = list[i].TongTien;

                LaySP_moiDH_1.TenSP = list[i].TenSP;
                LaySP_moiDH_1.GiaBan = list[i].GiaBan;
                LaySP_moiDH_1.SoLuong = list[i].SoLuong;
                LaySP_moiDH_1.ThanhTien = list[i].ThanhTien;
                LaySP_moiDH_1.Anh = list[i].Anh;
                SP_moiDH.push(LaySP_moiDH_1);

                result.SP_moiDH = SP_moiDH;
                kq.push(result);
            }
        }
        res.render('./account/account_dg', {purcharse: kq});
    })
    .catch(function(err) {
        console.log("error!");
    });
}

const getAccount_gtc = (req, res, next) => {
    
    let name = req.params.name;

    let url = `http://localhost:3001/api/account/${name}`;
    
    needle('get', url)
    .then(function(resp) {
        let list = JSON.parse(resp.body);

        let result = {};
        let kq = [];
        let LaySP_moiDH_1 = {};
        let LaySP_moiDH_2 = {};
        let SP_moiDH = [];
        for (let i = 0; i < Object.keys(list).length - 1; i++){
            if(list[i].MaDH == list[i+1].MaDH){
                result = {};
                SP_moiDH = [];
                LaySP_moiDH_2 = {};
                LaySP_moiDH_1 = {};

                result.MaDH = list[i].MaDH;
                result.TenCH = list[i].TenCH;
                result.PhiVC = list[i].PhiVC;
                result.TongTien = list[i].TongTien;

                LaySP_moiDH_1.TenSP = list[i].TenSP;
                LaySP_moiDH_1.GiaBan = list[i].GiaBan;
                LaySP_moiDH_1.SoLuong = list[i].SoLuong;
                LaySP_moiDH_1.ThanhTien = list[i].ThanhTien;
                LaySP_moiDH_1.Anh = list[i].Anh;
                SP_moiDH.push(LaySP_moiDH_1);

                LaySP_moiDH_2.TenSP = list[i+1].TenSP;
                LaySP_moiDH_2.GiaBan = list[i+1].GiaBan;
                LaySP_moiDH_2.SoLuong = list[i+1].SoLuong;
                LaySP_moiDH_2.ThanhTien = list[i+1].ThanhTien;
                LaySP_moiDH_2.Anh = list[i+1].Anh
                SP_moiDH.push(LaySP_moiDH_2);

                result.SP_moiDH = SP_moiDH;
                kq.push(result);
                i++;
            }else{
                result = {};
                SP_moiDH = [];
                LaySP_moiDH_2 = {};
                LaySP_moiDH_1 = {};

                result.MaDH = list[i].MaDH;
                result.TenCH = list[i].TenCH;
                result.PhiVC = list[i].PhiVC;
                result.TongTien = list[i].TongTien;

                LaySP_moiDH_1.TenSP = list[i].TenSP;
                LaySP_moiDH_1.GiaBan = list[i].GiaBan;
                LaySP_moiDH_1.SoLuong = list[i].SoLuong;
                LaySP_moiDH_1.ThanhTien = list[i].ThanhTien;
                LaySP_moiDH_1.Anh = list[i].Anh;
                SP_moiDH.push(LaySP_moiDH_1);

                result.SP_moiDH = SP_moiDH;
                kq.push(result);
            }
        }
        res.render('./account/account_gtc', {purcharse: kq});
    })
    .catch(function(err) {
        console.log("error!");
    });
}

const getAccount_dh = (req, res, next) => {
    
    let name = req.params.name;

    let url = `http://localhost:3001/api/account/${name}`;
    
    needle('get', url)
    .then(function(resp) {
        let list = JSON.parse(resp.body);

        let result = {};
        let kq = [];
        let LaySP_moiDH_1 = {};
        let LaySP_moiDH_2 = {};
        let SP_moiDH = [];
        for (let i = 0; i < Object.keys(list).length - 1; i++){
            if(list[i].MaDH == list[i+1].MaDH){
                result = {};
                SP_moiDH = [];
                LaySP_moiDH_2 = {};
                LaySP_moiDH_1 = {};

                result.MaDH = list[i].MaDH;
                result.TenCH = list[i].TenCH;
                result.PhiVC = list[i].PhiVC;
                result.TongTien = list[i].TongTien;

                LaySP_moiDH_1.TenSP = list[i].TenSP;
                LaySP_moiDH_1.GiaBan = list[i].GiaBan;
                LaySP_moiDH_1.SoLuong = list[i].SoLuong;
                LaySP_moiDH_1.ThanhTien = list[i].ThanhTien;
                LaySP_moiDH_1.Anh = list[i].Anh;
                SP_moiDH.push(LaySP_moiDH_1);

                LaySP_moiDH_2.TenSP = list[i+1].TenSP;
                LaySP_moiDH_2.GiaBan = list[i+1].GiaBan;
                LaySP_moiDH_2.SoLuong = list[i+1].SoLuong;
                LaySP_moiDH_2.ThanhTien = list[i+1].ThanhTien;
                LaySP_moiDH_2.Anh = list[i+1].Anh
                SP_moiDH.push(LaySP_moiDH_2);

                result.SP_moiDH = SP_moiDH;
                kq.push(result);
                i++;
            }else{
                result = {};
                SP_moiDH = [];
                LaySP_moiDH_2 = {};
                LaySP_moiDH_1 = {};

                result.MaDH = list[i].MaDH;
                result.TenCH = list[i].TenCH;
                result.PhiVC = list[i].PhiVC;
                result.TongTien = list[i].TongTien;

                LaySP_moiDH_1.TenSP = list[i].TenSP;
                LaySP_moiDH_1.GiaBan = list[i].GiaBan;
                LaySP_moiDH_1.SoLuong = list[i].SoLuong;
                LaySP_moiDH_1.ThanhTien = list[i].ThanhTien;
                LaySP_moiDH_1.Anh = list[i].Anh;
                SP_moiDH.push(LaySP_moiDH_1);

                result.SP_moiDH = SP_moiDH;
                kq.push(result);
            }
        }
        res.render('./account/account_dh', {purcharse: kq});
    })
    .catch(function(err) {
        console.log("error!");
    });
}

module.exports = {
    getAccount_All, getAccount_cxn, getAccount_clh, getAccount_dg, getAccount_gtc, getAccount_dh
}