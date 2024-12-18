import { useState } from "react";
import { signup } from "../authentication/server";
import { Link } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isSignedUp, setIsSignedUp] = useState(false);
    let isHandling = false;

    const handleSignup = async (e) => {
        if (isHandling) return;
        isHandling = true;

        console.log(name,email, password);
        e.preventDefault();  
        try{
            await signup(name,email, password);  
            setIsSignedUp(true); 
        }
        catch(e){
            console.log("error:",e);
        }   
        
    };

 

    return (
        
        
        <div className="w-full flex justify-center items-center mt-20 mb-20 bg-[#FCFCFC]">
            <div className="h-[350px] bg-white p-8 shadow-lg rounded-lg ">
                {!isSignedUp? (   
                <div className="flex flex-col space-y-4" >
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
                        onClick={handleSignup}
                        onTouchStart={handleSignup}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </div>):(
                    <div className="flex justify-center items-center flex-col gap-5">
                    <h1>Account Created Successfully!</h1>
                    <h1>Move To Login</h1>
                    <Link to='/login' className="w-[70px] p-2  text-xl  bg-purple-600 rounded-md text-white">Login</Link>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Signup;