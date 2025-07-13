import React, { useState ,useEffect} from 'react'
import {Link,useNavigate,useParams} from "react-router"
import service from '../appwrite/configuration'
import { Button,Container,Loader } from '../components'
import parse from 'html-react-parser'
import { useSelector } from 'react-redux'


function Post() {

        const [post,setPost] = useState({})
        const [loading,setLoading] = useState(true)
        const {slug} = useParams()
        const navigate = useNavigate()

        const {userData} = useSelector(store=>store.authReducer)


        useEffect(()=>{
                     service.getSinglePost(slug)
                        .then(res=>{
                                if(res){
                                        setPost(res)
                                }
                        })
                        .catch(err=>{
                                navigate("/")
                        })
                        .finally(()=>{
                                setLoading(false)
                        })
        },[slug])

        const deletePost = async() =>{
               try {
                        const res = await service.deletePost(post.$id)
                        if(res){
                                navigate("/")
                        }
               } catch (error) {
                
               }
        }

         const isAuthor = post && userData ? post?.userId === userData.$id : false


        return loading ? (
                <Container>
                        <Loader />
                </Container>
        ) : (
                <div className='py-8'>
                        <Container>
                                <div className="w-full flex flex-col justify-center mb-4 relative border rounded-xl p-2">
                                               <img
                                                        src={service.getFilePreview(post.featureImage)}
                                                        alt={post?.title}
                                                        className="rounded-xl"
                                                />

                                                {
                                                isAuthor && 
                                                (
                                                        <div className="absolute right-6 top-6">
                                                                <Link to={`/edit-post/${post?.$id}`}>
                                                                        <Button bgColor="bg-green-500" className="mr-3">
                                                                                Edit
                                                                        </Button>
                                                                </Link>
                                                                <Button bgColor="bg-red-500" onClick={deletePost}>
                                                                        Delete
                                                                </Button>
                                                        </div>
                                                )
                                                }
                                                <div className="w-full mb-6">
                                                        <h1 className="text-2xl font-bold">{post.title}</h1>
                                                </div>
                                                <div className="browser-css">
                                                        {parse(post?.content)}
                                                </div>  
                                </div>
                        </Container>
                </div>
        )
}

export default Post