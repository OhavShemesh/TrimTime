import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import InputBox from '../../helpers/inputBox';


export default function HomePage({ dates, timeSlots }) {
    const [selectedDate, setSelectedDate] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        if (selectedDate !== null) {
            const handleClick = (e) => {
                if (containerRef.current && !containerRef.current.contains(e.target)) {
                    setSelectedDate(null);
                }
            };
            document.addEventListener('mousedown', handleClick);
            return () => document.removeEventListener('mousedown', handleClick);
        }
    }, [selectedDate]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minHeight: '100vh',
                px: { xs: 2, sm: 4, md: 6 },
                py: { xs: 5, sm: 7, md: 8 },
                overflow: 'hidden',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                    background: 'url(/background.png) center center',
                    backgroundSize: '200px',
                    backgroundRepeat: 'repeat',
                    opacity: 0.4,
                }}
            />
            {/* Overlay for closing date box when open and modal is not open */}
            {selectedDate !== null && !isOpen && (
                <Box
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        zIndex: 10,
                        background: 'transparent',
                    }}
                    onClick={() => setSelectedDate(null)}
                />
            )}
            <Box sx={{ position: 'relative', width: '100%', maxWidth: 900, display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 11 }}>
                {dates.map((item, index) => (
                    <Box
                        key={index}
                        onClick={() => setSelectedDate(selectedDate === index ? null : index)}
                        sx={{
                            backgroundColor: '#fff',
                            color: '#222',
                            borderRadius: '18px',
                            py: { xs: 2, sm: 2.5 },
                            px: { xs: 2.5, sm: 4 },
                            m: { xs: 2, sm: 2.5 },
                            width: '100%',
                            maxWidth: 900,
                            textAlign: 'center',
                            fontFamily: '"Poppins", sans-serif',
                            fontSize: { xs: '18px', sm: '20px', md: '22px' },
                            fontWeight: 600,
                            boxShadow: selectedDate === index ? '0 6px 24px rgba(0,0,0,0.13)' : '0 2px 8px rgba(0,0,0,0.10)',
                            border: selectedDate === index ? '2px solid #111' : '1.5px solid #bbb',
                            transition: 'all 0.3s cubic-bezier(.4,2,.6,1)',
                            cursor: 'pointer',
                            mb: 2,
                            position: 'relative',
                            '&:hover': {
                                backgroundColor: '#f5f5f5',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.13)',
                                border: '2px solid #111',
                                transform: 'scale(1.015)',
                            },
                        }}
                    >
                        <span style={{ color: '#111', fontWeight: 700 }}>{item.day}</span> - {item.date}

                        <Box
                            sx={{
                                maxHeight: selectedDate === index ? '500px' : '0px',
                                overflow: 'hidden',
                                transition: 'max-height 0.4s cubic-bezier(.4,2,.6,1)',
                                mt: selectedDate === index ? 2 : 0,
                            }}
                        >
                            {selectedDate === index && (
                                <Box
                                    sx={{
                                        display: 'grid',
                                        gridTemplateColumns: { xs: 'repeat(3, 1fr)', sm: 'repeat(5, 1fr)', md: 'repeat(6, 1fr)' },
                                        gap: { xs: 1.5, sm: 2.5 },
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        mt: 2,
                                    }}
                                >
                                    {timeSlots.map((time, i) => (
                                        <Box
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setIsOpen(true);
                                            }}
                                            key={i}
                                            sx={{
                                                backgroundColor: '#ededed',
                                                color: '#111',
                                                borderRadius: '10px',
                                                py: 1.2,
                                                px: 0,
                                                cursor: 'pointer',
                                                transition: '0.2s',
                                                fontSize: { xs: '15px', sm: '16px' },
                                                fontWeight: 600,
                                                border: '1.5px solid #bbb',
                                                boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
                                                '&:hover': {
                                                    backgroundColor: '#e0e0e0',
                                                    color: '#000',
                                                    border: '2px solid #111',
                                                    transform: 'scale(1.07)',
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
            </Box>
            {isOpen && (
                <Box
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(255,255,255,0.7)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: "auto",
                        zIndex: 1300,
                        px: 2,
                        overflow: 'hidden',
                    }}
                    onClick={() => setIsOpen(false)}
                >
                    <Box
                        sx={{
                            width: { xs: '100%', sm: '80%', md: '60%', lg: '40%', xl: '30%' },
                            maxWidth: '500px',
                            backgroundColor: '#fff',
                            borderRadius: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: 'center',
                            justifyContent: 'center',
                            p: 3,
                            boxShadow: '0 4px 24px rgba(0,0,0,0.13)',
                            minHeight: 400,
                        }}
                        onClick={e => e.stopPropagation()}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                textAlign: "center",
                                fontWeight: 600,
                                fontSize: { xs: "15px", sm: "16px", md: "17px" },
                                color: "#111",
                                mb: 2
                            }}
                        >
                            הזן פרטים
                        </Typography>

                        <InputBox setIsOpen={setIsOpen} onClose={() => setIsOpen(false)} />
                    </Box>
                </Box>
            )}
        </Box>
    );
}

