import React from 'react';
import { Box, Typography, Link, Container, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">Email: contact@originall.org</Typography>
            <Typography variant="body2">Phone: +212 604996072</Typography>
            <Typography variant="body2">Location: Casablanca</Typography>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <IconButton color="inherit" aria-label="Facebook" component="a" href="#" target="_blank">
              <Facebook />
            </IconButton>
            <IconButton color="inherit" aria-label="Twitter" component="a" href="#" target="_blank">
              <Twitter />
            </IconButton>
            <IconButton color="inherit" aria-label="Instagram" component="a" href="#" target="_blank">
              <Instagram />
            </IconButton>
          </Box>
        </Box>
        <Typography variant="body2" align="center" sx={{ mt: 4 }}>
          OriginAll will officially launch on September 15th. Stay tuned for more!
        </Typography>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          © {new Date().getFullYear()} OriginAll. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;