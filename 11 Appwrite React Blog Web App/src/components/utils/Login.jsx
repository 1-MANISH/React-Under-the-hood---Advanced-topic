import { useState } from "react"
import {Link,useNavigate} from "react-router"
import {useDispatch} from "react-redux"
import {login as authLogin} from "../../store/slices/authSlice"
import {Button,Input,Logo} from "../index"
import authService from "../../appwrite/auth"
import {useForm} from "react-hook-form"

function Login() {

        const navigate= useNavigate()
        const dispatch = useDispatch()
        const {register,handleSubmit} = useForm()

        const [error,setError] = useState("")

        const handleLogin = async (data) =>{
                console.log(data);
                setError("")
                try {
                        const session = await authService.login(data)
                        if(session){
                                const userData = await authService.getCurrentUser()
                                if(userData){
                                        dispatch(authLogin(userData))
                                        navigate("/")
                                }
                                        
                        }else{
                                setError("Invalid Credentials")
                        }
                        
                } catch (error) {
                        setError(error.message)
                }
        }

        return (
                <div  className='flex items-center justify-center w-full'>
                        
                        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                                <div className="mb-2 flex justify-center">
                                        <span className="inline-block w-full max-w-[100px]">
                                                <Logo width="100%" />
                                        </span>
                                </div>
                                <h2 className="text-center text-2xl font-bold leading-tight">Login in to your account</h2>
                                <p 
                                        className="mt-2 text-center text-base text-black/60"
                                >
                                        Don&apos;t have any account?&nbsp;
                                        <Link
                                                to="/signup"
                                                className="font-medium text-primary transition-all duration-200 hover:underline"
                                        >
                                                Sign Up
                                        </Link>
                                </p>
                                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                                <form 
                                        onSubmit={handleSubmit(handleLogin)} 
                                        className='mt-8'
                                >
                                        <div className="space-y-4">
                                                <Input 
                                                        label="Email :"
                                                        placeholder="Enter your email"
                                                        type="email"
                                                        {...register("email",{
                                                                required:true,
                                                                validate:{
                                                                        matchPattern: (value) => {
                                                                                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Invalid email address"
                                                                        }
                                                                }
                                                        })}
                                                />
                                        </div>     

                                        <div className="space-y-4">
                                                <Input
                                                        label="Password :"
                                                        placeholder="Enter your password"
                                                        type="password"
                                                        {...register("password",{
                                                                required:true
                                                        })}
                                                />
                                        </div>   

                                         <Button
                                                type="submit"
                                                className="w-full"
                                        >
                                                Sign in
                                        </Button>

                                </form>
                        </div>
                </div>
        )
}

export default Login