import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AdminLayout = ({ children }) => {

  const [isOpen,setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Invisible spacer to push content right */}
      <div className={` ${isOpen ? "w-[280px]" : ""}`} />
      
      {/* Sidebar is fixed, not part of flow */}
      <Sidebar isOpen={isOpen} />

      {/* Main content area */}
      <div className="flex-1 p-10">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;