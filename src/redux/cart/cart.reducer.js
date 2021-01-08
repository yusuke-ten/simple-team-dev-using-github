import { CartActionTypes } from './cart.types';
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  totalItemCount: 0,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM: {
      const { cartItems, totalItemCount } = addItemToCart(
        state.totalItemCount,
        state.cartItems,
        action.payload
      );
      return {
        ...state,
        totalItemCount: totalItemCount,
        cartItems: cartItems,
      };
    }
    case CartActionTypes.REMOVE_ITEM: {
      const { cartItems, totalItemCount } = removeItemFromCart(
        state.totalItemCount,
        state.cartItems,
        action.payload
      );
      return {
        ...state,
        totalItemCount: totalItemCount,
        cartItems: cartItems,
      };
    }
    case CartActionTypes.CLEAR_ITEM_FROM_CART: {
      const { cartItems, totalItemCount } = clearItemFromCart(
        state.totalItemCount,
        state.cartItems,
        action.payload
      );
      return {
        ...state,
        totalItemCount: totalItemCount,
        cartItems: cartItems,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
