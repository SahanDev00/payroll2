import React, { useEffect, useRef } from 'react'
import { TbReportMoney } from "react-icons/tb";
import { MdManageAccounts } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { MdPermDeviceInformation } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";

const Cards2 = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-floatUp');
        }
      });
    }, { threshold: 0.1 });

    cardsRef.current.forEach((card, index) => {
      if (card) {
        observer.observe(card);
        card.style.animationDelay = `${index * 0.2}s`; // Stagger animation by 0.2s for each card
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className='w-full h-full mt-20 mb-10'>
      <div className='w-[60%] h-full mx-auto'>
        <h1 className='text-5xl text-center font-bold uppercase text-black/80'>
            <span className='text-blue'>More than 65 </span> other reports related to…,
        </h1>
        <div className='flex items-center justify-between h-full mx-auto gap-5 mt-14'>
          {[{
            icon: <TbReportMoney size={80} />,
            text: 'Payroll',
          }, {
            icon: <FaUserGroup size={75} />,
            text: 'Attendance',
          }, {
            icon: <MdManageAccounts size={80} />,
            text: 'Accounting',
          }, {
            icon: <RiTeamFill size={80} />,
            text: 'Employees',
          }, {
            icon: <MdPermDeviceInformation size={80} />,
            text: 'HR',
          },
          {
            icon: <MdPermDeviceInformation size={80} />,
            text: 'Leave',
          }].map((card, index) => (
            <div
              key={index}
              ref={(el) => cardsRef.current[index] = el}
              className='w-full h-[250px] flex flex-col items-center pt-14 mx-auto group bg-blue/20 shadow-md cursor-default rounded-xl p-3 opacity-0 transform translate-y-10'
            >
              <div className='group-hover:rotate-6 duration-300 group-hover:text-blue'>
                {card.icon}
              </div>
              <p className='text-lg text-black/90 mt-3 text-center font-semibold group-hover:text-black/80'>
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards2;
