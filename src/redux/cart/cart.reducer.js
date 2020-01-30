import { cartActionTypes } from './cart.type';
import { addItemToCart } from './cart.utils';

const initialState = {
	hidden: true,
	cartItems: []
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case cartActionTypes.TOGGLE_DROPDOWN:
			return {
				...state,
				hidden: !state.hidden
			};

		case cartActionTypes.ADD_CART:
			return {
				...state,
				// cartItems: [ ...state.cartItems, action.payload ]
				cartItems: addItemToCart(state.cartItems, action.payload)
			};

		default:
			return state;
	}
};

export default cartReducer;
