import { cartActionTypes } from './cart.type';
import { addItemToCart, removeItemFromCart, reduceItemFromCart } from './cart.utils';

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
				cartItems: addItemToCart(state.cartItems, action.payload)
			};

		case cartActionTypes.REMOVE_ITEM:
			return {
				...state,
				cartItems: removeItemFromCart(state.cartItems, action.payload)
			};

		case cartActionTypes.REDUCE_ITEM:
			return {
				...state,
				cartItems: reduceItemFromCart(state.cartItems, action.payload)
			};

		case cartActionTypes.CLEAR_CART:
			return {
				...state,
				cartItems: []
			};

		default:
			return state;
	}
};

export default cartReducer;
