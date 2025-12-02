import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Globe, Zap } from 'lucide-react';
import logo from "../assets/logo.jpg";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linear-to-br from-green-600 to-purple-700">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="NotesApp Logo" className="w-10 h-10 rounded" />
              <span className="text-xl font-bold text-gray-800">NotesApp</span>
            </div>
            <div className="flex space-x-3">
              <button 
                onClick={() => navigate('/login')}
                className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                Login
              </button>
              <button 
                onClick={() => navigate('/register')}
                className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-blue-700 font-medium"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">
          Welcome to NotesApp
        </h1>
        <p className="text-xl text-blue-100 mb-8">
          A simple and powerful platform to organize your notes and boost productivity.
        </p>
        <button 
          onClick={() => navigate('/register')}
          className="px-8 py-3 bg-white text-blue-600 text-lg font-semibold rounded-lg hover:bg-gray-100"
        >
          Get Started Free
        </button>
      </div>

      {/* Features Section */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast & Simple</h3>
            <p className="text-gray-600">Quick and easy to use with a clean interface.</p>
          </div>

          <div className="bg-white rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure</h3>
            <p className="text-gray-600">Your data is protected with encryption.</p>
          </div>

          <div className="bg-white rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Access Anywhere</h3>
            <p className="text-gray-600">Use from any device, anytime, anywhere.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <div className="bg-white rounded-xl p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Ready to get started?</h2>
          <p className="text-gray-600 mb-6">Join us today and organize your notes efficiently.</p>
          <button 
            onClick={() => navigate('/register')}
            className="px-8 py-3 bg-teal-700 text-white text-lg font-semibold rounded-lg hover:bg-blue-700"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}