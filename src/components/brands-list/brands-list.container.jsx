import { connect } from 'react-redux';
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsLoading } from "../../redux/brand/brand.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import BrandsList from './brands-list.component';

const mapStateToProps = createStructuredSelector({
    loading: selectIsLoading,
});

const BrandsListContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(BrandsList);

export default BrandsListContainer;