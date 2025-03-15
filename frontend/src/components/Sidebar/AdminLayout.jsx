import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AdminLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-[280px] w-full">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;