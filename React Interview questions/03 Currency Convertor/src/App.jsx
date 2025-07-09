import { useCallback, useMemo, useState } from "react"
import { CurrencyInputBox } from "./components"
import useCurrencyInfo from "./hooks/useCurrencyInfo"

function App() {

        const [from,setFrom] = useState("inr")
        const [to,setTo] = useState("usd")
        const [fromAmount,setFromAmount] =useState(0)
        const [toAmount,setToAmount] =useState(0)

        const [options,data] =  useCurrencyInfo(from)
        

        const calculateConvertedAmount = useCallback(()=>{
                const convertedAmount =Math.round( fromAmount*data[from][to]).toFixed(4)
                setToAmount(convertedAmount)
        },[fromAmount,data,to,setToAmount,toAmount])      

        const swapData = useCallback(()=>{
                setFrom(to)
                setTo(from)
                setFromAmount(toAmount)
                setToAmount(fromAmount)
        },[from,to,fromAmount,toAmount])

        return (
                <div 
                        className="hero min-h-screen"
                         style={{
                                backgroundImage:"url(https://images.pexels.com/photos/28165814/pexels-photo-28165814.jpeg)",
                        }}
                >
                        <div className="hero-content relative  min-w-2xl border-2 rounded shrink-0 shadow-2xl flex flex-col">
                                <CurrencyInputBox
                                        label={"From"}
                                        currencyOptions={options}
                                        currency={from}
                                        amount={fromAmount}
                                        setAmount={(amount) => setFromAmount(amount)}
                                        setCurrency={(currency) => setFrom(currency)}
                                />
                                <button 
                                        className="btn  btn-secondary absolute top-1/1.1 left-1/1.8 "
                                        onClick={swapData}
                                >
                                        Swap
                                </button>
                                <CurrencyInputBox
                                        label={"To"}
                                        currencyOptions={options}
                                        currency={to}
                                        amount={toAmount}
                                        setAmount={(amount) => setToAmount(amount)}
                                        setCurrency={(currency) => setTo(currency)}
                                        amountDisabled

                                />
                                <button 
                                        className="btn btn-primary w-full"
                                        onClick={calculateConvertedAmount}
                                >
                                        Convert {from} to {to} = {toAmount}
                                </button>
                        </div>
                </div>
        )
}

export default App