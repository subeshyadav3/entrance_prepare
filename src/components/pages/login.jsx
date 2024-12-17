import { useEffect, useState } from "react";
import { login } from "../authentication/server";
import { Navigate,useNavigate } from "react-router-dom";
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate=useNavigate();
    // const navigate = useNavigate(); // Uncomment if using navigation

    const handleLogin = async (e) => {
        console.log("Email:", email, "Password:", password);
        e.preventDefault();  // Prevents the form from submitting normally
        try{
            await login(email, password);  // Calls the signup function
            setIsLoggedIn(true); // Set isSignedUp to true after successful signup

            setTimeout(() => {
                navigate('/');  // Navigate to home after 3 seconds
            }, 3000);
        }
        catch(e){
            console.log("error:",e);
        }  
    };

    useEffect(() => {
        if (isLoggedIn) {
            // Uncomment if you want to navigate after login
            // navigate('/dashboard');  
            console.log('Logged in successfully!');
        }
    }, [isLoggedIn]);  // Will trigger when 'isLoggedIn' changes

    return (
        
            <div className="w-full flex justify-center items-center mt-20 mb-20 bg-[#FCFCFC]">
                <div className="h-[350px] bg-white p-8 shadow-lg rounded-lg">
                    {!isLoggedIn?(
                    <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
                        <h1>Fill in The Login Form</h1>
    
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
                    </form>): (
                        <div>
                            <h1>Logged in successfully!</h1>
                            <h1>moving to home....</h1>
                        </div>
            )}
                </div>
            </div>
        
    );
};

export default Login;
