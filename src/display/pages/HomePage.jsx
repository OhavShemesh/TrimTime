import React, { useState } from 'react';
import { Box } from '@mui/material';

const getHebrewDates = () => {
    const hebrewDays = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];
    const today = new Date();
    let daysArray = [];

    for (let i = 0; i < 10; i++) {
        let newDate = new Date();
        newDate.setDate(today.getDate() + i);
        const dayOfWeek = hebrewDays[newDate.getDay()]; // Hebrew day name
        const formattedDate = newDate.toLocaleDateString('he-IL'); // Format in Hebrew

        daysArray.push({ day: dayOfWeek, date: formattedDate });
    }

    return daysArray;
};

// Generate time slots excluding 14:00-16:00
const getTimeSlots = () => {
    let slots = [];
    for (let hour = 10; hour <= 17; hour++) {
        for (let minute = 0; minute < 60; minute += 20) {
            if (hour === 14 || hour === 15) continue;
            slots.push(`${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`);
        }
    }
    return slots;
};

export default function HomePage() {
    const dates = getHebrewDates();
    const timeSlots = getTimeSlots();
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: 'rgba(42,41,41,255)',
                padding: '20px',
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
                        padding: '12px',
                        margin: '8px',
                        width: '60%',
                        textAlign: 'center',
                        fontFamily: '"Poppins", sans-serif',
                        fontSize: '18px',
                        fontWeight: '500',
                        transition: 'all 0.3s ease-in-out',
                        cursor: 'pointer',
                        '&:hover': {
                            backgroundColor: '#5a5a5a',
                            transform: 'scale(1.05)',
                        },
                    }}
                >
                    {item.day} - {item.date}

                    {/* Animated time slots */}
                    <Box
                        sx={{
                            maxHeight: selectedDate === index ? '500px' : '0px',
                            overflow: 'hidden',
                            transition: 'max-height 0.3s ease-in-out',
                            marginTop: selectedDate === index ? '10px' : '0px',
                        }}
                    >
                        {selectedDate === index && (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                                {timeSlots.map((time, i) => (
                                    <Box
                                        key={i}
                                        sx={{
                                            backgroundColor: '#6a6a6a',
                                            color: '#fff',
                                            borderRadius: '6px',
                                            padding: '8px',
                                            margin: '5px',
                                            cursor: 'pointer',
                                            transition: '0.3s ease-in-out',
                                            '&:hover': { backgroundColor: '#7a7a7a', transform: 'scale(1.05)' },
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
    );
}
