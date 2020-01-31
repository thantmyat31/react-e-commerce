import React from 'react';
import Collection from './../../components/collection/collection.component';
import './shop-page.style.css';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionItems } from './../../redux/collection/collection.selector';

const ShopPage = ({ collection }) => {
	return (
		<div className="shop">
			<h2>Collection</h2>
			{collection.map(({ id, ...rest }) => <Collection key={id} {...rest} />)}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collection: selectCollectionItems
});

export default connect(mapStateToProps)(ShopPage);
