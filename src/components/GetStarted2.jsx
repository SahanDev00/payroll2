import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';

const GetStarted2 = () => {

  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    const observerOptions = {
      threshold: 0.1, // Trigger when 10% of the component is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-floatUp');
        }
      });
    }, observerOptions);

    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className='w-full h-full bg-blue py-10 mt-20'>
        <div className='w-[60%] mx-auto'>
            <h1 className='text-5xl font-bold text-center text-white'>LOOKING FOR A <span className='text-primary'>TRUSTABLE IT COMPANY</span>?</h1>
            <p className='w-[60%] text-center mx-auto mt-5 font-semibold text-xl text-white/80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo earum quia, aperiam perferendis dolor aperiam labore aliquam, saepe ab maxime voluptatem accusantium voluptates est sed velit. Libero ea nam numquam laudantium at maxime iure vitae omnis tenetur quaerat.</p>
            <div className='flex mx-auto w-full items-center justify-center mt-6 gap-3'>
              <Link to='/payroll'>
                <button className='px-5 py-2 font-semibold text-lg  rounded-xl bg-primary/80 text-white hover:bg-primary duration-300'>GET STARTED</button>
              </Link>
              <Link to='/contact-us'> 
                <button className='px-5 py-2 text-primary text-lg font-semibold border rounded-xl hover:bg-primary hover:text-white duration-300'>CONTACT US</button>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default GetStarted2