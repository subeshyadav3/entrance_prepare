import React from 'react';
import { Outlet, Link } from 'react-router-dom';
// import { motion } from "motion/react"

const Nav = () => {
    const [mobile, setMobile] = React.useState(false);
    const [hamburger, setHamBurger] = React.useState(false);

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 650) {
                setMobile(true);
            } else {
                setMobile(false);
            }
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])


  
    return (
        <div>

            {!mobile ? (
                <nav className="bg-violet-100 text-black text-xl h-[60px] flex justify-around items-center">
                    <div className="flex justify-center space-x-4">
                        <Link to="/" className="relative group text-black hover:text-purple-800 transition-colors duration-300">
                            Home
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-purple-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                        <Link to="/store" className="relative group text-black hover:text-purple-800 transition-colors duration-300">
                            Store
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-purple-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                        <Link to="/about" className="relative group text-black hover:text-purple-800 transition-colors duration-300">
                            About Us
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-purple-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                        <Link to="/contact" className="relative group text-black hover:text-purple-800 transition-colors duration-300">
                            Contact Us
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-purple-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <Link to="/login" className="rounded-md p-2 bg-[#942192] relative group text-white hover:text-purple-800 transition-colors duration-300">
                            Login
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-purple-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                        <Link to="/logout" className="rounded-md p-2 bg-[#942192] relative group text-white hover:text-purple-800 transition-colors duration-300">
                            Logout
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-purple-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                    </div>
                </nav>
            ) : (
                <nav  className="bg-violet-100 border-b-2 border-purple-200 text-black text-xl flex justify-center items-end pr-5 flex-col " style={!hamburger ? { height: "80px" } : { height: "100%" }}>
                    {hamburger ? (
                        <div
                            className="flex flex-col justify-around items-center "
                            style={{ width: '100vw', height: '100vh', position: 'relative' }}
                        >
                            <div
                                className="absolute top-5 right-5 text-3xl cursor-pointer"
                                onClick={() => setHamBurger(false)}
                            >
                                X
                            </div>

                            <ul className="flex flex-col text-2xl items-center gap-6">
                                <li>
                                    <Link to="/" className="relative group text-black hover:text-purple-800 transition-colors duration-300">
                                        Home
                                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-purple-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/store" className="relative group text-black hover:text-purple-800 transition-colors duration-300">
                                        Store
                                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-purple-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="relative group text-black hover:text-purple-800 transition-colors duration-300">
                                        About Us
                                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-purple-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="relative group text-black hover:text-purple-800 transition-colors duration-300">
                                        Contact Us
                                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-purple-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                                    </Link>
                                </li>

                                <div className='flex flex-row gap-10 m-10'>
                                    <li>
                                        <Link to="/login" className="rounded-md p-2 bg-[#942192] relative group text-white hover:text-white transition-colors duration-300">
                                            Login
                                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-purple-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/logout" className="rounded-md p-2 bg-[#942192] relative group text-white hover:text-white transition-colors duration-300">
                                            Logout
                                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-purple-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                                        </Link>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="80px"
                            height="40px"
                            viewBox="0 0 10 50"
                            className="cursor-pointer"
                            onClick={() => setHamBurger(true)}
                        >
                            <path
                                d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"
                                fill="#6A0DAD" 
                            />
                        </svg>
                    )}
                </nav>
            )}

        
            <Outlet />

        </div>
    );
};

export default Nav;
