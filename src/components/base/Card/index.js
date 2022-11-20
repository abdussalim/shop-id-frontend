import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "./card.css";

const Card = ({ src, to, titleName, price, brand }) => {
  return (
    <Fragment>
      <div className="card card-shadow">
        <img
          crossorigin="anonymous"
          src={src}
          className="img-fluid categories-card"
          alt="..."
        />
        <div className="card-body shadow-md">
          <h5 className="card-title">
            <Link to={to}>{titleName}</Link>
          </h5>
          <p className="price">{price}</p>
          <p className="card-text">{brand}</p>
          <div className="d-flex justify-content-start text-warning start">
            <div className="bi-star-fill"></div>
            <div className="bi-star-fill"></div>
            <div className="bi-star-fill"></div>
            <div className="bi-star-fill"></div>
            <div className="bi-star-fill"></div>
            <p className="rating  mt-2 ms-1 text-dark">(10)</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
