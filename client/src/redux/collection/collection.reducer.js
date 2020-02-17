import collectionActionTypes from './collection.type';

const initialState = {
	collectionItems: null,
	isFetching: false,
	errorMessage: undefined
};

const collectionReducer = (state = initialState, action) => {
	switch (action.type) {
		case collectionActionTypes.FETCH_COLLECTION_START:
			return {
				...state,
				isFetching: true
			}
		case collectionActionTypes.FETCH_COLLECTION_SUCCESS:
			return {
				...state,
				collectionItems: action.payload,
				isFetching: false
			};

		case collectionActionTypes.FETCH_COLLECTION_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload
			}
		default:
			return state;
	}
};

export default collectionReducer;
