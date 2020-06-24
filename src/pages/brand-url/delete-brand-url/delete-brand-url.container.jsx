import { connect } from 'react-redux';
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsLoading } from "../../../redux/brand/brand.selectors";
import WithSpinner from "../../../components/with-spinner/with-spinner.component";
import DeleteBrandUrlPage from "./delete-brand-url.component";

const mapStateToProps = createStructuredSelector({
    loading: selectIsLoading,
});

const DeleteBrandUrlPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(DeleteBrandUrlPage);

export default DeleteBrandUrlPageContainer;