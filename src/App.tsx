/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';

import Hero from './components/Hero';
import Disclaimer from './components/Disclaimer';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';
import { translations } from './i18n';

import img1 from './assets/images/funny_screenshot_1_1784111105231.jpg';
import img2 from './assets/images/funny_screenshot_2_1784111115687.jpg';
import img3 from './assets/images/funny_screenshot_3_1784111128009.jpg';
import img4 from './assets/images/funny_screenshot_4_1784111140268.jpg';

const images = [img1, img2, img3, img4];

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState<'bn' | 'en'>('bn');
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | 'contact' | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'bn' ? 'en' : 'bn');
  };

  const t = translations[language];

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-[#f4f7f6] dark:bg-[#1a1a1a] transition-colors duration-300">

      <main className="flex-1 overflow-y-auto">
        <Hero language={language} t={t} />
        <Disclaimer language={language} t={t} />
        <Gallery images={images} language={language} t={t} />
      </main>
      <Footer 
        onPrivacyClick={() => setLegalModal('privacy')}
        onTermsClick={() => setLegalModal('terms')}
        onContactClick={() => setLegalModal('contact')}
        language={language}
        t={t}
      />
      <LegalModal type={legalModal} onClose={() => setLegalModal(null)} />
    </div>
  );
}
