const db = require("../models");
const Subscription = db.subscriptions;
const Op = db.Sequelize.Op;


// üyelik id si verilen üyenin bilgilerini listeleme
exports.findOne = (req, res) => {
    const subscriptionId = req.params.id;

    Subscription.findByPk(subscriptionId)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Server Hatasi. Lutfen Yeniden Deneyin."
        });
      });
};

