const express =  require('express');
const bodyParser = require('body-parser');
const dataBase = require('./database');

const app = express();
const port = 3333;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/products', (req, res, next) => {
   res.send(dataBase.getProducts()); // to convert for json
})

app.get('/products/:id', (req, res, next) => {
   res.send(dataBase.getProduct(req.params.id));
})

app.post('/products', (req, res, next) => {
   const product = dataBase.productSave({
      nome: req.body.nome,
      preco: req.body.preco
   });

   res.send(product); // JSON
})

app.put('/products/:id', (req, res, next) => {
   const product = dataBase.productSave({
      id: req.body.id,
      nome: req.body.nome,
      preco: req.body.preco
   })

   res.send(product);
})

app.delete('/products/:id', (req, res, next) => {
   const product = dataBase.deleteProduct(req.params.id);

   res.send(product);
})

app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
})
