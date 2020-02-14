import { takeLatest, put, call, all } from 'redux-saga/effects';
import { userActionTypes } from './user.type';
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';
import {
	signinSuccess,
	signinFailure,
	signoutFailure,
	signoutSuccess,
	registerSuccess,
	registerFailure
} from './user.action';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
	try {
		const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
		const userSnapShot = yield userRef.get();
		yield put(signinSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
	} catch (error) {
		yield put(signinFailure(error));
	}
}

export function* siginWithGoogle() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider);
		yield call(getSnapshotFromUserAuth, user);
	} catch (error) {
		yield put(signinFailure(error));
	}
}

export function* signinWithEmail({ payload: { email, password } }) {
	try {
		const { user } = yield auth.signInWithEmailAndPassword(email, password);
		yield call(getSnapshotFromUserAuth, user);
	} catch (error) {
		yield put(signinFailure(error));
	}
}

export function* onGoogleSigninStart() {
	yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, siginWithGoogle);
}

export function* onEmailSigninStart() {
	yield takeLatest(userActionTypes.EMAIL_SIGNIN_START, signinWithEmail);
}

export function* isAuthenticatedUser() {
	try {
		const userAuth = yield getCurrentUser();
		if (!userAuth) return;
		yield getSnapshotFromUserAuth(userAuth);
	} catch (error) {
		yield put(signinFailure(error));
	}
}

export function* signOut() {
	try {
		yield auth.signOut();
		yield put(signoutSuccess());
	} catch (error) {
		yield put(signoutFailure(error));
	}
}

export function* onCheckUserSession() {
	yield takeLatest(userActionTypes.CHECK_USER_SESSION, isAuthenticatedUser);
}

export function* onSignoutStart() {
	yield takeLatest(userActionTypes.SIGNOUT_START, signOut);
}

export function* onRegister({ payload: { email, password, displayName } }) {
	try {
		const { user } = yield auth.createUserWithEmailAndPassword(email, password);

		yield put(registerSuccess({ user, additionalData: { displayName } }));
	} catch (error) {
		yield put(registerFailure(error));
	}
}

export function* signInAfterRegister({ payload: { user, additionalData } }) {
	yield getSnapshotFromUserAuth(user, additionalData);
}

export function* onRegisterStart() {
	yield takeLatest(userActionTypes.REGISTER_START, onRegister);
}

export function* onRegisterSuccess() {
	yield takeLatest(userActionTypes.REGISTER_SUCCESS, signInAfterRegister);
}

export function* userSaga() {
	yield all([
		call(onGoogleSigninStart),
		call(onEmailSigninStart),
		call(isAuthenticatedUser),
		call(onSignoutStart),
		call(onRegisterStart),
		call(onRegisterSuccess)
	]);
}
