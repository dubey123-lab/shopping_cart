import React, { useEffect } from "react";
import "../Css/navbar.css";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import {
    showProduct,
    removeProduct,

} from "../../Redux/Actions/Action";

const HomeComponent = (props) => {
    console.log("Props Data is", props)
    const { showProduct, removeProduct } = props;
    useEffect(() => {
        const loadData = async () => {
            await showProduct();
        };
        loadData();
    }, []);

    const product = props?.productData?.cartReducer?.product || [];

    return (
        <>
            <div>
                <h3>Product List</h3>

                <div className="card-div">
                    {product.map((productValue, index) => {
                        return (
                            <div className="card" style={{ width: "18rem" }} key={index}>
                                <NavLink exact to={`/add_cart/${productValue.id}`}>
                                    {" "}
                                    <img
                                        className="card-img-top"
                                        src={productValue.image}
                                        alt="Card image cap"

                                    ></img>
                                </NavLink>
                                <div className="card-body">
                                    <span style={{ color: "red" }}>Product Name</span>{" "}
                                    <p className="card-text">{productValue.product_name}</p>
                                    <span style={{ color: "blue" }}> Product Price</span>{" "}
                                    <p> {productValue.price}</p>
                                </div>
                                <div className="cards-btn">

                                    <button type="button" className="btn btn-secondary btn-class">
                                        Edit
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-danger btn-class"
                                        onClick={() => {
                                            removeProduct(productValue.id);
                                        }}
                                    >
                                        {" "}
                                        Remove
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    productData: state,
});

const mapDispatchToProps = (dispatch) => {
    return {
        showProduct: () => dispatch(showProduct()),
        removeProduct: (product_id) => dispatch(removeProduct(product_id)),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
