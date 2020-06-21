import { connect } from 'react-redux';
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsLoading } from "../../../redux/brand/brand.selectors";
import WithSpinner from "../../../components/with-spinner/with-spinner.component";
import DeleteBrandImagePage from "./delete-brand-image.component";

const mapStateToProps = createStructuredSelector({
    loading: selectIsLoading,
});

const DeleteBrandImagePageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(DeleteBrandImagePage);

export default DeleteBrandImagePageContainer;