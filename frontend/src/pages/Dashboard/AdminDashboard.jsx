import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../../components/Button';

const AdminDashboard = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch all doctors
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('/api/doctors');
        setDoctors(response.data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  const addDoctor = async (doctorData) => {
    try {
      const response = await axios.post('/api/doctors', doctorData);
      setDoctors((prev) => [...prev, response.data]);
    } catch (error) {
      console.error('Error adding doctor:', error);
    }
  };

  const removeDoctor = async (doctorId) => {
    try {
      await axios.delete(`/api/doctors/${doctorId}`);
      setDoctors((prev) => prev.filter((doc) => doc.id !== doctorId));
    } catch (error) {
      console.error('Error removing doctor:', error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Doctors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{doctor.name}</h3>
            <p>Specialty: {doctor.specialty}</p>
            <Button
              label="Remove Doctor"
              color="red"
              onClick={() => removeDoctor(doctor.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
