import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";
// https://appwrite.io/docs/references/cloud/client-web/account


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
            
    }

    async createAccount({email, password, name}) {
        try {
            console.log("Appwrite serive :: constructor :: conf.appwriteUrl", conf.appwriteUrl);
        console.log("Appwrite serive :: constructor :: conf.appwriteProjectId", conf.appwriteProjectId);

            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                console.log("Appwrite serive :: createAccount :: userAccount", userAccount);
                // call another method
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            const logged = await this.account.createEmailPasswordSession(email, password);
            console.log("Appwrite serive :: login :: logged", logged);
            return logged;
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            const result = await this.account.get();
            console.log("Appwrite serive :: getCurrentUser :: result", result);
            return result
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService

