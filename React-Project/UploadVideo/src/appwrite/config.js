import conf from "../conf/conf";
import {Client, ID, Databases, Storage, Query} from "appwrite";

export class Service{

    Client = new Client()
    databases;
    storage;

    constructor(){
        this.Client
        .setEndpoint(conf.appWriteurl)
        .setProject(conf.appWriteProjectId)

        this.databases = new Databases(this.Client);
        this.storage = new Storage(this.Client)
    }

    async createPost({title, slug, content, featureImage, status, userId}){
        try {
            return await this.databases.createDocument(conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug, 
                {
                    title,
                    slug,
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


    async updatePost(slug, {title, content, featureImage, status}){
        try {
         return await this.databases.updateDocument(
            conf.appwriteDataBaseId,
            conf.appwriteCollectionId,
            slug,
            {

                title,
                content,
                featureImage,
                status                
            }
         )
        } catch (error) {
            throw  error;
            
        }
    }

    async DeletePost (slug){
        try {
             await this.databases.deleteDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug,
            )

           return true
        } catch (error) {
            throw error;
            return false
        }       
    }

    async getPost(slug){
        try {
           return await this.databases.getDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            throw error
            return false
        }
    }

    // query Add Get Post
    async getPosts(Queries = [
        Query.equal("status","active")
    ]){
        try {
                return await this.databases.listDocuments(
                    conf.appwriteDataBaseId,
                    conf.appwriteCollectionId,
                    Queries
                )
        } catch (error) {
            throw error
        }

    }

    // File Upload Services

    async uploadFile(file){
        try {
            return await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            throw error
        }
    }

    async deleteFile(fileId){

        try {
             await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId,
            )
            return true
        } catch (error) {
            throw error
            return false
        }
    }

     getFilePreview(fileId){
       return this.storage.getFilePreview(
        conf.appwriteBucketId,
        fileId
       )
     }
}


const service = new Service();
export default service;