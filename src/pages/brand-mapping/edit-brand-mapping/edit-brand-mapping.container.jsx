import { connect } from 'react-redux';
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsLoading } from "../../../redux/brand/brand.selectors";
import WithSpinner from "../../../components/with-spinner/with-spinner.component";
import EditBrandMappingPage from "./edit-brand-mapping.component";

const mapStateToProps = createStructuredSelector({
    loading: selectIsLoading,
});

const EditBrandMappingPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(EditBrandMappingPage);

export default EditBrandMappingPageContainer;