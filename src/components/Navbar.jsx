import React, { useState } from 'react';
import logo from '../images/logo.png';
import DarkMode from './DarkMode';
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiUsers } from "react-icons/hi2";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaBusinessTime } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { TbReportAnalytics } from "react-icons/tb";
import { FaRegNewspaper } from "react-icons/fa6";
import { BiSolidReport } from "react-icons/bi";
import { IoIosDocument } from "react-icons/io";
import { MdStarRate } from "react-icons/md";
import { FaPenSquare } from "react-icons/fa";
import { SlInfo } from "react-icons/sl";
import { FaLaptopCode } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [visibleDropdown, setVisibleDropdown] = useState(null);
  const [hideTimeout, setHideTimeout] = useState(null);

  const handleMouseEnter = (dropdownName) => {
    clearTimeout(hideTimeout);  // Cancel any hide timer when entering the link
    setVisibleDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    setHideTimeout(setTimeout(() => {
      setVisibleDropdown(null);
    }, 500)); // Set a timer to hide after 2 seconds
  };

  const handleDropdownEnter = () => {
    clearTimeout(hideTimeout);  // Cancel hide timer when hovering over the dropdown
  };

  const handleDropdownLeave = () => {
    setHideTimeout(setTimeout(() => {
      setVisibleDropdown(null);
    }, 2000)); // Set a timer to hide after 2 seconds if leaving dropdown
  };

  return (
    <div className='w-full h-[90px] fixed top-0 bg-white z-50 shadow-sm'>
        <div className='w-[60%] h-full flex items-center mx-auto justify-between'>
            <Link to='/' className='flex items-center h-full w-[60%]'>
                <img className='w-[180px]' src={logo} alt="emPower Payroll System" />
            </Link>
            <div className='flex w-full h-full items-center justify-center'>
                <div className='flex w-full h-full items-center'>
                    <ul className='flex justify-between w-full mx-7'>
                        <li 
                          className='cursor-pointer font-semibold text-black/60 hover:text-blue/90 flex items-center dropdown'
                          onMouseEnter={() => handleMouseEnter('emPayroll')}
                          onMouseLeave={handleMouseLeave}
                        ><Link  to='/payroll'>
                          emPayroll 
                          </Link>
                          <RiArrowDropDownLine size={25}/>
                          {visibleDropdown === 'emPayroll' && (
                            <div 
                              className='dropdown-content right-[25%] top-20 w-[750px] absolute drop-shadow-lg z-10 bg-white rounded'
                              onMouseEnter={handleDropdownEnter}
                              onMouseLeave={handleDropdownLeave}
                            >
                                <div className='w-[90%] h-full mx-auto my-4'>
                                    <h1 className='uppercase text-black/60 text-xl mt-5 ml-5 font-semibold'>Product features</h1>
                                    <hr className='border border-third'/>
                                    <div className='w-full h-full my-5'>
                                        <ul className='gap-2 grid grid-cols-3 text-blue'>
                                            <HashLink smooth={true} scroll={el => {
                                                  const yOffset = -100; // Adjust this value for the offset
                                                  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                                  window.scrollTo({ top: yCoordinate, behavior: 'smooth' });
                                                }} to='/payroll#HRM' className='py-1 px-2 rounded-xl flex items-center w-full h-[70px] hover:bg-third/40'>
                                                <HiUsers size={50}/>
                                                <li className='text-blue text-center text-sm'>Human Resource Module</li>
                                            </HashLink>
                                            <HashLink smooth={true} scroll={el => {
                                                  const yOffset = -100; // Adjust this value for the offset
                                                  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                                  window.scrollTo({ top: yCoordinate, behavior: 'smooth' });
                                                }} to='/payroll#HRM'className='py-1 px-2 rounded-xl flex items-center w-full h-[70px] hover:bg-third/40'>
                                                <FaMoneyCheckDollar size={50}/>
                                                <li className='text-blue text-center text-sm ml-3'>Payroll Module</li>
                                            </HashLink>
                                            <HashLink smooth={true} scroll={el => {
                                                  const yOffset = -100; // Adjust this value for the offset
                                                  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                                  window.scrollTo({ top: yCoordinate, behavior: 'smooth' });
                                                }} to='/payroll#TimeAttendance' className='py-1 px-2 rounded-xl flex items-center w-full h-[70px] hover:bg-third/40'>
                                                <FaBusinessTime size={50}/>
                                                <li className='text-blue text-center text-sm'>Time & Attendance Module</li>
                                            </HashLink>
                                            <HashLink smooth={true} scroll={el => {
                                                  const yOffset = -100; // Adjust this value for the offset
                                                  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                                  window.scrollTo({ top: yCoordinate, behavior: 'smooth' });
                                                }} to='/payroll#ActivityBased' className='py-1 px-2 rounded-xl flex items-center w-full h-[70px] hover:bg-third/40'>
                                                <FaListCheck size={50}/>
                                                <li className='text-blue text-center text-sm'>Activity Based Payroll Module</li>
                                            </HashLink>
                                            <HashLink smooth={true} scroll={el => {
                                                  const yOffset = -100; // Adjust this value for the offset
                                                  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                                  window.scrollTo({ top: yCoordinate, behavior: 'smooth' });
                                                }} to='/payroll#Reporting' className='py-1 px-2 rounded-xl flex items-center w-full h-[70px] hover:bg-third/40'>
                                                <TbReportAnalytics size={50}/>
                                                <li className='text-blue text-center text-sm'>Intergrated Reporting</li>
                                            </HashLink>
                                            <HashLink smooth={true} scroll={el => {
                                                  const yOffset = -100; // Adjust this value for the offset
                                                  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                                  window.scrollTo({ top: yCoordinate, behavior: 'smooth' });
                                                }} to='/payroll#HRIS' className='py-1 px-2 rounded-xl flex items-center w-full h-[70px] hover:bg-third/40'>
                                                <FaRegNewspaper size={50}/>
                                                <li className='text-blue text-center text-sm'>Online Portal (emPower HRIS Online)</li>
                                            </HashLink>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                          )}
                        </li>
                        <li  
                          className='cursor-pointer font-semibold text-black/60 hover:text-blue/80 flex items-center dropdown'
                          onMouseEnter={() => handleMouseEnter('whyEmpayroll')}
                          onMouseLeave={handleMouseLeave}
                        >
                          Why emPayroll 
                          <RiArrowDropDownLine size={25}/>
                          {visibleDropdown === 'whyEmpayroll' && (
                            <div 
                              className='dropdown-content right-[30%] top-20 w-[500px] absolute drop-shadow-lg z-10 bg-white'
                              onMouseEnter={handleDropdownEnter}
                              onMouseLeave={handleDropdownLeave}
                            >
                              <div className='w-[90%] h-full mx-auto my-4'>
                                    <h1 className='uppercase text-black/60 text-xl mt-5 ml-5 font-semibold'>top ratings</h1>
                                    <hr className='border border-third'/>
                                    <div className='w-full h-full my-5'>
                                        <ul className='gap-2 grid grid-cols-2 text-blue'>
                                            <Link to='/ratings' className='py-1 px-2 rounded-xl flex items-center w-full h-[70px] hover:bg-third/40'>
                                                <MdStarRate size={50}/>
                                                <li className='text-blue text-center text-sm'>Ratings & Reviews</li>
                                            </Link>
                                            <Link to='/case-studies' className='py-1 px-2 rounded-xl flex items-center w-full h-[70px] hover:bg-third/40'>
                                                <BiSolidReport size={50}/>
                                                <li className='text-blue text-center text-sm ml-3'>Case Studies</li>
                                            </Link>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                          )}
                        </li>
                        <li 
                          className='cursor-pointer font-semibold text-black/60 hover:text-blue/80 flex items-center dropdown'
                          onMouseEnter={() => handleMouseEnter('resources')}
                          onMouseLeave={handleMouseLeave}
                        >
                          Resources 
                          <RiArrowDropDownLine size={25}/>
                          {visibleDropdown === 'resources' && (
                            <div 
                              className='dropdown-content right-[25%] top-20 w-[500px] absolute drop-shadow-lg z-10 bg-white'
                              onMouseEnter={handleDropdownEnter}
                              onMouseLeave={handleDropdownLeave}
                            >
                              <div className='w-[90%] h-full mx-auto my-4'>
                                    <h1 className='uppercase text-black/60 text-xl mt-5 ml-5 font-semibold'>information</h1>
                                    <hr className='border border-third'/>
                                    <div className='w-full h-full my-5'>
                                        <ul className='gap-2 grid grid-cols-2 text-blue'>
                                            <Link to='/documents' className='py-1 px-2 rounded-xl flex items-center w-full h-[70px] hover:bg-third/40'>
                                                <IoIosDocument size={50}/>
                                                <li className='text-blue text-center text-sm'>Documents</li>
                                            </Link>
                                            <Link to='/blogs' className='py-1 px-2 rounded-xl flex items-center w-full h-[70px] hover:bg-third/40'>
                                                <FaPenSquare size={50}/>
                                                <li className='text-blue text-center text-sm ml-3'>Blogs</li>
                                            </Link>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                          )}
                        </li>
                        <li 
                          className='cursor-pointer font-semibold text-black/60 hover:text-blue/80 flex items-center dropdown'
                          onMouseEnter={() => handleMouseEnter('company')}
                          onMouseLeave={handleMouseLeave}
                        >
                          Company 
                          <RiArrowDropDownLine size={25}/>
                          {visibleDropdown === 'company' && (
                            <div 
                              className='dropdown-content right-[20%] top-20 w-[500px] absolute drop-shadow-lg z-10 bg-white'
                              onMouseEnter={handleDropdownEnter}
                              onMouseLeave={handleDropdownLeave}
                            >
                              <div className='w-[90%] h-full mx-auto my-4 '>
                                    <h1 className='uppercase text-black/60 text-xl mt-5 ml-5 font-semibold'>emPower Payroll</h1>
                                    <hr className='border border-third'/>
                                    <div className='w-full h-full my-5'>
                                        <ul className='gap-2 grid grid-cols-2 text-blue'>
                                            <Link to='/about-us' className='py-1 px-2 rounded-xl flex items-center w-full h-[70px] hover:bg-third/40'>
                                                <SlInfo size={45}/>
                                                <li className='ml-3 text-blue text-center text-sm'>About Us</li>
                                            </Link>
                                            <Link to='/careers' className='py-1 px-2 rounded-xl flex items-center w-full h-[70px] hover:bg-third/40'>
                                                <FaLaptopCode size={50}/>
                                                <li className='text-blue text-center text-sm ml-3'>Careers</li>
                                            </Link>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                          )}
                        </li>
                    </ul>
                    <Link to='/contact-us' className='mr-10 py-2 px-3 rounded-full bg-blue/90 text-white font-semibold hover:bg-primary duration-200'>Contact</Link>
                </div>
                <DarkMode/>
            </div>
        </div>
    </div>
  )
}

export default Navbar;
