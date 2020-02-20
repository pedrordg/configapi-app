import { APP_INITIALIZER, LOCALE_ID } from '@angular/core';
import { ITranslationService, I18NEXT_SERVICE } from 'angular-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';

export function appInit(i18next: ITranslationService) {
    return () => i18next
    .use(XHR)
    .use(LanguageDetector)
    .init({
        whitelist: ['en', 'pt'],
        fallbackLng: 'en',
        namespace: 'common',
        debug: false,
        returnEmptyString: false,
        ns: [
          'common',
          'menu'
        ],
        backend: {
            // path where resources get loaded from, or a function
            // returning a path:
            // function(lngs, namespaces) { return customPath; }
            // the returned path will interpolate lng, ns if provided like giving a static path
            loadPath: '/{{projectId}}/{{lng}}/{{ns}}.json',

            // path to post missing resources
            addPath: '{{projectId}}/add/{{lng}}/{{ns}}',

            allowMultiLoading: false, // set loadPath: '/locales/resources.json?lng={{lng}}&ns={{ns}}' to adapt to multiLoading

            // allow cross domain requests
            crossDomain: false,

            // allow credentials on cross domain requests
            withCredentials: false,

            // custom request headers sets request.setRequestHeader(key, value)
            customHeaders: {
                authorization: 'foo',
            },

            // define a custom xhr function
            // can be used to support XDomainRequest in IE 8 and 9
            //
            // 'url' will be passed the value of 'loadPath'
            // 'options' will be this entire options object
            // 'callback' is a function that takes two parameters, 'data' and 'xhr'.
            //            'data' should be the key:value translation pairs for the
            //            requested language and namespace, or null in case of an error.
            //            'xhr' should be a status object, e.g. { status: 200 }
            // 'data' will be a key:value object used when saving missing translations
            ajax: function (url, options, callback, data) {},

            // adds parameters to resource URL. 'example.com' -> 'example.com?v=1.3.5'
            queryStringParams: { v: '1.3.5' }
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
