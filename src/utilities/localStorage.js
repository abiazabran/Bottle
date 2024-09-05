const getStordProduct = () => {
  const getProductStrData = localStorage.getItem('product');
  if (getProductStrData) {
    return JSON.parse(getProductStrData);
  }
  return [];
};

const saveCartTols = (product) => {
  const convartToStr = JSON.stringify(product);
  localStorage.setItem('product', convartToStr);
};

const addToLocalStorageProduct = (id) => {
  const product = getStordProduct();
  product.push(id);
  saveCartTols(product);
};

const removeLocalStr = (id) => {
  const product = getStordProduct();
  const remove = product.filter((idx) => idx !== id);
  saveCartTols(remove);
};
export { addToLocalStorageProduct, getStordProduct, removeLocalStr };
