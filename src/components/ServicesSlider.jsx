import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import pro_1 from '../assets/Branding kit.png';
import pro_2 from '../assets/Web design.png';

const services = [
  {
    id: 1,
    title: 'BRANDING',
    image: pro_1,
  },
  {
    id: 2,
    title: 'WEB DESIGNING',
    image: pro_2,
  },
  {
    id: 3,
    title: 'PRINTING AND RELATED WORKS',
    image: pro_2,
  },
];

const ServiceCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);

  useEffect(() => {
    const updateItemsToShow = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setItemsToShow(services.length); 
      } else if (width >= 768) {
        setItemsToShow(2); 
      } else {
        setItemsToShow(1); 
      }
    };

    updateItemsToShow(); 
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? services.length - itemsToShow : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      (prev + 1) % (services.length - itemsToShow + 1)
    );
  };

  const visibleServices = services.slice(
    currentIndex,
    currentIndex + itemsToShow
  );

  const isCarousel = itemsToShow < services.length;

  return (
    <div className="w-full bg-white pt-20 pb-10">
      <div className="max-w-5xl mx-auto px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-2">SERVICES</h2>
        <div className="w-20 h-1 bg-[#FBAC20] mx-auto mb-6 rounded"></div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center">
          {isCarousel && (
            <button
              onClick={handlePrev}
              className="absolute -left-3 top-1/2 transform -translate-y-1/2 z-10 rounded-full text-gray-600"
            >
              <IoIosArrowBack size={34} />
            </button>
          )}

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 overflow-hidden w-full">
            <div className="w-full flex justify-center flex-wrap gap-6">
              {visibleServices.map((service) => (
                <div
                  key={service.id}
                  className="rounded-xl p-4 w-full md:w-[45%] lg:w-[300px]"
                >
                  <div className="border-2 border-[#FBAC20] h-[250px] w-full flex items-center justify-center">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-[220px] w-[240px] object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold mt-4 text-gray-600">
                    {service.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {isCarousel && (
            <button
              onClick={handleNext}
              className="absolute -right-3 top-1/2 transform -translate-y-1/2 z-10 rounded-full text-gray-600"
            >
              <IoIosArrowForward size={34} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCarousel;



