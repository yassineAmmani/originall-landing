import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="md">
        <Typography variant="h2" component="h2" gutterBottom>
          {t('about_title')}
        </Typography>
        <Typography variant="body1" paragraph>
          {t('about_text')}
        </Typography>
        <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 4 }}>
          {t('our_mission_title')}
        </Typography>
        <Typography variant="body1" paragraph>
          {t('our_mission_text')}
        </Typography>
        <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 4 }}>
          {t('what_we_offer_title')}
        </Typography>
        <Grid container spacing={2}>
          {[
            t('category_household_furnishings'),
            t('category_ceramic_sculptures'),
            t('category_embroidery'),
            t('category_food_products'),
            t('category_skincare_herbal_blends'),
            t('category_antique_products')
          ].map((category) => (
            <Grid item xs={12} sm={6} md={4} key={category}>
              <Typography variant="body1">• {category}</Typography>
            </Grid>
          ))}
        </Grid>
        <Typography variant="body1" sx={{ mt: 4 }}>
          {t('global_text')}
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutSection;
