import './style.css'
import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from '../../assets/image/shop-id.svg'
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../configs/redux/actions/userAction";

  const Login = () => {
      const navigate = useNavigate();
      const dispatch = useDispatch();
      const { isLoading } = useSelector((state) => state.auth);
      const [formLogin, setFormLogin] = useState({
        email: "",
        password: "",
      });

      const handleChange = (e) => {
        setFormLogin({
          ...formLogin,
          [e.target.name]: e.target.value,
        });
  };
  console.log(formLogin.email)
      const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginUser(formLogin, navigate));
      };
  return (
    <div>
      <div className="form-signin">
        <div className="header-login">
          <img className="mb-4 mt-4 ms-2" src={logo} alt="" />
          <h1 className="mb-3 title-login">Please login with your account</h1>
        </div>
        <form onSubmit={handleLogin}>
          <div className="form-floating">
            <input
              type="email"
              name="email"
              className="form-control mb-4"
              placeholder="email"
              value={formLogin.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              name="password"
              className="form-control mt-4"
              placeholder="Password"
              value={formLogin.password}
              onChange={handleChange}
              required
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="mb-4 mt-4 float-end">
            <label>Forgot password?</label>
          </div>
          {/* <button>{isLoading ? "loading.." : "Login"}</button> */}
          <button className="w-100 btn btn-sign">
            {isLoading ? "loading.." : "Login"}
          </button>
          <label className="register mb-3 mt-4 me-auto" htmlFor="register">
            Don't have a Tokopedia account?
            <Link className="page-register me-auto" to="/register">
              Register
            </Link>
          </label>
        </form>
      </div>
    </div>
  );
  }

  export default Login