import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel, Container, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const { t } = useTranslation();
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
        setSubmissionMessage(t('submission_error_message'));
      });
  };

  const getSubmissionMessage = (userType) => {
    switch (userType) {
      case 'client':
        return t('submission_client_message');
      case 'seller':
        return t('submission_seller_message');
      case 'media':
        return t('submission_media_message');
      default:
        return t('submission_default_message');
    }
  };

  return (
    <Box id="contact-form" sx={{ py: 8, backgroundColor: 'background.paper' }}>
      <Container maxWidth="md">
        <Typography variant="h2" component="h2" gutterBottom>
          {t('contact_form_title')}
        </Typography>
        <Typography variant="body1" paragraph>
          {t('contact_form_description')}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label={t('form_name_label')}
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label={t('form_email_label')}
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
                label={t('form_phone_label')}
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>{t('form_user_type_label')}</InputLabel>
                <Select
                  name="userType"
                  value={formData.userType}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="client">{t('user_type_client')}</MenuItem>
                  <MenuItem value="seller">{t('user_type_seller')}</MenuItem>
                  <MenuItem value="media">{t('user_type_media')}</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {formData.userType === 'client' && (
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>{t('form_coupon_type_label')}</InputLabel>
                  <Select
                    name="couponType"
                    value={formData.couponType}
                    onChange={handleChange}
                    required
                  >
                    <MenuItem value="$10">{t('coupon_type_10')}</MenuItem>
                    <MenuItem value="20%">{t('coupon_type_20')}</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            )}

            {formData.userType === 'seller' && (
              <>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>{t('form_seller_type_label')}</InputLabel>
                    <Select
                      name="sellerType"
                      value={formData.sellerType}
                      onChange={handleChange}
                      required
                    >
                      <MenuItem value="cooperative">{t('seller_type_cooperative')}</MenuItem>
                      <MenuItem value="individual">{t('seller_type_individual')}</MenuItem>
                      <MenuItem value="association">{t('seller_type_association')}</MenuItem>
                      <MenuItem value="company">{t('seller_type_company')}</MenuItem>
                      <MenuItem value="amateur">{t('seller_type_amateur')}</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>{t('form_product_category_label')}</InputLabel>
                    <Select
                      name="productCategory"
                      value={formData.productCategory}
                      onChange={handleChange}
                      required
                    >
                      <MenuItem value="household">{t('product_category_household')}</MenuItem>
                      <MenuItem value="ceramic">{t('product_category_ceramic')}</MenuItem>
                      <MenuItem value="embroidery">{t('product_category_embroidery')}</MenuItem>
                      <MenuItem value="food">{t('product_category_food')}</MenuItem>
                      <MenuItem value="skincare">{t('product_category_skincare')}</MenuItem>
                      <MenuItem value="antique">{t('product_category_antique')}</MenuItem>
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
                    label={t('form_media_company_label')}
                    name="mediaCompany"
                    value={formData.mediaCompany}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>{t('form_media_category_label')}</InputLabel>
                    <Select
                      name="mediaCategory"
                      value={formData.mediaCategory}
                      onChange={handleChange}
                      required
                    >
                      <MenuItem value="economic">{t('media_category_economic')}</MenuItem>
                      <MenuItem value="lifestyle">{t('media_category_lifestyle')}</MenuItem>
                      <MenuItem value="news">{t('media_category_news')}</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>{t('form_media_interest_label')}</InputLabel>
                    <Select
                      name="mediaInterest"
                      value={formData.mediaInterest}
                      onChange={handleChange}
                      required
                    >
                      <MenuItem value="interview">{t('media_interest_interview')}</MenuItem>
                      <MenuItem value="info">{t('media_interest_info')}</MenuItem>
                      <MenuItem value="collaborate">{t('media_interest_collaborate')}</MenuItem>
                      <MenuItem value="article">{t('media_interest_article')}</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </>
            )}

            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" size="large">
                {t('form_submit_button')}
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
