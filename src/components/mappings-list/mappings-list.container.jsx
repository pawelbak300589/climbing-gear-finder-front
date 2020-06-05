import { connect } from 'react-redux';
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsLoading } from "../../redux/brand-mapping/brand-mapping.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import MappingsList from "./mappings-list.component";

const mapStateToProps = createStructuredSelector({
    loading: selectIsLoading,
});

const MappingsListContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(MappingsList);

export default MappingsListContainer;