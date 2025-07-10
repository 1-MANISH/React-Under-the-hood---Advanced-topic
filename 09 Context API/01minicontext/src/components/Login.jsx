import { useContext, useState } from "react"
import UserContext from "../context/UserContext"


function Login() {

        const [userName,setUserName] = useState("")
        const [userPassword,setPassword] = useState("")

        const {setUser}  = useContext(UserContext)

        const handleSubmit = (e) => {
                e.preventDefault()
                // sending data - setting up the data
                setUser({userName,
                        userPassword
                })
        }
         return (
                <div>
                        <h2>Login</h2>
                        <input 
                                type="text" 
                                placeholder="username" 
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                        />
                        <br />
                        <input 
                                type="password" 
                                placeholder="password" 
                                value={userPassword}
                                onChange={(e) => setPassword(e.target.value)}
                        />
                        <button onClick={handleSubmit}>Submit</button>
                </div>
        )
}

export default Login