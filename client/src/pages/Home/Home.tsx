import React from "react";

import { useIntl } from 'react-intl';

import styles from './Home.module.scss';

const Home: React.FC = () => {
    const intl = useIntl();

    const handleContactClick = () => {
        const contactSection = document.querySelector("#contact");
        if (contactSection) {
            (contactSection as HTMLElement).scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    return (
        <section id="home">
            <div className={styles.home__container}>
                <img
                    src="/assets/avatar.png" // 루트 경로로 권장
                    alt="Bella's profile photo"
                    className={styles.home__avatar}
                />
                <h1 className={styles.home__title}>
                    {intl.formatMessage({ id: "home.title" }, {
                        br: <br />
                    })}
                </h1>
                <h2 className={styles.home__description}>
                    {intl.formatMessage({ id: "home.description" })}
                </h2>
                <button
                    className={styles.home__contact}
                    type="button"
                    onClick={handleContactClick}
                >
                    Contact Me
                </button>
            </div>
        </section>
    );
};

export default Home;
