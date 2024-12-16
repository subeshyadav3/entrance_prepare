import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="flex bg-gray-800 text-white w-full h-[250px] items-center justify-center flex-row">
                <div className='flex flex-col gap-3 sm:pr-10 items-center sm:items-start'>
                    <h1 className='font-poppins font-bold border-b-[1px] border-purple-600'>Join Us</h1>
                    <input type="text" placeholder='email' className='p-2 rounded-md' />
                    <button className='rounded-md bg-purple-600 p-2'>Subscribe</button>
                </div>
                <div className=' flex-col hidden sm:flex gap-2 sm:p-10'>
                    <Link to='/'>Home</Link>
                    <Link to='/store'>Store</Link>
                    <Link to='/contact'>Contact Us</Link>
                    <Link to='/about'>About Us</Link>
                </div>
                
    </div>

    );
};

export default Footer;