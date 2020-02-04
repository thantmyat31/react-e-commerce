import { COLLECTION_RENDER } from './collection.type';

const collectionAction = (collectionMap) => {
	return {
		type: COLLECTION_RENDER,
		payload: collectionMap
	};
};

export default collectionAction;
