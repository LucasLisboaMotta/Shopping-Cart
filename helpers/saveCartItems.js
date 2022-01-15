const saveCartItems = (fetchObject) => localStorage.setItem('cartItems', fetchObject);

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
