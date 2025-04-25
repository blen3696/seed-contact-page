import React, { useState } from 'react'
import heroImg from '../assets/hero.jpg'
import profile from '../assets/image.jpg'
import bgImg from '../assets/hero.jpg'
import PaymentSection from '../components/PaymentSection'
import PartnerLogoSlider from '../components/PartnerLogoSlider'

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
import ServicesSlider from '../components/ServicesSlider'


const Home = () => {
 

  return (
    <div className="relative overflow-x-hidden min-h-screen font-sans">
      {/* 🔹 Full-page background image */}
      <div className="absolute inset-0 -z-30">
        <img
          src={bgImg}
          alt="Full Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gray-300/70 -z-20" />
      <div className="absolute top-[-34rem] left-[-1.5rem] right-0 w-screen border-4 border-gray-300 overflow-hidden rounded-b-[100px] transform rotate-[-5deg] md:rotate-[-4.7deg] z-10">
        <img
          src={heroImg}
          alt="Hero"
          className="object-cover w-screen h-[47.75rem]"
        />
      </div>

      {/* 🔹 Profile Card */}
      <div className="absolute top-[16rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="flex flex-col items-center sm:flex-row sm:items-end text-black p-4 rounded-2xl">
          <img
            src={profile}
            alt="Profile"
            className="w-[12rem] h-[14rem] sm:w-[13rem] sm:h-[16rem] border-4 border-white object-cover rounded-[30px]"
          />
          <div className="mt-5 sm:ml-8 text-center sm:text-left">
            <h1 className="text-LG sm:text-xl md:text-2xl font-roboto font-semibold">
            ALAZARE SHIFERAW
            </h1>
            <p className="text-lg sm:text-lg md:text-xl font-bold text-[#FBAC20]">
            General Manager
            </p>
          </div>
        </div>
      </div>

      {/* 🔹 Contact Info Section */}
      <div className="pt-[26rem] max-w-5xl mx-auto px-10 text-center">
      <p className="text-gray-800 text-[16px] mb-6">
        We aim to be East Africa’s leading provider of tech-driven engineering solutions and educational services,
        helping businesses optimize operations, empower teams, and drive innovation with our consulting, training, and research expertise.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 min-h-fit">
  <div className="flex items-center bg-gray-100 px-4 py-3 rounded-xl shadow-sm hover:scale-95 transition-transform duration-300">
    <FaEnvelope className="text-2xl text-[#FBAC20] mr-4" />
    <div className="text-left text-[12px]">
      <a href="mailto:alazare910700906@gmail.com" className="font-semibold text-[#FBAC20]">
        alazare910700906@gmail.com
      </a>
      <p className="text-sm text-gray-600">Email</p>
    </div>
  </div>

  <div className="flex items-center bg-gray-100 px-4 py-3 rounded-xl shadow-sm hover:scale-95 transition-transform duration-300">
    <FaPhone className="text-2xl text-[#FBAC20] mr-4" />
    <div className="text-left text-[12px]">
      <a href="tel:+251910700960" className="font-semibold text-[#FBAC20]">
        +251 910700960
      </a>
      <p className="text-sm text-gray-600">Mobile Number</p>
    </div>
  </div>

  <div className="flex items-center bg-gray-100 px-4 py-3 rounded-xl shadow-sm hover:scale-95 transition-transform duration-300">
    <FaRegClock className="text-2xl text-[#FBAC20] mr-4" />
    <div className="text-left text-[12px]">
      <p className="font-semibold text-[#FBAC20]">Mon - Fri, 9:00 AM - 5:00 PM</p>
      <p className="text-sm text-gray-600">Office Hours</p>
    </div>
  </div>

  <div className="flex items-center bg-gray-100 px-4 py-3 rounded-xl shadow-sm hover:scale-95 transition-transform duration-300">
    <FaMapMarkerAlt className="text-2xl text-[#FBAC20] mr-4" />
    <div className="text-left text-[12px]">
      <a 
        href="https://maps.app.goo.gl/piX58dU1NGhiye5c7" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="font-semibold text-[#FBAC20]"
      >
        Addis Ababa, Mexico
      </a>
      <p className="text-sm text-gray-600">Location</p>
        </div>
      </div>
    </div>


        {/* 🔹 Social Icons */}
        <div className="flex justify-center gap-10 text-2xl text-[#FBAC20] mb-16">
             <a href="http://www.facebook.com/profile.php?id=100092510080285" target="_blank" rel="noreferrer" className="hover:scale-110 transition">
          <FaFacebook />
        </a>
        <a href="https://t.me/ASmemes" target="_blank" className="hover:scale-110 transition">
          <FaTelegramPlane/>
        </a>
        <a href="https://wa.me/qr/KDIXYIWZJNENK1" target="_blank" className="hover:scale-110 transition">
          <BsWhatsapp />
        </a>
        <a href="https://www.linkedin.com/in/alazare-shiferaw-797408141/" target="_blank" rel="noreferrer" className="hover:scale-110  transition">
          <FaLinkedin />
        </a>
        </div>

      </div>

    <ProductCarousel />
    <ServicesSlider />

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

export default Home






