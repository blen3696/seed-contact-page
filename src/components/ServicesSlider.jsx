import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const servicesData = [
  [
    {
      title: 'Website Marketing',
      desc: 'We create high-performing websites that serve as your brand’s digital front door—designed to convert, optimized for search engines, and tailored to your business goals.',
    },
    {
      title: 'Content Marketing',
      desc: 'From blog posts to videos and infographics, we help craft compelling content that educates, engages, and turns audiences into loyal customers.',
    },
  ],
  [
    {
      title: 'Advocacy Marketing',
      desc: 'We build and nurture brand advocates by leveraging satisfied customers and key stakeholders to authentically promote your products or services.',
    },
    {
      title: 'Data-Driven Marketing',
      desc: 'Make smarter marketing decisions through analytics. We use real-time data to track performance and refine strategies for maximum ROI.',
    },
  ],
];

const ServicesSlider = () => {
  return (
    <div className="bg-white px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold mb-2 text-center">Our Services</h2>
      <div className="w-20 h-1 bg-[#FBAC20] mx-auto mb-10 rounded"></div>

      <div className="max-w-6xl mx-auto mb-12">
        <Carousel
          autoPlay
          infiniteLoop
          interval={6000}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          swipeable
          emulateTouch
          showArrows={true}
          className="rounded-lg"
        >
          {servicesData.map((group, idx) => (
            <div key={idx} className="flex flex-wrap justify-center gap-6 px-4 sm:px-8">
              {group.map((service, i) => (
                <div
                  key={i}
                  className="w-full sm:w-[80%] md:w-[45%] lg:w-[40%] xl:w-[35%] border-3 border-[#FBAC20] bg-white p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
                  <p className="text-center text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ServicesSlider;
