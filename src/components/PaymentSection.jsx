import { useState } from 'react';
import { FaRegCopy } from 'react-icons/fa';
import t_logo from '../assets/Telebirr-logo.png';
import c_logo from '../assets/CBE-logo.png';
import a_logo from '../assets/abyssinia-logo.jpg';
import aw_logo from '../assets/Awash-logo.png';
import qr_logo from '../assets/qr.png';

const paymentOptions = [
  { name: 'TeleBirr', logo: t_logo, bankNumber: '0910700960' },
  { name: 'CBE Birr', logo: c_logo, bankNumber: '1000378075347' },
  { name: 'Abyssinia', logo: a_logo, bankNumber: '16232947' },
  { name: 'Awash', logo: aw_logo, bankNumber: '5566778899' },
];

export default function PaymentSection() {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="text-center py-10 px-4 sm:px-6 md:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-1">Payment</h2>
      <div className="w-20 h-1 bg-[#FBAC20] mx-auto mb-3 rounded"></div>
      <p className="text-lg font-semibold mb-6">Choose your payment method</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
        {paymentOptions.map((option, index) => (
          <button
            key={index}
            className="flex items-center justify-center bg-gray-100 p-4 sm:p-5 rounded-lg shadow-md hover:scale-95 transition-transform duration-300"
            onClick={() => setSelectedPayment(option)}
          >
            <img src={option.logo} alt={option.name} className="h-6 sm:h-8 mr-3" />
            <span className="text-gray-800 font-medium text-sm sm:text-base">{option.name}</span>
          </button>
        ))}
      </div>

      {/* Modal */}
      {selectedPayment && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 text-center relative">
            <button
              className="absolute top-2 right-3 text-gray-600 hover:text-black text-2xl"
              onClick={() => setSelectedPayment(null)}
            >
              &times;
            </button>

            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              {selectedPayment.name} Payment
            </h3>

            <div className="bg-gray-100 rounded-lg h-40 flex items-center justify-center mb-4">
              <img
                src={qr_logo}
                alt="QR Code"
                className="h-28 w-28 sm:h-32 sm:w-32 object-contain"
              />
            </div>

            <p className="text-sm text-gray-600 mb-2">Bank Number:</p>
            <div className="flex justify-center items-center space-x-2 bg-gray-100 px-4 py-2 rounded">
              <span className="font-medium text-gray-800 text-sm sm:text-base">
                {selectedPayment.bankNumber}
              </span>
              <FaRegCopy
                className="cursor-pointer text-gray-600 hover:text-[#FBAC20]"
                onClick={() => handleCopy(selectedPayment.bankNumber)}
              />
            </div>
            {copied && <p className="text-green-600 mt-2 text-sm">Copied!</p>}
          </div>
        </div>
      )}
    </div>
  );
}
