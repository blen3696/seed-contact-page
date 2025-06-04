import React, { useState } from 'react';
import { FaFacebook, FaLinkedin, FaTelegramPlane, FaRegAddressBook , FaMapMarkerAlt} from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { MdContactPage } from 'react-icons/md';
import { FiShare2 } from 'react-icons/fi';
import logo from '../assets/logo.png';
import { BiSolidContact } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Registration successful!');
        setModalOpen(false);
        setFormData({ name: '', email: '', phone: '' });
      } else {
        const errorData = await response.json();
        alert(`Registration failed: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: 'S.E.E.D',
      text: 'Check out S.E.E.D!',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        alert('Sharing failed');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleAddToContacts = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:ALAZARE SHIFERAW
ORG:S.E.E.D
TITLE:General Manager
EMAIL:alazare910700906@gmail.com
TEL:+251910700960
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'contact.vcf';
    link.click();
  };

  return (
    <footer className="bg-[#0F1B2B] border-t border-gray-700 py-10 mx-auto">
      <div className="max-w-full mx-auto px-[10%]">

        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 mx-auto">

          {/* Left Section - Logo & Info */}
          <div className="flex flex-col items-center lg:items-start text-center md:text-left">
            <img src={logo} alt="Logo" className="w-36 mb-4" />
            <h2 className="md:text-3xl font-roboto text-xl font-bold bg-gradient-to-l from-[#FBAC20] to-white bg-clip-text text-transparent">ALAZARE SHIFERAW</h2>
            <p className="text-white font-semibold">General Manager</p>
          </div>

          {/* Middle Section - Socials */}
          <div className="flex flex-col items-center">
            <h2 className="md:text-2xl font-roboto text-xl font-bold mb-6 bg-gradient-to-l from-[#FBAC20] to-white bg-clip-text text-transparent">GET IN TOUCH</h2>
            <div className="flex flex-row space-x-6 text-2xl">
              <a href="https://maps.app.goo.gl/piX58dU1NGhiye5c7" target="_blank" rel="noopener noreferrer"  className="text-white p-3  hover:scale-110 hover:text-[#FBAC20] transition">
                <FaMapMarkerAlt />
              </a>
              <a href="https://t.me/ASmemes" target="_blank" rel="noreferrer"
                 className="text-white p-3  hover:scale-110 hover:text-[#FBAC20] transition">
                <FaTelegramPlane />
              </a>
              <a href="https://wa.me/qr/KDIXYIWZJNENK1" target="_blank" rel="noreferrer"
                 className="text-white p-3  hover:scale-110 hover:text-[#FBAC20] transition">
                <BsWhatsapp />
              </a>
              <a href="https://www.linkedin.com/in/alazare-shiferaw-797408141/" target="_blank" rel="noreferrer"
                 className="text-white p-3  hover:scale-110 hover:text-[#FBAC20] transition">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Right Section - Actions */}
          <div className="text-white rounded-lg flex flex-col items-center lg:items-start w-full max-w-xs">
            <h2 className="md:text-2xl font-roboto text-xl font-bold mb-6 bg-gradient-to-l from-[#FBAC20] to-white bg-clip-text text-transparent">GET NOTIFIED</h2>
            <div className='items-start'>
            <button
              onClick={handleShare}
              className="flex items-center gap-3 mb-4 hover:scale-110 hover:text-[#FBAC20]  transition-transform"
            >
              <FiShare2 className="text-2xl" />
              <span className="text-sm">Share</span>
            </button>

            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-3 mb-4 hover:scale-110 hover:text-[#FBAC20]  transition-transform"
            >
              <IoMdContact className="text-2xl" />
              <span className="text-sm">Register</span>
            </button>

            <button
              onClick={handleAddToContacts}
              className="flex items-center gap-3 hover:scale-110 hover:text-[#FBAC20]  transition-transform"
            >
               <BiSolidContact className="text-2xl" />
              <span className="text-sm">Add to Contacts</span>
            </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-white text-sm">
          &copy; {new Date().getFullYear()} | Powered by <a href="https://seedgit.com/" target='blank' className='text-[#FBAC20]'> S.E.E.D</a>
        </div>
      </div>



      {/* Modal for Registration */}
      {modalOpen && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-96">
            <h3 className="text-2xl font-bold mb-2 text-center text-[#0F1B2B]">Register</h3>
            <div className="w-20 h-1 bg-[#FBAC20] mx-auto mb-6 rounded"></div>
            <form onSubmit={handleRegisterSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FBAC20]"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FBAC20]"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FBAC20]"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FBAC20]"
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 text-black rounded border-2 border-gradient-to-l from-[#FBAC20] to-black "
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-gradient-to-l from-[#FBAC20] to-black text-white text-sm px-4 py-2 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-black hover:to-[#FBAC20] transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;





