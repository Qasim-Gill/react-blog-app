// This file is used to store the configuration for the appwrite client
// It is used to store the appwrite url, project id, database id, collection id and bucket id
// purpose of this file is sometimes when we directly import variables from .env file sometimes it returns error
// so best practice is create object that call these files then return it and make sure values in string
const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
};

export default conf;