import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null;
    }

    return (
      <Box key={interval} sx={{ display: 'inline-block', mx: 2 }}>
        <Typography variant="h3" component="span">
          {timeLeft[interval]}
        </Typography>
        <Typography variant="subtitle1" component="span">
          {interval}{" "}
        </Typography>
      </Box>
    );
  });

  return (
    <Box sx={{ mt: 4 }}>
      {timerComponents.length ? timerComponents : <Typography variant="h3">Time's up!</Typography>}
    </Box>
  );
};

export default CountdownTimer;