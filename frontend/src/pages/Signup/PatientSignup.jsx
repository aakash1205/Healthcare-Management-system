import React from 'react';

const PatientSignup = () => (
  <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md bg-white p-6 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Patient Signup</h2>
      <form>
        <input type="text" placeholder="Full Name" className="w-full px-4 py-2 mb-4 border rounded" />
        <input type="email" placeholder="Email" className="w-full px-4 py-2 mb-4 border rounded" />
        <input type="text" placeholder="Phone Number" className="w-full px-4 py-2 mb-4 border rounded" />
        <input type="password" placeholder="Password" className="w-full px-4 py-2 mb-4 border rounded" />
        <input type="password" placeholder="Confirm Password" className="w-full px-4 py-2 mb-6 border rounded" />
        <button className="w-full bg-purple-600 text-white py-2 rounded">Sign Up</button>
      </form>
    </div>
  </div>
);

export default PatientSignup;
