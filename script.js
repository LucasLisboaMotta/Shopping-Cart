const items = document.querySelector('.items');
const cartItems = document.querySelector('.cart__items');

function cartItemClickListener(event) {
  // coloque seu código aqui
}

function createCartItemElement(sku, name, salePrice) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const eventOnClick = async ({ target }) => {
  const targetId = target.previousSibling.innerText;
  const { id, title, price } = await fetchItem(targetId);
  const element = createCartItemElement(id, title, price);
  cartItems.appendChild(element);    
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

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

window.onload = async () => { 
  const { results } = await fetchProducts('computador');
  results.forEach(({ id, title, thumbnail }) => {
    const element = createProductItemElement(id, title, thumbnail);
    items.appendChild(element);
  });
};
