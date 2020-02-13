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

export const convertCollectionSnapshotToMap = (snapShot) => {
	const transformColletion = snapShot.docs.map((doc) => {
		const { title, items } = doc.data();
		return {
			routeName: encodeURI(title.toLowerCase()),
			title,
			id: doc.id,
			items
		};
	});
	// return transformColletion.reduce((accumulator, collection) => {
	// 	accumulator[collection.title.toLowerCase()] = collection;
	// 	return accumulator;
	// }, {});

	return transformColletion;
};

// ADD ITEMS' COLLECTION TO THE FIREBASE
export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey);
	const batch = firestore.batch();

	objectsToAdd.forEach((obj) => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});
	return await batch.commit();
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			unsubscribe();
			resolve(userAuth);
		}, reject);
	});
};

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
	prompt: 'select_account'
});

export const signInWithGoogle = () => firebase.auth().signInWithPopup(googleProvider);
export default firebase;
