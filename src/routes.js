import VueRouter from 'vue-router';

import Home from './components/home';
import Signin from './components/signin';
import Signup from './components/signup';
import Store from './components/store';
import Cart from './components/cart';

const routes = [{
  path     : '/',
  name     : 'home',
  component: Home
}, {
  path     : '/signin',
  name     : 'signin',
  component: Signin
},
  {
    path     : '/signup',
    name     : 'signup',
    component: Signup
  },
  {
    path     : '/store',
    name     : 'store',
    component: Store
  },
  {
    path     : '/cart',
    name     : 'cart',
    component: Cart
  },
  { path: '*', redirect: { name: 'home' } }];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router