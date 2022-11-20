import React from 'react'
import Content from '../components/module/home/Detail/Content';
import Navbar from "../components/module/home/navbar/Navbar";
import Footer from "../components/module/home/footer/Footer";
import Product from '../components/module/home/NewProduct/NewProduct';
import ProductReview from '../components/module/home/Detail/ProductReview';
import "./pagesDetailProduct.css"

const DetailProduct = () => {
  return (
    <div>
      <Navbar />
      <Content />
        <ProductReview/>
        <Product title="You can also like this" subtitle="You’ve never seen it before!"/>
      <Footer/>
    </div>
  );
}

export default DetailProduct