import { createSelector } from 'reselect';

const menuList = (state) => state.menu;
const menuItemsList = createSelector([ menuList ], (menu) => menu.menuItems);

export default menuItemsList;
