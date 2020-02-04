import { COLLECTION_RENDER } from './collection.type';

const initialState = {
	collectionItems: null
};

const collectionReducer = (state = initialState, action) => {
	switch (action.type) {
		case COLLECTION_RENDER:
			return {
				...state,
				collectionItems: action.payload
			};
		default:
			return state;
	}
};

export default collectionReducer;
