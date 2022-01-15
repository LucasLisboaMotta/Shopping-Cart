const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
    
  it('Verifica se ao usar a função getSavedCartItems, é utilizado o localStorage.getItem()', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled()
  });

  it('Verifica se os argumentos do localStorage.getItem estão corretos', () => {
    getSavedCartItems()
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems')
  });

});
