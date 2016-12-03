import {mapGetters, mapMutations} from 'vuex';
import authService from '../../services/auth.service';
import {ADD_TO_CART, REMOVE_FROM_CART} from '../../modules/cart/cart.module';
import {UPDATE_QUANTITY} from '../../modules/store/store.module';

export default {
  methods : {
    ...mapMutations({
      updateQuantity: UPDATE_QUANTITY,
      addToCart     : ADD_TO_CART,
      removeFromCart: REMOVE_FROM_CART
    }),
    checkout() {
      if( !authService.isLoggedIn() ) {
        this.$router.push({ name: 'signin' });
        return;
      }
      this.$store.dispatch('checkout');
    }
  },
  computed: {
    ...mapGetters([
      'checkoutPending',
      'error',
      'cart',
      'cartTotal',
      'cartLength'
    ]),
  }

}
