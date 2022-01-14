require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {

  it('Verifica se fetchProducts é uma função', () => {
    const type = typeof fetchProducts;
    expect(type).toEqual('function')
  });

  it('Verifica se a função fetchProducts chamada com o argumento "computador" execulta um fetch', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled()    
  });

  it('Verifica se o fetch da função fetchProducts utiliza a url correta', async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(url)    
  });

  it('Verifica se o objeto de retorno da função fetchProducts esta correto', async () => {
    const objectFetchProducts = await fetchProducts('computador');
    expect(objectFetchProducts).toEqual(computadorSearch);
  });

  it('Verifica se é disparado um erro com a frase "Requisição invalida" ao chamar a função fetchProducts sem argumentos', async () => {
    expect(async () => await fetchProducts()).toThrow(/^You must provide an url$/)
  });

});
