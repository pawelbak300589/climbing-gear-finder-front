import React from 'react';
import { connect } from "react-redux";

import EditBrandForm from "../../../components/forms/edit-brand-form/edit-brand-form.component";
import CustomBreadcrumb from "../../../components/custom-breadcrumb/custom-breadcrumb.component";

import { selectBrand } from "../../../redux/brand/brand.selectors";

import {editBrandPageBreadcrumbItems} from "../../../components/custom-breadcrumb/custom-breadcrumb.data";

const EditBrandPage = ({ brand }) => {

    return (
        <div className="edit-brand-page">
            <CustomBreadcrumb items={editBrandPageBreadcrumbItems} />
            <EditBrandForm brand={brand} />
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    brand: selectBrand(ownProps.match.params.brandId)(state)
});

export default connect(mapStateToProps)(EditBrandPage);
