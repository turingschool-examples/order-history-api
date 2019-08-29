const express = require('express');
const cors = require('express-cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const app = express();
const { purchases } = require('./data.js');

app.locals = {
  title: 'Order History API',
  purchases
}

app.use(cors({
  allowedOrigins: ['localhost:3000']
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/v1/purchases', (req, res) => {
  res.status(200).json(app.locals.purchases);
});

app.post('/api/v1/purchases', (req, res) => {
  const newPurchase = req.body;

  for (let requiredParameter of ['id', 'img', 'name', 'description', 'price']) {
    if (!newPurchase[requiredParameter]) {
      return res.status(422).json({
        message: `You are missing a required parameter of ${requiredParameter}`
      });
    }
  }

  const { id, img, name, description, price } = newPurchase;

  app.locals.purchases = [...app.locals.purchases, { id, img, name, description, price }];

  return res.status(201).json({ id, img, name, description, price });
});

app.delete('/api/v1/purchases/:id', (req, res) => {
  const { id } = req.params;
  const match = app.locals.purchases.find(purchase => purchase.id == id);

  if (!match) {
    return res.status(404).json({
      message: `No purchase found with an id of ${id}`
    });
  }

  const filteredPurchases = app.locals.purchases.filter(purchase => purchase.id != id);

  app.locals.purchases = filteredPurchases;

  return res.status(202).json(app.locals.purchases);
});

app.listen(port, () => {
  console.log(`${app.locals.title} is now running on ${port}!`)
});

