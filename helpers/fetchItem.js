const fetchItem = async (id) => {
  try {
    const url = `https://api.mercadolibre.com/items/${id}`;
    const data = await fetch(url);
    const dataJson = await data.json();
    return dataJson;
    } catch (error) {
      return error;
    }
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
