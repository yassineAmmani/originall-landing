import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import HookSection from './components/HookSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';
import './i18n';

function App() {
  return (
    <ThemeProvider theme={theme}>
          <CssBaseline />
          <LanguageSwitcher />
          <HeroSection />
      <AboutSection />
      <HookSection />
      <ContactForm />
      <Footer />
    </ThemeProvider>
  );
}

export default App;