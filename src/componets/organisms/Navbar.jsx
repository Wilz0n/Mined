// src/components/organisms/Navbar.jsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CustomTypography from '../atoms/Typography';
import CustomButton from '../atoms/Button';
import DropdownMenu from '../molecules/DropdownMenu';
import CustomBox from '../atoms/Box';

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        {/* Logo */}
        <CustomTypography variant="h6" sx={{ flexGrow: 1 }}>
          MINED
        </CustomTypography>

        {/* Menu Items */}
        <CustomButton color="inherit">Inicio</CustomButton>
        <DropdownMenu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          handleClose={handleMenuClose}
          items={['Academia 1', 'Academia 2']}
        />
        <CustomButton color="inherit">Reconocimientos</CustomButton>
        <CustomButton color="inherit">Newsroom</CustomButton>
        <CustomButton color="inherit">FAQs</CustomButton>
        <CustomButton color="inherit">Suscríbete</CustomButton>
        <CustomButton color="inherit">Contáctanos</CustomButton>

        {/* Dropdown and Login */}
        <CustomBox sx={{ marginLeft: 2 }}>
          <CustomButton color="inherit">ES/EN</CustomButton>
          <CustomButton color="inherit">Login</CustomButton>
        </CustomBox>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;