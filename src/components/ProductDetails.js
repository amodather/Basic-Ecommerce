import { useParams } from "react-router-dom";
import { useEffect , useState} from "react";
import Product from './Product'
function ProductDetails(){
    const params = useParams();
    const apiURL = 'https://fakestoreapi.com/products'
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        fetch(`${apiURL}/${params.productId}`)
            .then(res=>res.json())
            .then(product=>setProduct(product))
    },[])
    return(
        <Product key={product.id} product ={product} showbtn={false}/>
    )
}

export default ProductDetails;