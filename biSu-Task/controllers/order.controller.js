const db = require("../models");
const Order = db.orders;
const Op = db.Sequelize.Op;



// üyelik numarasından verilen siparişleri bulma fonksiyonu
exports.findAll = (req, res) => {
    const subscriptionId = req.params.subscriptionId;
  
    Order.findAll({ where: {
        subscriptionId:subscriptionId
    } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Server Hatasi.Lutfen Yeniden Deneyin."
        });
      });
};