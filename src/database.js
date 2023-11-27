const sequence = {
   _id: 1,
   get id() { return this._id++ }
}
const lista = [];
const products = {};

const productSave = (product)  => {
   if(!product.id) product.id = sequence.id
   products[product.id] = product;

   lista.push(product)
   return product;
}

const getProduct = (id) => {
   return products[id] || {};
}

const getProducts = () => {
   return Object.values(lista);
}

const deleteProduct = (id) => {
   const product = products[id];
   delete products[id];

   return product;
}

module.exports = { 
   productSave, 
   getProduct, 
   getProducts,
   deleteProduct
};