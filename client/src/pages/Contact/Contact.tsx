import React from "react";
import styles from "./Contact.module.scss";

import cn from 'classnames';

const Contact: React.FC = () => {
    return (
        <section id="contact" className={cn("section", styles.contact)}>
            <h1 className={styles.contact__title}>Let's talk</h1>
            <h2 className={styles.contact__email}>shdudtnr3939@gmail.com</h2>
            <div className={styles.contact__links}>
                <a
                    href="https://github.com/JiEun11/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-github"></i>
                </a>
                <a
                    href="https://www.youtube.com/channel/UCffzrqaHP8JB53GHuzmLMDw"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-youtube"></i>
                </a>
            </div>
            <p className={styles.contact__rights}>
                2021 Bella&apos;s Dream Coding All rights reserved
            </p>
        </section>
    );
};

export default Contact;
