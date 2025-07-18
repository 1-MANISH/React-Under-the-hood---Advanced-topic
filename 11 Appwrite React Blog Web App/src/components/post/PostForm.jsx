import React,{useCallback, useEffect} from 'react'
import {useForm} from "react-hook-form"
import {Button,Input,Select,RTE} from "../index"
import service from '../../appwrite/configuration'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'

function PostForm({
        post
}) {

        const navigate = useNavigate()
        const {register,handleSubmit,watch,setValue,control,getValues} =useForm({
                defaultValues:{
                        title:post?.title || "",
                        slug:post?.$id || "",
                        content:post?.content || "",
                        status:post?.status || "active"
                }
        })

        const{userData} = useSelector(state=>state.authReducer)

        const submit = async(data)=>{
        
                if(post){
                        // update
                       const file =  data.image[0] ? await service.uploadFile(data.image[0]) : null

                       if(file){
                                await service.deleteFile(post.featureImage)
                       }

                       const dbPost = await service.updatePost(
                                post.$id,
                                {
                                        ...data,
                                        featureImage:file ? file.$id :undefined
                                }
                       )
                       if(dbPost){
                                navigate(`/post/${dbPost.$id}`)
                       }
                }else{

                        // create post
                        const file =  data?.image[0] ? await service.uploadFile(data.image[0]) : null
                        if(file){
                                const dbPost = await service.createPost({
                                        ...data,
                                        featureImage: file?.$id,
                                        userId:userData?.$id
                                })
                                if(dbPost){
                                        navigate(`/post/${dbPost?.$id}`)
                                }
                        }
                }
        }

        const slugTransForm = useCallback((value)=>{
                if(value && typeof value === "string"){
                        return value
                        .trim()
                        .toLocaleLowerCase()
                        .split(" ")
                        .join("-")
                }
                return ''
        },[])


        useEffect(()=>{

                const subscription = watch((value,{name})=>{
                        if(name === "title"){
                                setValue("slug",slugTransForm(value.title),{shouldValidate:true})
                        }
                })

                return () =>{
                        subscription.unsubscribe()
                }

        },[watch,slugTransForm,setValue])

        return (
                 <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
                        <div className="w-2/3 px-2">
                                <Input
                                        label="Title : "
                                        placeholder="Title"
                                        className="mb-4"
                                        {...register("title", { required: true })}
                                />
                                <Input
                                        label="Slug :"
                                        placeholder="Slug"
                                        className="mb-4"
                                        {...register("slug", { required: true })}
                                        onInput={(e) => {
                                                setValue("slug", slugTransForm(e.currentTarget.value), { shouldValidate: true });
                                        }}
                                />
                             
                                <RTE 
                                        label="Content :" 
                                        name="content" 
                                        control={control} 
                                        defaultValue={getValues("content")} 
                                />
                        </div>
                        <div className="w-1/3 px-2">
                                <Input
                                        label="Featured Image :"
                                        type="file"
                                        className="mb-4"
                                        accept="image/png, image/jpg, image/jpeg, image/gif"
                                        {...register("image", { required: !post })}
                                />
                                {
                                post && (
                                        <div className="w-full mb-4">
                                                 <img
                                                        src={service.getFilePreview(post.featureImage) }
                                                        alt={post.title}
                                                        className="rounded-lg"
                                                />
                                        </div>
                                        )
                                }
                                <Select
                                        options={["active", "inactive"]}
                                        label="Status"
                                        className="mb-4"
                                        {...register("status", { required: true })}
                                />

                                <Button 
                                        type="submit" 
                                        bgColor={post ? "bg-green-500" : undefined} 
                                        className="w-full"
                                >
                                         {post ? "Update" : "Submit"}
                                </Button>
                        </div>
                </form>
        )
}

export default PostForm