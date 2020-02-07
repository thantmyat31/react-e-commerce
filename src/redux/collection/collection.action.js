import collectionActionTypes from './collection.type';
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => {
	return {
		type: collectionActionTypes.FETCH_COLLECTION_START
	};
};

export const fetchCollectionsSuccess = (collectionMap) => ({
	type: collectionActionTypes.FETCH_COLLECTION_SUCCESS,
	payload: collectionMap
});

export const fetchCollectionsFailure = (errorMessage) => ({
	type: collectionActionTypes.FETCH_COLLECTION_FAILURE,
	payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
	return (dispatch) => {
		const collectionFromFirestore = firestore.collection('collection');
		dispatch(fetchCollectionsStart());

		collectionFromFirestore
			.get()
			.then(async (snapShot) => {
				const collectionMap = convertCollectionSnapshotToMap(snapShot);
				dispatch(fetchCollectionsSuccess(collectionMap));
				this.setState({ isLoading: false });
			})
			.catch((error) => dispatch(fetchCollectionsFailure(error.message)));
	};
};
