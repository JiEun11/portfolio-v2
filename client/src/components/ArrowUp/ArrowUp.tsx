import React, { useState, useEffect } from "react";
import styles from "./ArrowUp.module.scss";

const ArrowUp: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > window.innerHeight / 2) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        // 컴포넌트 언마운트 시 스크롤 이벤트 제거
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <button
            className={`${styles.arrowUp} ${isVisible ? styles.visible : ''}`}
            onClick={handleClick}
            aria-label="맨 위로 이동"
        >
            <i className="fas fa-arrow-up"></i>
        </button>
    );
};

export default ArrowUp;
