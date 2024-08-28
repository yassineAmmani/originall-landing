import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import Flag from 'react-world-flags';
import { useTranslation } from 'react-i18next';

// Define styles
const styles = {
  container: {
    display: 'flex',
    alignItems: 'right',
    justifyContent: 'flex-end',
    position: 'relative',
    zIndex: 10, // Ensures the component is on top
  },
  button: {
    width: 32,
    height: 32,
    margin: 4,
    transition: 'transform 0.3s ease, opacity 0.3s ease',
    borderRadius: '50%',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5,
    '&:hover': {
      transform: 'scale(1.8)',
      opacity: 1, // Full opacity on hover
    },
  },
  selected: {
    opacity: 1, // Full opacity for selected language
  },
  flag: {
    width: 24,
    height: 24,
  },
};

const LanguageSwitcher = ({ setDirection }) => {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = React.useState(i18n.language);

  const changeLanguage = (lng) => {
    setSelectedLang(lng);
    i18n.changeLanguage(lng);
    setDirection(lng === 'ar' ? 'rtl' : 'ltr');
  };

  return (
    <div style={styles.container}>
      <Tooltip title="English">
        <IconButton
          onClick={() => changeLanguage('en')}
          style={{
            ...styles.button,
            ...(selectedLang === 'en' ? styles.selected : {}),
          }}
        >
          <Flag code="US" style={styles.flag} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Français">
        <IconButton
          onClick={() => changeLanguage('fr')}
          style={{
            ...styles.button,
            ...(selectedLang === 'fr' ? styles.selected : {}),
          }}
        >
          <Flag code="FR" style={styles.flag} />
        </IconButton>
      </Tooltip>
      <Tooltip title="العربية">
        <IconButton
          onClick={() => changeLanguage('ar')}
          style={{
            ...styles.button,
            ...(selectedLang === 'ar' ? styles.selected : {}),
          }}
        >
          <Flag code="MA" style={styles.flag} />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default LanguageSwitcher;
