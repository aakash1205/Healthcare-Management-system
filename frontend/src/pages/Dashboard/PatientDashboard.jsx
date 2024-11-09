import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../../components/Button';

const PatientDashboard = () => {
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch list of available doctors
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('/api/doctors');
        setDoctors(response.data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    // Fetch patient's appointments
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('/api/appointments');
        setAppointments(response.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchDoctors();
    fetchAppointments();
  }, []);

  const bookAppointment = async (doctorId) => {
    try {
      const response = await axios.post('/api/appointments', { doctorId });
      setAppointments((prev) => [...prev, response.data]);
    } catch (error) {
      console.error('Error booking appointment:', error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Available Doctors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{doctor.name}</h3>
            <p>Specialty: {doctor.specialty}</p>
            <Button
              label="Book Appointment"
              color="blue"
              onClick={() => bookAppointment(doctor.id)}
            />
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">My Appointments</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id} className="mb-2">
            Appointment with Dr. {appointment.doctorName} on {appointment.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientDashboard;
