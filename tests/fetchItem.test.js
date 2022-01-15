require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  
  it('Verifica se fetchItem é uma função', () => {
    const type = typeof fetchItem;
    expect(type).toEqual('function')
  });

  it('Verifica se a função fetchItem chamada com o argumento "MLB1615760527" execulta um fetch', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled()    
  });

  it('Verifica se o fetch da função fetchItem utiliza a url correta', async () => {
    const url = 'ttps://api.mercadolibre.com/items/MLB1615760527'
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(url)    
  });

  it('Verifica se o objeto de retorno da função fetchItem esta correto', async () => {
    const objectFetchProducts = await fetchItem('MLB1615760527');
    expect(objectFetchProducts).toEqual(item);
  });

  it('Verifica se é disparado um erro com a frase "Requisição invalida" ao chamar a função fetchItem sem argumentos', async () => {
    expect(async () => await fetchItem()).toThrow(/^You must provide an url$/)
  });

});
