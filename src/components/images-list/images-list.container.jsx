import { connect } from 'react-redux';
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsLoading } from "../../redux/brand-images/brand-images.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import ImagesList from "./images-list.component";

const mapStateToProps = createStructuredSelector({
    loading: selectIsLoading,
});

const ImagesListContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(ImagesList);

export default ImagesListContainer;