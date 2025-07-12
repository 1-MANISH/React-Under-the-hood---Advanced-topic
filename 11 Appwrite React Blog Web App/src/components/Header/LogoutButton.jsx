
import { useDispatch } from "react-redux"
import authService from "../../appwrite/auth"
import { logout } from "../../store/slices/authSlice"

function LogoutButton() {

        const dispatch = useDispatch()

        const handleLogout = async () => {
                try {
                        const res = await authService.logout()
                        dispatch(logout())
                } catch (error) {
                        console.log(error)
                }
        }
        return (
                <div>
                        <button 
                                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                                onClick={handleLogout}
                        >
                                Logout
                        </button>
                </div>
        )
}

export default LogoutButton