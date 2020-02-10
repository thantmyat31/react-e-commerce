import { takeLatest, call, put } from 'redux-saga/effects';

import { firestore, convertCollectionSnapshotToMap } from './../../firebase/firebase.utils';

import collectionActionTypes from './collection.type';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './collection.action';

export function* fetchCollectionsAsync() {
	try {
		const collectionFromFirestore = firestore.collection('collection');
		const snapShot = yield collectionFromFirestore.get();
		const collectionMap = yield call(convertCollectionSnapshotToMap, snapShot);
		yield put(fetchCollectionsSuccess(collectionMap));
	} catch (error) {
		yield put(fetchCollectionsFailure(error.message));
	}
}

export function* fetchCollectionsStart() {
	yield takeLatest(collectionActionTypes.FETCH_COLLECTION_START, fetchCollectionsAsync);
}
