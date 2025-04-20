import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import {useMediaQuery } from 'react-responsive'; 

const AdminLayout = ({ children }) => {

  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

 

  return (
    <div className="flex min-h-screen">
      {/* Invisible spacer to push content right */}
      <div className={` ${!isTabletOrMobile ? "w-[280px]" : ""}`} />
      
      {/* Sidebar is fixed, not part of flow */}
      <Sidebar isOpen={!isTabletOrMobile} />

      {/* Main content area */}
      <div className="flex-1 p-10">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;