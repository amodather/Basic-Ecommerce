import { useEffect, useState } from "react";
import Product from './Product'
function ProductList(){
    const apiURL = 'https://fakestoreapi.com/products'
    const [products , setproducts] = useState([]);
    const [categories , setCategories] = useState([]);
    const getProducts = () =>{
        fetch(apiURL)
            .then(res=>res.json())
            .then(products=> setproducts(products),
            )
    }
    const getCategories = ()=>{
        fetch(`${apiURL}/categories`)
            .then(res=>res.json())
            .then(cat=>setCategories(cat))
    }
    useEffect(() =>{
        getProducts();
        getCategories()
    }, [])
    const getproductInCategory = function(catName){
        fetch(`${apiURL}/category/${catName}`)
            .then(res=>res.json())
            .then(data=>setproducts(data))
    }
    return(
        <>
        <h2 className="text-center" style ={{padding: "30px"} }>Our Products</h2>
        <div className="btn-group ms-auto" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-primary" onClick={() => getProducts()}>All</button>
            {categories.map((cat) =>{
                return <button type="button" className="btn btn-primary"onClick={() => getproductInCategory(cat)}>{cat}</button>
            })}
        </div>
        <div className ="container">
            <div className="row">
                {products.map((product) => {
                    return <Product key={product.id} product ={product} showbtn={true}/>
                })}
            </div>
        </div>
        </>
    )
}
export default ProductList;