import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { StarFill, ArrowLeft } from 'react-bootstrap-icons';
import { useDispatch } from "react-redux";
import { addtoCart } from "./rtk/slices/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function ProductDetails() {
    const params = useParams();
    const dispatch = useDispatch();
    const apiURL = 'https://fakestoreapi.com/products'
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`${apiURL}/${params.productId}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, [])
    const cart = useSelector(store => store.cart)
    const navigate = useNavigate();
    const navigateToCart = () => {
        navigate('/cart');
    };
    const navigateHome = () => {
        navigate('/');
    };
    const success = (product) => {
        Swal.fire({
            title: `${product.title} is added to cart successfully`,
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: 'black',
            confirmButtonText: 'Continue Shopping',
            cancelButtonText: "Go to Cart",
        }).then((result) => {
            if (result.isConfirmed) {
                navigateHome();
            }
            else navigateToCart();
        })
    }
    const alertSuccess = (product) => {
        if (!cart.find((item) => item.id === product.id)) success(product);
    }
    if (!loading) return (
        <div className="container text-left" style={{ marginTop: "100px" }} key={product.id}>
            <div className="row" >
                <div className="col" style={{ height: "400px" }}>
                    <img src={product.image} className="card-img-top" alt={product.title} style={{ height: "100%", width: "100%", objectFit: "contain" }}></img>
                </div>
                <div className="col">
                    <h6 className="text-uppercase text-black-50">{product.category}</h6>
                    <h2>{product.title}</h2>
                    <p className="lead">Rating {product.rating && product.rating.rate}<StarFill className="text-center" /></p>
                    <h3 className="display-6 fw-bold">{product.price}$</h3>
                    <p className="">{product.description}</p>
                    <button className="btn btn-outline-dark me-2">Buy it Now</button>
                    <button className="btn btn-dark" onClick={() => { dispatch(addtoCart(product)); alertSuccess(product) }}>Add to Cart</button>
                    <br></br>
                    <Link type="button" className="mt-3" to="/" style={{ textDecoration: "none", fontSize: "15px" }}><ArrowLeft /> Continue Shopping</Link>
                </div>
            </div>
        </div>
    )
    else return (
        <div className="container" style={{ marginTop: "100px" }}>
            <div className="row" >
                <div className="col">
                    <Skeleton height={"400px"} />
                </div>
                <div className="col d-flex flex-column justify-content-between">
                    <Skeleton width={"25%"}/>
                    <Skeleton width={"50%"}/>
                    <Skeleton width={"25%"}/>
                    <Skeleton width={"25%"}/>
                    <Skeleton/>
                    <Skeleton/>
                    <Skeleton/>
                    <Skeleton width={"50%"}/>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;