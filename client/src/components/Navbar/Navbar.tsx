import React, { useState } from 'react';
import styles from './Navbar.module.scss';

const NAV_ITEMS = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Skills', link: '#skills' },
    { name: 'My work', link: '#work' },
    // { name: 'Testimonials', link: '#testimonials' }, // 필요시 활성화
    { name: 'Contact', link: '#contact' },
];

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState('');

    const handleMenuClick = (link: string) => {
        setActive(link);
        setMenuOpen(false);
        const target = document.querySelector(link);

        if (target) {
            (target as HTMLElement).scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar__logo}>
                <i className="fab fa-diaspora"></i>
                <a href="#home">Bella</a>
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
