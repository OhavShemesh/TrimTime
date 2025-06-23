import { Close } from '@mui/icons-material';
import { Box, Button, Input, InputLabel, Typography } from '@mui/material';
import React from 'react';

export default function InputBox({ setIsOpen }) {
    return (
        <Box
            sx={{
                position: "relative",
                width: { xs: "80%", sm: "80%", md: "80%", lg: "80%", xl: "80%" },
                backgroundColor: "#1e1e1e",
                borderRadius: "24px",
                boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.6)",
                padding: { xs: "24px 16px", sm: "32px 24px" },
                display: 'flex',
                flexDirection: 'column',
                gap: { xs: 3, sm: 4 },
                textAlign: "right",
                color: "#f0f0f0",
                border: "1px solid #333",
            }}
        >
            <Close
                onClick={() => setIsOpen(false)}
                sx={{
                    position: "absolute",
                    right: 16,
                    top: 16,
                    color: "#aaa",
                    cursor: "pointer",
                    '&:hover': { color: "#fff" },
                }}
            />

            <Typography
                variant="h6"
                sx={{
                    textAlign: "center",
                    mb: { xs: 1, sm: 2 },
                    fontWeight: 600,
                    fontSize: { xs: "18px", sm: "20px", md: "22px" }
                }}
            >
                הזן פרטים
            </Typography>

            <Box>
                <InputLabel sx={{ mb: 1, color: "#bbb", fontSize: { xs: "14px", sm: "16px" } }}>
                    שם מלא
                </InputLabel>
                <Input
                    fullWidth
                    sx={{
                        direction: "rtl",
                        color: "#fff",
                        fontSize: { xs: "14px", sm: "16px" },
                        '&:before': { borderBottom: '1px solid #555' },
                        '&:hover:not(.Mui-disabled):before': { borderBottom: '1px solid #888' },
                        '&:after': { borderBottom: '2px solid #1976d2' },
                    }}
                />
            </Box>

            <Box>
                <InputLabel sx={{ mb: 1, color: "#bbb", fontSize: { xs: "14px", sm: "16px" } }}>
                    טלפון
                </InputLabel>
                <Input
                    type="number"
                    fullWidth
                    sx={{
                        direction: "rtl",
                        color: "#fff",
                        fontSize: { xs: "14px", sm: "16px" },
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
                        '&:before': { borderBottom: '1px solid #555' },
                        '&:hover:not(.Mui-disabled):before': { borderBottom: '1px solid #888' },
                        '&:after': { borderBottom: '2px solid #1976d2' },
                    }}
                />
            </Box>

            <Button
                onClick={() => setIsOpen(false)}
                variant="contained"
                color="primary"
                sx={{
                    mt: 3,
                    alignSelf: "center",
                    px: { xs: 4, sm: 6 },
                    py: { xs: 1, sm: 1.5 },
                    borderRadius: "8px",
                    fontWeight: 600,
                    fontSize: { xs: "14px", sm: "16px" },
                }}
            >
                שלח
            </Button>
        </Box>
    );
}
