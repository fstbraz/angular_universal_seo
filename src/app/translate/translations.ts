// app/translate/translation.ts
import { OpaqueToken } from '@angular/core';

// import translations
import { LANG_EN_NAME, LANG_EN_TRANS } from './lang-en';
import { LANG_PT_NAME, LANG_PT_TRANS } from './lang-pt';
import { LANG_ZH_NAME, LANG_ZH_TRANS } from './lang-zh';

// translation token
export const TRANSLATIONS = new OpaqueToken('translations');

// all translations
const dictionary = {
    en: LANG_EN_TRANS,
    pt: LANG_PT_TRANS,
    zh: LANG_ZH_TRANS,
};

// providers
export const TRANSLATION_PROVIDERS = [
    { provide: TRANSLATIONS, useValue: dictionary },
];