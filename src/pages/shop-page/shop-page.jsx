import React from 'react';
import { Route } from 'react-router-dom';

import CategoryPage from './../category-page/category-page';
import CollectionOverView from '../../components/collection-overview/collection-overview.component';
import './shop-page.style.css';

const ShopPage = ({ match }) => {
	return (
		<div className="shop">
			<Route exact path={match.path} component={CollectionOverView} />
			<Route path={`${match.path}/:category`} component={CategoryPage} />
		</div>
	);
};

export default ShopPage;
