export const categoryCollection = (collectionItems, routeName) => {
	return collectionItems.find((item) => item.title.toLowerCase() === routeName);
};
