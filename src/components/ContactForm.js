import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel, Container, Grid } from '@mui/material';
import emailjs from '@emailjs/browser';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    userType: '',
    couponType: '',
    sellerType: '',
    productCategory: '',
    mediaCompany: '',
    mediaCategory: '',
    mediaInterest: '',
  });

  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send('service_ywil65b', 'template_s4w251c', formData, '44LbxItMcCZYW87HN')
      .then((result) => {
        console.log(result.text);
        setSubmissionMessage(getSubmissionMessage(formData.userType));
      }, (error) => {
        console.log(error.text);
        setSubmissionMessage('An error occurred. Please try again later.');
      });
  };

  const getSubmissionMessage = (userType) => {
    switch (userType) {
      case 'client':
        return "Thank you for your interest! We look forward to seeing you at our launch.";
      case 'seller':
        return "Thank you for your interest in selling on OriginAll. Our sales team will contact you soon.";
      case 'media':
        return "Thank you for your interest in OriginAll. We'll be in touch with more information shortly.";
      default:
        return "Thank you for contacting OriginAll. We'll get back to you soon.";
    }
  };

  return (
    <Box id="contact-form" sx={{ py: 8, backgroundColor: 'background.paper' }}>
      <Container maxWidth="md">
        <Typography variant="h2" component="h2" gutterBottom>
          Stay Connected
        </Typography>
        <Typography variant="body1" paragraph>
          Connect with us, whether you're a client, seller, or media partner.
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>User Type</InputLabel>
                <Select
                  name="userType"
                  value={formData.userType}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="client">Client</MenuItem>
                  <MenuItem value="seller">Seller</MenuItem>
                  <MenuItem value="media">Media/Influencer</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {formData.userType === 'client' && (
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Coupon Type</InputLabel>
                  <Select
                    name="couponType"
                    value={formData.couponType}
                    onChange={handleChange}
                    required
                  >
                    <MenuItem value="$10">$10 Off</MenuItem>
                    <MenuItem value="20%">20% Off</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            )}

            {formData.userType === 'seller' && (
              <>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Seller Type</InputLabel>
                    <Select
                      name="sellerType"
                      value={formData.sellerType}
                      onChange={handleChange}
                      required
                    >
                      <MenuItem value="cooperative">Cooperative</MenuItem>
                      <MenuItem value="individual">Individual Crafter</MenuItem>
                      <MenuItem value="association">Association</MenuItem>
                      <MenuItem value="company">Company</MenuItem>
                      <MenuItem value="amateur">Amateur</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Main Product Category</InputLabel>
                    <Select
                      name="productCategory"
                      value={formData.productCategory}
                      onChange={handleChange}
                      required
                    >
                      <MenuItem value="household">Household Furnishings</MenuItem>
                      <MenuItem value="ceramic">Ceramic Sculptures</MenuItem>
                      <MenuItem value="embroidery">Embroidery</MenuItem>
                      <MenuItem value="food">Food Products</MenuItem>
                      <MenuItem value="skincare">Skincare and Herbal Blends</MenuItem>
                      <MenuItem value="antique">Antique Products</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </>
            )}

            {formData.userType === 'media' && (
              <>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Company/Organization (or Independent)"
                    name="mediaCompany"
                    value={formData.mediaCompany}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Media Category</InputLabel>
                    <Select
                      name="mediaCategory"
                      value={formData.mediaCategory}
                      onChange={handleChange}
                      required
                    >
                      <MenuItem value="economic">Economic</MenuItem>
                      <MenuItem value="lifestyle">Lifestyle</MenuItem>
                      <MenuItem value="news">News</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Interest</InputLabel>
                    <Select
                      name="mediaInterest"
                      value={formData.mediaInterest}
                      onChange={handleChange}
                      required
                    >
                      <MenuItem value="interview">Schedule Interview</MenuItem>
                      <MenuItem value="info">More Information</MenuItem>
                      <MenuItem value="collaborate">Collaboration</MenuItem>
                      <MenuItem value="article">Write an Article</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </>
            )}

            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" size="large">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
        {submissionMessage && (
          <Typography variant="body1" sx={{ mt: 2, textAlign: 'center' }}>
            {submissionMessage}
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default ContactForm;