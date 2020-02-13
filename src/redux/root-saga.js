import { all, call } from 'redux-saga/effects';
import { collectionSaga } from './collection/collection.sagas';
import { userSaga } from './user/user.sagas';
import { cartSaga } from './cart/cart.sagas';

export default function* rootSaga() {
	yield all([ call(collectionSaga), call(userSaga), call(cartSaga) ]);
}
