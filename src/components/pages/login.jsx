import Footer from "./footer";

const Login = () => {
    return (
        <div className="w-full flex justify-center items-center mt-20 mb-20 bg-[#FCFCFC]">
            <div className="  h-[350px]  bg-white p-8 shadow-lg rounded-lg">
                <form className="flex flex-col space-y-4">
                    <h1>Fill in The Login Form</h1>
                    <input
                        type="text"
                        placeholder="Name"
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
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

export default Login;