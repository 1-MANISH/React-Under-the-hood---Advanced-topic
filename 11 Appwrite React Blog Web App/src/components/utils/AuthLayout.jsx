import { useState,useEffect } from "react"
import {useSelector} from "react-redux"
import  {useNavigate } from "react-router"
import Loader from "../index"

export default function Protected({children,authentication=true}) {

        const navigate = useNavigate()

        const  [loader,setLoader] = useState(true)

        const {status:authStatus} = useSelector(store=>store.authReducer)

        useEffect(()=>{
                // todo make it more easy

                // let authentication === false to show login and signup page
                // let authentication === true to show home page and other pages
                if(authentication && authStatus !== authentication){
                        navigate("/login")
                }else if(!authentication && authStatus !== authentication){
                        navigate("/") // false && false
                }
                setLoader(false)
        },[authStatus,navigate,authentication])

        return loader ? <Loader /> : children
}

