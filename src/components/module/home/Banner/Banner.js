import React from "react"
import "../StyleHome.css"
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import slide1 from "../../../../assets/image/slide1.jpg";
import slide2 from "../../../../assets/image/slide2.jpg";
import slide3 from "../../../../assets/image/slide3.jpg";
import slide4 from "../../../../assets/image/slide4.jpg";

const Banner = ()=>{
return (
      <div className="container mt-5">
      <OwlCarousel className="owl-theme" loop nav={false} margin={30} autoWidth={false} items={1} autoplayTimeout={10000} autoplay={true}>
        <div class="item mt-5">
          <img src={slide1} className="slide-size shadow-lg"/>
          <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
              <h2 className="caption">Men's Black Edition</h2>
          </div>
        </div>
        <div class="item mt-5">
          <img src={slide2} className="slide-size"/>
          <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
              <h2 className="caption">This year Trends</h2>
          </div>
        </div>
        <div class="item mt-5">
          <img src={slide3} className="slide-size"/>
          <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
              <h2 className="caption">Women's Black Edition</h2>
          </div>
        </div>
        <div class="item mt-5">
          <img src={slide4} className="slide-size"/>
          <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
              <h2 className="caption text-white">Women's Sport Edition</h2>
          </div>
        </div>
      </OwlCarousel>
    </div>
)
};

export default Banner