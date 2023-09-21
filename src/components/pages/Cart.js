import { useSelector } from "react-redux/es/hooks/useSelector";
import { Plus, Dash } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { increaseQt, decreaseQt, deletefromCart, clearCart } from "../rtk/slices/cartSlice";
import { useEffect, useState } from "react";
import { X, Trash, ArrowLeft } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import '../Product.css'

function Cart() {
    const cart = useSelector(store => store.cart)
    const dispatch = useDispatch();
    const totlitemPrice = cart.reduce((acc, product) => {
        acc = acc + product.price * product.quantity
        return acc
    }, 0)
    const [totalPrice, settotalPrice] = useState(0);
    const stshipprice = 10;
    const fastshipprice = 5;
    const handleChange = event => {
        if (event.target.checked) {
            settotalPrice(totalPrice + fastshipprice)
        }
        else{
            settotalPrice(totalPrice - fastshipprice)
        }
    };
    useEffect(() => {
        settotalPrice(totlitemPrice + stshipprice)
    }, [totlitemPrice])
    if (cart.length > 0) return (
        <div className="container text-left" style={{ marginTop: "100px", marginBottom: "100px" }}>
            <div className="row justify-content-between">
                <div className="col-8">
                    <div className="d-flex flex-row justify-content-between">
                        <h5>Shopping Cart</h5>
                        <h5>{cart.length} Items</h5>
                    </div>
                    <hr></hr>
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="text-black-50" scope="col" style={{ width: "40%" }}>Product Details</th>
                                <th className="text-black-50" scope="col">Quantity</th>
                                <th className="text-black-50 " scope="col" style={{width:"15%"}}>Price</th>
                                <th className="text-black-50 " scope="col" style={{width:"15%"}}>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((product) => {
                                return (<tr>
                                    <th scope="row" key={product.id}>
                                        <div className="container" >
                                            <div className="row">
                                                <div className="col p-0" style={{ width: "100px" }}>
                                                    <img src={product.image} className="card-img-top" alt={product.title} style={{ height: "100px", width: "100%", objectFit: "contain" }}></img>
                                                </div>
                                                <div className="col">
                                                    <p className="m-0" style={{ fontSize: "15px" }}>{product.title}</p>
                                                    <button type="button" className="btn btn-danger btn-sm d-flex flex-row my-1" style={{ padding: "2px", borderRadius: "0px" }} onClick={() => dispatch(deletefromCart(product))}>
                                                        <X size={20} className="p-0 mt-auto" />Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    </th>
                                    <td><button type="button" className="btn btn-sm p-0 align-center" onClick={() => dispatch(increaseQt(product))}><Plus size={20} style={{verticalAlign:"top"}}/></button>{" "}
                                        <span style={{ border: "1px solid", borderColor: "rgba(0,0,0,0.3)", padding: "0px 5px" }}>{product.quantity}</span>
                                        {" "}<button type="button" className="btn btn-sm p-0" onClick={() => dispatch(decreaseQt(product))}><Dash size={20} style={{verticalAlign:"top"}}/></button>
                                    </td>
                                    <td>{product.price}$</td>
                                    <td>{parseFloat((product.price * product.quantity).toFixed(2))}$</td>
                                </tr>)
                            })}
                        </tbody>
                    </table>
                    <div className="d-flex flex-row justify-content-between">
                        <Link type="button" className="" to="/" style={{textDecoration:"none", fontSize: "15px" }}><ArrowLeft /> Continue Shopping</Link>
                        <button type="button" className="btn btn-danger rounded-0" onClick={() => dispatch(clearCart())}><Trash /> Empty Cart</button>
                    </div>
                </div>
                <div className="col-3">
                    <div className="d-flex flex-row">
                        <h5>Order Summary</h5>
                    </div>
                    <hr className="p-2"></hr>
                    <div className="d-flex flex-row justify-content-between">
                        <h6>Total Items Price</h6>
                        <h6>{parseFloat((totlitemPrice).toFixed(2))}$</h6>
                    </div>
                    <h6 className="mt-3">Shipping</h6>
                    <div className="d-flex flex-row justify-content-between mt-3">
                        <h6 className="text-black-50 px-3" style={{ fontSize: "14px" }}>Standard Shipping - {stshipprice}$</h6>
                    </div>
                    <div className="d-flex flex-row align-items-center px-3">
                        <input type="checkbox" className="mt-auto" onChange={(e) => handleChange(e)} ></input>
                        <h6 className="px-1 m-0" style={{ fontSize: "14px" }}>Fast Shipping - extra {fastshipprice}$</h6>
                    </div>
                    <h6 className="mt-3">PROMO CODE</h6>
                    <input type="text" placeholder="Enter promo code here" className="promo-code"></input>
                    <button type="button" className="btn btn-dark mt-2" style={{ width: "40%", borderRadius: "0px" }}>APPLY</button>
                    <hr className="p-1"></hr>
                    <div className="d-flex flex-row justify-content-between">
                        <h6>Total Price</h6>
                        <h6>{parseFloat((totalPrice).toFixed(2))}$</h6>
                    </div>
                    <button className="checkout-btn">PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </div>
    )
    else return(
        <div className="container d-flex flex-column align-items-center" style={{position:"relative", margin:"15vh auto"}}>
            <div className="p-2 "><h2>Your Cart is Empty</h2></div>
            <div className="p-2"><img src="https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg" 
            alt=""  className="empty-cart-img"></img></div>
            <div className="p-2"><Link type="button" class="btn btn-outline-primary" style={{textDecoration:"none"}} to="/"><ArrowLeft className="align-center"/> Go Back Shopping</Link></div>
        </div>
    )
}

export default Cart;