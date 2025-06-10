import React, { useState } from 'react'
import heroImg from '../assets/hero.jpg'
import profile from '../assets/image.jpg'
import bgImg from '../assets/hero.jpg'
import PaymentSection from '../components/PaymentSection'
import PartnerLogoSlider from '../components/PartnerLogoSlider'
import HeaderTop from '../components/HeaderTop';


import {
  FaEnvelope,
  FaRegClock,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaLinkedin,
} from 'react-icons/fa'
import { FaTelegramPlane } from 'react-icons/fa';  
import { BsWhatsapp } from 'react-icons/bs';  
import ProductCarousel from '../components/Products'
import AppointmentForm from '../components/AppointmentForm'
import TestimonialsSlider from '../components/TestimonialsSlider'
import QRCodePage from '../components/QRCode'
import Footer from '../components/Footer'
import ServiceCarousel from '../components/ServicesSlider'
import { useTranslation } from 'react-i18next';


const Hero = () => {
  const { t } = useTranslation();
 

  return (
    <div className="relative overflow-x-hidden min-h-screen font-sans">
      {/*Full-page background image */}
       <HeaderTop />
      <div className="absolute inset-0 -z-30 bg-gray-200">
        {/* <img
          src={bgImg}
          alt="Full Background"
          className="w-full h-full object-cover"
        /> */}
      </div>
      <div className="absolute inset-0 bg-gray-300/70 -z-20" />
      <div className="absolute top-[-32rem] left-[-1.1rem] right-0 w-screen lg:w-[102%] border-4 border-gray-500 overflow-hidden rounded-b-[100px] transform rotate-[-5deg] md:rotate-[-4.7deg] z-10">
        {/* <img
          src={heroImg}
          alt="Hero"
          className="object-cover w-screen h-[47.75rem]"
        /> */}
        <div className="object-cover w-screen h-[47.75rem] bg-[#0F1B2B]"></div>
      </div>

      {/* Profile Card */}
      <div className="absolute top-[20rem] md:top-[18rem] left-1/2 lg:left-[40%] transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="flex flex-col items-center sm:flex-row sm:items-end text-black p-4 rounded-2xl">
          <img
            src={profile}
            alt="Profile"
            className="w-[12rem] h-[14rem]  border-4 border-gray-100 object-cover rounded-[30px]"
          />
          <div className="mt-5 sm:ml-8 text-center sm:text-left">
            <h1 className=" md:text-2xl font-roboto w-[13rem] md:w-[16rem] text-xl font-bold bg-gradient-to-l from-[#FBAC20] to-black bg-clip-text text-transparent">
           { t('Alazare Shiferaw')}
            </h1>
            <p className="text-lg w-[13rem]  sm:text-lg md:text-lg font-bold text-[#FBAC20] mb-6">
           { t('General Manager')}
            </p>
          </div>
        </div>
      </div>

     
      <div className="pt-[26rem] max-w-5xl mt-13 mx-auto px-10 text-center">
      <p className="text-gray-900 text-[16px] mb-6">
       {t('We aim to lead East Africa in tech-driven engineering and education')}
      </p>
      {/* <p className="text-gray-900 text-[16px] mt-10 mb-6 hidden lg:block">
       We aim to lead East Africa in tech-driven engineering and education,
        helping businesses optimize, empower teams, and innovate through consulting, training, and research.
      </p> */}

     {/* Contact Info Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 min-h-fit">
            <a href="mailto:alazare910700906@gmail.com" className="block">
              <div className="flex items-center bg-gray-100 px-4 py-3 rounded-xl shadow-sm hover:scale-95 transition-transform duration-300">
                <FaEnvelope className="text-2xl text-[#FBAC20] mr-4" />
                <div className="text-left text-[12px]">
                  <p className="font-semibold text-[#FBAC20]">alazare910700906@gmail.com</p>
                  <p className="text-sm text-gray-600">{t('Email')}</p>
                </div>
              </div>
            </a>

            <a href="tel:+251910700960" className="block">
              <div className="flex items-center bg-gray-100 px-4 py-3 rounded-xl shadow-sm hover:scale-95 transition-transform duration-300">
                <FaPhone className="text-2xl text-[#FBAC20] mr-4" />
                <div className="text-left text-[12px]">
                  <p className="font-semibold text-[#FBAC20]">+251 910700960</p>
                  <p className="text-sm text-gray-600">{t('Mobile Number')}</p>
                </div>
              </div>
            </a>

           
          </div>


        {/* Social Icons */}
        <div className="flex justify-center gap-10 text-2xl text-[#FBAC20] mb-16">
             <a href="https://maps.app.goo.gl/piX58dU1NGhiye5c7" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:text-[#faf7f2]  transition-transform duration-300">
          <FaMapMarkerAlt />
        </a>
        <a href="https://t.me/ASmemes" target="_blank" className="hover:scale-110 hover:text-[#faf7f2] transition-transform duration-300">
          <FaTelegramPlane/>
        </a>
        <a href="https://wa.me/qr/KDIXYIWZJNENK1" target="_blank" className="hover:scale-110 hover:text-[#faf7f2] transition-transform duration-300">
          <BsWhatsapp />
        </a>
        <a href="https://www.linkedin.com/in/alazare-shiferaw-797408141/" target="_blank" rel="noreferrer" className="hover:scale-110 hover:text-[#faf7f2]  transition-transform duration-300">
          <FaLinkedin />
        </a>
        </div>

      </div>

    <ProductCarousel />
    <ServiceCarousel />
    <AppointmentForm />
    <TestimonialsSlider />
    <QRCodePage />

    <div id="payment-section">
      <PaymentSection />
    </div>
    
    <PartnerLogoSlider />
    <Footer />
    </div>

  )
}

export default Hero






