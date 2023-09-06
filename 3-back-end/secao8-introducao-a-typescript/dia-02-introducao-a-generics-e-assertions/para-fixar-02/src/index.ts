type Product = {
  barcode: string;
  price: number;
};

function getProduct(): Product {
  const product = {} as Product;
  product.barcode = '123c456b789a';
  return product;
}

console.log(getProduct());
