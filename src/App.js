import React from 'react';
import './App.css';
import {useState} from "react";
import Product from "./Product";

function App() {
    const [number, setNumber] = useState(0);

  return (
    <>
<Product name="Bananen"/>
        <button
            onClick={() => setNumber (number - 1)}
        > - </button>
<p> {number} </p>
        <button
            onClick={() => setNumber (number + 1)}
        > + </button>

<Product name="Aardbeien"/>

<Product name="Appels"/>

<Product name="Kiwi's"/>

    </>
  )
}

export default App;
