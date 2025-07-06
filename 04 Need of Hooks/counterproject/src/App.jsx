import { useEffect, useState } from "react"
import AppChild from "./AppChild"

function App() {

        let [counter,setCounter]  =useState(0)
        const increaseValue = () =>{
                setCounter((prevCount)=>prevCount+1)
        }
        const decreaseValue = () =>{

                if(counter===0) return
                setCounter((prevCount)=>prevCount-1)
        }

        useEffect(()=>{
                console.log(counter,"inside waala")
        },[counter])


        return (
                <div className="appContainer">
                        <h1>NEED OF HOOKS</h1>
                        <button onClick={increaseValue}>Increase Value {counter}</button>
                        <p>Counter Value : {counter}</p>
                        <button onClick={decreaseValue}>Decrease Value {counter}</button>

                        <AppChild counter={counter} />
                </div>
        )
}

export default App