import "./pagesHome.css"
import Navbar from "../components/module/home/navbar/Navbar";
import Footer from "../components/module/home/footer/Footer";
import Popular from "../components/module/home/Popular/Popular";
import Category from "../components/module/home/Category/Category";
import NewProduct from "../components/module/home/NewProduct/NewProduct";
import Banner from "../components/module/home/Banner/Banner"

const Home = () => {

  return (
    <div>
      <Navbar />
      <Banner />
      <Category />
      <NewProduct/>
      <Popular />
      <Footer />
    </div>
  );
};

export default Home;
