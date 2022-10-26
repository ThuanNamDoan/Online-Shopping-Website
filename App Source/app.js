var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//delare for project team
var home = require('./routes/home');
var products = require('./routes/products');
var detail = require('./routes/detail');
var cart = require('./routes/cart');
var payment = require('./routes/payment');
var account = require('./routes/account');
var manager = require('./routes/manager');

var dataRouterCategory = require('./api/api-routes/category');
var dataRouterDetail = require('./api/api-routes/detail');
var dataRouterStore = require('./api/api-routes/store-route');
var dataRouterDiscount = require('./api/api-routes/discount-route');

var managerStoreRouter = require('./api/api-routes/manager-store-route');
var dataEachStore = require('./api/api-routes/api-store-route');
var dataStoreBanChay = require('./api/api-routes/api-banchay-store');
var dataStoreChiTiet = require('./api/api-routes/api-chitiet-store');
var dataStoreTotNhat = require('./api/api-routes/api-totnhat-store');
var dataStoreDoanhThu = require('./api/api-routes/api-doanhthu-store');
var dataAccount = require('./api/api-routes/api-routes-account');
var dataRouterHome = require('./api/api-routes/router-api-home');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//delare for project team
app.use('/', home);
app.use('/products', products);
app.use('/detail', detail);
app.use('/cart', cart);
app.use('/payment', payment);
app.use('/account', account);
app.use('/manager', manager);

app.use('/api/category', dataRouterCategory);
app.use('/api/detail', dataRouterDetail);
app.use('/api/store', dataRouterStore)
app.use('/api/discount', dataRouterDiscount);
app.use('/api/home', dataRouterHome);

app.use('/api/account', dataAccount);
app.use('/api/manager', managerStoreRouter);
app.use('/api/store', dataEachStore);
app.use('/api/banchay-store', dataStoreBanChay);
app.use('/api/chitiet-store', dataStoreChiTiet);
app.use('/api/totnhat-store', dataStoreTotNhat);
app.use('/api/doanhthu-store', dataStoreDoanhThu);

//khiet dai ca here

var dataRouterRevenueMonth = require('./api/api-routes/manager-revenueMonth-router');
app.use('/api/revenueMonth', dataRouterRevenueMonth);

var dataRouterRevenueYear = require('./api/api-routes/manager-revenueYear-router');
app.use('/api/revenueYear', dataRouterRevenueYear);

var dataRouterRevenueAll = require('./api/api-routes/manager-revenueAll-router');
app.use('/api/revenueAll', dataRouterRevenueAll);

var routerCardStoreNum = require('./api/api-routes/manager-card-store-router');
app.use('/api/cardStore', routerCardStoreNum);

var routerCardUserNum = require('./api/api-routes/manager-card-user-router');
app.use('/api/cardUsers', routerCardUserNum);

var routerCardProductNum = require('./api/api-routes/manager-card-product-router');
app.use('/api/cardProduct', routerCardProductNum);

var routerCardOderNum = require('./api/api-routes/manager-card-order-router');
app.use('/api/cardOrder', routerCardOderNum);

// Chart sp
var routerProductSaleMonth = require('./api/api-routes/manager-product-sale-month-router');
app.use('/api/ProductSaleMonth', routerProductSaleMonth);

var routerProductSaleYear = require('./api/api-routes/manager-product-sale-year-router');
app.use('/api/ProductSaleYear', routerProductSaleYear);

var routerProductSaleAll = require('./api/api-routes/manager-product-sale-all-router');
app.use('/api/ProductSaleAll', routerProductSaleAll);

// Chart so luong don hang
var routerOrderMonth = require('./api/api-routes/manager-order-month-router');
app.use('/api/OrderMonth', routerOrderMonth);

var routerOrderYear = require('./api/api-routes/manager-order-year-router');
app.use('/api/OrderYear', routerOrderYear);

//end

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3001,()=>{});
//module.exports = app;