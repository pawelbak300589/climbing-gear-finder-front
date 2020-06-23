import { connect } from 'react-redux';
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsLoading } from "../../redux/brand-urls/brand-urls.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import UrlsList from "./urls-list.component";

const mapStateToProps = createStructuredSelector({
    loading: selectIsLoading,
});

const UrlsListContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(UrlsList);

export default UrlsListContainer;