import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
    <div>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default MainLayout