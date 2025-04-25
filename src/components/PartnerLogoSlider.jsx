import React from 'react';
import partner1 from '../assets/partner-image-1.png';
import partner2 from '../assets/partner-image-2.png';
import partner3 from '../assets/partner-image-3.png';
import partner4 from '../assets/partner-image-4.png';



const PartnerLogoSlider = () => {
  const logos = [partner1, partner2, partner3, partner4];

  return (
    <div className="bg-white py-10 overflow-hidden">
      <h2 className="text-2xl font-bold mb-2 text-center">Our Partners</h2>
      <div className="w-20 h-1 bg-[#FBAC20] mx-auto mb-10 rounded"></div>

      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-slide">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-none w-1/4 px-6 flex justify-center items-center"
            >
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-slide {
            animation: slide 10s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default PartnerLogoSlider;



