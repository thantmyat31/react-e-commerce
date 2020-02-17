import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection.style.css';

const Collection = ({ title, items }) => {
	return (
		<div>
			<h3 className="title">{title}</h3>
			<div className="collection">
				{items.filter((item, index) => index < 4).map((item) => <CollectionItem key={item.id} item={item} />)}
			</div>
		</div>
	);
};

export default Collection;
