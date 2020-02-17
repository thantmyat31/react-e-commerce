import { userActionTypes } from './user.type';

export const googleSigninStart = () => ({
	type: userActionTypes.GOOGLE_SIGNIN_START
});

export const emailSigninStart = (emailAndPassword) => ({
	type: userActionTypes.EMAIL_SIGNIN_START,
	payload: emailAndPassword
});

export const signinSuccess = (user) => ({
	type: userActionTypes.SIGNIN_SUCCESS,
	payload: user
});

export const signinFailure = (error) => ({
	type: userActionTypes.SIGNIN_FAILURE,
	payload: error
});

export const checkUserSession = () => ({
	type: userActionTypes.CHECK_USER_SESSION
});

export const signoutStart = () => ({
	type: userActionTypes.SIGNOUT_START
});

export const signoutSuccess = () => ({
	type: userActionTypes.SIGNOUT_SUCCESS
});

export const signoutFailure = (error) => ({
	type: userActionTypes.SIGNOUT_FAILURE,
	payload: error
});

export const registerStart = (userCredentials) => ({
	type: userActionTypes.REGISTER_START,
	payload: userCredentials
});

export const registerSuccess = ({ user, additionalData }) => ({
	type: userActionTypes.REGISTER_SUCCESS,
	payload: { user, additionalData }
});

export const registerFailure = (error) => ({
	type: userActionTypes.REGISTER_FAILURE,
	payload: error
});
