import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../../components/Button';

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch doctor's appointments
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('/api/doctor/appointments');
        setAppointments(response.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  const updateAppointmentStatus = async (appointmentId, status) => {
    try {
      await axios.patch(`/api/appointments/${appointmentId}`, { status });
      setAppointments((prev) =>
        prev.map((appt) =>
          appt.id === appointmentId ? { ...appt, status } : appt
        )
      );
    } catch (error) {
      console.error('Error updating appointment:', error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Appointments</h2>
      {appointments.length ? (
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment.id} className="mb-4 p-4 bg-white rounded-lg shadow-md">
              <p>Patient: {appointment.patientName}</p>
              <p>Date: {appointment.date}</p>
              <p>Status: {appointment.status}</p>
              <div className="mt-2 flex gap-2">
                <Button
                  label="Confirm"
                  color="green"
                  onClick={() => updateAppointmentStatus(appointment.id, 'Confirmed')}
                />
                <Button
                  label="Cancel"
                  color="red"
                  onClick={() => updateAppointmentStatus(appointment.id, 'Cancelled')}
                />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No appointments available.</p>
      )}
    </div>
  );
};

export default DoctorDashboard;
