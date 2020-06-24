import { connect } from 'react-redux';
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsLoading } from "../../../redux/brand/brand.selectors";
import WithSpinner from "../../../components/with-spinner/with-spinner.component";
import MainBrandUrlPage from "./main-brand-url.component";

const mapStateToProps = createStructuredSelector({
    loading: selectIsLoading,
});

const MainBrandUrlPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(MainBrandUrlPage);

export default MainBrandUrlPageContainer;