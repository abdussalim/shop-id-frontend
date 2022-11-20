import axios from "axios";
import swal from "sweetalert2";
import { useSearchParams } from "react-router-dom";
import bell from "../../../assets/image/bell.png";
import mail from "../../../assets/image/mail.png";
import React, { useState, useEffect } from "react";
import cart from "../../../assets/image/search.svg";
import { Link, useNavigate } from "react-router-dom";
import Profil from "../../../assets/image/profil.png";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../../configs/redux/actions/userAction";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "./navbarbase.css";

const NavbarBase = ({ onChange, onClick, src, srcCart }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  // const data  = useSelector((state) => state.bag);
  console.log(user);

  const handleSignOut = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    dispatch(signOut());
    swal.fire({
      icon: "success",
      title: `Goodbye Dear!`,
    });
  };

  const [search, setSearch] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = () => {
    navigate({
      pathname: "/myProducts",
      search: `?search=${search}&sort=${searchParams.get("sort")}`,
    });
  };

  useEffect(() => {
    data();
  }, []);


  const data = async () => {
    const token = localStorage.getItem("token");

    await axios.get(
      `${process.env.REACT_APP_API_BACKEND}/users/profile`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

  };
  return (
    <nav className="navbar navbar-expand-md navbar-light fixed-top mb-4">
      <div className="container">
        <Link to="/home">
          <img src={src} alt="" className="" />
        </Link>
        <div className="collapse navbar-collapse ms-auto " id="navbarCollapse">
          <ul className="navbar-nav mb-2 mb-md-0 w-50 me-auto">
            <div className="input-group rounded nav-search">
              <input
                type="search"
                className="form-control search-input"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
                name="search"
                autocomplete="off"
                onChange={(e) => setSearch(e.target.value)}
              />
              <span
                className="input-group-text search bg-light"
                id="search-addon"
              >
                <i className="bi bi-search" onClick={handleSearch}></i>
              </span>
            </div>
            
          </ul>
          {user?.id ? (
            <>
              <form className="ms-4">
                <Link to="/Checkout">
                  <button
                    className="btn btn-link position-relative"
                    style={{
                      width: 40,
                      height: 40,
                    }}
                  >
                    <img src={cart} alt="" className="icon-cart mb-2" />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {/* {data.cart.length} */}
                    </span>
                  </button>
                </Link>
                <img src={bell} alt="" className="icon-cart ms-3 mb-2" />
                <img src={mail} alt="" className="icon-cart ms-3 mb-2" />
              </form>
              <DropdownButton
                align="end"
                title={
                  <img
                    src={Profil} // Set Date_of_Birth
                    alt=""
                    width={35}
                    height={35}
                    className="rounded-circle"
                  />
                }
                variant="link"
                id="dropdown-menu-align-end"
              >
                <Dropdown.Item variant="link">
                  {" "}
                  <p><b>{user.fullname}</b></p>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item variant="secondary" eventKey="4">
                  {" "}
                  <Link to="/productList"> My Products</Link>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4" variant="danger">
                  <Link to="/login" onClick={() => handleSignOut()}>
                    Logout
                  </Link>
                </Dropdown.Item>
              </DropdownButton>

            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn button-login " type="button">
                  {" "}
                  login
                </button>
              </Link>
              <Link to="/register">
                <button
                  type="button"
                  className="btn btn-outline-secondary button-signup 3 mb-2"
                >
                  {" "}
                  sign up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarBase;
