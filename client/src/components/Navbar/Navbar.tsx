import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select'

import type { Locale } from '../../types/locale';
interface NavbarProps {
    onLanguageChange?: (locale: Locale) => void;
}

const NAV_ITEMS = [
    { name: 'Home', link: '/home' },
    { name: 'About', link: '/about' },
    { name: 'Skills', link: '/skills' },
    { name: 'My work', link: '/work' },
    // { name: 'Testimonials', link: '#testimonials' }, // 필요시 활성화
    { name: 'Contact', link: '/contact' },
];

const LANGUAGES: { code: Locale; label: string }[] = [
    { code: 'ko', label: '한국어' },
    { code: 'en', label: 'English' },
    { code: 'de', label: 'Deutsch' },
];

const Navbar: React.FC<NavbarProps> = ({ onLanguageChange }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState('');

    const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);
    const navigate = useNavigate(); // 추가

    const handleMenuClick = (link: string) => {
        setActive(link);
        setMenuOpen(false);
        navigate(link);
    };


    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar__left}>
                <i className="fab fa-diaspora"></i>
                <Select
                    options={LANGUAGES}
                    defaultValue={LANGUAGES[0]}
                    value={selectedLang}
                    theme={( theme ) =>({
                        ...theme,
                        borderRadius: 10,
                        colors: {
                            ...theme.colors,
                            primary: '#666666',
                        },
                    }) }
                    styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: state.isFocused ? 'grey' : 'none',
                            width: '100px'
                        }),
                    }}
                    onChange={(option) => {
                        const langObj = option as { code: Locale; label: string };
                        setSelectedLang(langObj);
                        if (onLanguageChange) onLanguageChange(langObj.code);
                    }}
                />
            </div>
            <ul className={`${styles.navbar__menu} ${menuOpen ? styles.open : ''}`}>
                {NAV_ITEMS.map((item) => (
                    <li
                        key={item.link}
                        className={`${styles.navbar__menu__item} ${active === item.link ? styles.active : ''}`}
                        data-link={item.link}
                        onClick={() => handleMenuClick(item.link)}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
            <button
                className={styles.navbar__toggle_btn}
                onClick={() => setMenuOpen((open) => !open)}
                aria-label="메뉴 열기/닫기"
            >
                <i className="fas fa-bars"></i>
            </button>
        </nav>
    );
};

export default Navbar;
