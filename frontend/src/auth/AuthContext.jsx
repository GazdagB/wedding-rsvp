/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Check token on mount and set up interval to validate
  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem('token');
      const tokenExpiry = localStorage.getItem('tokenExpiry')
      
      if (!token || !tokenExpiry) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      const now = new Date().getTime();
      if(now > parseInt(tokenExpiry)){
        console.log("Token expired");
        logout();
        setLoading(false); 
        return;
      }

      try {
        // Set up axios to use token in all requests
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Token validation failed:', error);
        logout();
      } finally {
        setLoading(false);
      }
    };

    checkToken();

    // Set up interval to periodically check token (e.g., every minute)
    const intervalId = setInterval(checkToken, 60000);

    // Setup storage event listener to detect token changes across tabs
    const handleStorageChange = (e) => {
      if (e.key === 'token' && !e.newValue) {
        logout();
      }
    };
    
    window.addEventListener('storage', handleStorageChange);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [navigate]);

  // Login function
  const login = (token) => {
    const expiresAt = new Date().getTime() + (24 * 60 *60 * 1000);

    localStorage.setItem('token', token);
    localStorage.setItem('tokenExpiry', expiresAt)

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setIsAuthenticated(true);
    navigate('/admin');
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiry')
    delete axios.defaults.headers.common['Authorization'];
    setIsAuthenticated(false);
    navigate('/login');
  };

  // Function to handle API errors that might be due to invalid token
  const handleApiError = (error) => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      logout();
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading, login, logout, handleApiError }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};