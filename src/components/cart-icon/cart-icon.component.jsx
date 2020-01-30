import React from 'react';
import { connect } from 'react-redux';
import { toggleDropdown } from './../../redux/cart/cart.action';

import { ReactComponent as CartLogo } from '../../assets/cart.svg';
import './cart-icon.style.css';

const CartIcon = ({ toggleDropdown, quantity }) => {
	return (
		<div className="cart-logo-container" onClick={toggleDropdown}>
			<CartLogo className="cart-icon" />
			<span className="cart-count">{quantity}</span>
		</div>
	);
};

const mapStateToProps = ({ cart: { cartItems } }) => {
	return {
		quantity: cartItems.reduce((accumulater, cartItem) => accumulater + cartItem.quantity, 0)
	};
};

const mapDispatchToprops = (dispatch) => {
	return {
		toggleDropdown: () => dispatch(toggleDropdown())
	};
};

export default connect(mapStateToProps, mapDispatchToprops)(CartIcon);
