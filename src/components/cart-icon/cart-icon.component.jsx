import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { connect as connectRedux } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden, totalItemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{totalItemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  totalItemCount: selectCartItemsCount(state),
});

export default connectRedux(mapStateToProps, mapDispatchToProps)(CartIcon);
