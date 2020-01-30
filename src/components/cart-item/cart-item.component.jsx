import React from 'react';
import './cart-item.style.css';

const CartItem = ({ item }) => {
	return (
		<div className="cart-item">
			<img className="item-img" src={item.imageUrl} alt={item.name} />
			<div className="item-details">
				<span>{item.name}</span>
				<span>
					{item.quantity} x ${item.price}
				</span>
			</div>
		</div>
	);
};

export default CartItem;
