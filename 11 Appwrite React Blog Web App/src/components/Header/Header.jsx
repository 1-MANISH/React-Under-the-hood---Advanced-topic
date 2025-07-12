
import {Container,Logo,LogoutButton} from "../index"
import { Link, NavLink } from "react-router"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"

function Header() {

        const {status:authStatus} = useSelector(store=>store.authReducer)

        // const navigate = useNavigate()

        const navItems = [
                {
                        name: 'Home',
                        slug: "/",
                        active: true
                }, 
                {
                        name: "Login",
                        slug: "/login",
                        active: !authStatus,
                },
                {
                        name: "Signup",
                        slug: "/signup",
                        active: !authStatus,
                },
                {
                        name: "All Posts",
                        slug: "/all-posts",
                        active: authStatus,
                },
                {
                        name: "Add Post",
                        slug: "/add-post",
                        active: authStatus,
                },
        ]


        return (
               <header className='py-3 shadow bg-gray-500'>
                        <Container>
                                <nav className='flex'>
                                        <div className='mr-4'>
                                                <Link to='/'>
                                                        <Logo width='70px'   />
                                                </Link>
                                        </div>
                                        <ul className='flex ml-auto'>
                                                {
                                                        navItems?.map((item,index)=>{
                                                                item.active ? (
                                                                        <li key={item.name+index}>
                                                                                <NavLink
                                                                                        className={({isActive})=>{
                                                                                                return isActive ? `inline-bock px-6 py-2 duration-200 hover:bg-blue-100 text-purple rounded-full` :'inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                                                                                        }}
                                                                                        to={item.slug}
                                                                                >
                                                                                        {item.name}
                                                                                </NavLink>
                                                                        </li>
                                                                ):null
                                                        })
                                                }

                                                {
                                                        authStatus && (
                                                                <li>
                                                                        <LogoutButton />
                                                                </li>
                                                        )
                                                }
                                        </ul>
                                </nav>
                        </Container>
               </header>
        )
}

export default Header