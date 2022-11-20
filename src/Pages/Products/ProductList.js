import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

import "../../components/module/Profile/profile.css";
import Profile from "../../components/module/Profile/Profile";
import Navbar from "../../components/module/home/navbar/Navbar";
import Footer from "../../components/module/home/footer/Footer";
import EditModalProduct from "../../components/module/Crud/EditModalProduct";
import CreateModalProduct from "../../components/module/Crud/CreateModalProduct";

const ProductList = () => {
  const [products, getProducts] = useState([]);
  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const gettingData = await axios.get(
        `${process.env.REACT_APP_API_BACKEND}/products`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      getProducts(gettingData.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const deleteCategory = async (id) => {
    Swal.fire({
      title: "Are you sure to delete this product?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4fd15a",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios
          .delete(`${process.env.REACT_APP_API_BACKEND}/products/${id}`, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then(() => {
            Swal.fire("Deleted!", "Your message has been deleted.", "success");
            setTimeout(window.location.reload.bind(window.location), 2000);
          })
          .catch(() => {
            Swal.fire("Error!", "Your message has not been deleted.", "error");
            setTimeout(window.location.reload.bind(window.location), 2000);
          });
      }
    });
  };

  return (
    <Fragment>
      <Navbar />
      <div className="container mt-5">
        <div className="row row-cols-xs-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-1 g-3">
          <div className="card col-sm col-md col-lg col-xl col-lg-4 select-profil">
            <Profile>
              <ul className="btn-toggle-nav list-unstyled fw-normal small ">
                <li>
                  <Link
                    to="/productlist"
                    className="link-dark d-inline-flex text-decoration-none rounded ms-3 mt-2"
                  >
                    My Products
                  </Link>
                </li>
              </ul>
            </Profile>
          </div>
          <div className="card col-sm col-md col-lg-8 profil-form mt-3">
            <h4 className="mb-3">My Products</h4>
            <div className="d-flex flex-row bd-highlight mb-3">
              <div className="p-2 bd-highlight text-success">All Items</div>
              <div className="p-2 bd-highlight text-success d-none">
                Sould Out
              </div>
              <div className="p-2 bd-highlight text-success d-none">
                Archived
              </div>
              <hr />
            </div>
            <div className="input-group rounded nav-search w-25 mt-3 mb-5">
              <input
                type="search"
                className="form-control search-input"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
                autocomplete="off"
                name="search"
              />
              <span
                className="input-group-text search bg-light"
                id="search-addon"
              >
                <i className="bi bi-search"></i>
              </span>
            </div>

            <CreateModalProduct className="mt-5" />

            <div className="table-responsive-sm table-responsive-md table-responsive-lg-5 mt-4">
              <table className="table">
                <thead className="table-light text-center">
                  <tr>
                    <th>PRODUCTS</th>
                    <th>PRICE</th>
                    <th>STOCK</th>
                    <th>BRAND</th>
                    <th>THUMBNAIL</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {products.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.stock}</td>
                      <td>{item.brand}</td>
                      <td>
                        <img
                          src={item.thumbnail}
                          alt=""
                          width={50}
                          height={50}
                        />
                      </td>
                      <td>
                        <EditModalProduct
                          id={item.id}
                          name={item.name}
                          stock={item.stock}
                          price={item.price}
                          description={item.description}
                          categories_id={item.categories_id}
                          transactions_id={item.transactions_id}
                          brand={item.brand}
                          condition={item.condition}
                        />
                        <button
                          onClick={() => deleteCategory(item.id)}
                          className="btn btn-danger mt-1"
                        >
                          <span>
                            <i class="bi bi-trash"></i>
                          </span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default ProductList;
