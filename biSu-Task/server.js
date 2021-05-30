const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");

const Order = db.orders;
const Subscription = db.subscriptions;

const app = express();

require("./routes/order.routes")(app);
require("./routes/subscription.routes")(app);


//modelleri tablo olarak veritabanında oluşturması için
db.sequelize.sync({ force: true }).then(() => {
    console.log("Tablolar oluşturuldu");
    initial();
  });

//başlangıç route u
app.get("/", (req, res) => {
  res.json({ message: "Api Calisiyor." });
});

//uygulama açıldığında hangi portta çalışacağını belirliyoruz ve o portu dinlemeye başlıyoruz
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

//uygulama çalıştığında veritabanına yüklenecek veriler
function initial() {
  Subscription.create({
    subscriptionId: 'abc123',
    fullName: 'utku',
    address: 'sair nefi sokak',
    locationName: 'caferaga',
    subCityName: 'kadiköy',
    cityName: 'istanbul',
    brand: 'hayat',
    phoneNumber: 5332858530,
    distirbutorNumber: 2161000000
  });

  Subscription.create({
    subscriptionId: 'abc124',
    fullName: 'utku',
    address: 'sair nefi sokak',
    locationName: 'caferaga',
    subCityName: 'kadiköy',
    cityName: 'istanbul',
    brand: 'sirma',
    phoneNumber: 5332858530,
    distirbutorNumber: 2161000004
  });

  Subscription.create({
    subscriptionId: 'abc125',
    fullName: 'ozan',
    address: 'bahariye sokak',
    locationName: 'caddebostan',
    subCityName: 'kadiköy',
    cityName: 'istanbul',
    brand: 'erikli',
    phoneNumber: 5336663330,
    distirbutorNumber: 2161000001
  });

  Subscription.create({
    subscriptionId: 'abc126',
    fullName: 'ergin',
    address: 'moda caddesi',
    locationName: 'göztepe',
    subCityName: 'kadiköy',
    cityName: 'istanbul',
    brand: 'sirma',
    phoneNumber: 5314685874,
    distirbutorNumber: 2161000002
  });
 
  Order.create({
    subscriptionId: 'abc123',
    deliveryDate: '2017-05-02 00:13',
    paymentMethod: 'BKM',
    products: '[{"product":"19 lt damacana","quantity":1}]',
    totalAmount: 10,
    status: "NEW"
  });

  Order.create({
    subscriptionId: 'abc123',
    deliveryDate: '2017-04-23 20:05',
    paymentMethod: 'MASTERPASS',
    products: '[{"product":"19 lt damacana","quantity":1},{"product":"10 lt pet","quantity":2}]',
    totalAmount: 24,
    status: "CONFIRMED"
  });

  Order.create({
    subscriptionId: 'abc123',
    deliveryDate: '2017-03-31 16:35',
    paymentMethod: 'PAYATDOOR',
    products: '[ {"product":"19 lt damanaca","quantity":2 }]',
    totalAmount: 12,
    status: "CANCELED"
  });

  Order.create({
    subscriptionId: 'abc125',
    deliveryDate: '2017-03-29 11:19',
    paymentMethod: 'PAYATDOOR',
    products: '[ {"product":"19 lt damanaca", "quantity":3 } ]',
    totalAmount: 36,
    status: "COMPLETED"
  });

  Order.create({
    subscriptionId: 'abc125',
    deliveryDate: '2017-03-23 17:59',
    paymentMethod: 'BKM',
    products: '[{"product":"5 lt pet", "quantity":2 }]',
    totalAmount: 15,
    status: "CONFIRMED"
  });

  Order.create({
    subscriptionId: 'abc126',
    deliveryDate: '2017-03-09 19:02',
    paymentMethod: 'MASTERPASS',
    products: ' {"product":"19 lt damanaca","quantity":1 }, {"product":"5 lt pet", "quantity":3 }]',
    totalAmount: 32.50,
    status: "CANCELED"
  });
 
}