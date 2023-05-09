import 'products/ProductsIndex';
import 'cart/CartIndex';
import { mount as productMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartIndex';

productMount(document.querySelector('#product-container'));
cartMount(document.querySelector('#cart-container'));

console.log('container');
