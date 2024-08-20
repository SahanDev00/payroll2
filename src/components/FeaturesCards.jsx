import React, { useEffect, useRef } from 'react';
import SalaryPic from "../images/salary.PNG";

const FeaturesCards = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // Trigger when 10% of the card is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-floatUp');
        }
      });
    }, observerOptions);

    // Copy cardRefs.current to a variable
    const refs = cardRefs.current;

    refs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className='w-full h-full mb-32'>
      <h1 className='text-5xl text-center mt-10 font-bold text-black/80 leading-tight'>
        <span className='text-blue block'>Customize and Configure</span>Your Payroll like Never Before.
      </h1>
      {/* 1st Card */}
      <div
        className='w-[60%] mx-auto mt-14 h-full opacity-0 transform translate-y-10'
        ref={(el) => (cardRefs.current[0] = el)}
        style={{ animationDelay: '0.3s' }}  // Delay for the 1st card
      >
        <div className='flex w-full  items-center'>
          <div className='w-[55%]'>
            <h1 className='text-4xl text-black/80 font-bold'>
              Set Unlimited Number of <span className='font-bold text-primary/90'>Earnings and Deductions</span>  as You Wish, including...
            </h1>
            <p className='text-wrap w-[90%] mt-5 text-lg pl-5 text-black/80'>• Automated attendance allowances.</p>
            <p className='text-wrap w-[90%] mt-1 text-lg pl-5 text-black/80'>• Daily allowances.</p>
            <p className='text-wrap w-[90%] mt-1 text-lg pl-5 text-black/80'>• Monthly fixed allowances.</p>
            <p className='text-wrap w-[90%] mt-1 text-lg pl-5 text-black/80'>• Monthly non-recurring allowances.</p>
            <p className='text-wrap w-[90%] mt-1 text-lg pl-5 text-black/80'>• Attendance based daily allowances.</p>
            <p className='text-wrap w-[90%] mt-1 text-lg pl-5 text-black/80'>• Attendance based monthly allowances.</p>
            <p className='text-wrap w-[90%] mt-1 text-lg pl-5 text-black/80'>• Activity based payroll.</p>
            <p className='text-wrap w-[90%] mt-1 text-lg pl-5 text-black/80'>• Salary advances.</p>
            <p className='text-wrap w-[90%] mt-1 text-lg pl-5 text-black/80'>• Employee loan deductions.</p>
          </div>
          <div className='w-[45%] h-[300px] bg-secondary p-4 rounded-xl'>
            <img className='h-full w-full rounded-xl' src={SalaryPic} alt="" />
          </div>
        </div>
      </div>
      {/* 2nd Card */}
      <div
        className='w-[60%] mx-auto mt-14 h-full opacity-0 transform translate-y-10'
        ref={(el) => (cardRefs.current[1] = el)}
        style={{ animationDelay: '0.6s' }}  // Delay for the 2nd card
      >
        <div className='flex w-full items-center'>
          <div className='w-[45%] h-[300px] bg-primary p-4 rounded-xl'>
            <img className='h-full w-full rounded-xl' src={SalaryPic} alt="" />
          </div>
          <div className='w-[55%]'>
            <h1 className='text-4xl text-black/80 font-bold pl-14'>
              Process Your <span className='font-bold text-primary'>Payroll Easily and Reliably</span> with a Click of a Button.
            </h1>
            <p className='text-wrap mt-5 text-lg pl-16 text-black/80'>• Generate and email/print pay slips which will take your business to the higher standards.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCards;
