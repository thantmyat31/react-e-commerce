import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

//YOUR WEB'S APP FIREBASE CONFIGURATION
import { config } from '../services/firebaseConfig.js';

export const createUserProfileDocument = async (userAuth, additionlData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createAt,
				...additionlData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
	prompt: 'select_account'
});

export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);
export default firebase;
