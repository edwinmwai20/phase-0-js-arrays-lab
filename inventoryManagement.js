// Write your code her
let products = ['Laptop','phone','Headphones','Monitor']

function logFirstProduct(){
  console.log(products[0])
}
logFirstProduct()
function addProduct(){
  products.push('Keyboard')
  console.log(products)
}
addProduct()
function updateProductName(){
  products[2] = "Airpods";
}
updateProductName()
function removeLastProduct(){
  console.log(products.pop())
}
removeLastProduct() 

console.log(products)

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};

