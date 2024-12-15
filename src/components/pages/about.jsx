import React, { useState } from 'react';

function About() {
    
    return (
        <div>
           
            <section className="bg-[#FCFCFC] text-center py-24 flex justify-center items-center flex-col" id="about">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Us</h2>
                <p className="text-lg sm:text-xl px-4 sm:px-16 mb-8 text-justify">
                    We are a team of passionate individuals dedicated to delivering innovative solutions to help businesses grow and thrive in the digital age. 
                    Our mission is to provide high-quality services and create lasting relationships with our clients. Our approach focuses on customer satisfaction, technological expertise, and seamless delivery of services. 
                            We aim to provide scalable and adaptable solutions that evolve with the needs of our clients. 
                            Our team is committed to continuous learning and adopting emerging trends to stay ahead of the curve.

              </p>
                <div className="text-center mb-12">
                    <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Our Mission</h3>
                    <p className="text-lg sm:text-xl px-4 sm:px-16">
                        Our mission is to empower businesses with cutting-edge technology and creative solutions, enabling them to achieve their goals and make a positive impact in their industries. We believe in the power of collaboration and innovative thinking to deliver impactful results. Our team works closely with clients to understand their unique challenges, providing tailored solutions that drive growth and success. By focusing on sustainability and long-term goals, we aim to build partnerships that stand the test of time.
                    </p>
                </div>

               
                <div className="flex flex-wrap justify-center gap-8">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-80">
                        <img src="https://media.licdn.com/dms/image/v2/D4D03AQF6PAjCjtkh1A/profile-displayphoto-shrink_800_800/B4DZOMVVlxHUAc-/0/1733226226152?e=1740009600&v=beta&t=ZURiXUL1wc7YiivbKMQgoemSNG_lce8J5DViZflALNw" alt="Team Member" className="rounded-full mb-4 mx-auto" />
                        <h4 className="text-xl font-semibold mb-2">Subesh Yadav</h4>
                        <p className="text-lg">Team Member</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
