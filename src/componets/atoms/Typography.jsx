// src/components/atoms/Typography.jsx
import React from 'react';
import Typography from '@mui/material/Typography';

const CustomTypography = ({ children, ...props }) => {
  return <Typography {...props}>{children}</Typography>;
};

export default CustomTypography;