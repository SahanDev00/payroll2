import React, { useEffect } from 'react'
import HRM from '../components/Payroll/HRM'
import picture from '../images/empower.PNG'
import TimeAttendance from '../components/Payroll/TimeAttendance'
import ActivityBased from '../components/Payroll/ActivityBased'
import Reporting from '../components/Payroll/Reporting'
import HRIS from '../components/Payroll/HRIS'
import GetStarted from '../components/GetStarted'
import { Link } from 'react-scroll'
import { IoIosArrowRoundUp } from "react-icons/io";

const Payroll = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div id='payroll' className='w-full mt-24'>
      <div className='w-full h-[300px] bg-blue clip-curve-reverse flex flex-col items-center justify-center'>
        <h1 className='text-8xl text-center text-white font-bold zoom-up'>em<span className='text-primary'>POWER</span> PAYROLL</h1>
        <p className='text-white text-2xl font-semibold mt-2'>#1 PAYROLL SYSTEM FOR SMART BUSINESSESS</p>
      </div>
      <div className='w-full flex flex-col items-center justify-center mt-10'>
        <h1 className='text-black/80 text-5xl font-bold float-up'>em<span className='text-blue'>POWER</span> PAYROLL OVERVIEW</h1>
        <p className='w-[50%] text-center text-xl mt-5 font-semibold text-black/70 float-up'>emPower Payroll & HR system has the capability of calculating time-based payroll and activity-based
            payroll calculations. That means you can apply this system to any type of organization where employees 
            are getting paid in different patterns.
        </p>
        <img src={picture} alt="" className='mt-5 mb-10 float-up'/>
        <div className='w-[60%] flex flex-col mt-10 mb-10'>
          <h1 className='text-5xl font-bold text-center text-black/80 leading-tight'>THE SIX BASIC CONCEPTS THAT FORM em<span className='text-blue'>POWER PAYROLL & HR</span> ARE:</h1>
          <ol className='mt-14 text-3xl font-semibold text-black/80 space-y-2 ml-20'>
            <Link spy={true}
              smooth={true}
              offset={-100}
              duration={500} to='HRM' className='cursor-pointer hover:text-blue block'>1. Human Resources Module</Link>
            <Link spy={true}
              smooth={true}
              offset={-100}
              duration={500} to='HRM' className='cursor-pointer hover:text-blue block'>2. Payroll Module</Link>
            <Link spy={true}
              smooth={true}
              offset={-100}
              duration={500} to='TimeAttendance' className='cursor-pointer hover:text-blue block'>3. Time & Attendance Module</Link>
            <Link spy={true}
              smooth={true}
              offset={-100}
              duration={500} to='ActivityBased' className='cursor-pointer hover:text-blue block'>4. Activity Based Payroll Module</Link>
            <Link spy={true}
              smooth={true}
              offset={-100}
              duration={500} to='Reporting' className='cursor-pointer hover:text-blue block'>5. Integrated Reporting</Link>
            <Link spy={true}
              smooth={true}
              offset={-100}
              duration={500} to='HRIS' className='cursor-pointer hover:text-blue block'>6. Online Portal (emPower HRIS Online)</Link>
          </ol>
        </div>
      </div>
      <div>
        <HRM/>
        <TimeAttendance/>
        <ActivityBased/>
        <Reporting/>
        <HRIS/>
        <GetStarted/>
      </div>
      <Link spy={true}
            smooth={true}
            offset={-100}
            duration={500} 
            to='payroll'>
        <div className='bottom-5 right-5 fixed cursor-pointer z-50 border border-white'>
            <IoIosArrowRoundUp size={30} className='text-white bg-blue w-[50px] h-[45px]'/>
        </div>
      </Link>
    </div>
  )
}

export default Payroll