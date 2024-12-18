import { useState } from "react";
import { signup } from "../authentication/server";
import { Link } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [isHandling, setIsHandling] = useState(false);
    const [error, setError] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();

        if (isHandling) return;
        setIsHandling(true);

        if (!name || !email || !password) {
            setError("All fields are required.");
            setIsHandling(false);
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Invalid email address.");
            setIsHandling(false);
            return;
        }

        try {
            await signup(name, email, password);
            setIsSignedUp(true);
        } catch (e) {
            console.log("Error:", e);
            setError("Signup failed. Please try again.");
        } finally {
            setIsHandling(false);
        }
    };

    return (
        <div className="w-full flex justify-center items-center mt-20 mb-20 bg-[#FCFCFC]">
            <div className="h-[350px] bg-white p-8 shadow-lg rounded-lg">
                {!isSignedUp ? (
                    <div className="flex flex-col space-y-4">
                        <h1>Create an Account</h1>
                        {error && <p className="text-red-500">{error}</p>}
                        <input
                            type="text"
                            placeholder="Name"
                            aria-label="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            aria-label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            aria-label="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            onClick={handleSignup}
                            disabled={isHandling}
                            className={`px-4 py-2 rounded-md ${
                                isHandling ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
                            } text-white`}
                        >
                            {isHandling ? "Processing..." : "Submit"}
                        </button>
                    </div>
                ) : (
                    <div className="flex justify-center items-center flex-col gap-5">
                        <h1>Account Created Successfully!</h1>
                        <h1>Move To Login</h1>
                        <Link to="/login" className="w-[70px] p-2 text-xl bg-purple-600 rounded-md text-white">
                            Login
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Signup;
