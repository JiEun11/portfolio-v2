import React from "react";

const Home: React.FC = () => {
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
            <div className="home__container">
                <img
                    src="/assets/avatar.png" // 루트 경로로 권장
                    alt="Bella's profile photo"
                    className="home__avatar"
                />
                <h1 className="home__title">
                    Hello, <br />
                    I'm Dream Coder
                </h1>
                <h2 className="home__description">Full of inspiration</h2>
                <button
                    className="home__contact"
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
