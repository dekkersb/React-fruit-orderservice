
import './App.css';
import React, { useState } from "react"

function App() {

    const [banana, setBananas] = useState(0);
    const [strawberry, setStrawberries] = useState(0);
    const [apple, setApples] = useState(0);
    const [kiwi, setKiwis] = useState(0);

    function resetNumbers () {
        setBananas (0)
        setStrawberries(0)
        setApples (0)
        setKiwis (0)
    }

  return (
    <>
        <div className={"container"}>
            <div className={"product"}>
                <h2>🍌 Bananen</h2>
                <button
                    onClick={() => setBananas (banana > 0 ? banana - 1 : 0)}
                > - </button>
                <p> {banana} </p>
                <button
                    onClick={() => setBananas (banana + 1)}
                > + </button>
            </div>

            <div className={"product"}>
                <h2>🍓 Aardbeien</h2>
                <button
                    onClick={() => setStrawberries (strawberry > 0 ? strawberry -1 : 0)}
                > - </button>
                <p> {strawberry} </p>
                <button
                    onClick={() => setStrawberries (strawberry + 1)}
                > + </button>
            </div>

            <div className={"product"}>
                <h2>🍏 Appels</h2>
                <button
                    onClick={() => setApples (apple > 0 ? apple - 1 : 0)}
                > - </button>
                <p> {apple} </p>
                <button
                    onClick={() => setApples (apple + 1)}
                > + </button>
            </div>

            <div className={"product"}>
                <h2>🥝 Kiwi's</h2>
                <button
                    onClick={() => setKiwis (kiwi > 0 ? kiwi -1 : 0)}
                > - </button>
                <p> {kiwi} </p>
                <button
                    onClick={() => setKiwis (kiwi + 1)}
                > + </button>
            </div>

            <button className={"resetbutton"}
            onClick={()=>{resetNumbers()}}
            >
                Reset
            </button>
        </div>
    </>
  )
}

export default App;
