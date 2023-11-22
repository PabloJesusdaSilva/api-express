const sequence = {
   _id: 1,
   get id() { this._id++ }
}

const products = {}

const productSave = (product)  => {
   if(!product.id) product.id = sequence.id
   product[product.id] = product;

   return product;
}

const getProduct = (id) => {
   return products[id] || {};
}

const getProducts = () => {
   return Object.values(products);
}

module.exports = { productSave, getProduct, getProducts };