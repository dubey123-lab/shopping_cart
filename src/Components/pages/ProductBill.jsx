import React from 'react'
import { connect } from 'react-redux';

const ProductBill = (props) => {

    return (
        <>
            <div>

            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    productData: state,
});

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductBill);
