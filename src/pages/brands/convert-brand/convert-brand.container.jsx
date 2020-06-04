import { connect } from 'react-redux';
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsLoading } from "../../../redux/brand/brand.selectors";
import WithSpinner from "../../../components/with-spinner/with-spinner.component";
import ConvertBrandPage from "./convert-brand.component";

const mapStateToProps = createStructuredSelector({
    loading: selectIsLoading,
});

const ConvertBrandPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(ConvertBrandPage);

export default ConvertBrandPageContainer;