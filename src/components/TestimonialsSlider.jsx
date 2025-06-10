import React, { useEffect, useState } from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import ave1 from '../assets/avator 1.jpg';
import ave2 from '../assets/avator 2.jpg';
import { useTranslation } from 'react-i18next';


// Sample testimonials
const testimonials = [
  {
    name: 'Amanuel S.',
    image: ave1,
    quote: 'S.E.E.D has built an efficient, user-friendly, and reliable website that helped us build a digital brand and enhance our visibility.',
  },
  {
    name: 'Hanna T.',
    image: ave2,
    quote: 'They listened carefully to our needs and delivered beyond expectations with their innovative approach to design and functionality.',
  },
];

// Function to trim quote to 12 words
const trimQuote = (quote, maxWords = 12) => {
  const words = quote.split(' ');
  return words.length > maxWords
    ? words.slice(0, maxWords).join(' ') + '...'
    : quote;
};

const TestimonialsSlider = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slide with pause on hover
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const { name, image, quote } = testimonials[currentIndex];

  return (
    <div className="bg-white py-16 px-4 text-center relative overflow-hidden">
      <h2 className="text-[26px] font-bold mb-2">{t('Testimonials')}</h2>
      <div className="w-20 h-1 bg-[#FBAC20] mx-auto mb-3 rounded"></div>

      <div
        className="relative max-w-lg mx-auto bg-white p-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <FaQuoteLeft className="text-4xl text-[#f0bc62] absolute top-4 left-4" />
        <FaQuoteRight className="text-4xl text-[#f0bc62] absolute bottom-4 right-4" />

        <img
          src={image}
          alt={name}
          className="mx-auto rounded-lg w-30 h-30 object-cover border-4 border-[#FBAC20] shadow-md"
        />

        <div className="max-w-[80%] mx-auto">
          <p className="text-gray-700 mt-6 text-base leading-relaxed">
            {trimQuote(t(quote))}
          </p>
          <p className="mt-4 font-semibold text-[#FBAC20]">– {t(name)}</p>
        </div>
      </div>

      {/* Custom Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, idx) => (
          <span
            key={idx}
            className={`h-[6px] rounded-full transition-all ${
              currentIndex === idx ? 'w-5 bg-[#FBAC20]' : 'w-[6px] bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSlider;


