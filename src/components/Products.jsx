import React, { useState } from 'react';
import pro_1 from '../assets/pro-1.jpg';
import pro_2 from '../assets/pro-2.jpg';

const products = [
  { id: 1, title: 'Software Solutions', price: 20, image: pro_1, description: 'Apps to optimize your operations and enhance efficiency' },
  { id: 2, title: 'Digital Products', price: 30, image: pro_2, description: 'Integrated Marketing to reach new potential' },
];

const ProductCarousel = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [showTotal, setShowTotal] = useState(false);

  const handleSelect = (product) => {
    const updatedItems = selectedItems.some((item) => item.id === product.id)
      ? selectedItems.filter((item) => item.id !== product.id)
      : [...selectedItems, product];

    setSelectedItems(updatedItems);

    if (updatedItems.length > 0) {
      setShowTotal(true);
      
    }
  };

  const handleProceed = () => {
    const section = document.getElementById('payment-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  const totalAmount = selectedItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="w-full bg-white pt-5">
      <div className="max-w-5xl mx-auto px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-2">Products</h2>
        <div className="w-20 h-1 bg-[#FBAC20] mx-auto mb-6 rounded"></div>

        {/* Product Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {products.map((product) => (
            <div key={product.id} className="border border-[#FBAC20] rounded-xl p-4 w-full md:w-1/2 shadow-md">
              <img src={product.image} alt={product.title} className="h-48 w-full object-cover rounded" />
              <h3 className="text-xl font-bold mt-4 text-[#FBAC20]">{product.title}</h3>
              <p className="text-gray-500 text-sm mb-2">{product.description}</p>
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

        {/* Total Section */}
        {showTotal && totalAmount > 0 && (
          <div id="total-section" className="text-center mt-8 transition-all duration-500 ease-in-out">
            <h3 className="text-md font-semibold text-gray-800 mb-2">
              Total Amount: <span className="text-[#FBAC20]">${totalAmount.toFixed(2)}</span>
            </h3>
          </div>
        )}

        {/* Proceed Button */}
        <div className="text-center mt-6">
      
            <button
            onClick={handleProceed}
            className="bg-gradient-to-l from-[#FBAC20] to-black max-w-fit mx-auto text-white text-sm px-4 py-2 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-black hover:to-[#FBAC20] transition duration-300"
          >
            Proceed to Payment
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;




