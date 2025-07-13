import React , {useState,useEffect}  from 'react'
import service from '../appwrite/configuration'
import { PostCard,Container,Loader } from '../components'


function AllPosts() {

        const [posts,setPosts] = useState([])
        const [loading,setLoading] = useState(true)

        useEffect(()=>{
               service.getAllPosts().then((res)=>{
                        if(res){
                                setPosts(res.documents)
                        }
               }).finally(()=>{
                       setLoading(false)
               })
        },[])


        return (
                <div className='w-full py-8 min-h-250'>
                        <Container>
                                <div className='flex flex-wrap gap-3 '>
                                {
                                        loading ? (
                                                <Loader />
                                        ):(
                                                posts && posts.map((post)=>{
                                                        return <div className='p-2 w-1/4' key={post.$id}>
                                                                <PostCard  {...post} />
                                                        </div>
                                                })
                                        )
                                }
                                </div>
                        </Container>
                </div>
        )
}

export default AllPosts