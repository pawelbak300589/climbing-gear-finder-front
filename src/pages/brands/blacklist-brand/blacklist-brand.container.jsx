import { connect } from 'react-redux';
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsLoading } from "../../../redux/brand/brand.selectors";
import WithSpinner from "../../../components/with-spinner/with-spinner.component";
import BlacklistBrandPage from "./blacklist-brand.component";

const mapStateToProps = createStructuredSelector({
    loading: selectIsLoading,
});

const BlacklistBrandPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(BlacklistBrandPage);

export default BlacklistBrandPageContainer;