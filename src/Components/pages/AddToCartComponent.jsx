import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART, FETCH_PRODUCT } from "../../Redux/Actions/Constaint";
import "../Css/addtocart.css";
const AddToCartComponent = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const productData = useSelector((state) => state.cartReducer);
    console.log("<!------- store data ------------!>", productData);

    const { fetchProduct } = productData;
    console.log(" find prodct is ", fetchProduct);

    useEffect(() => {
        dispatch({
            type: FETCH_PRODUCT,
            id,
        });
    }, [id]);

    const [quantity, setquantity] = useState(1);

    const decrementQty = () => {
        if (quantity > 1) {
            setquantity(quantity - 1);
        }
    };

    return (
        <>


            <div className="col-md-10">
                <div className="row">
                    <div className="col-6">
                        <div className="cart-img">
                            <img src={productData.fetchProduct.image} alt="" />
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="cart_detail">
                            <label style={{ color: "red" }}>Product Name</label>
                            <span>{productData.fetchProduct.product_name}</span>
                        </div>
                        <div className="cart_detail">
                            <label style={{ color: "green" }}>Product Describtion</label>
                            <span>{productData.fetchProduct.product_desc}</span>
                        </div>
                        <div className="cart_detail">
                            <label style={{ color: "grey" }}>Product Price</label>
                            <span>${productData.fetchProduct.price}</span>
                        </div>
                        <div className="qty-div">
                            <div className="dec_qty">
                                <span onClick={decrementQty}>-</span>
                            </div>

                            <div className="qty">
                                <span>{quantity}</span>
                            </div>

                            <div className="inc_qty">
                                <span onClick={() => setquantity(quantity + 1)}>+</span>
                            </div>

                            <div className="cart-btn">
                                <button
                                    className="btn btn-success"
                                    onClick={() => {
                                        dispatch({
                                            type: ADD_TO_CART,
                                            payload: { fetchProduct, quantity },
                                        });
                                    }}
                                >
                                    Add Cart
                                </button>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-toggle="modal"
                            data-target="#exampleModal"
                        >
                            Checkout
                        </button>

                        <div
                            className="modal fade"
                            id="exampleModal"
                            role="dialog"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">
                                            Invoice
                                        </h5>
                                        <button
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                        >
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div>

                                        </div>
                                        Product Name : - <span>{productData.fetchProduct.product_name}</span>
                                        <div>

                                        </div>
                                        Qyantity : - <span>{productData.qty}</span>
                                        < div>
                                            Total_Price :-  <span>{productData.totalPrice}</span>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-dismiss="modal"
                                        >
                                            Cencle
                                        </button>
                                        <button type="button" className="btn btn-primary">
                                            Buy
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default AddToCartComponent;
