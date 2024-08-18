import React, { useState } from 'react';
import { Box, Typography, Container, Button, ButtonGroup } from '@mui/material';
import { Share, ContentCopy } from '@mui/icons-material';

const HookSection = () => {
  const [discountType, setDiscountType] = useState('$10');
  const referralLink = `originall.org/coupon=${discountType.replace('$', '')}`;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Check out OriginAll',
        text: `Join OriginAll and get ${discountType} off your first purchase!`,
        url: referralLink,
      });
    } else {
      window.open(`https://wa.me/?text=Check out OriginAll and get ${discountType} off your first purchase! ${referralLink}`, '_blank');
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
          Choose Your Launch Day Offer
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
          Join us on launch day and be among the first to discover original, handcrafted products. Sign up now and receive an exclusive {discountType} off coupon!
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Invite a friend and double your discount! Your friend will also receive a coupon of their choice.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button startIcon={<Share />} variant="contained" color="primary" onClick={handleShare}>
            Share
          </Button>
          <Button startIcon={<ContentCopy />} variant="outlined" color="primary" onClick={handleCopy}>
            Copy Link
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HookSection;