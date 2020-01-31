import SHOP_DATA from './../../services/collection-service';

const initialState = {
	collectionItems: SHOP_DATA
};

const collectionReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default collectionReducer;
