import axios from "axios";
import { ADD_PRODUCT, REMOVE_PRODUCT, SHOW_PRODUCT } from "./Constaint";

export const showProduct = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3000/product")
      .then((res) => {
        const productResponceData = res.data;
        dispatch({
          type: SHOW_PRODUCT,
          payload: productResponceData,
        });
      })
      .catch((error) => {
        console.log("Error is", error);
      });
  };
};

export const addProduct = (productValue) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3000/product", productValue)
      .then((res) => {
        const productData = res.data;
        console.log("<!-----  Product Data is --------!", res);

        dispatch({
          type: ADD_PRODUCT,
          payload: productData,
        });
      })
      .catch((error) => {
        console.log("Error in API Call", error);
      });
  };
};

export const removeProduct = (product_id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:3000/product/${product_id}`)
      .then((res) => {
        console.log(res);
        dispatch({
          type: REMOVE_PRODUCT,
          payload: product_id,
        });
      })
      .catch((error) => {
        console.log("Error in delete API ", error);
      });
  };
};

// export const addToCart = (productData) => {
//   return (dispatch) => {
//     console.log("selected item is", productData);
//     return dispatch({
//       type: ADD_TO_CART,
//       payload: productData,
//     });
//   };
// };
