import { useEffect, useState } from "react"
import {useDispatch} from "react-redux"
import {Outlet} from "react-router"
import authService from"./appwrite/auth"
import { login, logout } from "./store/slices/authSlice"
import {Footer, Header, Loader} from "./components"

function App() {

        const dispatch = useDispatch()
        const [loading,setLoading] = useState(true)

        useEffect(()=>{
                authService.getCurrentUser()
                        .then((userData)=>{
                                if(userData){
                                        dispatch(login({userData}))
                                }else{
                                        dispatch(logout())
                                }
                        }).catch((error)=>{
                                dispatch(logout())
                        })
                        .finally(()=>{
                                setLoading(false)
                        }) 
        },[])

        return  loading  ? (
                <Loader />
        ) :(
                <div className="min-h-screen flex flex-wrap content-between bg-gray-600">
                        <div className="w-full block">
                                <Header />
                                        <main>
                                                <Outlet />
                                        </main>
                                <Footer />

                        </div>
                </div>
        )
}

export default App