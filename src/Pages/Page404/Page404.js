import React, { Fragment } from 'react'
import './page.css'
import {  Link } from "react-router-dom";

function Page404() {
  return (
      <Fragment>
        <h1>There's some issues 🙂</h1>  
        <p className="zoom-area"><b>Shop id</b> Hope you understand our pain as our developer 😇 thank you visit again</p>  
        <section className="error-container">  
          <span><span>4</span></span>  
          <span>0</span>  
          <span><span>4</span></span>  
        </section>  
        <div className="link-container">
          <Link to="/home" className="more-link">
            Visit the home page
            </Link>   
        </div>
      </Fragment>
  )
}

export default Page404