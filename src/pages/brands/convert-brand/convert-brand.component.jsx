import React, { useState } from 'react';
import { connect } from "react-redux";

import { history } from "../../../helpers";

import Modal from "../../../components/modal/modal.component";
import CustomButton from "../../../components/custom-button/custom-button.component";
import BrandDetails from "../../../components/brand-details/brand-details.component";

import { selectBrandsForSelectInput, selectBrand } from "../../../redux/brand/brand.selectors";
import { convertToMapping } from "../../../redux/brand/brand.actions";
import Form from "react-bootstrap/Form";

const ConvertBrandPage = ({ brand, brandsForSelect, convertBrandToMapping }) => {
    const [parentId, setParentId] = useState(null);

    const renderBrandDetails = () => {
        if (brand) {
            return (
                <BrandDetails brand={brand} />
            );
        }
    };

    const renderModal = () => {
        if (brand) {
            const renderActions = () => {
                return (
                    <>
                        <CustomButton type="link" to={`/brands/show/${brand.id}`} variant="light">Cancel</CustomButton>
                        <CustomButton type="button"
                                      onClick={() => convertBrandToMapping(brand.id, parentId)}
                                      variant="info">Convert</CustomButton>
                    </>
                );
            };

            const renderContentForm = () => {
                return (
                    <Form>
                        <Form.Group controlId="brand">
                            <Form.Label>Convert brand:</Form.Label>
                            <Form.Control placeholder={brand.name} disabled />
                        </Form.Group>
                        <Form.Group controlId="parentId">
                            <Form.Label>To a mapping of brand:</Form.Label>
                            <Form.Control name="parentId"
                                          as="select"
                                          onChange={(event) => setParentId(event.target.value)}>
                                {
                                    brandsForSelect.map(brandData =>
                                        <option key={brandData.id} value={brandData.id}>{brandData.name}</option>
                                    )
                                }
                            </Form.Control>
                        </Form.Group>
                    </Form>
                );
            };

            return (
                <Modal
                    title={`Convert brand to mapping`}
                    content={renderContentForm()}
                    actions={renderActions()}
                    onDismiss={() => history.push(`/brands/show/${brand.id}`)}
                />
            );
        }
    };

    return (
        <div>
            {renderBrandDetails()}
            {renderModal()}
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    brandsForSelect: selectBrandsForSelectInput([Number(ownProps.match.params.brandId)])(state),
    brand: selectBrand(ownProps.match.params.brandId)(state)
});

const mapDispatchToProps = dispatch => ({
    convertBrandToMapping: (brandId, parentId) => dispatch(convertToMapping(brandId, parentId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ConvertBrandPage);
