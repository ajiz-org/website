import { dictionary } from "./dictionary.config";
import { defaultSettings } from "./settings.config";

const { homeLink, actualityLink, historyLink, contactLink } = dictionary[defaultSettings.language].navbar;

export const navigation = [
    { title: homeLink , path: '/' },
    { title: actualityLink , path: '/actuality' },
    { title: historyLink , path: '/history' },
    { title: contactLink , path: '/contact' },
] as const;


export const logoPath = '/ajiz-logo.png';
export const logoAlt = 'logo AJIZ';