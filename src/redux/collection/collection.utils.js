const COLLECTION_ID_MAP = {
	hats: 1,
	sneakers: 2,
	jackets: 3,
	women: 4,
	men: 5
};

export const categoryCollection = (collectionItems, routeName) => {
	return collectionItems.find((item) => item.id === COLLECTION_ID_MAP[routeName]);
};
