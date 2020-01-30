import React from 'react';
import './collection-item.style.css';
import Button from '../button/button.component';
import { addItem } from './../../redux/cart/cart.action';
import { connect } from 'react-redux';

const CollectionItem = ({ item, addItem }) => {
	return (
		<div className="collection-item">
			<div
				style={{
					backgroundImage: `url(${item.imageUrl})`
				}}
				className="bg-image"
			>
				<Button className="btn add" label="add to cart" onClick={() => addItem(item)} />
			</div>
			<div className="collection-footer">
				<span>{item.name}</span>
				<span>${item.price}</span>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		addItem: (item) => dispatch(addItem(item))
	};
};

export default connect(null, mapDispatchToProps)(CollectionItem);
