import axios from "axios";
import Swal from "sweetalert2";
import { ActionTypes } from "../constants/action-types";

const handleCreate = (data, saveThumbnail, setShow) => async (dispatch) => {
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

    const result = await axios.post(
      `${process.env.REACT_APP_API_BACKEND}/products`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    Swal.fire("Added!", "Your product has been created.", "success");
    setShow(false);

    const products = result.data.data;

    dispatch({ type: ActionTypes.CREATE_PRODUCTS, payload: products });
  } catch (error) {
    Swal.fire("Error!", "Your product has not been created.", "error");
    setShow(false);
  }
};

export default handleCreate;
