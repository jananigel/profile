import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
	.use(HttpBackend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'en',
		detection: {
			order: ['querystring', 'navigator'],
			caches: [],
		},
		backend: {
			loadPath: `${import.meta.env.BASE_URL}translations/{{ns}}/{{lng}}.json`,
		},
		ns: ['common'],
		defaultNS: 'common',
		interpolation: {
			escapeValue: false,
		},
		debug: import.meta.env.DEV,
	});

export default i18n;
