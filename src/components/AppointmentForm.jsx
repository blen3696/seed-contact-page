import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 🛣️

const hours = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM'];

const AppointmentForm = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedHour, setSelectedHour] = useState('');
  const navigate = useNavigate(); // 🛣️

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedDate || !selectedHour) {
      alert('Please select both date and hour!');
      return;
    }

    const appointment = {
      date: selectedDate,
      hour: selectedHour,
    };

    try {
      const response = await fetch('http://localhost:5000/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(appointment),
      });

      const data = await response.json();

      if (response.ok) {
        // Instead of alert
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
    <div className='w-[100%] h-full'>
      <div className="max-w-4xl mx-auto p-6 mt-10">
        <h2 className="text-3xl font-bold text-center mb-4">Make An Appointment</h2>
        <div className="w-20 h-1 bg-[#FBAC20] mx-auto mb-6 rounded"></div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label htmlFor="date" className="block mb-2 font-semibold text-black">Date</label>
            <input
              type="date"
              id="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="border border-[#403D3D] rounded-md px-2 py-1 w-full focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-black">Hour</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {hours.map((hour) => (
                <button
                  key={hour}
                  type="button"
                  onClick={() => setSelectedHour(hour)}
                  className={`border rounded-md px-2 py-1 text-sm font-semibold ${
                    selectedHour === hour
                      ? 'bg-[#fcb63c] text-white border-[#fcb63c]'
                      : 'border-[#403D3D] text-black'
                  }`}
                >
                  {hour}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="bg-gradient-to-l from-[#FBAC20] to-black max-w-fit mx-auto text-white text-sm px-4 py-2 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-black hover:to-[#FBAC20] transition duration-300"
          >
            Make An Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;


