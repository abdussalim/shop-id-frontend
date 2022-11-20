import '../StyleHome.css'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import hiclipart1 from "../../../../assets/image/category1.svg";
import hiclipart2 from "../../../../assets/image/category2.svg";
import hiclipart3 from "../../../../assets/image/category3.svg";
import hiclipart4 from "../../../../assets/image/category4.svg";
import hiclipart5 from "../../../../assets/image/category5.svg";
import hiclipart6 from "../../../../assets/image/category6.svg";
import hiclipart7 from "../../../../assets/image/category7.svg";
import hiclipart8 from "../../../../assets/image/category8.svg";
import hiclipart9 from "../../../../assets/image/category9.svg";
import hiclipart10 from "../../../../assets/image/category10.svg";
// import { object } from 'prop-types';



const Category = () => {
  return (
    // <div>
    //   <div className="container">
    //     <div className=" py-5" id="custom-cards">
    //       <h2 className="title mt-2">Category</h2>
    //       <p className="sub-category">What are you currently looking for</p>
    //       <div className="row row-cols-2 row-cols-lg-5 align-items-center g-5">
    //         <div className="col categories">
    //           <div className="card-category-empty card-1 text-center d-flex flex-colum">
    //             <div className="card-body m-2">
    //               <img src={hiclipart1} alt="Bootstrap" className="img-fluid" />
    //               <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
    //                 <a href="/category/{category[0].id}" >
    //                 <p className="font-category"></p>
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col categories">
    //           <div className="card-category-empty card-2 text-center d-flex flex-colum">
    //             <div className="card-body m-2">
    //               <img src={hiclipart2} alt="Bootstrap" className="img-fluid" />
    //               <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
    //                 <p className="font-category"></p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col categories">
    //           <div className="card-category-empty card-3 text-center d-flex flex-colum">
    //             <div className="card-body m-2">
    //               <img src={hiclipart3} alt="Bootstrap" className="img-fluid" />
    //               <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
    //                 <p className="font-category"></p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col categories">
    //           <div className="card-category-empty card-4 text-center d-flex flex-colum">
    //             <div className="card-body m-2">
    //               <img src={hiclipart4} alt="Bootstrap" className="img-fluid" />
    //               <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
    //                 <p className="font-category"></p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col categories">
    //           <div className="card-category-empty card-5 text-center d-flex flex-colum">
    //             <div className="card-body m-2">
    //               <img src={hiclipart5} alt="Bootstrap" className="img-fluid" />
    //               <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
    //                 <p className="font-category"></p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="container mt-5">
    <OwlCarousel className="owl-theme" loop margin={30} autoWidth={false} items={3} autoplayTimeout={3000} autoplay={true}>
      <div class="item mt-5">
        <img src={hiclipart1} className="slide-size"/>
      </div>
      <div class="item mt-5">
        <img src={hiclipart2} className="slide-size"/>
      </div>
      <div class="item mt-5">
        <img src={hiclipart3} className="slide-size"/>
      </div>
      <div class="item mt-5">
        <img src={hiclipart4} className="slide-size"/>
      </div>
      <div class="item mt-5">
        <img src={hiclipart5} className="slide-size"/>
      </div>
      <div class="item mt-5">
        <img src={hiclipart6} className="slide-size"/>
      </div>
      <div class="item mt-5">
        <img src={hiclipart7} className="slide-size"/>
      </div>
      <div class="item mt-5">
        <img src={hiclipart8} className="slide-size"/>
      </div>
      <div class="item mt-5">
        <img src={hiclipart9} className="slide-size"/>
      </div>
      <div class="item mt-5">
        <img src={hiclipart10} className="slide-size"/>
      </div>
    </OwlCarousel>
    </div>
  );
}

export default Category