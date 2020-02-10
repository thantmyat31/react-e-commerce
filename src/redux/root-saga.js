import { all, call } from 'redux-saga/effects';
import { fetchCollectionsStart } from './collection/collection.sagas';

export default function* rootSaga() {
	yield all([ call(fetchCollectionsStart) ]);
}
