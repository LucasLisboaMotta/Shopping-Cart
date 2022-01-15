const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  
  const item = document.createElement('ol')
  item.innerHTML = '<li>Item</li>';

  it('Verifica se ao usar a função saveCartItems, é utilizado o localStorage.setItem()', () => {
    saveCartItems(item);
    expect(localStorage.setItem).toHaveBeenCalled()
  });

  it('Verifica se os argumentos do localStorage.setItem estão corretos', () => {
    saveCartItems(item)
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', item)
  });

});

