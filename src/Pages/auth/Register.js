import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import logo from "../../assets/image/shop-id.svg";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../configs/redux/actions/userAction";
const Register = ({ label, ...props }) => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "buyer",
  });

  if (auth === user) {
    alert("Upsss... You are wrong!");
  }
  console.log(user);
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
      role: "buyer",
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(signUp(user, navigate));
  };
  if (auth.id) return navigate("/login");

  return (
    <div>
      <div className="form-signin">
        <div className="header-login">
          <img className="mb-4 mt-4 ms-2" src={logo} alt="" />
          <h1 className="title-login mb-3">Please sign up with your account</h1>
          <ul className="nav nav-justified mb-4 mt-5" id="ex1" role="tablist">
            <li className="nav-item active" role="presentation">
              <button className="w-100 btn customer-on" type="submit">
                Customer
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <Link to="/registerSeller">
                <button className="w-100 btn seller-off" type="button">
                  Seller
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <form onSubmit={handleLogin}>
          <div className="form-floating">
            <input
              id="floatingInput"
              name="fullname"
              type="text"
              {...props}
              value={user.fullname}
              onChange={handleChange}
              placeholder="Name"
              className="form-control mb-4"
              required
            />
            <label htmlFor="floatingInput">Name</label>
          </div>
          <div className="form-floating">
            <input
              id="floatingEmail"
              name="email"
              type="email"
              {...props}
              value={user.email}
              className="form-control mb-4 "
              placeholder="Email Address"
              onChange={handleChange}
              required
            />
            <label htmlFor="floatingEmail">Email address</label>
          </div>
          <div className="form-floating">
            <input
              id="floatingPassword"
              name="password"
              type="password"
              {...props}
              className="form-control mt-4 "
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
              required
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button className="w-100 btn btn-sign mt-5" type="submit">
            Register
          </button>
          <label className="logSin mb-3 mt-4 justify-content-center" for="">
            Don't have a Shop.id account?
            <Link to="/login" className="page-login">
              Login
            </Link>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Register;
