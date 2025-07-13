import React from "react";

const Contact: React.FC = () => {
    return (
        <section id="contact" className="section">
            <h1 className="contact__title">Let's talk</h1>
            <h2 className="contact__email">shdudtnr3939@gmail.com</h2>
            <div className="contact__links">
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
            <p className="contact__rights">
                2021 Bella&apos;s Dream Coding All rights reserved
            </p>
        </section>
    );
};

export default Contact;
