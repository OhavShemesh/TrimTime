import { Box, Button, Input, InputLabel, Typography } from '@mui/material';
import React from 'react';

export default function InputBox({ setIsOpen }) {
    return (
        <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
            <Box sx={{ width: '100%', alignSelf: 'center', mb: 2, mt: 3 }}>
            </Box>
            <Box sx={{ mt: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', mb: 3 }}>
                    <InputLabel sx={{ mb: 0.5, color: "#000", fontSize: { xs: "12px", sm: "13px" }, fontWeight: 400, alignSelf: 'center' }}>
                        שם מלא
                    </InputLabel>
                    <Input
                        fullWidth
                        sx={{
                            direction: "rtl",
                            color: "#222",
                            fontSize: { xs: "13px", sm: "14px" },
                            background: '#fff',
                            borderRadius: '6px',
                            px: 1.5,
                            py: 1,
                            border: '1px solid lightgrey',
                            boxShadow: 'none',
                            '&:before': { borderBottom: 'none' },
                            '&:hover:not(.Mui-disabled):before': { borderBottom: 'none' },
                            '&:after': { borderBottom: '2px solid #000' },
                            transition: 'background 0.2s',
                            maxWidth: 350,
                            alignSelf: 'center',
                        }}
                    />
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', mt: 2 }}>
                    <InputLabel sx={{ mb: 0.5, color: "#000", fontSize: { xs: "12px", sm: "13px" }, fontWeight: 400, alignSelf: 'center' }}>
                        טלפון
                    </InputLabel>
                    <Input
                        type="number"
                        fullWidth
                        sx={{
                            direction: "rtl",
                            color: "#000",
                            fontSize: { xs: "13px", sm: "14px" },
                            background: '#fff',
                            borderRadius: '6px',
                            px: 1.5,
                            py: 1,
                            border: '1px solid lightgrey',
                            boxShadow: 'none',
                            '& input[type=number]::-webkit-outer-spin-button': {
                                WebkitAppearance: 'none',
                                margin: 0,
                            },
                            '& input[type=number]::-webkit-inner-spin-button': {
                                WebkitAppearance: 'none',
                                margin: 0,
                            },
                            '& input[type=number]': {
                                MozAppearance: 'textfield',
                            },
                            '&:before': { borderBottom: 'none' },
                            '&:hover:not(.Mui-disabled):before': { borderBottom: 'none' },
                            '&:after': { borderBottom: '2px solid #000' },
                            transition: 'background 0.2s',
                            maxWidth: 350,
                            alignSelf: 'center',
                        }}
                    />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mt: 3 }}>
                    <Button
                        onClick={() => setIsOpen(false)}
                        variant="contained"
                        sx={{
                            mt: 2,
                            px: { xs: 3, sm: 4 },
                            py: { xs: 0.7, sm: 1 },
                            borderRadius: "7px",
                            fontWeight: 500,
                            fontSize: { xs: "13px", sm: "14px" },
                            backgroundColor: '#666',
                            color: '#fff',
                            boxShadow: '0 2px 8px rgba(25, 118, 210, 0.10)',
                            '&:hover': {
                                backgroundColor: '#000',
                            },
                        }}
                    >
                        שלח
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
