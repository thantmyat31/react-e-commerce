import React from 'react';
import Button from '../button/button.component';
import './cart-dropdown.style.css';

const CartDropdown = () => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				<span style={{ display: 'block' }}>Item -1 </span>
			</div>
			<Button label="Go to checkout" className="btn" />
		</div>
	);
};

export default CartDropdown;
