import React from 'react';

const CheckOutTableRow = (props) => {
	const { imageUrl, name, quantity, price } = props.item;
	return (
		<tr>
			<td>
				<img className="product" src={imageUrl} alt="cart item" />
			</td>
			<td>{name}</td>
			<td>
				<span className="decrement-icon">&#x276E;</span>
				<span className="quantity">{quantity}</span>
				<span className="increment-icon">&#x276F;</span>
			</td>
			<td>${price}</td>
			<td>
				<span className="remove-icon">&times;</span>
			</td>
		</tr>
	);
};

export default CheckOutTableRow;
