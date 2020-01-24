import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
	apiKey: 'AIzaSyD0dhdgEH_Y-Ipr0fzqbYMa5RN_coeGo_8',
	authDomain: 'react-e-commerce-db-f9752.firebaseapp.com',
	databaseURL: 'https://react-e-commerce-db-f9752.firebaseio.com',
	projectId: 'react-e-commerce-db-f9752',
	storageBucket: 'react-e-commerce-db-f9752.appspot.com',
	messagingSenderId: '793480633888',
	appId: '1:793480633888:web:58d8882cceabe092d5e645',
	measurementId: 'G-JV1NP4XJY2'
};

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
