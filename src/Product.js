import { useState } from "react"
import ProductNumber from "./ProductNumber";

function Product(props) {


    const [number, setNumber] = useState(0);



return (
 <div>
     <h2>{props.name}</h2>
 </div>
)
}

export default Product;