import { APP_INITIALIZER, LOCALE_ID } from '@angular/core';
import { ITranslationService, I18NEXT_SERVICE } from 'angular-i18next';
import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { environment } from '../../environments/environment';

export function appInit(i18next: ITranslationService) {
    return () => i18next
    .use(XHR)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'en',
        debug: false,
        returnEmptyString: false,
        ns: [
          'common',
          'menu'
        ],
        backend: {
            loadPath: environment.localizationApiUrl + '/api/resources/' + environment.localizationProjectId + '/{{lng}}/{{ns}}',
            allowMultiLoading: false
        },
        parse: function(data) { return data.replace(/a/g, ''); },
        crossDomain: true,
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
