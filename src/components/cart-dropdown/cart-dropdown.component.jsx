import React from 'react';

import CartItem from './../cart-item/cart-item.component';
import Button from '../button/button.component';

import './cart-dropdown.style.css';
import { connect } from 'react-redux';

const CartDropdown = ({ cartItems }) => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">{cartItems.map((item) => <CartItem key={item.id} item={item} />)}</div>
			<Button label="Go to checkout" className="btn" />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		cartItems: state.cart.cartItems
	};
};

export default connect(mapStateToProps)(CartDropdown);
