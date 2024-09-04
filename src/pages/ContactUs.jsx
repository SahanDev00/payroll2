import React, { useEffect } from 'react'

const ContactUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  
  return (
    <div className='mb-10 mt-20 w-full'>
        <div className='w-full clip-curve-reverse bg-blue h-[200px] flex flex-col items-center justify-center'>
            <p className='text-center text-white text-lg font-semibold uppercase'>Contact Us</p>
            <h1 className='text-white text-5xl mt-2 font-bold zoom-up'>WE'D LOVE TO HEAR FROM YOU!</h1>
        </div>
        <div className='grid grid-cols-2 w-[60%] mx-auto mt-20'>
            <div className='w-[80%] h-full'>
                <h1 className='text-blue/90 text-2xl font-semibold uppercase'>Complete the form to have a representative reach out to you.</h1>
                <form className='mt-5 space-y-4'>
                    <div className='flex flex-col'>
                        <label className='text-black/80'>Full Name</label>
                        <input type="text" className='h-[30px] mt-1 border border-black/20 rounded pl-1' placeholder='John' required/>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-black/80'>Email</label>
                        <input type="email" className='h-[30px] mt-1 border border-black/20 rounded pl-1' placeholder='John@gmail.com' required/>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-black/80'>Mobile Number</label>
                        <input type="text" className='h-[30px] mt-1 border border-black/20 rounded pl-1' placeholder='+94123456789' required/>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-black/80'>Province</label>
                        <input type="text" className='h-[30px] mt-1 border border-black/20 rounded pl-1' placeholder='Colombo' required/>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-black/80'>Message</label>
                        <textarea className='h-[80px] border border-black/20 rounded' required/>
                    </div>
                    <button type='submit' className='py-2 px-4 rounded-lg bg-blue/95 text-white font-semibold hover:bg-blue'>SUBMIT</button>
                </form>
            </div>
            <div className='w-full flex flex-col items-center justify-center mx-auto'>
                <h1 className='text-center text-blue text-4xl font-bold'>emPOWER PAYROLL</h1>
                <div className='flex justify-between items-center w-full mt-3'>
                    <div className='mx-auto w-full'>
                        <p className='text-xl text-primary mt-5 font-semibold text-center'>Colombo Branch</p>
                        <p className='mt-2 font-semibold text-lg text-center text-black/80'>412/D1/1,<br/>Nawala Road,<br/>Rajagiriya,<br/>SRI LANKA</p>
                    </div>
                    <div className='mx-auto w-full'>
                        <p className='text-xl text-primary mt-5 font-semibold text-center'>Kurunegala Branch</p>
                        <p className='mt-2 font-semibold text-lg text-center text-black/80'>307/1/2,<br/>Negombo Road,,<br/>Kurunegala,<br/>SRI LANKA</p>
                    </div>                  
                </div>
                <div className='flex justify-between items-center w-full mt-3'>
                    <div className='mx-auto w-full'>
                        <p className='text-xl text-primary mt-5 font-semibold text-center'>Hotline</p>
                        <p className='mt-2 font-semibold text-lg text-center text-black/80'>(+94) 77 266 8411</p>
                        <p className='mt-2 font-semibold text-lg text-center text-black/80'>(+94) 77 505 5785</p>
                        <p className='mt-2 font-semibold text-lg text-center text-black/80'>(+94) 77 348 1810</p>
                    </div>
                    <div className='mx-auto w-full'>
                        <p className='text-xl text-primary mt-5 font-semibold text-center'>Telephone</p>
                        <p className='mt-2 font-semibold text-lg text-center text-black/80'>(+94) 11 36 47 007 - Colombo</p>
                        <p className='mt-2 font-semibold text-lg text-center text-black/80'>(+94) 37 45 49 444 - Kurunegala</p>
                    </div>                  
                </div>
                <div className='flex justify-between items-center w-full mt-3'>
                    <div className='mx-auto w-full flex flex-col justify-center'>
                        <p className='text-xl text-primary mt-5 font-semibold text-center'>Email</p>
                        <a href='https://info@exesmart.com' className='mt-2 font-semibold text-lg text-center text-black/80 hover:text-blue/90'>info@exesmart.com</a>
                    </div>
                    <div className='mx-auto w-full flex flex-col justify-center'>
                        <p className='text-xl text-primary mt-5 font-semibold text-center'>Website</p>
                        <a href='https://www.exesmart.com' className='mt-2 font-semibold text-lg text-center text-black/80 hover:text-blue/90'>www.exesmart.com</a>
                    </div>                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs