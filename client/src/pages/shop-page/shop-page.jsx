import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchCollectionsStart } from './../../redux/collection/collection.action';

// import CollectionOverViewContainer from '../../components/collection-overview/collection-overview-container';
// import CategoryPageContainer from './../category-page/category-page-container';

import './shop-page.style.css';
import Spinner from '../../components/spinner/spinner.component';

const CollectionOverViewContainer = lazy(() =>
	import('../../components/collection-overview/collection-overview-container')
);
const CategoryPageContainer = lazy(() => import('./../category-page/category-page-container'));

const ShopPage = ({ fetchCollectionsStart, match }) => {
	useEffect(
		() => {
			fetchCollectionsStart();
		},
		[ fetchCollectionsStart ]
	);

	return (
		<div className="shop">
			<Suspense fallback={<Spinner />}>
				<Route exact path={match.path} component={CollectionOverViewContainer} />
				<Route path={`${match.path}/:category`} component={CategoryPageContainer} />
			</Suspense>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
