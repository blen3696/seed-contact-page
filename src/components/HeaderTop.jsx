import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png'; 
import slide1 from '../assets/BC Card.png'; 
import slide2 from '../assets/Web design.png';
import slide3 from '../assets/small card.png';

const slides = [slide1, slide2, slide3];

const HeaderTop = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 mx-3 left-0 w-full h-[15vh] z-30 flex justify-between items-center bg-[#0F1B2B] px-6 py-2 ">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-12 w-auto" />
      </div>

      {/* Image Slider */}
      <div className="w-40 md:w-60 h-25 md:h-30 py-3 mt-4 md:mt-8 overflow-hidden">
        <img
          src={slides[current]}
          alt="Slide"
          className="w-[140px] h-[90px] md:w-[170px] md:h-[110px]  mx-auto object-contain transition duration-700 ease-in-out"
        />
      </div>
    </div>
  );
};

export default HeaderTop;
