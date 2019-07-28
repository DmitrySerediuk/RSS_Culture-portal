import locales from '../locale';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ru: {
        translation: {
          "Validate": "Validate"
        },
      },
      en: {
        translation: {
          "Validate": "Valider"
        }
      },
      by: {
        translation: {
          "Validate": "Valider"
        }
      },
    },
    fallbackLng: 'ru',
    debug: true,
    preload: ['ru', 'en', 'by'],
    initImmediate: false,
    react: {
      wait: true,
    },
  });

// const i18Init = i18n
//   .use(initReactI18next)
//   .init({
//     resources: locales,
//     fallbackLng: 'ru',
//     debug: true,
//     preload: ['ru', 'en', 'by'],
//     initImmediate: false,
//     react: {
//       wait: true,
//     },
//   });

// export default i18n;