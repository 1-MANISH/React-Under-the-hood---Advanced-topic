import React,{useEffect,useState} from 'react'
import service from '../appwrite/configuration'
import { useSelector } from 'react-redux'
import {Container,Loader,PostCard} from '../components'

function Home() {

        const [posts,setPosts] = useState([])
        const [loading,setLoading] = useState(true)

        useEffect(()=>{
                service.getAllPosts().then((res)=>{
                        if(res){
                                setPosts(res.documents)
                        }
                })
                .catch((err)=>{
                        // console.log(err)
                })
                .finally(()=>{
                        setLoading(false)
                })
        },[])

        const {status:authStatus} = useSelector(store=>store.authReducer)

        if(loading)
                return (
                        <Container>
                                <Loader />
                        </Container>
                ) 

        if(!posts || posts.length === 0) 
                return (
                         <Container>
                                <div className="flex flex-wrap min-h-200">
                                        <div className="p-2 w-full">
                                        <h1 className="text-2xl font-bold hover:text-gray-500">
                                                Login to read posts
                                        </h1>
                                        </div>
                                </div>
                        </Container>
                )

        return (
                <Container>
                        <div className="flex flex-wrap  min-h-250">
                                {
                                        posts && posts.map((post)=>{
                                                return <div className="p-2 w-1/4" key={post.$id} >
                                                        <PostCard{...post} />
                                                </div>
                                        })
                                }
                        </div>
                </Container>
        )
}

export default Home