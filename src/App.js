import { useState } from "react";

function App()
{
    var [random,randomnum]=useState(null) 

    const numbers=()=>
    {
        var value=Math.floor(Math.random()*100)+1
        randomnum(value)
    }

    const restartGenerator = () => {
    randomnum(null);
    };

    return(
        <div className="container">
            <div className="card">
                <h1>🎲 Random Number Generator</h1>

                 {random === null ? (
                 <p className="placeholder">No number generated yet</p>
                ) : (
               <h2 className="number">{random}</h2>
                )}
                <button onClick={numbers}>Generate Random Number</button> 
                <button className="restart-btn"   onClick={restartGenerator}>Restart</button>
            </div>
        </div>
    )
}

export default App