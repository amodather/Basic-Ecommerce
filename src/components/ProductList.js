import { useEffect, useState } from "react";
import Product from './Product'
import { Search } from "react-bootstrap-icons";
import './Product.css'
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function ProductList() {
    const apiURL = 'https://fakestoreapi.com/products'
    const [products, setproducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchData, setSearchData] = useState([]);
    const [activeSection, setActiveSection] = useState("all");
    const getProducts = () => {
        fetch(apiURL)
            .then(res => res.json())
            .then(products => setproducts(products),
            )
    }
    const getCategories = () => {
        fetch(`${apiURL}/categories`)
            .then(res => res.json())
            .then(cat => setCategories(cat))
    }
    useEffect(() => {
        getProducts();
        getCategories()
    }, [])
    const getproductInCategory = function (catName) {
        fetch(`${apiURL}/category/${catName}`)
            .then(res => res.json())
            .then(data => setproducts(data))
    }
    const getSearchData = (event) => {
        const search = event.target.value;
        setSearchData(products.filter((product) => {
            return search === '' ?
                null : product.title.toLowerCase().includes(search.toLowerCase());
        }))
    }
    return (
        <>
            <h2 className="text-center" style={{ padding: "30px" }}>Our Products</h2>
            <div className="container d-flex justify-content-between">
                <div className="d-flex justify-content-between" style={{ marginBottom: "30px", width: "45%" }}>
                    <button className={activeSection === "all" ? "btn btn-outline-dark rounded-0 active" : "btn btn-outline-dark rounded-0"}
                        onClick={() => { getProducts(); setActiveSection("all") }}>All</button>
                    {categories.map((cat) => {
                        return <button className={activeSection === cat ? "btn btn-outline-dark rounded-0 active" : "btn btn-outline-dark rounded-0"}
                            onClick={() => { getproductInCategory(cat); setActiveSection(cat) }}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</button>
                    })}
                </div>
                <div className="mx-3" style={{ width: "35%", position: "relative" }}>
                    <form className="d-flex search-cont">
                        <input className="search-bar " type="search" placeholder="Search for products" aria-label="Search" onChange={(e) => { getSearchData(e) }} />
                        <Search className="search-icon" />
                    </form>
                    {searchData.length > 0 ? <div className="search-list">
                        {searchData.map((product) => {
                            return <Link className="search-result" to={`/product/${product.id}`}>{product.title}</Link>
                        })}
                    </div> : null}
                </div>
            </div>
            {products.length > 0 ? <div className="container">
                <div className="row">
                    {products.map((product) => {
                        return <Product key={product.id} product={product}/>
                    })}
                </div>
            </div> :
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Skeleton height={350} />
                    </div>
                    <div className="col-md-3">
                        <Skeleton height={350} />
                    </div>
                    <div className="col-md-3">
                        <Skeleton height={350} />
                    </div>
                    <div className="col-md-3">
                        <Skeleton height={350} />
                    </div>
                </div>
            </div>
            }
        </>
    )
}
export default ProductList;