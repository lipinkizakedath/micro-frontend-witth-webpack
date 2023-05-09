import faker from 'faker';

let products = '';

const mount = (el) => {
  for (let i = 0; i < 4; i++) {
    const name = faker.commerce.productName();
    products += `<li>${name}</li>`;
  }

  el.innerHTML = products;
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#root');
  if (el) {
    mount(el);
  }
}

export { mount };
