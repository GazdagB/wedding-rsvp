/* eslint-disable react/prop-types */
// App.js
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AuthProvider, useAuth } from './auth/AuthContext';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Home from './pages/Home'
import Guests from './pages/Guests';
import AdminLayout from './components/Sidebar/AdminLayout';
import Names from './pages/Names';
import WhishesPage from './pages/WhishesPage';
import ISpy from './pages/ISpy';

// Protected route component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }
  
  return isAuthenticated ? (
    <AdminLayout>{children}</AdminLayout>
  ) : (
    <Navigate to="/login" />
  );
};

// Public route that redirects authenticated users
const PublicRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }
  
  return !isAuthenticated ? children : <Navigate to="/admin" />;
};

// Main App with Auth Provider
function App() {

 

  return (
    <BrowserRouter>
      <AuthProvider>
      <Routes>
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
        <Route path='/admin/guests' element={<ProtectedRoute><Guests/></ProtectedRoute>}/>
        <Route path='/admin/names' element={<ProtectedRoute><Names/></ProtectedRoute>}></Route>
        <Route path='/admin/whishes' element={<ProtectedRoute><WhishesPage/></ProtectedRoute>}/>
        <Route path="/ispy" element={<ISpy/>}/>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
      <ToastContainer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;