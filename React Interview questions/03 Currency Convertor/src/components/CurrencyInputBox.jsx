import { useId } from "react"


function CurrencyInputBox({
        label,
        currency="inr",
        amount,
        setCurrency,
        setAmount,
        currencyOptions=[],
        currencyDisabled=false,
        amountDisabled=false
}) {


        const amountId = useId()
        
        return (
                <div className="flex flex-row justify-between w-full font-bold font-mono shadow-xl

">
                        <div className="flex flex-col gap-3  p-4">
                                <label htmlFor={amountId}>{label}</label>
                                <input 
                                        id={amountId} 
                                        type="number" 
                                        className="input validator" 
                                        disabled={amountDisabled}
                                        value={amount}
                                        onChange={(e) => setAmount && setAmount(Number(e.target.value))}
                                        />
                                <div className="validator-hint">Enter valid number</div>
                        </div>
                        <div className="flex flex-col gap-3  p-4 ">
                                <label htmlFor="currencyType" className="self-end">Currency Type </label>
                                <select 
                                        id="currencyType"
                                        disabled={currencyDisabled} 
                                        className="select  w-40 "
                                        value={currency}
                                        onChange={(e) => setCurrency && setCurrency(e.target.value)}
                                >
                                        {
                                                currencyOptions.map((option) => (
                                                        <option key={option} value={option}>{option}</option>
                                                ))
                                        }
                                </select>
                        </div>
                </div>
        )
}

export default CurrencyInputBox