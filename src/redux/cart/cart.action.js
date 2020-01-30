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
