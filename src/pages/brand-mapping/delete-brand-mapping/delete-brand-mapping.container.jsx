import { connect } from 'react-redux';
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsLoading } from "../../../redux/brand/brand.selectors";
import WithSpinner from "../../../components/with-spinner/with-spinner.component";
import DeleteBrandMappingPage from "./delete-brand-mapping.component";

const mapStateToProps = createStructuredSelector({
    loading: selectIsLoading,
});

const DeleteBrandMappingPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(DeleteBrandMappingPage);

export default DeleteBrandMappingPageContainer;