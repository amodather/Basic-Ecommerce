import './Product.css'
import { Link } from "react-router-dom";
function Product(props){
    const{product, showbtn} = props;
    return(
        <>
        <div className="col-3">
            <div className="card" style={{width: "18rem"}}>
                <img src={product.image} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    {showbtn ? <Link to = {`/product/${product.id}`} className="btn btn-primary">Details</Link> : null}
                </div>
            </div>
        </div>
        </>
    )
}

export default Product;