import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { currentUser, logout, isAdmin, isSupplier, isUser } = useAuth();
  const { itemCount } = useCart();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-indigo-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">E-Marketplace</Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-indigo-200">Home</Link>
            
            {currentUser ? (
              <>
                {isAdmin && (
                  <Link to="/admin" className="hover:text-indigo-200">Admin Dashboard</Link>
                )}
                
                {isSupplier && (
                  <Link to="/supplier" className="hover:text-indigo-200">Supplier Dashboard</Link>
                )}
                
                <Link to="/orders" className="hover:text-indigo-200">Orders</Link>
                
                {isUser && (
                  <Link to="/cart" className="hover:text-indigo-200 relative">
                    Cart
                    {itemCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-2 py-1">
                        {itemCount}
                      </span>
                    )}
                  </Link>
                )}
                
                <div className="relative group">
                  <button className="flex items-center hover:text-indigo-200">
                    {currentUser.name}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 hidden group-hover:block">
                    <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
                      Profile
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-indigo-200">Login</Link>
                <Link to="/register" className="bg-white text-indigo-600 px-4 py-2 rounded hover:bg-indigo-100">
                  Register
                </Link>
              </>
            )}
          </nav>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="mt-4 md:hidden space-y-3">
            <Link to="/" className="block hover:text-indigo-200">Home</Link>
            
            {currentUser ? (
              <>
                {isAdmin && (
                  <Link to="/admin" className="block hover:text-indigo-200">Admin Dashboard</Link>
                )}
                
                {isSupplier && (
                  <Link to="/supplier" className="block hover:text-indigo-200">Supplier Dashboard</Link>
                )}
                
                <Link to="/orders" className="block hover:text-indigo-200">Orders</Link>
                
                {isUser && (
                  <Link to="/cart" className="block hover:text-indigo-200 relative inline-block">
                    Cart
                    {itemCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-2 py-1">
                        {itemCount}
                      </span>
                    )}
                  </Link>
                )}
                
                <Link to="/profile" className="block hover:text-indigo-200">Profile</Link>
                
                <button 
                  onClick={handleLogout}
                  className="block hover:text-indigo-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="block hover:text-indigo-200">Login</Link>
                <Link to="/register" className="block bg-white text-indigo-600 px-4 py-2 rounded hover:bg-indigo-100 text-center">
                  Register
                </Link>
              </>
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
