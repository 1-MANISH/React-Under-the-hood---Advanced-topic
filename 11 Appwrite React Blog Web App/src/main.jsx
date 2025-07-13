import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter,RouterProvider } from 'react-router'
import {AuthLayout} from './components'

const Home  = lazy(() => import('./pages/Home.jsx'))
const Login  = lazy(() => import('./pages/Login.jsx'))
const Signup  = lazy(() => import('./pages/Signup.jsx'))
const AllPosts  = lazy(() => import('./pages/AllPosts.jsx'))
const AddPost  = lazy(() => import('./pages/AddPost.jsx'))
const EditPost = lazy(() => import('./pages/EditPost.jsx'))
const Post = lazy(() => import('./pages/Post.jsx'))

const router = createBrowserRouter([
        {
                path:'/',
                element:<App />,
                children:[
                        {
                                path:'/',
                                element:<Home />
                        },
                        {
                                path:'/login',
                                element:<AuthLayout authentication={false} children={<Login />}/>
                        },
                        {
                                path:'/signup',
                                element:<AuthLayout authentication={false} children={<Signup />}/>
                        },
                        {
                                path:'/all-posts',
                                element:<AuthLayout authentication children={<AllPosts />}/>
                        },
                        {
                                path:'/add-post',
                                element:<AuthLayout authentication children={<AddPost />}/>
                        },
                        {
                                path:'/edit-post/:slug',
                                element:<AuthLayout authentication children={<EditPost />}/>
                        },
                        {
                                path:'/post/:slug',
                                element:<Post />
                        }
                ]
        }
])

createRoot(document.getElementById('root')).render(
        <StrictMode>
              <Provider store={store}>
                      <RouterProvider router={router} />
              </Provider>       
        </StrictMode>,
)
