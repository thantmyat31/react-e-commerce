import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import WithSpinner from './../../components/with-spinner/with-spinner.component';

import CategoryPage from './category-page';
import { selectIsCollectionLoaded } from '../../redux/collection/collection.selector';

const mapStateToProps = createStructuredSelector({
	isLoading: (state) => !selectIsCollectionLoaded(state)
});

const CategoryPageContainer = connect(mapStateToProps)(WithSpinner(CategoryPage));

export default CategoryPageContainer;
