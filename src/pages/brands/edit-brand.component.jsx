import React from 'react';
import { connect } from "react-redux";

import EditBrandForm from "../../components/forms/edit-brand-form/edit-brand-form.component";

import { selectBrand } from "../../redux/brand/brand.selectors";

const EditBrandPage = ({ brand }) => {
    return (
        <div className="edit-brand-page">
            <EditBrandForm brand={brand} />
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    brand: selectBrand(ownProps.match.params.brandId)(state)[0]
});

export default connect(mapStateToProps)(EditBrandPage);
