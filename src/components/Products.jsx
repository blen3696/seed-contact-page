import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { IoCloseSharp } from "react-icons/io5";
import pro_1 from '../assets/BC Card.png';
import pro_1_large from '../assets/bc scan.png'; 
import pro_2 from '../assets/small card.png';
import pro_2_large from '../assets/bc scan.png';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { useTranslation } from 'react-i18next';

const products = [
  {
    id: 1,
    title: 'Custom Card', 
    price: 2000,
    image: pro_1,
    modalImage: pro_1_large,
     description: 'A modern and professional digital business card designed to make a lasting impression. Easily share your contact info, links, and social profiles with a sleek, interactive interface, accessible anytime, anywhere.',
  },
  {
    id: 2,
    title: 'Custom Phone Card', 
    price: 1000,
    image: pro_2,
    modalImage: pro_2_large,
     description: 'A compact, phone-backed digital business card designed for any professional. Instantly share your contact info, social links, or business profile,no apps, no paper, just seamless connection.',
  },
    
  
];
const ProductCarousel = () => {
  const { t } = useTranslation();
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalProduct, setModalProduct] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(1);



  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsPerPage(products.length);
      else if (window.innerWidth >= 768) setItemsPerPage(2);
      else setItemsPerPage(1);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSelect = (product) => {
    const updatedItems = selectedItems.some((item) => item.id === product.id)
      ? selectedItems.filter((item) => item.id !== product.id)
      : [...selectedItems, product];
    setSelectedItems(updatedItems);
  };

  const handleProceed = () => {
    const section = document.getElementById('payment-section');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const totalAmount = selectedItems.reduce((sum, item) => sum + item.price, 0);

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev - itemsPerPage;
      return newIndex < 0 ? products.length - itemsPerPage : newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev + itemsPerPage;
      return newIndex >= products.length ? 0 : newIndex;
    });
  };

  const handleImageClick = (product) => setModalProduct(product);
  const closeModal = () => setModalProduct(null);

  let visibleProducts = products.slice(currentIndex, currentIndex + itemsPerPage);
  if (visibleProducts.length < itemsPerPage) {
    visibleProducts = [...visibleProducts, ...products.slice(0, itemsPerPage - visibleProducts.length)];
  }

  return (
    <div className="w-full bg-white pt-10 pb-10">
      <div className="max-w-5xl mx-auto px-4 bg-white">
        <h2 className="text-[26px] font-bold text-center mb-2">{t('Products')}</h2>
        <div className="w-20 h-1 bg-[#FBAC20] mx-auto mb-6 rounded"></div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Arrows */}
          <button
            onClick={handlePrev}
            className="absolute -left-6 z-10 p-2 top-35 text-gray-800"
          >
            <ArrowLeftIcon size={40} />
          </button>

          <div className="flex justify-center items-center gap-6 overflow-hidden w-full">
            {visibleProducts.map((product) => (
              <div key={product.id} className="rounded-xl p-4 w-full md:w-[280px]">
                <div className="border-2 border-[#FBAC20] h-[260px] flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-[240px] w-[180px] object-contain cursor-pointer"
                    onClick={() => handleImageClick(product)}
                  />
                </div>
                <h3 className="text-md font-bold mt-4 text-gray-500">{t(product.title)}</h3>
                <button
                  onClick={() => handleSelect(product)}
                  className={`mt-3 w-full py-1 rounded border-2 border-[#FBAC20] ${
                    selectedItems.some((item) => item.id === product.id)
                      ? 'bg-[#FBAC20] text-white'
                      : 'bg-white text-black'
                  }`}
                >
                  {product.price.toFixed(2)} birr
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="absolute -right-6 z-10 p-2 top-35 text-gray-800 "
          >
            <ArrowRightIcon size={34} />
          </button>
        </div>

        {/* Total */}
        {selectedItems.length > 0 && (
          <div id="total-section" className="text-center mt-8">
            <h3 className="text-md font-semibold text-gray-800 mb-2">
              {t('Total Amount')}: <span className="text-[#FBAC20]">{totalAmount.toFixed(2)} birr</span>
            </h3>
          </div>
        )}

        {/* Proceed */}
        <div className="text-center mt-6">
          <button
            onClick={handleProceed}
            className="bg-gradient-to-l from-[#FBAC20] to-black max-w-fit mx-auto text-white text-sm px-4 py-2 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-black hover:to-[#FBAC20] transition duration-300"
          >
          {t('Proceed to Payment')}
          </button>
        </div>
      </div>

      {/* Modal */}
      {modalProduct && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white p-4 rounded-lg shadow-lg max-w-[90%] max-h-[90%] lg:max-w-[45%]"
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-700 hover:text-black text-2xl font-bold"
            >
              <IoCloseSharp />
            </button>
            <img
              src={modalProduct.modalImage}
              alt={modalProduct.title}
              className="max-h-[60vh] max-w-full mx-auto object-contain mb-4"
            />
            <h3 className="text-xl font-bold mx-auto text-gray-800 mb-2">{t(modalProduct.title)}</h3>
            <p className="text-gray-600 mx-auto text-sm">{t(modalProduct.description)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCarousel;






