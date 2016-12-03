import Vuex from 'vuex';
import authModule from './modules/auth/auth.module';
import storeModule from './modules/store/store.module';
import cartModule from './modules/cart/cart.module';

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    auth : authModule,
    store: storeModule,
    cart : cartModule
  },
  strict : debug
})