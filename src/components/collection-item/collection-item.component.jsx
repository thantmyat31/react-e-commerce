import React from 'react';
import './collection-item.style.css';

const CollectionItem = ({ imageUrl, name, price }) => {
	return (
		<div className="collection-item">
			<div
				style={{
					backgroundImage: `url(${imageUrl})`
				}}
				className="bg-image"
			>
				<div className="add">add to cart</div>
			</div>
			<div className="collection-footer">
				<span>{name}</span>
				<span>${price}</span>
			</div>
		</div>
	);
};

export default CollectionItem;
