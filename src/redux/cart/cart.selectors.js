import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCart],
  (cart) => cart.totalItemCount
);

export const selectCartIsHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartTotalPrice = createSelector([selectCart], (cart) => {
  const { cartItems } = cart;
  return cartItems.reduce(
    (totalPrice, cartItem) => totalPrice + cartItem.quantity * cartItem.price,
    0
  );
});
