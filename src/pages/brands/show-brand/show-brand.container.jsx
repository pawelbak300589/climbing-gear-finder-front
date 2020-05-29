import { connect } from 'react-redux';
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsLoading } from "../../../redux/brand/brand.selectors";
import WithSpinner from "../../../components/with-spinner/with-spinner.component";
import ShowBrandPage from "./show-brand.component";

const mapStateToProps = createStructuredSelector({
    loading: selectIsLoading,
});

const ShowBrandPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(ShowBrandPage);

export default ShowBrandPageContainer;