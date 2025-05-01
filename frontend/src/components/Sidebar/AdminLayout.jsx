import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import MobileAdmin from '../MobileAdmin/MobileAdmin';
import {useMediaQuery } from 'react-responsive'; 

const AdminLayout = ({ children }) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Spacer div for layout only when not on mobile */}
      {!isTabletOrMobile && <div className="w-[280px]" />}

      {/* Fixed Sidebar */}
      {!isMobile && 
      <Sidebar isOpen={!isTabletOrMobile} />
      }

      {isMobile &&
      <MobileAdmin />
      }
      

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto p-10">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;