import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const hours = ['09:00 AM', '11:00 AM', '1:00 PM', '3:00 PM'];

const AppointmentForm = () => {
  const { t } = useTranslation();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedHour, setSelectedHour] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedDate || !selectedHour) {
      alert('Please select both date and hour!');
      return;
    }

    const hourParts = selectedHour.split(' ');
    let [hours, minutes] = hourParts[0].split(':').map(Number);

    if (hourParts[1] === 'PM' && hours !== 12) hours += 12;
    if (hourParts[1] === 'AM' && hours === 12) hours = 0;

    const formattedHour = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

    const appointment = {
      date: selectedDate,
      hour: formattedHour,
    };

    try {
      const response = await fetch('http://localhost:5000/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(appointment),
      });

      const data = await response.json();

      if (response.ok) {
        navigate('/thank-you');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
      alert('Failed to book appointment. Please try again later.');
    }
  };

  return (
    <div className="w-full bg-white flex items-center justify-center">
      <div className="w-full max-w-xl bg-white  p-8 md:p-10 transition duration-300 ease-in-out">
        <h2 className="text-2xl font-extrabold text-center text-gray-800 mb-2">{t('Make An Appointment')}</h2>
        <div className="w-24 h-1 bg-[#FBAC20] mx-auto mb-6 rounded-full"></div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Date Picker */}
          <div>
            <label htmlFor="date" className="block mb-2 font-medium text-gray-700">{t('Date')}</label>
            <input
              type="date"
              id="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FBAC20] transition"
            />
          </div>

          {/* Hour Selection */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">{t('Select Time Slot')}</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {hours.map((hour) => (
                <button
                  key={hour}
                  type="button"
                  onClick={() => setSelectedHour(hour)}
                  className={`px-4 py-2 text-sm rounded-lg border transition-all duration-200 font-semibold
                    ${
                      selectedHour === hour
                        ? 'bg-[#FBAC20] text-white border-[#FBAC20]'
                        : 'border-gray-400 text-gray-700 hover:bg-gray-100 hover:scale-105'
                    }`}
                >
                  {hour}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-[#FBAC20] to-[#000000] hover:from-black hover:to-[#FBAC20] text-white py-2 px-6 rounded-xl mt-4 self-center shadow-lg transition-all duration-300"
          >
           { t('Make An Appointment')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;



