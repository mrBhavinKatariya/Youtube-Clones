import conf from "../conf/conf";
import {Client, Account, ID} from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appWriteurl)
            .setProject(conf.appWriteProjectId)

            this.account = new Account(this.client)
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique() ,email, password, name)

            if(userAccount)
            {
                // return userAccount
                // call other method

                return this.login({email, password})
            }
            else
            {
                userAccount
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}){
        try {
         return await this.account.createEmailSession(email, password); 
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser(){
        try {
           return await this.account.get()
        } catch (error) {
            throw error
        }
        return null;
    }

    // async getCurrentUser() {
    //     const session = await this.account.getSession();
    //     if (!session) {
    //         console.log("No active session found.");
    //         return null; // Handle accordingly
    //     }
    
    //     try {
    //         const currentUser = await this.account.get();
    //         return currentUser;
    //     } catch (error) {
    //         console.error('Error fetching current user:', error);
    //         throw error;
    //     }
    // }
    
    async logOut(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            throw error
        }
    }

}



const authservice = new AuthService();

export default authservice;