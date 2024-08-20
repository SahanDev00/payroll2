import React from 'react'
import Pic from "../images/heroPic1.jpg"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='top-28 relative w-full h-[600px]'>
        <div className='w-[60%] h-[500px] flex mx-auto items-center'>
            <div className='w-full h-full flex items-center'>
                <div>
                    <h2 className='text-2xl text-primary font-semibold mb-1'>PAYROLL • HR</h2>
                    <h1 className='text-5xl text-black/60'><span className='text-blue font-bold'>MANAGE YOUR EMPLOYEES EASILY </span> WITH OUR <span className='text-blue font-bold'>EMPLOYEE BROWSER.</span></h1>
                    <p className='text-wrap text-lg mt-2 text-black/70'>Create your employees under your employee structure.</p>
                    <p className='text-wrap text-lg text-black/70'>Complete management over your HR profile needs</p>
                    <div className='flex mt-5 gap-4'>
                        <Link to='/contact-us'>
                            <button className='py-2 px-3 bg-primary/70 rounded-full font-semibold text-white hover:bg-primary duration-200'>Book a Demo</button>
                        </Link>
                        <Link to='/payroll'>
                            <button className='py-2 px-3 border border-primary rounded-full font-semibold text-primary hover:bg-primary/70 hover:text-white duration-200'>Dive into emPower</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <img src={Pic} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero
