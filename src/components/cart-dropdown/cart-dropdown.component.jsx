import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleDropdown } from './../../redux/cart/cart.action';

import { createStructuredSelector } from 'reselect';
import { selectCartItems } from './../../redux/cart/cart.selector';

import CartItem from './../cart-item/cart-item.component';
import Button from '../button/button.component';

import './cart-dropdown.style.css';

const CartDropdown = ({ cartItems, history, hidden }) => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.length > 0 ? (
					cartItems.map((item) => <CartItem key={item.id} item={item} />)
				) : (
					<div className="no-item-message">There is no item in the cart</div>
				)}
			</div>

			<Button onClick={() => handleCheckOut(history, hidden)} label="Go to checkout" className="btn" />
		</div>
	);
};

const handleCheckOut = (history, hidden) => {
	history.push('/checkout');
	hidden();
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
});

const mapDispatchToProps = (dispath) => ({
	hidden: () => dispath(toggleDropdown())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
