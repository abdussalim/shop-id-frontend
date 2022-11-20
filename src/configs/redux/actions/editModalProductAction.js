import axios from "axios";
import Swal from "sweetalert2";
import { ActionTypes } from "../constants/action-types";

const handleEdit = (id, data, saveThumbnail, setShow) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("stock", data.stock);
    formData.append("price", data.price);
    formData.append("thumbnail", saveThumbnail);
    formData.append("description", data.description);
    formData.append("categories_id", data.categories_id);
    formData.append("transactions_id", data.transactions_id);
    formData.append("brand", data.brand);
    formData.append("condition", data.condition);

    const result = await axios.put(
      `${process.env.REACT_APP_API_BACKEND}/products/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    Swal.fire("Updated!", "Your product has been updated.", "success");
    setShow(false);

    const products = result.data.data;

    dispatch({ type: ActionTypes.UPDATE_PRODUCTS, payload: products });
  } catch (error) {
    console.log(error);
    Swal.fire("Error!", "Your product has not been updated.", "error");
    setShow(false);
  }
};

export default handleEdit;
