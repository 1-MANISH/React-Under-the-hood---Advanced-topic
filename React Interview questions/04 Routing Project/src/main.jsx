import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider,} from "react-router";
import Layout from './Layout.jsx';
import { Home,About,Contact,Github,Follower,Image,NotFound,User} from "./components"
import { gitHubInfoLoader } from './components/Github/Github.jsx';



const router = createBrowserRouter([
        {
                path:"/",
                Component:Layout ,
                children:[
                        {
                                path:"",
                                Component:Home ,
                                index:true
                        },
                        {
                                path:"about",
                                Component:About 
                        },
                        {
                                path:"contact",
                                Component:Contact 
                        },
                        {
                                path:"github",
                                Component:Github,
                                children:[
                                        {
                                                path:"followers",
                                                Component:Follower 
                                        },
                                        {
                                                path:"image",
                                                Component:Image 
                                        }
                                ]
                        },
                        {
                                path:"user/:userId",
                                Component:User
                        },{
                                path:"*",
                                Component:NotFound
                        }
                ]
        }
])


const router2 =createBrowserRouter(
        createRoutesFromElements(
                <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route  
                                path="github" 
                                element={<Github />} 
                                loader={gitHubInfoLoader}
                        >
                                <Route path="followers" element={<Follower />} />
                                <Route path="image" element={<Image />} />
                        </Route>
                        <Route path="/user/:userId" element={<User />} />
                        <Route path="*" element={<NotFound />} />
                </Route>
        )
)

createRoot(document.getElementById('root')).render(
        <StrictMode>
                <RouterProvider router={router2} />
                {/* <App /> */}
        </StrictMode>,
)


