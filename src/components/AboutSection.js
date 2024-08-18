import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';

const AboutSection = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="md">
        <Typography variant="h2" component="h2" gutterBottom>
          About OriginAll
        </Typography>
        <Typography variant="body1" paragraph>
          OriginAll is a distinctive online marketplace dedicated to celebrating and supporting the art of original craftsmanship. We connect makers of unique, handcrafted products with enthusiasts who value authenticity and creativity.
        </Typography>
        <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 4 }}>
          Our Mission
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to bring you original products where craftsmanship exceeds two-thirds of the process, ensuring each item is truly one-of-a-kind. We define "original products" as those in which more than two-thirds of the production process involves meticulous handcrafting, or items that are inherently unique, even when crafted by the same artisan.
        </Typography>
        <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 4 }}>
          What We Offer
        </Typography>
        <Grid container spacing={2}>
          {['Household Furnishings', 'Ceramic Sculptures', 'Embroidery', 'Food Products', 'Skincare and Herbal Blends', 'Antique Products'].map((category) => (
            <Grid item xs={12} sm={6} md={4} key={category}>
              <Typography variant="body1">• {category}</Typography>
            </Grid>
          ))}
        </Grid>
        <Typography variant="body1" sx={{ mt: 4 }}>
          By bringing these original products to a global audience, OriginAll ensures that every purchase is not just a transaction but a celebration of individuality and creativity.
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutSection;