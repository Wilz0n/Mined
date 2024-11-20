import React from 'react';
import Navbar from '../organisms/Navbar';

const HeaderTemplate = ({ children }) => {
  return (
    <div>
      <Navbar /> {/* El Navbar va aquí */}
      <main>{children}</main> {/* Contenido de la página */}
    </div>
  );
};

export default HeaderTemplate;