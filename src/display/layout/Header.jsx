import React from 'react';
import { Box, IconButton } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between', // Ensures proper spacing
        alignItems: 'center',
        backgroundColor: 'rgba(37,36,36,255)',
        padding: '16px',
        height: '60px',
        overflow: 'hidden',
      }}
    >
      {/* Empty box for left spacing (if needed) */}
      <Box sx={{ width: '36px' }} />

      {/* Centered Logo */}
      <img
        src="/trimtimelogo.png"
        alt="TrimTime Logo"
        style={{
          height: '100%',
          width: 'auto',
          objectFit: "contain",
          display: 'block',
          transform: "scale(2.5)"
        }}
      />

      {/* Calendar Icon to the Right */}
      <Box>
        <IconButton>
          <CalendarMonthIcon sx={{ color: "white", fontSize: "36px" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
