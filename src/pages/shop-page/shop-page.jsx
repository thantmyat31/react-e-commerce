import React from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchCollectionsStart } from './../../redux/collection/collection.action';

import CollectionOverViewContainer from '../../components/collection-overview/collection-overview-container';
import CategoryPageContainer from './../category-page/category-page-container';

import './shop-page.style.css';

class ShopPage extends React.Component {
	unsubscribeFromFirestore = null;
	componentDidMount() {
		const { fetchCollectionsStart } = this.props;
		fetchCollectionsStart();
	}

	render() {
		const { match } = this.props;

		return (
			<div className="shop">
				<Route exact path={match.path} component={CollectionOverViewContainer} />
				<Route path={`${match.path}/:category`} component={CategoryPageContainer} />
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
