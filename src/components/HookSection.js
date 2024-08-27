import React, { useState } from 'react';
import { Box, Typography, Container, Button, ButtonGroup } from '@mui/material';
import { Share, ContentCopy } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const HookSection = () => {
  const { t } = useTranslation();
  const [discountType, setDiscountType] = useState('$10');
  const referralLink = `originall.org/coupon=${discountType.replace('$', '')}`;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Check out OriginAll',
        text: t('hook_section_referral_message').replace('{discountType}', discountType),
        url: referralLink,
      });
    } else {
      window.open(`https://wa.me/?text=${encodeURIComponent(t('hook_section_referral_message').replace('{discountType}', discountType))} ${encodeURIComponent(referralLink)}`, '_blank');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    alert('Referral link copied to clipboard!');
  };

  return (
    <Box sx={{ py: 4, backgroundColor: '#F4E1D2', color: '#2B3A42' }}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" gutterBottom align="center">
          {t('hook_section_offer_title')}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <ButtonGroup variant="contained" aria-label="discount type selection">
            <Button 
              onClick={() => setDiscountType('$10')}
              color={discountType === '$10' ? 'primary' : 'secondary'}
            >
              $10 Off
            </Button>
            <Button 
              onClick={() => setDiscountType('20%')}
              color={discountType === '20%' ? 'primary' : 'secondary'}
            >
              20% Off
            </Button>
          </ButtonGroup>
        </Box>
        <Typography variant="body1" align="center" paragraph>
          {t('hook_section_offer_text').replace('{discountType}', discountType)}
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          {t('hook_section_invite_text')}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button startIcon={<Share />} variant="contained" color="primary" onClick={handleShare}>
            {t('hook_section_share_button')}
          </Button>
          <Button startIcon={<ContentCopy />} variant="outlined" color="primary" onClick={handleCopy}>
            {t('hook_section_copy_button')}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HookSection;
