import { connect } from 'react-redux';
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsLoading } from "../../../redux/brand/brand.selectors";
import WithSpinner from "../../../components/with-spinner/with-spinner.component";
import DeleteBrandPage from "./delete-brand.component";

const mapStateToProps = createStructuredSelector({
    loading: selectIsLoading,
});

const DeleteBrandPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(DeleteBrandPage);

export default DeleteBrandPageContainer;