import React, { useEffect, useState } from "react";
import "./profile.css";
import profile from "../../../assets/image/profileBig.png";
import vector from "../../../assets/image/seling-product/vector_2.png";
import avatar from "../../../assets/image/edit-avatar.png";
import packages from "../../../assets/image/seling-product/package.png";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"
import axios from "axios";
import { Fragment } from "react";

const Profile = ({
  titleOne,
  imgOne,
  children,
}) => {
  const { user } = useSelector((state) => state.auth);
  const [date_of_birth, setDate_of_birth] = useState("");
  useEffect(() => {
    datas();
  }, []);

  const datas = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      `${process.env.REACT_APP_API_BACKEND}/users/profile`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data.data.username);
    setDate_of_birth(response.data.data[0].date_of_birth);
  };
  console.log(user);
  return (
  <Fragment>
      <div className="profil-avatar mt-5">
        <table>
          <tbody>
            <td className=" align-middle float-start image">
              <img
                className="rounded-circle"
                width={75}
                height={70}
                src={date_of_birth ? date_of_birth : profile}
                alt="img"
              />
            </td>
            <td className="align-middle float-start ms-3 image-text">
              <p className="post mb-2">{user.name}</p>
              <p className=" edit-profil mt-2">
                <img src={avatar} className="me-2" alt="" />
                Change Profile
              </p>
            </td>
          </tbody>
        </table>
      </div>
      <div className="profil-select mt-5">
        <ul className="list-unstyled ps-0 pe-5 mt-2">
        
          <li className="mb-1 mt-3">
            <button className="btn btn-location">
              <img src={imgOne} alt="" />
            </button>
          <Link to="/productList">
              <button
              className="btn btn-toggle title-dashboard d-inline-flex align-items-center rounded border-0 collapsed text-secondary"
              data-bs-toggle="collapse"
              data-bs-target="#dashboard-collapse"
              aria-expanded="true"
            >
              <span className="text-profil">{titleOne}</span>
            </button>
          </Link>
            <img src={ vector} className="img-down ms-4" alt="" />
            <div className="collapse show" id="dashboard-collapse">
              {children}
            </div>
          </li>

        </ul>
      </div>
  </Fragment>
  
  );
};

Profile.defaultProps = {
  titleOne: "Products",
  imgOne: packages,
};
export default Profile;
