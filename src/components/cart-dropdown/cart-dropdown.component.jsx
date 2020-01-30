import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCartItems } from './../../redux/cart/cart.selector';

import CartItem from './../cart-item/cart-item.component';
import Button from '../button/button.component';

import './cart-dropdown.style.css';

const CartDropdown = ({ cartItems }) => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">{cartItems.map((item) => <CartItem key={item.id} item={item} />)}</div>
			<Button label="Go to checkout" className="btn" />
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
})
export default connect(mapStateToProps)(CartDropdown);
