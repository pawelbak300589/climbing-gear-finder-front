import { connect } from 'react-redux';
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsLoading } from "../../../redux/brand/brand.selectors";
import WithSpinner from "../../../components/with-spinner/with-spinner.component";
import MainBrandImagePage from "./main-brand-image.component";

const mapStateToProps = createStructuredSelector({
    loading: selectIsLoading,
});

const MainBrandImagePageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(MainBrandImagePage);

export default MainBrandImagePageContainer;