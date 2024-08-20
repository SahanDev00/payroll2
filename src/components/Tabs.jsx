import React from 'react';
import SalaryPic from "../images/salary.PNG";

const Tabs = () => {

  return (
    <div className='w-full h-[600px] bg-blue flex flex-col items-center'>
      <h1 className='text-5xl text-white font-bold text-center mt-14 uppercase'>Complete <span className='text-primary'>control</span> over <br /> your employee leave management.</h1>
      <div className='w-[60%] mx-auto grid grid-cols-2 h-full'>
          <div className='w-full flex items-center justify-center h-full flex-col'>
            <img src={SalaryPic} className='w-[90%] my-4 rounded-lg' alt="" />
            <p className='w-[90%] text-lg text-center text-white/70 font-semibold'>Set your employee leave configuration under wages board and shop and office act of Department of Labour in Sri Lanka.</p>
          </div>
          <div className='w-full flex items-center justify-center flex-col'>
            <img src={SalaryPic} className='w-[90%] my-4 rounded-lg' alt="" />
            <p className='w-[90%] text-lg text-center text-white/70 font-semibold'>Or set your own configurations of Annual, Casual and Sick leave entitlements.</p>
          </div>
      </div>
    </div>
  );
};

export default Tabs;
