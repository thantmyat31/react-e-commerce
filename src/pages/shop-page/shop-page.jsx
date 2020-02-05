import React from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from './../../redux/collection/collection.action';

import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching, selectIsCollectionLoaded } from './../../redux/collection/collection.selector';

import CategoryPage from './../category-page/category-page';
import CollectionOverView from '../../components/collection-overview/collection-overview.component';
import WithSpinner from './../../components/with-spinner/with-spinner.component';
import './shop-page.style.css';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverView);
const CategoryPageWithSpinner = WithSpinner(CategoryPage);

class ShopPage extends React.Component {
	unsubscribeFromFirestore = null;
	componentDidMount() {
		const { fetchCollectionsStartAsync } = this.props;
		fetchCollectionsStartAsync();
	}

	render() {
		const { match, isFetchingCollection, isCollectionLoaded } = this.props;

		return (
			<div className="shop">
				<Route
					exact
					path={match.path}
					render={(props) => <CollectionOverviewWithSpinner isLoading={isFetchingCollection} {...props} />}
				/>
				<Route
					path={`${match.path}/:category`}
					render={(props) => <CategoryPageWithSpinner isLoading={!isCollectionLoaded} {...props} />}
				/>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	isFetchingCollection: selectIsCollectionFetching,
	isCollectionLoaded: selectIsCollectionLoaded
});

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
