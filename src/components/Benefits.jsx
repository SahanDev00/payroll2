import React from 'react'
import { FaHeadset } from "react-icons/fa6";
import { ImTarget } from "react-icons/im";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import { FaFileCode } from "react-icons/fa";

const Benefits = () => {
  return (
    <div className='w-full bg-blue h-[500px] mt-28'>
        <div className='w-[60%] h-full mx-auto flex flex-col justify-start items-center'>
            <h1 className='text-5xl font-bold text-white text-center mt-14 mb-2'>BENEFITS BY <span className='text-primary'>emPOWER</span></h1>
            <div className='w-full h-full grid grid-cols-2 mt-5 mb-5'>
                <div className='w-full h-full flex items-center justify-center cursor-default'>
                    <div>
                        <FaHeadset size={60} className='text-white mr-7 mx-auto'/>
                    </div>
                    <div>
                        <p className='text-3xl text-white font-semibold'>24/7 Customer Support</p>
                        <p className='w-[80%] text-white/50 mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae soluta tempore voluptate error eius assumenda amet maiores doloribus, distinctio natus!</p>
                    </div>
                </div>
                <div className='w-full h-full flex items-center justify-center cursor-default'>
                    <div>
                        <ImTarget size={60} className='text-white mr-7 mx-auto'/>
                    </div>
                    <div>
                        <p className='text-3xl text-white font-semibold'>99.9% Accuracy</p>
                        <p className='w-[80%] text-white/50 mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae soluta tempore voluptate error eius assumenda amet maiores doloribus, distinctio natus!</p>
                    </div>
                </div>
                <div className='w-full h-full flex items-center justify-center cursor-default'>
                    <div>
                        <MdOutlineBrowserUpdated size={60} className='text-white mr-7 mx-auto'/>
                    </div>
                    <div>
                        <p className='text-3xl text-white font-semibold'>Free Updates</p>
                        <p className='w-[80%] text-white/50 mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae soluta tempore voluptate error eius assumenda amet maiores doloribus, distinctio natus!</p>
                    </div>
                </div>
                <div className='w-full h-full flex items-center justify-center cursor-default'>
                    <div>
                        <FaFileCode size={60} className='text-white mr-7 mx-auto'/>
                    </div>
                    <div>
                        <p className='text-3xl text-white font-semibold'>Latest Technologies</p>
                        <p className='w-[80%] text-white/50 mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae soluta tempore voluptate error eius assumenda amet maiores doloribus, distinctio natus!</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Benefits