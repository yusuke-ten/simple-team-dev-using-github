import React from 'react';
import { withRouter } from 'react-router';

import './cart-dropdown.styles.scss';
import CustomButton from '../../components/custom-button/custom-button.component';
import CartItem from '../../components/cart-item/cart-item.component';
import { connect as connectRedux } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropDown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    {cartItems.length === 0 ? (
      <span className="empty-message">{'Cart is empty'.toUpperCase()}</span>
    ) : (
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
    )}
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      Go to checkout
    </CustomButton>
  </div>
);
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default withRouter(connectRedux(mapStateToProps)(CartDropDown));
