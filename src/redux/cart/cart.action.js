import { cartActionTypes } from './cart.type';

export const toggleDropdown = () => {
	return {
		type: cartActionTypes.TOGGLE_DROPDOWN
	};
};
export const addItem = (item) => {
	return {
		type: cartActionTypes.ADD_CART,
		payload: item
	};
};

export const removeItem = (item) => {
	return {
		type: cartActionTypes.REMOVE_ITEM,
		payload: item
	};
};

export const reduceItem = (item) => {
	return {
		type: cartActionTypes.REDUCE_ITEM,
		payload: item
	};
};
