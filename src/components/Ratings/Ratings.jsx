import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pic from '../../images/user.png';
import StarRating from './StarRatings'; // Ensure this path is correct
import OtherRatings from './OtherRatings';
import IconSlider from './IconSlider';
import GetStarted2 from '../GetStarted2';
import Cards from '../Cards';

const testimonials = [
  {
    id: 1,
    text: "This service is amazing! It has completely transformed the way we handle payroll.",
    author: "John Doe",
    picture: pic,
    rating: 5,
  },
  {
    id: 2,
    text: "Fantastic experience. The customer support is excellent and the software is very user-friendly.",
    author: "Jane Smith",
    picture: pic,
    rating: 3,
  },
  {
    id: 3,
    text: "I highly recommend this product. It saves us so much time and hassle.",
    author: "Bob Johnson",
    picture: pic,
    rating: 4,
  }
];

const Ratings = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
  };

  return (
    <div className='w-full mt-24'>
      <div className='h-[150px] w-full bg-blue flex flex-col items-center justify-center'>
        <h1 className='text-white text-center font-bold text-6xl'>
          WONDER WHY em<span className='text-secondary'>PAYROLL</span>?
        </h1>
        <p className='text-xl text-white font-semibold mt-2'>
          Check Out What Our Smart Clients Say About Us!
        </p>
      </div>
      {/* Ratings */}
      <div className='w-[50%] mx-auto mt-10'>
        <h1 className='text-black/70 text-center text-3xl font-bold mb-4'>INDUSTRIAL EXPERTS <span className='text-third'>REVIEWS</span></h1>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className='h-[400px] flex flex-col items-center justify-center p-6 rounded-xl shadow-md bg-blue'>
              <img className='w-[200px] h-[200px] mx-auto my-4' src={testimonial.picture} alt={testimonial.author} />
              <div className='mx-auto w-full flex items-center justify-center'>
                <StarRating rating={testimonial.rating} />
              </div>
              <p className='text-center text-xl font-semibold text-gray-800 text-white mt-4'>
                "{testimonial.text}"
              </p>
              <p className='text-center text-[17px] text-gray-600 mt-4 text-white'>
                - {testimonial.author}
              </p>
            </div>
          ))}
        </Slider>
      </div>
      <IconSlider/>
      <OtherRatings/>
      <GetStarted2/>
      <Cards/>
    </div>
  );
};

export default Ratings;
