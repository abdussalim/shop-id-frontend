import axios from "axios"
import { ActionTypes } from "../constants/action-types";
export const getCart =  () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token')
    dispatch({type: ActionTypes.GET_MYCART_PENDING})
    const myCart = await axios.get(
      `${process.env.REACT_APP_API_BACKEND}/cart`,
      {
        "content-type": "multipart/form-data",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const cart = myCart.data.data
    dispatch({type: ActionTypes.GET_MYCART_SUCCESS, payload: {cart}})
  } catch (error) {
    console.log(error);
  }
}

export const addMycart = async (data, navigate) => {
  try {
    const token = localStorage.getItem('token')
    // dispatch({type: ActionTypes.GET_MYCART_PENDING})
    await axios.post(`${process.env.REACT_APP_API_BACKEND}/cart`, data, {
      "content-type": "multipart/form-data",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    navigate("/Bag");
    // dispatch({type: ActionTypes.GET_MYCART, payload: {cart}})
  } catch (error) {
    console.log(error);
  }
}