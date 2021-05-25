import { useState } from "react"

function Product(props) {

    const [number, setNumber] = useState(0);

return (
    <>
 <div className={"product"}>
     <h2>{props.name}</h2>
     <button
         onClick={() => setNumber (number - 1)}
     > - </button>
     <p> {number} </p>
     <button
         onClick={() => setNumber (number + 1)}
     > + </button>
 </div>
    </>
)
}


export default Product;