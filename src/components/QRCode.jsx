import React from "react";
import qr_logo from '../assets/qr.png';
import profile from '../assets/image.jpg'

const QRCodePage = () => {
  // const businessHours = {
  //   Monday: "8 AM - 6 PM",
  //   Tuesday: "9 AM - 5 PM",
  //   Wednesday: "8 AM - 6 PM",
  //   Thursday: "10 AM - 4 PM",
  //   Friday: "9 AM - 3 PM",
  //   Saturday: "10 AM - 2 PM",
  //   Sunday: "Closed",
  // };

  return (
    <div className="min-h-fit bg-white flex flex-col items-center p-8">
      <h2 className="text-3xl font-bold mb-2">Share Using QR Code</h2>
      <div className="w-20 h-1 bg-[#FBAC20] mx-auto mb-6 rounded"></div>

      <div className="flex flex-col items-center mb-12">
        <div className="flex gap-8 mb-6">
          {/* <img
            src={profile}
            alt="Profile"
            className="w-36 h-36 rounded-xl border-2 border-[#FBAC20] object-cover shadow-md hover:scale-[1.1] transition-transform duration-300"
          /> */}
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
          className="bg-[#FBAC20] text-white text-sm px-3 py-2 rounded-lg shadow-md hover:bg-[#ffd284] transition"
        >
          Download My QR Code
        </a>
      </div>

      {/* <h2 className="text-3xl font-semibold  mb-2">Business Hours</h2>
      <div className="w-20 h-1 bg-[#FBAC20] mx-auto mb-6 rounded"></div>

      <div className="w-full max-w-sm bg-white rounded-xl border-2 border-[#FBAC20] p-6 shadow-sm">
        {Object.entries(businessHours).map(([day, hours]) => (
          <div
            key={day}
            className="flex justify-between text-sm text-gray-800 py-1"
          >
            <span>{day}</span>
            <span>{hours}</span>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default QRCodePage;