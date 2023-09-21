import './Product.css'
import { Link } from "react-router-dom";
function Product(props){
    const{product} = props;
    return(
        <>
        <div className="col-3">
            <div className="card rounded-0" style={{width: "18rem" , marginBottom: "1rem"}}>
                <img src={product.image} className="card-img-top" alt="..."></img>
                <div className="card-body d-flex flex-column" style={{height: "160px"}}>
                    <h5 className="card-title">{product.title.length > 50 ? product.title.slice(0,40) + "..." :product.title}</h5>
                    <h4 className="card-title lead fw-bold">{product.price}$</h4>
                    <Link to = {`/product/${product.id}`} className="btn btn-dark rounded-1 mt-auto" style={{width:"40%"}}>Buy</Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Product;