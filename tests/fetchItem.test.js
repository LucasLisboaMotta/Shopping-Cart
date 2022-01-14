require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');


// Teste se fetchItem é uma função;

// Execute a função fetchItem com o argumento do item "MLB1615760527" e teste se fetch foi chamada;

// Teste se, ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527";

// Teste se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo.

// Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url. Dica: Lembre-se de usar o new Error('mensagem esperada aqui') para comparar com o objeto retornado da API.



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
