import React, { useEffect} from 'react'
import "../StyleHome.css";
// import product from "../../../../assets/image/product.png";
import axios from "axios";
import Card from "../../../base/Card";
import { useDispatch, useSelector } from "react-redux";
import { FormatRupiah } from "@arismun/format-rupiah";
import { setProducts } from "../../../../configs/redux/actions/productsActions";

function Popular() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get(`${process.env.REACT_APP_API_BACKEND}/products`)
      .catch((err) => {
        console.log(err);
      });
    dispatch(setProducts(response.data.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="products">
            <h3 className="products mt-5 mb-2 title">Popular</h3>
            <p>Find clothes that are trending recently</p>
          </div>
          <div className="row row-cols-1 row-cols-sm-2  row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3">
            {products.map((item) => (
              <div className="col" key={item.id}>
                <Card
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
    </div>
  );
}

export default Popular