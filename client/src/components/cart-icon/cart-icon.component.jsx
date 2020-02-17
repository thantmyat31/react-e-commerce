import React from 'react';
import { connect } from 'react-redux';
import { toggleDropdown } from './../../redux/cart/cart.action';

import { createStructuredSelector } from 'reselect';
import { selectorCartItemsCount } from '../../redux/cart/cart.selector';

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

const mapStateToProps = createStructuredSelector({
	quantity: selectorCartItemsCount
});

const mapDispatchToprops = (dispatch) => {
	return {
		toggleDropdown: () => dispatch(toggleDropdown())
	};
};

export default connect(mapStateToProps, mapDispatchToprops)(CartIcon);
