import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import CountdownTimer from './CountdownTimer';

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url(https://source.unsplash.com/random/1600x900?craft)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center', color: 'white' }}>
        <Typography variant="h1" component="h1" gutterBottom>
          Celebrating the Art of Original Craftsmanship
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          OriginAll: A Marketplace for Unique, Handcrafted Products
        </Typography>
        <CountdownTimer targetDate={new Date('2024-09-15')} />
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ mt: 4 }}
          onClick={() => {
            const form = document.getElementById('contact-form');
            form.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Get Your Launch Day Coupon
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;