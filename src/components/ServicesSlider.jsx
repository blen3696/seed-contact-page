import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import pro_1 from '../assets/Branding kit.png';
import pro_2 from '../assets/Web design.png';
import pro_3 from '../assets/printing 2.png';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { useTranslation } from 'react-i18next';

const services = [
  {
    id: 1,
    title: 'Branding',
    image: pro_1,
  },
  {
    id: 2,
    title: 'Web Designing', 
    image: pro_2,
  },
  {
    id: 3,
    title: 'Printing and related work', 
    image: pro_3,
  },
];

const ServiceCarousel = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);

  useEffect(() => {
    const updateItemsToShow = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setItemsToShow(2); // max 3 on large screens
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
    <div className="w-full bg-white pt-10 pb-10">
      <div className="max-w-5xl mx-auto px-4 bg-white">
        <h2 className="text-[26px] font-bold text-center mb-2">{t('Services')}</h2>
        <div className="w-20 h-1 bg-[#FBAC20] mx-auto mb-6 rounded"></div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center">
          {isCarousel && (
            <button
              onClick={handlePrev}
              className="absolute -left-3 top-1/2 transform lg:-left-5 -translate-y-1/2 z-10 rounded-full text-gray-800"
            >
              <ArrowLeftIcon size={34} />
            </button>
          )}

          <div className="w-full overflow-hidden">
            <div className="flex justify-center gap-6 transition-all duration-300 ease-in-out">
              {visibleServices.map((service) => (
                <div
                  key={service.id}
                  className="rounded-xl p-4 w-full md:w-[45%] lg:w-[50%] flex-shrink-0"
                >
                  <div className="border-2 border-[#FBAC20] h-[250px] w-full flex items-center justify-center">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-[220px] w-[240px] object-contain"
                    />
                  </div>
                  <h3 className="text-md font-bold mt-4 text-gray-500 text-center">
                    {t(service.title)}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {isCarousel && (
            <button
              onClick={handleNext}
              className="absolute -right-3 top-1/2 lg:-right-5 transform -translate-y-1/2 z-10 rounded-full text-gray-800"
            >
              <ArrowRightIcon size={34} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCarousel;




