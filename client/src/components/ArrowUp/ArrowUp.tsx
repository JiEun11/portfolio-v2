import React from "react";

const ArrowUp: React.FC = () => {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            className="arrow-up"
            onClick={handleClick}
            aria-label="맨 위로 이동"
        >
            <i className="fas fa-arrow-up"></i>
        </button>
    );
};

export default ArrowUp;
