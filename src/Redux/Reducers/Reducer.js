import {
  ADD_PRODUCT,
  ADD_TO_CART,
  FETCH_PRODUCT,
  REMOVE_PRODUCT,
  SHOW_PRODUCT,
} from "../Actions/Constaint";

const initialState = {
  product: [],
  cart: [],
  fetchProduct: {},
  qty: 0,
  totalPrice: 0,
  status: false,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };

    case ADD_PRODUCT:
      return {
        ...state,
        product: [...state.product, action.payload],
        status: true,
      };

    case REMOVE_PRODUCT:
      return {
        ...state,
        product: state.product.filter((product) => {
          return product.id !== action.payload;
        }),
      };

    case FETCH_PRODUCT:
      console.log("id is", action.id);
      return {
        ...state,
        fetchProduct: state.product.find(
          (item) => item.id === parseInt(action.id)
        ),
      };

    case ADD_TO_CART:
      console.log(" logged here ", action.payload);

      let addedItem = state.cart.find(
        (item) => item.id === action.payload.fetchProduct.id
      );

      const finalPrice =
        state.totalPrice +
        action.payload.fetchProduct.price * action.payload.quantity;

      const totalQuantity = state.qty + action.payload.quantity;
      console.log("Total Quantity", totalQuantity);

      if (addedItem) {
        return state;
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload.fetchProduct],
          totalPrice: finalPrice,
          qty: totalQuantity,
        };
      }

    // if (addedItem) {
    //   return state;
    // } else {
    //   return {
    //     ...state,
    //     cart: [...state.cart, action.payload],
    //   };
    // }

    default:
      return state;
  }
}
