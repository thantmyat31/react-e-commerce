export const addItemToCart = (cartItems, addItem) => {
	const existingCartItem = cartItems.find((item) => item.id === addItem.id);

	if (existingCartItem) {
		return cartItems.map((item) => (item.id === addItem.id ? { ...item, quantity: item.quantity + 1 } : item));
	}

	return [ ...cartItems, { ...addItem, quantity: 1 } ];
};

export const removeItemFromCart = (cartItems, removeItem) => {
	const filteredCartItems = cartItems.filter((item) => item.id !== removeItem.id);
	return filteredCartItems;
};

export const reduceItemFromCart = (cartItems, reduceItem) => {
	const existingCartItem = cartItems.find((item) => item.id === reduceItem.id);
	if (existingCartItem) {
		if (reduceItem.quantity === 1) {
			return cartItems.filter((item) => item.id !== reduceItem.id);
		}
		return cartItems.map((item) => (item.id === reduceItem.id ? { ...item, quantity: item.quantity - 1 } : item));
	}
};
