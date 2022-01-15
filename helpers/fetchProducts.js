const fetchProducts = async (product) => {
  try {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
  const data = await fetch(url);
  const dataJson = await data.json();
  return dataJson;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
