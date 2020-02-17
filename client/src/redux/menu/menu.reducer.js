import { menuItems } from './../../services/menu-service';

const initialState = {
	menuItems: menuItems
};

const menuReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default menuReducer;
