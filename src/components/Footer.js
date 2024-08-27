import React from 'react';
import { Box, Typography, IconButton, Container } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" gutterBottom>
              {t('footer_contact_us')}
            </Typography>
            <Typography variant="body2">{t('footer_email')}</Typography>
            <Typography variant="body2">{t('footer_phone')}</Typography>
            <Typography variant="body2">{t('footer_location')}</Typography>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" gutterBottom>
              {t('footer_follow_us')}
            </Typography>
            <IconButton color="inherit" aria-label={t('footer_facebook')} component="a" href="#" target="_blank">
              <Facebook />
            </IconButton>
            <IconButton color="inherit" aria-label={t('footer_twitter')} component="a" href="#" target="_blank">
              <Twitter />
            </IconButton>
            <IconButton color="inherit" aria-label={t('footer_instagram')} component="a" href="#" target="_blank">
              <Instagram />
            </IconButton>
          </Box>
        </Box>
        <Typography variant="body2" align="center" sx={{ mt: 4 }}>
          {t('footer_launch_message')}
        </Typography>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          {t('footer_rights_reserved').replace('{year}', new Date().getFullYear())}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
