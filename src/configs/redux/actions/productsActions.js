import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

// export const getProduct =
//   ({ page, limit, search, sort }) =>
//   async (dispatch) => {
//     try {
//       const navigate = useNavigate();
//       dispatch({ type: ActionTypes.GET_PRODUCT_PENDING });
//       const { data } = await axios({
//         url: `/products/filter?page=${page}&limit=${limit}${
//           search ? "&search=" + search : ""
//         }${sort ? "&sort=" + sort : ""}`,
//         method: "GET",
//       });
//       dispatch({
//         type: ActionTypes.GET_PRODUCT_SUCCESS,
//         payload: { data: data.data, pagination: data.pagination },
//       });
//       navigate("/productList");
//     } catch (error) {
//       dispatch({
//         type: ActionTypes.GET_PRODUCT_ERROR,
//         payload: error.response,
//       });
//     }
//   };

// export const setDataProduct = (page, type) => (dispatch) => {
//   axios
//     .get(
//       `${process.env.REACT_APP_API_BACKEND}/products?page=${page}&type=${type}`
//     )
//     .then((result) => {
//       const response = result.data.data;
//       dispatch({ type: ActionTypes.SET_PRODUCTS, payload: response });
//       const pagination = result.data.pagination;
//       dispatch({ type: ActionTypes.UPDATE_PAGE, payload: pagination });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

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
