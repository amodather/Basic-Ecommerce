import { Link } from "react-router-dom";
import { Cart3 } from 'react-bootstrap-icons';
import { useSelector } from "react-redux/es/hooks/useSelector";
import {BoxSeamFill} from 'react-bootstrap-icons'
function NavBar(){
    const cart = useSelector(state => state.cart);
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link className="navbar-brand fs-4" to="/" ><BoxSeamFill/> ecommerce</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
                            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/#">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="./about">About</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="./contact">Contact</Link></li>
                        </ul>
                        <Link type="button" className="btn btn-outline-dark" to="./cart"><Cart3 size={20}  className="align-bottom" /> Cart ({cart && cart.length})</Link>
                </div>
            </div>
        </nav>
    </>
    )
}
export default NavBar;