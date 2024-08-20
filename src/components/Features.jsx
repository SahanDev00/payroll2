import React from 'react'
import Picture from '../images/employees.PNG'

const Features = () => {
  return (
    <div className='w-full h-[800px] bg-blue clip-trapezoid '>
        <div className='w-[60%] h-full mx-auto'>
          <div className='w-full h-full flex items-center'>
              <div className='w-full h-full flex items-center'>
                  <img className='w-[510px] h-[400px]' src={Picture} alt="" />
              </div>
              <div className='w-full h-full flex items-center ml-10'>
                <div className='w-full'>
                  <h2 className='text-white/80 text-xl font-semibold'>Say Good Bye to the COMPLEXITY.</h2>
                  <h1 className='text-4xl text-white font-bold my-3'>Simplified shift configuration to suite your every need.</h1>
                  <p className=' text-wrap mt-1 text-white/80'>• Create unlimited number of shifts with OT and late configurations.</p>
                  <p className=' text-wrap mt-1 text-white/80'>• Put you employees under fixed shifts and rosters as you wish.</p>
                  <p className=' text-wrap mt-1 text-white/80'>• Configure holiday calendars.</p>
                  <p className=' text-wrap mt-1 text-white/80'>• Track employee attendance easily.</p>
                  <p className=' text-wrap mt-1 text-white/80'>• Compatible with most bio-metric devices available in Sri Lankan market.</p>
                  <p className=' text-wrap mt-1 text-white/80'>• Auto calculate worked hours, OT, and late deductions.</p>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Features