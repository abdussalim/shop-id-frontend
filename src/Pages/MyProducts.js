import axios from "axios"
import React,{Fragment, useEffect,useState, useCallback} from "react"
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Page404/page.css";
import Card from "../components/base/Card";
import Footer from "../components/base/Footer/Footer";
import Navbar from "../components/module/home/navbar/Navbar";
import { FormatRupiah } from "@arismun/format-rupiah";

const MyProducts = () => {

const [searchParams, setSearchParams] = useSearchParams();
const [search, setSearch] = useState("");
const [sort, setSort] = useState("");
const [products, setProducts] = useState([]);

const handleSort = (e) => {
  setSort(e.currentTarget.value);
  getProducts();
    setSearchParams({
      search,
      sort,
    });
};
console.log(search);
const handleSearch = (e) => {
    getProducts();
    setSearchParams({
      search,
      sort,
    });
};

const getProducts = useCallback( async() => {
  const search =
    searchParams.get("search") === null ? "" : searchParams.get("search");
  axios
    .get(
      `${process.env.REACT_APP_API_BACKEND}/products?search=${search}&sort=${sort}`
    )
    .then((response) => {
      console.log(response.data.data);
      setProducts(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    });
},[searchParams,sort],);

useEffect(() => {
  getProducts();
  setSearch(searchParams.get("search"));
  searchParams.get("search");
  searchParams.get("sort");
}, [searchParams,sort]);

return (
      <Fragment>
        {products.length > 0 ? (
          <div className="h-100">
          <Navbar />
          <div className="container">
          <div className="row">
            <div className="products">
              <h3 className="title">New</h3>
              <p className="mt-5">My Products List</p>
            
              <form onSubmit={handleSearch}>
                <select className="form-select form-select-lg"  onChange={handleSort}>
                  <option value="ASC">Sort Ascending</option>
                  <option value="DESC">Sort Descending</option>
                </select>
              </form>

            </div>

              <div className="row row-cols-1 row-cols-sm-2  row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3">
                <Fragment>
                  {products.map(item => (
                    <div className="col" key={item.id}>
                      <Card
                        src={item.thumbnail}
                        to={`/detail/${item.id}`}
                        titleName={item.name}
                        brand={item.brand}
                        price={<FormatRupiah value={item.price} />}
                      />
                    </div>
                    ))}
                <Footer/>
            </Fragment>
                    </div>       
                </div>
              </div>   
            </div>
          ) : (
            <div className="h-100">
            <Navbar />
            <div className="container">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
              <div className="row">
                <Fragment>
                  <h1>The <b><u>ITEMS</u></b> that you looking for is <b><i>Not Found</i></b> 🙂</h1>  
                  <section className="error-container">  
                    <span><span>4</span></span>  
                    <span>0</span>  
                    <span><span>4</span></span>  
                  </section>  
                      <div className="link-container mb-5">
                          <Link to="/home" className="more-link">
                              Visit the home page
                          </Link>   
                      </div>
                  <Footer />
                </Fragment>
              </div>
            </div>
          </div>
          )
        }

  </Fragment>
);
}

export default MyProducts