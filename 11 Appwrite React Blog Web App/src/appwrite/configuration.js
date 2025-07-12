import config from "../config/config";
import {Client,ID,Databases,Storage,Query, ImageFormat} from "appwrite"

export class Service{

        client =new Client()
        databases
        storage // bucket
        constructor(){
                this.client = this.client
                .setEndpoint(config.appWriteUrl)
                .setProject(config.appWriteProjectId)
                this.databases = new Databases(this.client)
                this.storage = new Storage(this.client)
        }

        async createPost({title,slug,content,featureImage,status,userId}){
                try {
                        return await this.databases.createDocument(
                                config.appWriteDatabaseId,
                                config.appWriteCollectionId,
                                slug,//ID.unique(),
                                {
                                        title,
                                        content,
                                        featureImage,
                                        status,
                                        userId
                                }
                        )
                } catch (error) {       
                        throw error
                }
        }

        async updatePost(slug,{title,content,featureImage,status}){

                try {
                        return await this.databases.updateDocument(
                                config.appWriteDatabaseId,
                                config.appWriteCollectionId,
                                slug,
                                {
                                        title,
                                        content,
                                        featureImage,
                                        status,
                                }
                        )
                } catch (error) {       
                        throw error
                }
        }

        async deletePost(slug){
                try {
                        return await this.databases.deleteDocument(
                                config.appWriteDatabaseId,
                                config.appWriteCollectionId,
                                slug
                        )
                } catch (error) {
                        throw error
                }
        }

        async getSinglePost(slug){
                try {
                        return await this.databases.getDocument(
                                config.appWriteDatabaseId,
                                config.appWriteCollectionId,
                                slug
                        )
                } catch (error) {
                      throw error  
                }
        }
        
        // we have to make index for search based on status
        async getAllPosts(queries=[Query.equal("status","active")]){
                try {
                        return await this.databases.listDocuments(
                                config.appWriteDatabaseId,
                                config.appWriteCollectionId,
                                queries,
                                4
                        )
                } catch (error) {
                        throw error
                }
        }


        // file upload methods
        async uploadFile(file){ // blob object
                try {
                        return await this.storage.createFile(
                                config.appWriteBucketId,
                                ID.unique(),
                                file,

                        )
                } catch (error) {
                        throw error
                }
        }

        async deleteFile(fileId){
                try {
                        return await this.storage.deleteFile(
                                config.appWriteBucketId,
                                fileId
                        )
                } catch (error) {
                        throw error
                }
        }

        async getFilePreview(fileId){
                try {
                        return await this.storage.getFilePreview(
                                config.appWriteBucketId,
                                fileId,
                                200,
                                200,
                        )
                } catch (error) {
                        return error
                }
        }

}

const service = new Service()

export default service