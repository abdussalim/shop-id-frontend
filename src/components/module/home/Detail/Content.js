import axios from "axios";
import "./StyleDetail.css";
import React, { Fragment, useEffect, useState } from "react";
import { useParams, Link,useNavigate } from "react-router-dom";

import retanggle from "../../../../assets/image/detail products/Rectangle 21.png";
import shape from "../../../../assets/image/detail products/Shape (1).png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { addMycart } from "../../../../configs/redux/actions/bagAction";
import {FormatRupiah} from "@arismun/format-rupiah"

const Content = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
      axios
      .get(`${process.env.REACT_APP_API_BACKEND}/products/${id}`)
      .then( (response)=> {
        setProducts(response.data.data[0]);
      })
      .catch( (error)=> {
        console.log(error);
      });

  }, []);
  
  const {name, condition, price, thumbnail, description} = products;

  const handleAddBag = async (detailProductId, navigate) => {
    const data = {
      productId: detailProductId,
      qty: 1,
    };

    addMycart(data, navigate);
  };
    const [count, setCount] = useState(1);
    const handleSum = () => {
      setCount(count + 1);
    };
    const handleMin = () => {
      setCount(count - 1);
    };
    const [countSize, setCounts] = useState(1);
    const handleSums = () => {
      setCounts(countSize + 1);
    };
    const handleMins = () => {
      setCounts(countSize - 1);
    };

  return (
    <Fragment>
      {Object.keys(products).length === 0 ? (
        <div class="text-center">
          <FontAwesomeIcon icon={faSpinner} spin />
          &nbsp;Loading
        </div>
      ) : (
        <div className="container child-page">
          <div className="row mt-3">
            <div className="col-lg-5">
              <div className="galleries">

                <div class="row mb-3">
                <div className="container-galleries">
                  <img src={thumbnail} className="w-100" alt="" />
                </div>
                </div>

                <div class="row my-2">
                <div className="thumb justify-content-center">
                  <a
                    href="/"
                    className=""
                  >
                    <img src={thumbnail} alt=""/>
                  </a>
                  <a
                    href="/"
                    className=""
                  >
                    <img src={thumbnail} alt=""/>
                  </a>
                  <a
                    href="/"
                    className=""
                  >
                    <img src={thumbnail} alt=""/>
                  </a>
                  <a
                    href="/"
                    className=" "
                  >
                    <img src={thumbnail} alt=""/>
                  </a>
    
                </div>
                </div>
                
              </div>
            </div>
            <div className="col-lg-6 ms-3">
              <div className="title-product">
                <h3 className="product-title mt-3">{name}</h3>
                <div className="d-flex justify-content-start text-warning start mt-3">
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <p className="rating  mt-2 ms-1 text-dark">(10)</p>
                </div>
              </div>
              <div className="price-products mt-5">
                <p className="mb-3 title-price">Price</p>
                <h3 className="price-detail mt-3">
                  <FormatRupiah value={price} />
                </h3>
              </div>
              <div className="color-products mt-5 mb-2">
                <p className="title-color">Color</p>
                <div className="d-flex justify-content-start start mt-4">
                  <div className="d-flex  align-items-center btn-border">
                    <button className="btn btn-black"></button>
                  </div>
                  <button className="btn btn-red"></button>
                  <button className="btn btn-blue"></button>
                  <button className="btn btn-green"></button>
                </div>
              </div>
              <div className="size mt-5">
                <div className="d-flex justify-content-start ms-1 text-black">
                  <p className="title-size">Size</p>
                  <p className="title-jumlah ms-5 text-black">Jumlah</p>
                </div>
                <div className="d-flex justify-content-start mt-1 ms-2">
                  <div className="d-flex btn-min btn" onClick={handleMins}>
                    <img src={retanggle} className="m-auto icon" alt="" />
                  </div>
                    <p className="ms-2 me-2 mt-1 size">{ countSize}</p>
                  <div className="d-flex btn-max btn" onClick={handleSums}>
                    <img src={shape} className="m-auto icon" alt="" />
                  </div>
                  <div className="d-flex btn-min btn ms-5" onClick={handleMin}>
                    <img src={retanggle} className="m-auto icon" alt="" />
                  </div>
                  <p className="ms-2 me-2 mt-1 size">{count}</p>
                  <div className="d-flex btn-max btn" onClick={handleSum}>
                    <img src={shape} className="m-auto icon" alt="" />
                  </div>
                </div>
              </div>
              <div className="submit mt-5 mb-5">
                <div className="d-flex justify-content-start  ms-1">
                  <div className="col-lg-3 ">
                    <button className="btn btn-chat">Chat</button>
                  </div>
                  <div className="col-lg-4 ms-1">
                    <Link to="/Bag">
                      <button
                        className="btn btn-bag"
                        onClick={() => {
                          console.log(products.id);
                          handleAddBag(products.id, navigate);
                        }}
                      >
                        Add bag
                      </button>
                    </Link>
                  </div>
                  <div className="col-lg-5 ms-1">
                    <Link to="/Checkout">
                      <button className="btn btn-buy">Buy Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3 ms-1">
            <div className="col-lg-12">
              <h3 className="title-info">Product Information</h3>
              <h4 className="mt-4 text-sub">Condition</h4>
              <p className="text-success new">{condition}</p>
              <p className="text-sub">Description</p>
              <div className="text ms-1 text-secondary">
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Content;
