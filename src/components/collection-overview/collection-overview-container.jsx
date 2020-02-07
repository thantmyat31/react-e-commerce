import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionOverView from './collection-overview.component';
import { selectIsCollectionFetching } from '../../redux/collection/collection.selector';
import WithSpinner from './../with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsCollectionFetching
});

const CollectionOverViewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverView));

export default CollectionOverViewContainer;
