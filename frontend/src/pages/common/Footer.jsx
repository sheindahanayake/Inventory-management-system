import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">E-Marketplace</h3>
            <p>Your one-stop shop for all your needs with multiple suppliers and secure transactions.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-indigo-300">Home</Link></li>
              <li><Link to="/login" className="hover:text-indigo-300">Login</Link></li>
              <li><Link to="/register" className="hover:text-indigo-300">Register</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-indigo-300">Electronics</Link></li>
              <li><Link to="/" className="hover:text-indigo-300">Clothing</Link></li>
              <li><Link to="/" className="hover:text-indigo-300">Home & Garden</Link></li>
              <li><Link to="/" className="hover:text-indigo-300">Books</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="not-italic">
              <p>123 E-Commerce St.</p>
              <p>Web City, Internet 98765</p>
              <p className="mt-2">Email: info@emarketplace.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} E-Marketplace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

