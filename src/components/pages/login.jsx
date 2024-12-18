import { useEffect, useState } from "react";
import { login } from "../authentication/server";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isHandling, setIsHandling] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        if (isHandling) return;
        setIsHandling(true);

        if (!email || !password) {
            setError("Both email and password are required.");
            setIsHandling(false);
            return;
        }

        try {
            await login(email, password);
            setIsLoggedIn(true);

            setTimeout(() => {
                navigate('/');
            }, 3000);
        } catch (e) {
            console.log("Error:", e);
            setError("Login failed. Please try again.");
        } finally {
            setIsHandling(false);
        }
    };

    useEffect(() => {
        if (isLoggedIn) {
            console.log('Logged in successfully!');
        }
    }, [isLoggedIn]);

    return (
        <div className="w-full flex justify-center items-center mt-20 mb-20 bg-[#FCFCFC]">
            <div className="h-[350px] bg-white p-8 shadow-lg rounded-lg">
                {!isLoggedIn ? (
                    <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
                        <h1>Fill in The Login Form</h1>
                        {error && <p className="text-red-500">{error}</p>}
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
                            disabled={isHandling}
                            className={`px-4 py-2 rounded-md ${isHandling ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"} text-white`}
                        >
                            {isHandling ? "Processing..." : "Submit"}
                        </button>
                    </form>
                ) : (
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
