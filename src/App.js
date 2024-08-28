import React, { useEffect, useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import HookSection from './components/HookSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';
import './i18n';
import './App.css';
import theme from './theme';

function App() {
  const [direction, setDirection] = useState('ltr');

  useEffect(() => {
    const currentLang = localStorage.getItem('i18nextLng') || 'en';
    setDirection(currentLang === 'ar' ? 'rtl' : 'ltr');
  }, []);

  useEffect(() => {
    document.body.className = direction;
  }, [direction]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LanguageSwitcher setDirection={setDirection} />
      <HeroSection />
      <AboutSection />
      <HookSection />
      <ContactForm />
      <Footer />
    </ThemeProvider>
  );
}

export default App;