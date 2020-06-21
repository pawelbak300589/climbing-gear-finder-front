import { connect } from 'react-redux';
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsLoading } from "../../../redux/brand/brand.selectors";
import WithSpinner from "../../../components/with-spinner/with-spinner.component";
import EditBrandImagePage from "./edit-brand-image.component";

const mapStateToProps = createStructuredSelector({
    loading: selectIsLoading,
});

const EditBrandImagePageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(EditBrandImagePage);

export default EditBrandImagePageContainer;