// src/authentication/server.js
import { Client, Account, ID, Databases } from "appwrite";
import { a } from "framer-motion/client";


const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')  // Set Appwrite API endpoint
    .setProject('6760fb88001e2e2f74e7');  // Set Appwrite Project ID

export const account = new Account(client);

// Login function
export const login = async (email, password) => {
    try {
        await account.createEmailPasswordSession(email, password);
        console.log("Logged in successfully");
    } catch (e) {
        console.log("Login failed", e);
        throw e;
    }
};
//signup function
export const signup = async (name, email, password) => {
    try {
        await account.create(name, email, password);
        console.log("Signed up successfully");

    } catch (e) {
        console.log("Signup failed", e);
        throw e;
    }
};


// Logout function
export const logout = async () => {
    try {
        await account.deleteSession('current');  // 'current' deletes the active session
        console.log("Logged out successfully");
    } catch (e) {
        console.log("Logout failed", e);
    }
};


// adding email subscription
const databases = new Databases(client)

export const subscribe = async (email) => {
    try {
        await databases.createDocument(
            '6762ba08003bd5a85e08',//database id
            '6762ba190007d7787bcc', //collection id 

            ID.unique(),
            { 'Email': email }



        )
        console.log("Subscribed successfully")

    } catch (error) {
        console.log(error.message)
        throw error
    }


}


//storing the test scores for users
export const Score = async (newScore) => {
    console.log("Adding score:", newScore);

    try {
        const user = await account.get(); // Get the logged-in user
        if (!user) throw new Error("User not authenticated");

        const userId = user.$id;

        // Define database and collection IDs
        const databaseId = '6762ba08003bd5a85e08';
        const collectionId = '6762d76d002bfbea09d3';

        let existingDocument;
        try {
            existingDocument = await databases.getDocument(databaseId, collectionId, userId);
        } catch (error) {
            if (error.code === 404) {
                console.log("Document not found, creating a new one");
                // Create a new document if not found
                await databases.createDocument(
                    databaseId,
                    collectionId,
                    userId,
                    { score: [newScore] }
                );
                console.log("New document created with score:", newScore);
                return true;
            } else {
                throw error;
            }
        }

        // Update existing document
        const currentScores = existingDocument.score || [];
        if (!Array.isArray(currentScores)) throw new Error("Invalid score data");

        const updatedScores = [...currentScores, newScore];

        await databases.updateDocument(
            databaseId,
            collectionId,
            userId,
            { score: updatedScores }
        );

        console.log("Score updated successfully:", updatedScores);
        return true;

    } catch (error) {
        console.error("Error adding score:", error.message);
        return false;
    }
};



// Get the user's scores
export const getScores = async () => {
    try {
        const user = await account.get(); // Get the logged-in user
        if (!user) throw new Error("User not authenticated");

        const userId = user.$id;

        // Define database and collection IDs
        const databaseId = '6762ba08003bd5a85e08';
        const collectionId = '6762d76d002bfbea09d3';

        const document = await databases.getDocument(databaseId, collectionId, userId);
        return document.score || [];

    } catch (error) {
        console.error("Error getting scores:", error.message);
        return [];
    }
};