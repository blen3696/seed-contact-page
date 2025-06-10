// src/i18n/index.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEn from './locales/en/translation.json';
import translationAm from './locales/am/translation.json';
import translationFr from './locales/fr/translation.json';
import translationAr from './locales/ar/translation.json';
import translationOm from './locales/om/translation.json';

const resources = {
  en: { translation: translationEn },
  am: { translation: translationAm },
  fr: { translation: translationFr },
  ar: { translation: translationAr },
  om: { translation: translationOm },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;


