import React from 'react';
import bgImg from '../../../assets/home/banner-1.jpg';
const Hero = () => {
    return (
        <div className='min-h-screen bg-cover' style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="min-h-screen flex justify-start pl-11 text-white items-center bg-black bg-opacity-60">
                <div className="">
                    <div className="space-y-4">
                        <h3 className='md:text-4xl text-2xl'>WE PROVIDE</h3>
                        <h1 className='md:text-7xl text-4xl font-bold '>Best Online Drivers Journey</h1>
                        <div className="md:w-1/2">
                            <p className=''>Are you looking to obtain your driver's license or improve your driving skills? Look no further than our state-of-the-art e-learning drivers platform, where you can learn at your own pace and gain the knowledge and confidence to become a safe and responsible driver.</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-5">
                            <button className='px-7 py-3 rounded-lg bg-secondary font-bold uppercase'>Join Today</button>
                            <button className='px-7 py-[10px] bg-opacity-80 hover:bg-white hover:text-black hover:outline-white duration-200  rounded-lg bg-transparent outline  font-bold uppercase'>View Courses</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;