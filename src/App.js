import React from 'react';
import './App.css';
import Product from "./Product";
import { useState} from "react";


function App() {

  return (
    <>
        <div className={"container"}>
<Product name="🍌 Bananen"/>

<Product name="🍓 Aardbeien"/>

<Product name="🍏 Appels"/>

<Product name="🥝 Kiwi's"/>


<button className={"resetbutton"}>
    Reset
</button>
        </div>
    </>
  )
}

export default App;
