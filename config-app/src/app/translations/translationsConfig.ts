import { APP_INITIALIZER, LOCALE_ID } from '@angular/core';
import { ITranslationService, I18NEXT_SERVICE } from 'angular-i18next';
import Locize from 'i18next-locize-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

export function appInit(i18next: ITranslationService) {
    return () => i18next
    .use(Locize)
    .use(LanguageDetector)
    .init({
        whitelist: ['en', 'pt'],
        fallbackLng: 'en',
        debug: true,
        returnEmptyString: false,
        ns: [
          'common',
          'menu'
        ],
        backend: {
            projectId: 'ccd37eb6-9ff1-4951-9589-476bffd4b7af',
            apiKey: '2dfedefe-7202-48f3-9f5f-d1e33cebe15c',
            version: 'v1',
            private: false,
            allowedAddOrUpdateHosts: ['localhost'],
        },
        detection: {
            order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
            lookupQuerystring: 'lng',
            caches: ['cookie'],
            cookieMinutes: 1,
            checkWhitelist: true
        }
    });
}

export function localeIdFactory(i18next: ITranslationService)  {
    return i18next.language;
}

export const I18N_PROVIDERS = [
{
    provide: APP_INITIALIZER,
    useFactory: appInit,
    deps: [I18NEXT_SERVICE],
    multi: true
},
{
    provide: LOCALE_ID,
    deps: [I18NEXT_SERVICE],
    useFactory: localeIdFactory
}];
