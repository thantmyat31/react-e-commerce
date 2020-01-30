import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

export const selectorCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumulater, cartItem) => accumulater + cartItem.quantity, 0)
)