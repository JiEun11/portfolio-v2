import React, { useState } from "react";

const NAV_ITEMS = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "My work", link: "#work" },
    // { name: 'Testimonials', link: '#testimonials' }, // 필요시 주석 해제
    { name: "Contact", link: "#contact" },
];

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState("");

    const handleMenuClick = (link: string) => {
        setActive(link);
        setMenuOpen(false);
        const target = document.querySelector(link);

        if (target) {
            (target as HTMLElement).scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav id="navbar" className="navbar">
            <div className="navbar__logo">
                <i className="fab fa-diaspora"></i>
                <a href="#home">Bella</a>
            </div>
            <ul className={`navbar__menu${menuOpen ? " open" : ""}`}>
                {NAV_ITEMS.map((item) => (
                    <li
                        key={item.link}
                        className={`navbar__menu__item${
                            active === item.link ? " active" : ""
                        }`}
                        data-link={item.link}
                        onClick={() => handleMenuClick(item.link)}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
            <button
                className="navbar__toggle-btn"
                onClick={() => setMenuOpen((open) => !open)}
                aria-label="메뉴 열기/닫기"
            >
                <i className="fas fa-bars"></i>
            </button>
        </nav>
    );
};

export default Navbar;
