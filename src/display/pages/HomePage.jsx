import React, { useState } from 'react';
import { Box } from '@mui/material';
import InputBox from '../../helpers/inputBox';

export default function HomePage({ dates, timeSlots }) {
    const [selectedDate, setSelectedDate] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: 'rgba(42,41,41,255)',
                px: { xs: 2, sm: 4, md: 6 },
                py: { xs: 3, sm: 5, md: 6 },
                minHeight: '100vh',
            }}
        >
            {dates.map((item, index) => (
                <Box
                    key={index}
                    onClick={() => setSelectedDate(selectedDate === index ? null : index)}
                    sx={{
                        backgroundColor: '#4a4a4a',
                        color: '#fff',
                        borderRadius: '10px',
                        py: { xs: 1.5, sm: 2 },
                        px: { xs: 2, sm: 3 },
                        m: { xs: 1.5, sm: 2 },
                        width: { xs: '90%', sm: '90%', md: '70%', lg: '60%', xl: '50%' },
                        textAlign: 'center',
                        fontFamily: '"Poppins", sans-serif',
                        fontSize: { xs: '16px', sm: '18px', md: '20px' },
                        fontWeight: 500,
                        transition: 'all 0.3s ease-in-out',
                        cursor: 'pointer',
                        '&:hover': {
                            backgroundColor: '#5a5a5a',
                            transform: 'scale(1.03)',
                        },
                    }}
                >
                    {item.day} - {item.date}

                    <Box
                        sx={{
                            maxHeight: selectedDate === index ? '500px' : '0px',
                            overflow: 'hidden',
                            transition: 'max-height 0.3s ease-in-out',
                            mt: selectedDate === index ? 2 : 0,
                        }}
                    >
                        {selectedDate === index && (
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    justifyContent: 'center',
                                    gap: { xs: 1, sm: 2 },
                                }}
                            >
                                {timeSlots.map((time, i) => (
                                    <Box
                                        onClick={(e) => {
                                            e.stopPropagation(); // Prevents triggering the date collapse
                                            setIsOpen(true);
                                        }}
                                        key={i}
                                        sx={{
                                            backgroundColor: '#6a6a6a',
                                            color: '#fff',
                                            borderRadius: '6px',
                                            py: 1,
                                            px: 2,
                                            cursor: 'pointer',
                                            transition: '0.3s ease-in-out',
                                            fontSize: { xs: '14px', sm: '16px' },
                                            '&:hover': {
                                                backgroundColor: '#7a7a7a',
                                                transform: 'scale(1.05)',
                                            },
                                        }}
                                    >
                                        {time}
                                    </Box>
                                ))}
                            </Box>
                        )}
                    </Box>
                </Box>
            ))}

            {isOpen && (
                <Box
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        display: 'flex',
                        justifyContent: 'center',
                        margin: "auto",
                        zIndex: 1300,
                        px: 2,
                    }}
                >
                    <Box
                        sx={{
                            width: { xs: '100%', sm: '80%', md: '60%', lg: '40%', xl: '30%' },
                            maxWidth: '500px',
                            backgroundColor: 'transparent',
                            borderRadius: 2,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: 'center',
                            p: 3,
                        }}
                    >
                        <Box sx={{ height: "20%" }}></Box>
                        <InputBox setIsOpen={setIsOpen} onClose={() => setIsOpen(false)} />
                    </Box>
                </Box>
            )}
        </Box>
    );
}
