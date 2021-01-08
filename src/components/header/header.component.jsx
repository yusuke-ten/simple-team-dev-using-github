import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect as connectRedux } from 'react-redux';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartIsHidden } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropDown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartIsHidden,
});

export default connectRedux(mapStateToProps)(Header);
