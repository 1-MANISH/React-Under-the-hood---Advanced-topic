import { useEffect, useState } from "react"



function useCurrencyInfo(currency){

        const currencyURI = import.meta.env.VITE_REACT_APP_CURRENCY_API_URL
        
        const [data,setData] = useState({})
        const [options,setOptions] = useState([])

        useEffect(()=>{
                fetch(`${currencyURI}/${currency}.json`)
                        .then(res=> res.json())
                        .then(data=>{
                                setData(data)
                                setOptions(Object.keys(data[currency]))
                        })
                        .catch(err=>console.log(err))

        },[currency])

        return [options,data]

}

export default useCurrencyInfo