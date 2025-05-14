import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { IoCloseSharp } from "react-icons/io5";
import pro_1 from '../assets/BC Card.png';
import pro_1_large from '../assets/bc scan.png'; // New large image
import pro_2 from '../assets/small card.png';
import pro_2_large from '../assets/bc scan.png'; // New large image

const products = [
  {
    id: 1,
    title: 'CUSTOM CARD',
    price: 20,
    image: pro_1,
    modalImage: pro_1_large,
  },
  {
    id: 2,
    title: 'CUSTOM PHONECARD',
    price: 30,
    image: pro_2,
    modalImage: pro_2_large,
  },
];

const ProductCarousel = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalImage, setModalImage] = useState(null);

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
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const handleImageClick = (modalImg) => setModalImage(modalImg);
  const closeModal = () => setModalImage(null);

  return (
    <div className="w-full bg-white pt-5">
      <div className="max-w-5xl mx-auto px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-2">PRODUCTS</h2>
        <div className="w-20 h-1 bg-[#FBAC20] mx-auto mb-6 rounded"></div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Arrows */}
          <button
            onClick={handlePrev}
            className="absolute -left-3 top-35 z-10 md:hidden rounded-full text-gray-600"
          >
            <IoIosArrowBack size={34} />
          </button>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 overflow-hidden w-full">
            <div className="w-full md:w-auto flex justify-center">
              {products
                .slice(
                  window.innerWidth < 768 ? currentIndex : 0,
                  window.innerWidth < 768 ? currentIndex + 1 : products.length
                )
                .map((product) => (
                  <div key={product.id} className="rounded-xl p-4 w-full md:w-[350px]">
                    <div className="border-2 border-[#FBAC20] h-[280px] w-full flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-[240px] w-[180px] object-contain cursor-pointer"
                        onClick={() => handleImageClick(product.modalImage)}
                      />
                    </div>
                    <h3 className="text-xl font-bold mt-4 text-gray-600">{product.title}</h3>
                    <button
                      onClick={() => handleSelect(product)}
                      className={`mt-3 w-full py-1 rounded border-2 border-[#FBAC20] ${
                        selectedItems.some((item) => item.id === product.id)
                          ? 'bg-[#FBAC20] text-white'
                          : 'bg-white text-black'
                      }`}
                    >
                      ${product.price.toFixed(2)}
                    </button>
                  </div>
                ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute -right-5 top-34  z-10 md:hidden p-2 rounded-full  text-gray-600"
          >
            <IoIosArrowForward size={34} />
          </button>
        </div>

        {/* Total */}
        {selectedItems.length > 0 && (
          <div id="total-section" className="text-center mt-8">
            <h3 className="text-md font-semibold text-gray-800 mb-2">
              Total Amount: <span className="text-[#FBAC20]">${totalAmount.toFixed(2)}</span>
            </h3>
          </div>
        )}

        {/* Proceed */}
        <div className="text-center mt-6">
          <button
            onClick={handleProceed}
            className="bg-gradient-to-l from-[#FBAC20] to-black max-w-fit mx-auto text-white text-sm px-4 py-2 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-black hover:to-[#FBAC20] transition duration-300"
          >
            Proceed to Payment
          </button>
        </div>
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white p-4 rounded-lg shadow-lg max-w-[90%] max-h-[90%]"
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-700 hover:text-black text-2xl font-bold"
            >
              <IoCloseSharp />
            </button>

            <img
              src={modalImage}
              alt="Product Large"
              className="max-h-[80vh] max-w-full object-contain"
            />
          </div>
        </div>
      )}

    </div>
  );
};

export default ProductCarousel;






