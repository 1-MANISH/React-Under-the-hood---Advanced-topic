import React,{useEffect,useState} from 'react'

import { PostForm,Container,Loader } from '../components'
import service from '../appwrite/configuration'
import { useNavigate, useParams } from 'react-router'
function EditPost() {

        const [post,setPost] = useState({})
        const [loading,setLoading] = useState(true)

        const {slug} = useParams()
        const navigate = useNavigate()

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

        return post && (
                <div className='py-8'>
                        <Container>
                              {
                                      loading ? (
                                              <Loader />
                                      ):(
                                              <PostForm post={post} />
                                      )
                              }
                        </Container>
                </div>
        )
}

export default EditPost