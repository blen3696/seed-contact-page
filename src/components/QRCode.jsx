import React from "react";
import qr_logo from '../assets/frame.png';

const QRCodePage = () => {

  return (
    <div className="min-h-fit bg-white flex flex-col items-center p-8">
      <h2 className="text-3xl font-bold mb-2">Share Using QR Code</h2>
      <div className="w-20 h-1 bg-[#FBAC20] mx-auto mb-6 rounded"></div>

      <div className="flex flex-col items-center mb-12">
        <div className="flex gap-8 mb-6">
          <img
            src={qr_logo}
            alt="QR Code"
            className="w-36 h-36 rounded-xl object-contain shadow-md hover:scale-[1.1] transition-transform duration-300"
            id="qrCodeImage"
          />
        </div>

        <a
          href= {qr_logo}
          download="MyQRCode.png"
          className="bg-gradient-to-l from-[#FBAC20] to-black max-w-fit mx-auto text-white text-sm px-4 py-2 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-black hover:to-[#FBAC20] transition duration-300"
        >
          Download My QR Code
        </a>
      </div>
    </div>
  );
};

export default QRCodePage;