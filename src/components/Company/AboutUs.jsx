import React from 'react'
import pic1 from '../../images/user.png'
import GetStarted from '../GetStarted'

const AboutUs = () => {
  return (
    <div className=' mt-20 w-full'>
      <div className='w-full h-full mx-auto'>
        <div className='w-[60%] h-[400px] mx-auto flex flex-col items-center justify-center'>
            <p className='font-semibold text-black/80'>ABOUT US</p>
            <h1 className='font-bold text-5xl text-black/80'><span className='text-blue'>EXESMART</span> DYNAMICS (PVT) Ltd</h1>
            <p className='text-sm mt-1 text-black/80'>WE’RE AN IT COMPANY THAT PROVIDES THE LATEST AND DEPENDABLE IT SOLUTIONS TO AUTOMATE BUSINESSES.</p>
            <p className='mt-4 text-center font-semibold text-black/80 text-wrap'>Exesmart was founded in 2016 by a team of IT experts and software engineers with the aim of providing the latest and most dependable IT solutions for companies in Sri Lanka. Since our establishment, we have successfully introduced new software and web solutions to many renowned companies, enabling them to conduct their businesses with greater ease, security, and success. Our highly skilled and experienced team is committed to delivering the best and most reliable IT solutions that will facilitate smoother, safer, and stress-free business operations.</p>
        </div>
        <div className='w-full bg-blue clip-curve h-[500px] flex flex-col justify-center'>
          <div className='w-[60%] mx-auto grid grid-cols-2'>
            <div className='flex flex-col mx-auto items-center'>
                <h1 className='text-3xl text-primary font-semibold'>VISION</h1>
                <p className='text-wrap w-[80%] text-white/80 mt-3 text-center'>To become the foremost organization in providing top-notch IT solutions</p>
            </div>
            <div className='flex flex-col mx-auto items-center justify-center'>
              <h1 className='text-3xl text-primary font-semibold'>MISSION</h1>
              <p className='text-wrap w-[80%] text-white/80 mt-3 text-center'>To provide business organizations with reliable, versatile, and secure software solutions and web applications at a reasonable price, while ensuring that the best service and support are provided to our clients. Our solutions are fast, easy to use, and trusted, guaranteeing that our clients receive a superior experience.</p>
            </div>
          </div>
        </div>
        <div className='w-full mx-auto py-10 flex justify-center items-center bg-primary/10 h-[400px]'>
          <div className='w-[60%] mx-auto flex flex-col items-center justify-center '>
            <h1 className='text-black/80 font-bold text-4xl'>MEET OUR LEADERS</h1>
            <div className='w-full grid mt-14 grid-cols-3'>
              <div className='w-full flex items-center justify-center'>
                <img className='w-[100px] mr-5' src={pic1} alt="" />
                <div className='flex flex-col h-full w-full justify-center'>
                  <h1 className='text-xl font-bold text-blue'>LEADER 1</h1>
                  <p className='text-wrap font-semibold text-black/70'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, reiciendis?</p>
                </div>
              </div>
              <div className='w-full flex items-center justify-center'>
                <img className='w-[100px] mr-5' src={pic1} alt="" />
                <div className='flex flex-col h-full w-full justify-center'>
                  <h1 className='text-xl font-bold text-blue'>LEADER 2</h1>
                  <p className='text-wrap font-semibold text-black/70'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, reiciendis?</p>
                </div>
              </div>
              <div className='w-full flex items-center justify-center'>
                <img className='w-[100px] mr-5' src={pic1} alt="" />
                <div className='flex flex-col h-full w-full justify-center'>
                  <h1 className='text-xl font-bold text-blue'>LEADER 3</h1>
                  <p className='text-wrap font-semibold text-black/70'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, reiciendis?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GetStarted/>
    </div>
  )
}

export default AboutUs