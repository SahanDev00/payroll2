import React from 'react';

const StarRating = ({ rating }) => {
  const stars = Array(5).fill(false).map((_, index) => index < rating);

  return (
    <div className='flex items-center mx-auto'>
      {stars.map((filled, index) => (
        <svg
          key={index}
          className={`w-6 h-6 ${filled ? 'text-third' : 'text-black/60'}`}
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
