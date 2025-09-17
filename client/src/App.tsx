import { useState, useEffect} from 'react';
import { IntlProvider } from 'react-intl';
import {
    Navbar,
    ArrowUp,
} from "./components";

import type { Locale } from './types/locale';
import AppRoutes from './AppRoutes';

import koMessages from './locales/ko.json';
import enMessages from './locales/en.json';
import deMessages from './locales/de.json';

const messages = {
    ko: koMessages,
    en: enMessages,
    de: deMessages,
};

function App() {
    const [locale, setLocale] = useState<Locale>('ko');

    useEffect(() => {
        const browserLanguage = (navigator.language.substring(0, 2)) as Locale;
        if (['ko', 'en', 'de'].includes(browserLanguage)) {
            setLocale(browserLanguage);
        }
    }, []);

    return (
        <IntlProvider locale={locale}
            messages={messages[locale]}
            defaultLocale="ko"
        >
            <Navbar onLanguageChange={setLocale}/>
            <AppRoutes />
            <ArrowUp />
        </IntlProvider>
    );
}

export default App;
