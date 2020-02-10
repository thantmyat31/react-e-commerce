import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionItems } from './../../redux/collection/collection.selector';
import Collection from './../../components/collection/collection.component';

import './collection-overview.style.css';

const CollectionOverView = ({ collection }) => {
	return (
		<div>
			<h2>Collection</h2>
			{collection ? collection.map(({ id, ...rest }) => <Collection key={id} {...rest} />) : 'loading...'}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collection: selectCollectionItems
});

export default connect(mapStateToProps)(CollectionOverView);
