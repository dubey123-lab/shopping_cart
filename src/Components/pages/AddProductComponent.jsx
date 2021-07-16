import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addProduct } from "../../Redux/Actions/Action";
import { Redirect } from "react-router-dom";

const AddProductComponent = (props) => {
    console.log("<!--- props data in add product ----!>", props);
    const { addProduct } = props;
    const [productData, setproductData] = useState({
        product_name: "",
        product_desc: "",
        price: "",
    });


    const handleChange = async (e) => {
        e.preventDefault();

        const { name, value } = e.target;
        if (name === "fileInput") {
            const value = e.target.files[0];
            const base64 = await convertBase64(value);
            console.log("!-----Image Converted base 64 -----------!", base64);
            const imageObj = { ...productData, image: base64 };
            setproductData(imageObj);
        } else {
            setproductData({ ...productData, [name]: value });
        }
    };

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    useEffect(() => {
        console.log(" !!! Product Data !!!", productData);
    }, [productData]);

    if (props.productData.cartReducer.status) {
        return <Redirect exact to="/home_layout" />
    }

    return (
        <>
            <div style={{ paddingTop: "30px" }}>
                <form>
                    <div className="form-group input-type-text">
                        <input
                            type="text"
                            className="form-control"
                            name="product_name"
                            placeholder="Enter Product Name"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group  input-type-text">
                        <input
                            type="text"
                            className="form-control"
                            name="product_desc"
                            placeholder="Enter Product Description"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group  input-type-text">
                        <input
                            type="text"
                            className="form-control"
                            name="price"
                            placeholder="Enter Product Price"
                            onChange={handleChange}
                        />
                    </div>

                    <div
                        className="form-group"
                        style={{ width: "250px", marginLeft: "580px" }}
                    >
                        <input
                            type="file"
                            name="fileInput"
                            onChange={handleChange}
                            className="form-control"
                        />
                        <img src={productData.image} height="200px" />
                    </div>

                    <button
                        type="button"
                        onClick={() => {
                            addProduct(productData);
                        }}
                        className="btn btn-primary"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    productData: state,
});

const mapDispatchToProps = (dispatch) => ({
    addProduct: (productData) => dispatch(addProduct(productData)),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddProductComponent);
