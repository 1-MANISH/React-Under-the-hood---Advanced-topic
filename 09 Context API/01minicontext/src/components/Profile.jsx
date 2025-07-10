import { useContext } from "react"
import UserContext from "../context/UserContext"


function Profile() {

        const {user} = useContext(UserContext)

        if(!user) 
                return <div>please login...</div>

        return (
                <div>
                        <h2>Profile</h2>
                        <p>UserName  : {user?.userName}</p>
                        <p>Password : {user?.userPassword}</p>
                </div>
        )
}

export default Profile