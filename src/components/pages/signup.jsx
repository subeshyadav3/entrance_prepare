import { useState } from "react";
import { signup } from "../authentication/server";
import { Navigate, useNavigate } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate();
    
    const handleSignup = async (e) => {
        console.log(name,email, password);
        e.preventDefault();  // Prevents the form from submitting normally
        try{
            await signup(name,email, password);  // Calls the signup function
            navigate('/login');
        }
        catch(e){
            console.log("error:",e);
        }   
        
    };

    return (
        <div className="w-full flex justify-center items-center mt-20 mb-20 bg-[#FCFCFC]">
            <div className="h-[350px] bg-white p-8 shadow-lg rounded-lg">
                <form className="flex flex-col space-y-4" onSubmit={handleSignup}>
                    <h1>Create an Account </h1>
                    <input
                        type="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
