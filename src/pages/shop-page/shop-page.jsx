import React from 'react';
import { Route } from 'react-router-dom';

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';

import CategoryPage from './../category-page/category-page';
import CollectionOverView from '../../components/collection-overview/collection-overview.component';
import './shop-page.style.css';
import collectionAction from '../../redux/collection/collection.action';
import { connect } from 'react-redux';

import WithSpinner from './../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverView);
const CategoryPageWithSpinner = WithSpinner(CategoryPage);

class ShopPage extends React.Component {
	state = {
		isLoading: true
	};

	unsubscribeFromFirestore = null;
	componentDidMount() {
		const { updateCollection } = this.props;
		const collectionFromFirestore = firestore.collection('collection');
		collectionFromFirestore.get().then(async (snapShot) => {
			const collectionMap = convertCollectionSnapshotToMap(snapShot);
			updateCollection(collectionMap);
			this.setState({ isLoading: false });
			console.log(this.state);
		});
	}

	render() {
		const { match } = this.props;
		const { isLoading } = this.state;
		return (
			<div className="shop">
				<Route
					exact
					path={match.path}
					render={(props) => <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />}
				/>
				<Route
					path={`${match.path}/:category`}
					render={(props) => <CategoryPageWithSpinner isLoading={isLoading} {...props} />}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	updateCollection: (collectionMap) => dispatch(collectionAction(collectionMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
