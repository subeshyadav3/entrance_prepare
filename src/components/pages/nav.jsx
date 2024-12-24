    import React, { useState, useEffect } from 'react';
    import { Outlet, Link } from 'react-router-dom';
    import { account } from '../authentication/server';
    import { useLocation } from 'react-router-dom'; //to get route location
    import { logout } from '../authentication/server';
  
    const Nav = () => {
        const [mobile, setMobile] = useState(false);
        const [hamburger, setHamBurger] = useState(false);
        const [accountExists, setAccountExists] = useState(null);
        const location =useLocation();

        useEffect(() => {

            setHamBurger(false); //just disable the hamburger when load to another page 
            
        }, [location]); //to update the component when the location changes   
        // Check if the user is logged in
        const handleLogout = async () => {
            console.log("logout");
            alert("You have been logged out");
            await logout();
            setAccountExists(false);    
            }

        useEffect(() => {
            const checkAccount = async () => {
                try {
                    await account.get(); 
                    setAccountExists(true); // User is logged in
                } catch (error) {
                    setAccountExists(false); // User is not logged in
                }
            };

            checkAccount(); 
        }, [location]); 

        // Handle window resize for mobile view
        useEffect(() => {
            const handleResize = () => {
                if (window.innerWidth <= 650) {
                    setMobile(true);
                } else {
                    setMobile(false);
                }
            };

            window.addEventListener('resize', handleResize);
            handleResize();

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, []);

        return (
            <div>
                {!mobile ? (
                    <nav className="bg-violet-100 text-black text-xl h-[60px] flex justify-around items-center">
                        <div className="flex justify-center space-x-4">
                            <Link to="/" className="relative group text-black hover:text-purple-800 transition-colors duration-300">Home</Link>
                            <Link to="/test" className="relative group text-black hover:text-purple-800 transition-colors duration-300">Test</Link>
                            <Link to="/store" className="relative group text-black hover:text-purple-800 transition-colors duration-300">Store</Link>
                            <Link to="/about" className="relative group text-black hover:text-purple-800 transition-colors duration-300">About Us</Link>
                            <Link to="/contact" className="relative group text-black hover:text-purple-800 transition-colors duration-300">Contact Us</Link>
                        </div>

                        {accountExists === null ? (
                            <div>Loading...</div> 
                        ) : accountExists ? (
                            <div className="flex justify-center space-x-4">
                                <Link to="/dashboard"  className="rounded-md p-2 bg-[#942192] relative group text-white hover:text-purple-800 transition-colors duration-300">
                                    Dashboard
                                </Link>
                                <Link to="/" onClick={handleLogout} className="rounded-md p-2 bg-[#942192] relative group text-white hover:text-purple-800 transition-colors duration-300">
                                    Logout
                                </Link>
                            </div>
                        ) : (
                            <div className="flex justify-center space-x-4">
                                <Link to="/login" className="rounded-md p-2 bg-[#942192] relative group text-white hover:text-purple-800 transition-colors duration-300">
                                    Login
                                </Link>
                                <Link to="/signup" className="rounded-md p-2 bg-[#942192] relative group text-white hover:text-purple-800 transition-colors duration-300">
                                    SignUp
                                </Link>
                            </div>
                        )}
                    </nav>
                ) : (
                    <nav className="bg-violet-100 border-b-2 border-purple-200 text-black text-xl flex justify-center items-end pr-5 flex-col" style={!hamburger ? { height: "80px" } : { height: "100%" }}>
                        {hamburger ? (
                            <div className="flex flex-col justify-around items-center" style={{ width: '100vw', height: '100vh', position: 'relative' }}>
                                <div className="absolute top-5 right-5 text-3xl cursor-pointer" onClick={() => setHamBurger(false)}>X</div>

                                <ul className="flex flex-col text-2xl items-center gap-6">
                                    <li>
                                        <Link to="/" className="relative group text-black hover:text-purple-800 transition-colors duration-300">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/test" className="relative group text-black hover:text-purple-800 transition-colors duration-300">Test</Link>
                                    </li>
                                    <li>
                                        <Link to="/store" className="relative group text-black hover:text-purple-800 transition-colors duration-300">Store</Link>
                                    </li>
                                    <li>
                                        <Link to="/about" className="relative group text-black hover:text-purple-800 transition-colors duration-300">About Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact" className="relative group text-black hover:text-purple-800 transition-colors duration-300">Contact Us</Link>
                                    </li>
                                    {accountExists === null ? (
                                        <div>Loading...</div> 
                                    ) : accountExists ? (
                                        <div className='flex flex-row gap-10 m-10'>


                                            <Link to="/dashboard"  className="rounded-md p-2 bg-[#942192] relative group text-white hover:text-white transition-colors duration-300">Dashboard</Link>

                                            <Link to="/" onClick={handleLogout} className="rounded-md p-2 bg-[#942192] relative group text-white hover:text-white transition-colors duration-300">Logout</Link>
                                            
                                        </div>
                                    ) : (
                                        <div className='flex flex-row gap-10 m-10'>
                                            <Link to="/login" className="rounded-md p-2 bg-[#942192] relative group text-white hover:text-white transition-colors duration-300">Login</Link>
                                            <Link to="/signup" className="rounded-md p-2 bg-[#942192] relative group text-white hover:text-white transition-colors duration-300">SignUp</Link>
                                        </div>
                                    )}
                                </ul>
                            </div>
                        ) : (
                            <div className='flex flex-row w-full justify-between items-center'>
                            <img src="/logo.svg" width="100px" className='text-white' alt="" />
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80px" height="40px" viewBox="0 0 10 50" className="cursor-pointer" onClick={() => setHamBurger(true)}>
                                <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z" fill="#942192" />
                            </svg></div>
                        )}
                    </nav>
                )}
                
                <Outlet />
            </div>
        );
    };

    export default Nav;
