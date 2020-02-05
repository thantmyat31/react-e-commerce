import { createSelector } from 'reselect';

const selectCollection = (state) => state.collection;

export const selectCollectionItems = createSelector([ selectCollection ], (selection) => selection.collectionItems);

export const selectIsCollectionFetching = createSelector([ selectCollection ], (shop) => shop.isFetching);

export const selectIsCollectionLoaded = createSelector([ selectCollection ], (shop) => !!shop.collectionItems);
