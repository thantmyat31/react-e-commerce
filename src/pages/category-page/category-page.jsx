import React from 'react';
import './category-page.style.css';
import { connect } from 'react-redux';
import { categoryCollection } from './../../redux/collection/collection.utils';
import CollectionItem from './../../components/collection-item/collection-item.component';

const CategoryPage = ({ categoryCollection }) => {
	const { title, items } = categoryCollection;

	return (
		<div className="category-page">
			<h2 className="cat-title">{title}</h2>
			<div className="cat-group">{items.map((item) => <CollectionItem key={item.id} item={item} />)}</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	const routeName = ownProps.match.params.category;
	const collectionItems = state.collection.collectionItems;
	return {
		categoryCollection: categoryCollection(collectionItems, routeName)
	};
};

export default connect(mapStateToProps)(CategoryPage);
