import React, { useEffect } from "react";
import "../StyleHome.css";
import axios from "axios";
import Card from "../../../base/Card";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../../../configs/redux/actions/productsActions";
import { FormatRupiah } from "@arismun/format-rupiah";

const NewProduct = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get(`${process.env.REACT_APP_API_BACKEND}/products`)
      .catch((err) => {
        console.log(err);
      });
    dispatch(setProducts(response.data.data));
    console.log(products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <div className="row-sm row-md row-lg">
        <div className="products">
          <h3 className="title">New</h3>
          <p>What are you currently looking for</p>
        </div>
        <div className="row row-cols-1 row-cols-sm-2  row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3">
          {products.map((item) => (
            <div className="col" key={item.id}>
              <Card
                crossorigin="anonymous"
                src={item.thumbnail}
                to={`/detail/${item.id}`}
                titleName={item.name}
                price={<FormatRupiah value={item.price} />}
                brand={item.brand}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
