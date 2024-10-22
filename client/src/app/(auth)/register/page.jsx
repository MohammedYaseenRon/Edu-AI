"use client";

import React, { useState } from 'react';

const RegisterPage = () => {
  const [role, setRole] = useState('student');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!formData.name || !formData.email || !formData.password) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    if (!formData.email.includes('@')) {
      setError('Please enter a valid email');
      setIsLoading(false);
      return;
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Registration successful:', { ...formData, role });
      // Add your registration logic here
    } catch (err) {
      setError('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-2">Create an Account</h2>
          <p className="text-neutral-600">Sign up as a student or teacher</p>
        </div>

        {/* Role Toggle */}
        <div className="flex rounded-lg overflow-hidden mb-6 border border-neutral-200">
        <button
            onClick={() => setRole('student')}
            className={`flex-1 py-3 px-4 text-base font-medium rounded-md transition-all duration-200 ${
              role === 'student'
                ? 'bg-blue-500 text-white shadow-md transform scale-105'
                : 'bg-transparent text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            Student
          </button>
          <button
            onClick={() => setRole('teacher')}
            className={`flex-1 py-3 px-4 text-base font-medium rounded-md transition-all duration-200 ${
              role === 'teacher'
                ? 'bg-blue-600 text-white shadow-md transform scale-105'
                : 'bg-transparent text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            Teacher
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
              {error}
            </div>
          )}
          
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-neutral-600 focus:border-transparent outline-none bg-neutral-50"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-neutral-600 focus:border-transparent outline-none bg-neutral-50"
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-neutral-600 focus:border-transparent outline-none bg-neutral-50"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-400 transition-colors flex items-center justify-center"
          >
            {isLoading ? (
              <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              `Sign Up as ${role === 'student' ? 'Student' : 'Teacher'}`
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <div className="text-sm text-neutral-600">
            Already have an account?{' '}
            <a href="/login" className="text-neutral-900 hover:underline font-medium">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;