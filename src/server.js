const express =  require('express');
const dataBase = require('./database');

const app = express();
const port = 3333;

app.get('/products', (req, res, next) => {
   res.send(dataBase.getProducts()); // to convert for json
})

app.get('/products/:id', (req, res, next) => {
   res.send(dataBase.getProduct(req.params.id));
})

app.post('/products', (req, res, next) => {
   const product = dataBase.productSave({
      name: req.body.name,
      price: req.body.price
   });
})

app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
})
