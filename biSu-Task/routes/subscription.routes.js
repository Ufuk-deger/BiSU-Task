module.exports = app => {
    const subscription_controller = require("../controllers/subscription.controller.js");
  
    var router = require("express").Router();
  
    // üyelik id değerine göre müşteri listeleme routu'u
    router.get("/:id", subscription_controller.findOne);
  
    app.use('/api/subscriptions', router);
  };