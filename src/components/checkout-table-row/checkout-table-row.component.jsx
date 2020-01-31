import React from 'react';
import { connect } from 'react-redux';
import { removeItem, reduceItem, addItem } from '../../redux/cart/cart.action';

const CheckOutTableRow = ({ item, removeItem, reduceItem, addItem }) => {
	const { imageUrl, name, quantity, price } = item;
	return (
		<tr>
			<td>
				<img className="product" src={imageUrl} alt="cart item" />
			</td>
			<td>{name}</td>
			<td>
				<span className="decrement-icon" onClick={() => reduceItem(item)}>
					&#x276E;
				</span>
				<span className="quantity">{quantity}</span>
				<span className="increment-icon" onClick={() => addItem(item)}>
					&#x276F;
				</span>
			</td>
			<td>${price}</td>
			<td>
				<span onClick={() => removeItem(item)} className="remove-icon">
					&times;
				</span>
			</td>
		</tr>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeItem: (item) => dispatch(removeItem(item)),
		reduceItem: (item) => dispatch(reduceItem(item)),
		addItem: (item) => dispatch(addItem(item))
	};
};

export default connect(null, mapDispatchToProps)(CheckOutTableRow);
