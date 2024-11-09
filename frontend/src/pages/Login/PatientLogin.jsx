import React from 'react';

const PatientLogin = () => (
  <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md bg-white p-6 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
      <form>
        <input type="text" placeholder="Email" className="w-full px-4 py-2 mb-4 border rounded"/>
        <input type="password" placeholder="Password" className="w-full px-4 py-2 mb-6 border rounded"/>
        <button className="w-full bg-blue-600 text-white py-2 rounded">Login</button>
      </form>
    </div>
  </div>
);

export default PatientLogin;
