import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaGithub, FaDocker, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';

const icons = [
  <FaReact size={50} className="text-blue-500" />,
  <FaNodeJs size={50} className="text-green-500" />,
  <FaDatabase size={50} className="text-yellow-500" />,
  <FaGithub size={50} className="text-gray-500" />,
  <FaDocker size={50} className="text-blue-500" />,
  <FaPython size={50} className="text-yellow-500" />,
  <SiTailwindcss size={50} className="text-blue-500" />,
  <SiMongodb size={50} className="text-green-500" />,
  <FaReact size={50} className="text-blue-500" />,
  <FaNodeJs size={50} className="text-green-500" />,
  <FaDatabase size={50} className="text-yellow-500" />,
  <FaGithub size={50} className="text-gray-500" />,
  <FaDocker size={50} className="text-blue-500" />,
  <FaPython size={50} className="text-yellow-500" />,
  <SiTailwindcss size={50} className="text-blue-500" />,
  <SiMongodb size={50} className="text-green-500" />,
];

const IconSlider = () => {
  return (
    <div className="w-[60%] mx-auto overflow-hidden whitespace-nowrap py-4 relative mt-8">
        <h1 className='text-3xl text-black/80 font-bold text-center my-4 uppercase'>Our Clients</h1>
      <div className="flex animate-marquee mt-5">
        {icons.map((icon, index) => (
          <div key={index} className="mx-4">
            {icon}
          </div>
        ))}
        {icons.map((icon, index) => (
          <div key={index + icons.length} className="mx-4">
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconSlider;
