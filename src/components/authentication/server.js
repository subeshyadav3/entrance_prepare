// src/authentication/server.js
import { Client, Account,ID } from "appwrite";


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
export const signup = async (name,email, password) => {
    try {
        await account.create(name,email, password);
        console.log("Signed up successfully");

    } catch (e) {
        console.log("Signup failed", e);
        throw e;
    }};

        
// Logout function
export const logout = async () => {
    try {
        await account.deleteSession('current');  // 'current' deletes the active session
        console.log("Logged out successfully");
    } catch (e) {
        console.log("Logout failed", e);
    }
};