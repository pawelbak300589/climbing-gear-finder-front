import { connect } from 'react-redux';
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsLoading, selectPagination } from "../../redux/brand/brand.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import WithPagination from "../with-pagination/with-pagination.component";
import BrandsList from './brands-list.component';

const mapStateToProps = createStructuredSelector({
    loading: selectIsLoading,
    pagination: selectPagination,
});

const BrandsListContainer = compose(
    connect(mapStateToProps),
    WithSpinner,
    WithPagination
)(BrandsList);

export default BrandsListContainer;