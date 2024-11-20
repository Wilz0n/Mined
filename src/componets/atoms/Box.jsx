// src/components/atoms/Box.jsx
import React from 'react';
import Box from '@mui/material/Box';

const CustomBox = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>;
};

export default CustomBox;