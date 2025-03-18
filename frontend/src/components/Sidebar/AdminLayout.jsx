import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AdminLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className=" xl:ml-[200px] w-full">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;