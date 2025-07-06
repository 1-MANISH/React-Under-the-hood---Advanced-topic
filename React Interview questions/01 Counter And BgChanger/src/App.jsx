import { useCallback, useState } from "react"
import Button from "./components/Button"


function App() {

        const [counter,setCounter] = useState(0)
        const [currentColor,setCurrentColor] = useState("white")

        const bgColors = [
                { colorName: "red", textColor: "white" },
                { colorName: "green", textColor: "white" },
                { colorName: "blue", textColor: "white" },
                { colorName: "yellow", textColor: "black" },
                { colorName: "olive", textColor: "white" },
                { colorName: "gray", textColor: "white" },
                { colorName: "purple", textColor: "white" },
                { colorName: "lavender", textColor: "black" },
                { colorName: "white", textColor: "black" },
                { colorName: "black", textColor: "white" },
        ]

        const bgChanger = useCallback((colorName)=>{
                setCurrentColor(colorName)
        },[])

        const increaseValue = useCallback(()=>{
                // setCounter(counter+1)// counter+1 = 0+1
                // setCounter(counter+1)//counter+1 =  0+1
                // setCounter(counter+1)//counter+1 = 0+1
                // setCounter(counter+1)//counter+1 = 0+1

                // useState send changes in batches
                // so it sents all changes in one go
                // all setCounter getting counter= 0 ads previous value

                // use
                // setCounter(prevCount=>prevCount+1)
                // setCounter(prevCount=>prevCount+1)
                // setCounter(prevCount=>prevCount+1)
                setCounter(prevCount=>prevCount+1)
        },[])

        const decreaseValue = useCallback(()=>{
                setCounter(prevCount=>prevCount>0?prevCount-1:0)
        },[counter])

        return (
                <div className="appContainer" style={{backgroundColor:currentColor}}>
                       <h2>Counter Value : {counter}</h2>         

                       <br />

                       <button onClick={increaseValue}>Increase Value</button>
                       <button onClick={decreaseValue}>Decrease Value</button>

                       <div className="bgChangerContainer center">

                                {
                                        bgColors.map(({colorName,textColor})=>{
                                                return (
                                                        <Button
                                                                key={colorName}
                                                                text={colorName}
                                                                backgroundColor={colorName}
                                                                textColor={textColor}
                                                                bgChanger={bgChanger}
                                                        />
                                                )
                                        })
                                }       
                       </div>
                </div>
        )
}

export default App