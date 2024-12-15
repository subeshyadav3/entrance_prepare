import React from 'react';

const Home = () => {
    return (
        <div className='flex flex-col'>
            <div className='relative w-full flex flex-row  bg-[#FCFCFC]  ' >
                <div className='flex flex-col w-full sm:w-1/2 sm:items-center sm:justify-start sm: p-7'>
                    <div>
                        <button className='flex justify-start border-b-2 border-[#942192] w-fit p-0.5 transition-all '>Engineering Entrance</button>
                        <p className='font-poppins font-bold text-3xl text-[#942192]'>Entrance Preparation<br />
                            For IOE
                        </p>
                        <p className='text-justify max-w-[300px] mt-3'>Unlock your full potential by preparing to get into the top colleges that shape your future. Enhance your learning, pursue your dreams, and secure a bright career with our expert-guided entrance preparation resources.</p>
                        <div className='flex flex-row gap-10 mb-10'>
                            <button className="flex justify-start p-4 mt-8 text-white cursor-pointer text-xl rounded-md bg-[#942192] w-fit animate-custom-bounce ">
                                Take Test
                            </button>
                            <button className="flex justify-start p-4 mt-8 text-xl rounded-md border-2 border-[#942192] w-fit transition duration-700 ease-in-out cursor-pointer">
                                Sign Up
                            </button>





                        </div>
                    </div>
                </div>

                <div className=' hidden sm:flex w-1/2   justify-center  items-center p-5'>
                    <img className='bg-cover max-w-[500px] min-w-[300px]  border-3' src="https://img.freepik.com/premium-vector/girl-is-working-checklist_118167-3651.jpg?w=740" alt="Home" />

                </div>

                <div class="custom-shape-divider-bottom-1734237866">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
            </div>

            <div className='h-[400px] flex flex-col sm:flex-row sm:gap-10 md:gap-20 sm:left-5  items-center justify-center gap-2 bg-[#FFF5F5] w-full'>
                <div className='flex flex-col gap-5 justify-center items-center'>
                    <img src="https://www.svgrepo.com/show/33758/idea.svg" className='w-20 h-20' alt="" />
                    <h1 className='font-poppins text-xl  text-[#942192] font-bold sm:text-2xl sm:ml-5 '>
                        Pulchowk Campus</h1>
                </div>
                <div>
                    <ul class="list-disc pl-5 mt-3 text-justify px-3 sm:text-xl">
                        <li><strong>Reputation:</strong> One of the top engineering campuses in Nepal.</li>
                        <li><strong>Experienced Faculty:</strong> Qualified professors with industry knowledge.</li>
                        <li><strong>Modern Facilities:</strong> Advanced labs and infrastructure for practical learning.</li>
                        <li><strong>Industry Links:</strong> Strong connections for internships and jobs.</li>
                        <li><strong>Diverse Community:</strong> A vibrant mix of students from across the country and beyond.</li>
                    </ul>

                </div>
            </div>

            <div className='flex flex-row w-full items-center bg-orange-100'>
                <div className='w-1/3 flex justify-center items-center  h-[230px]'>
                    <button className='text-3xl font-poppins font-bold text-[#942193]'>Faculties</button>
                </div>
                <div className='p-10'>
                    <ul class="relative pl-8 space-y-6 text-xl font-poppins font-bold">

                        <div class="absolute left-4 top-0 bottom-0 w-[2px] bg-[#942192]"></div>

                        <li class="relative flex items-center">
                            <div class="w-4 h-4 bg-[#942192] rounded-full absolute -left-6"></div>
                            Computer Engineering
                        </li>
                        <li class="relative flex items-center">
                            <div class="w-4 h-4 bg-[#942192] rounded-full absolute -left-6"></div>
                            Civil Engineering2
                        </li>
                        <li class="relative flex items-center">
                            <div class="w-4 h-4 bg-[#942192] rounded-full absolute -left-6"></div>
                            Eletronics Engineering
                        </li>
                        <li class="relative flex items-center">
                            <div class="w-4 h-4 bg-[#942192] rounded-full absolute -left-6"></div>
                            Mechanical Engineering
                        </li>
                        <li class="relative flex items-center">
                            <div class="w-4 h-4 bg-[#942192] rounded-full absolute -left-6"></div>
                            Architecture
                        </li>
                    </ul>

                    
                </div>
               
            </div>

            
            
        </div>
    );
};

export default Home;