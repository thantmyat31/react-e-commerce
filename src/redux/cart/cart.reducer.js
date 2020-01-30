import { TOGGLE_DROPDOWN } from './cart.type';

const initialState = {
	hidden: true
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_DROPDOWN:
			return {
				...state,
				hidden: !state.hidden
			};
		default:
			return state;
	}
};

export default cartReducer;
