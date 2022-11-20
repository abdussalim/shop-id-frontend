import axios from "axios";
import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const updateProduct = (product) => {
  return {
    type: ActionTypes.UPDATE_PRODUCTS,
    payload: product,
  };
};

export const getDetail = (id) => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_PRODUCT_PENDING });
  const data = await axios
    .get(`${process.env.REACT_APP_API_BACKEND}/products/${id}`)
    .catch((err) => {
      console.log(err);
    });
  console.log(data);
  dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: data });
};

export const createProduct = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.ADD_PRODUCTS_PENDING });
    const token = localStorage.getItem("token");
    const createdAt = await axios.post(
      `${process.env.REACT_APP_API_BACKEND}/products`,
      data,
      {
        "content-type": "multipart/form-data",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    navigate("/productlist");
    dispatch({ type: ActionTypes.CREATE_PRODUCTS, payload: createdAt });
  } catch (error) {
    dispatch({ type: ActionTypes.GET_PRODUCT_ERROR, payload: error.response });
  }
};

export const deleteProduct = (product) => {
  return {
    type: ActionTypes.DELETE_PRODUCTS,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
