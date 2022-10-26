let DoanhThuStore = require('../../models/doanhthu-store');

function getDataDoanhThu_Ngay(req, res)
{ 
    let id = req.params.id;
    let key = id.split("-");

    DoanhThuStore.DoanhThu_Day(key[0],key[1]).then((data)=>{
        res.json(data);
    })
    .catch(err => {res.json(err)});
}

function getDataDoanhThu_Thang(req, res)
{
    let id = req.params.id;
    let key = id.split("-");
    
    DoanhThuStore.DoanhThu_Month(key[0],key[1]).then((data)=>{
        res.json(data);
    })
    .catch(err => {res.json(err)});
}

module.exports = {getDataDoanhThu_Ngay, getDataDoanhThu_Thang};