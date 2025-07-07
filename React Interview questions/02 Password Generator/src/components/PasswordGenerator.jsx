import { useCallback, useEffect, useRef, useState } from "react"


function PasswordGenerator() {

        const [password,setPassword] = useState("")
        const [passwordLength,setPasswordLength] =useState(8)
        const [numberAllowed,setNumberAllowed] = useState(false)
        const [characterAllowed,setCharacterAllowed] = useState(false)

        // const [count,setCount]  =useState(0)

        const passwordRef = useRef(null)
        // const copyPasswordRef= useRef(null)
        // const generatePasswordRef = useRef(null)


        const generatePassword= useCallback(()=>{
                let charString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
                let numberString = "0123456789"
                let characters = "()[]{}!@#$%^&*"
                let password = ""

                if(numberAllowed)
                        charString += numberString
                if(characterAllowed)
                        charString += characters

                for(let i=0;i<passwordLength;i++){
                        password += charString.charAt(Math.floor(Math.random()*charString.length))
                }
                setPassword(password)
        },[passwordLength,numberAllowed,characterAllowed,setPassword])

        const copyPassword = useCallback(()=>{
                passwordRef.current?.select()
                passwordRef.current?.setSelectionRange(0,999)
                navigator.clipboard.writeText(password)
        },[password])

        
        useEffect(()=>{
                generatePassword()
        },[passwordLength,numberAllowed,characterAllowed,generatePassword])
        

        // useEffect(()=>{
        //         if(copyPasswordRef.current === copyPassword.current){
        //                 console.log("every render +same");
        //         }else{
        //                  console.log("every render");
        //         }
        //         copyPasswordRef.current = copyPassword
               
        //         if(generatePasswordRef.current === generatePassword){
        //                 console.log("every render +same2");
        //         }else{
        //                  console.log("every render2");
        //         }
        //         generatePasswordRef.current = generatePassword
                
        // })

        return (
                <div
                        className="w-1/2 h-1/4 border-2 border-r-4 border-black flex flex-col gap-8 justify-center items-center"
                >
                        <div>
                                <input type="text" ref={passwordRef} value={password} readOnly placeholder="Password" className="w-100   rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
                                <button onClick={copyPassword} className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 cursor-pointer">COPY</button>
                        </div>
                        <div className="flex gap-2 justify-around w-full items-center">
                                <div className="flex gap-2">
                                        <input  type="range"  min={8} max={100} value={passwordLength} onChange={(e)=>setPasswordLength(e.target.value)} />
                                        <label>Length({passwordLength})</label>
                                </div>
                                <div className="flex gap-2">
                                        <input id="numbers" type="checkbox" onChange={(e)=>setNumberAllowed(e.target.checked)}/>
                                        <label htmlFor="numbers" defaultChecked={numberAllowed} >Numbers</label>
                                </div>
                                <div className="flex gap-2">
                                        <input id="character" type="checkbox" defaultChecked={characterAllowed} onChange={(e)=>setCharacterAllowed(e.target.checked)} />
                                        <label htmlFor="character">Character</label>
                                </div>
                        </div>

                        {/* <button onClick={()=>setCount(p=>p+1)}>Count {count}</button> */}
                </div>
        )
}

export default PasswordGenerator