import React from "react";
import { useState } from 'react';
import qr_logo from '../assets/frame.png';
import { useTranslation } from 'react-i18next';

const QRCodePage = () => {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-fit bg-white flex flex-col text-center p-8">
      <h2 className="text-[26px] font-bold mb-2">{t('Share Using QR Code')}</h2>
      <div className="w-20 h-1 bg-[#FBAC20] mx-auto mb-6 rounded"></div>

      <div className="flex flex-col items-center mb-12">
        <a
          onClick={() => setModalOpen(true)}
          className="bg-gradient-to-l from-[#FBAC20] to-black max-w-fit mx-auto text-white text-sm px-4 py-2 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-black hover:to-[#FBAC20] transition duration-300"
        >
        {t('Share My QR Code')}
        </a>
      </div>

       {/* Modal */}

       {modalOpen && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 text-center relative">
            <button
              className="absolute top-2 right-3 text-gray-600 hover:text-black text-2xl"
              onClick={() => setModalOpen(false)}
            >
              &times;
            </button>

            <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center mb-4">
              <img
                src={qr_logo}
                alt="QR Code"
                className="md:h-60 md:w-60 h-50 w-50 object-contain"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default QRCodePage;