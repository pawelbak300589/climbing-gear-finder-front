import { connect } from 'react-redux';
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsLoading } from "../../../redux/brand/brand.selectors";
import WithSpinner from "../../../components/with-spinner/with-spinner.component";
import EditBrandUrlPage from "./edit-brand-url.component";

const mapStateToProps = createStructuredSelector({
    loading: selectIsLoading,
});

const EditBrandUrlPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(EditBrandUrlPage);

export default EditBrandUrlPageContainer;