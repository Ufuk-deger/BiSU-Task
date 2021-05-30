module.exports = app => {
    const order_controller = require("../controllers/order.controller.js");
  
    var router = require("express").Router(); 
  
 
    //üyelik numarasından verilen siparişleri listeleme route'u
    router.get("/getSubscriptionOrders/:subscriptionId", order_controller.findAll);
  
    app.use('/api/orders', router);
  };