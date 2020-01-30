import React from 'react';
import { ReactComponent as CartLogo } from '../../assets/cart.svg';
import './cart-icon.style.css';
import cartAction from './../../redux/cart/cart.action';
import { connect } from 'react-redux';

const CartIcon = ({ cartAction }) => {
	return (
		<div className="cart-logo-container" onClick={cartAction}>
			<CartLogo className="cart-icon" />
			<span className="cart-count">0</span>
		</div>
	);
};

const mapDispatchToprops = (dispatch) => {
	return {
		cartAction: () => dispatch(cartAction())
	};
};

export default connect(null, mapDispatchToprops)(CartIcon);
