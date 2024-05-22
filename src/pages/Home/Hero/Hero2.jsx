import React from 'react';
import banner2 from "../../../assets/home/banner-2.mp4"

const Hero2 = () => {
    return (
        <div className="min-h-screen bg-cover relative">
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src={banner2} type="video/mp4" />
            </video>
            <div className="min-h-screen flex justify-start pl-11 items-center">
                <div className="bg-black bg-opacity-60 p-8 rounded-lg max-w-2xl">
                    <div className="space-y-4 text-white">
                        <h3 className="md:text-4xl text-2xl">WE PROVIDE</h3>
                        <h1 className="md:text-7xl text-4xl font-bold">Super Support</h1>
                        <div>
                            <p className="">
                                Whether you're a first-time driver or looking to refresh your knowledge, our platform
                                adapts to your learning style and pace. Enjoy the flexibility to study anytime,
                                anywhere, and receive personalized guidance from our expert instructors to ensure
                                you're fully prepared for your driving test and beyond.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-5">
                            <button className="px-7 py-3 rounded-lg bg-secondary font-bold uppercase">
                                Join Today
                            </button>
                            <button
                                className="px-7 py-[10px] bg-opacity-80 hover:bg-white hover:text-black hover:outline-white duration-200  rounded-lg bg-transparent outline  font-bold uppercase"
                            >
                                View Courses
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero2;