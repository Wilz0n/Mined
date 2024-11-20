// src/components/molecules/DropdownMenu.jsx
import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CustomButton from '../atoms/Button';

const DropdownMenu = ({ anchorEl, open, handleClose, items }) => {
  return (
    <>
      <CustomButton onClick={handleClose}>Academias</CustomButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {items.map((item, index) => (
          <MenuItem key={index} onClick={handleClose}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default DropdownMenu;