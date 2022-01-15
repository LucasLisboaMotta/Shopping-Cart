const items = document.querySelector('.items');
const cartItems = document.querySelector('.cart__items');
const totalPrice = document.querySelector('.total-price');
const emptyBnt = document.querySelector('.empty-cart');


const sumPrice = () => {
  const prices = cartItems.children;
  let total = 0;
  for (let i = 0; i < prices.length; i += 1) {
    const string = prices[i].innerText.split(' $')[1];
    total += Number(string);
  }
  total = Number(total.toFixed(2));
  totalPrice.innerText = total;
};

const saveCart = () => saveCartItems(JSON.stringify(cartItems.innerHTML));

const cartItemClickListener = ({ target }) => {
  cartItems.removeChild(target);
  sumPrice();
  saveCart();
};

const createCartItemElement = (sku, name, salePrice) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const eventOnClick = async ({ target }) => {
  const targetId = target.previousSibling.innerText;
  const { id, title, price } = await fetchItem(targetId);
  const element = createCartItemElement(id, title, price);
  cartItems.appendChild(element);
  sumPrice();
  saveCart();
};

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  if (element === 'button') e.addEventListener('click', eventOnClick); 
  return e;
}

function createProductItemElement(sku, name, image) {
  const section = document.createElement('section');
  section.className = 'item';
  
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  
  return section;
}

const emptyCart = () => {
  cartItems.innerHTML = '';
  saveCart();
};

emptyBnt.addEventListener('click', emptyCart);

window.onload = async () => { 
  const { results } = await fetchProducts('computador');
  results.forEach(({ id, title, thumbnail }) => {
    const element = createProductItemElement(id, title, thumbnail);
    items.appendChild(element);
  });

  if (localStorage.length) {
    const storageItens = JSON.parse(getSavedCartItems());
    cartItems.innerHTML = storageItens;
    for (let i = 0; i < cartItems.children.length; i += 1) {
      cartItems.children[i].addEventListener('click', cartItemClickListener);
    }
    sumPrice();
  }
};
