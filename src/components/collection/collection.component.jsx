import React from 'react';
import './collection.style.css';
import CollectionItem from '../collection-item/collection-item.component';

const Collection = ({ title, items }) => {
	return (
		<div>
			<h3 className="title">{title}</h3>
			<div className="collection">
				{items
					.filter((item, index) => index < 4)
					.map(({ id, ...rest }) => <CollectionItem key={id} {...rest} />)}
			</div>
		</div>
	);
};

export default Collection;
