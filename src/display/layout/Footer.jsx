import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(37,36,36,255)', // Matches the header background
        height: '30px', // Balanced between 20-40px
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: '#fff',
          fontFamily: '"Poppins", sans-serif',
          fontSize: '14px',
        }}
      >
        © Ohav Shemesh Web Development
      </Typography>
    </Box>
  );
}
