import { takeLatest, all, call, put } from 'redux-saga/effects';
import { clearCart } from './cart.action';
import { userActionTypes } from './../user/user.type';

export function* onClearCartOnSignout() {
	yield put(clearCart());
}

export function* onSignoutSuccess() {
	yield takeLatest(userActionTypes.SIGNOUT_SUCCESS, onClearCartOnSignout);
}

export function* cartSaga() {
	yield all([ call(onSignoutSuccess) ]);
}
