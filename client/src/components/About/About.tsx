// src/sections/About.tsx
import React from "react";

const majors = [
    {
        icon: "fab fa-html5",
        title: "Front-end",
        description: (
            <>
                HTML, CSS, JavaScript, TypeScript,
                <br />
                React, Vue, Web APIs
            </>
        ),
    },
    {
        icon: "fas fa-server",
        title: "Back-end",
        description: (
            <>
                Java, JavaScript, jQuery, AJAX
                <br />
                NodeJS, Oracle, AWS, MySQL
            </>
        ),
    },
    {
        icon: "fas fa-chart-line",
        title: "Data-Analysis",
        description: (
            <>
                Python, Machine Learning, Tensorflow,
                <br />
                R, Weka, Excel
            </>
        ),
    },
];

const jobs = [
    {
        img: "/assets/jobs/dku.png",
        alt: "Dankook Univ",
        name: "Undergraduate resercher",
        period: "2019 Jan - Until 2020 March",
    },
    {
        img: "/assets/jobs/vsb-tuo.png",
        alt: "Technical University of Ostrava",
        name: "Erasmus Student",
        period: "2020 Sep - Until 2021 Feb",
    },
];

const About: React.FC = () => {
    return (
        <section id="about" className="section section__container">
            <h1>About me</h1>
            <p>Introduce myself</p>
            <div className="about__majors">
                {majors.map((major) => (
                    <div className="major" key={major.title}>
                        <div className="major__icon">
                            <i className={major.icon}></i>
                        </div>
                        <h2 className="major__title">{major.title}</h2>
                        <div className="major__description">
                            {major.description}
                        </div>
                    </div>
                ))}
            </div>
            <div className="about__jobs">
                {jobs.map((job) => (
                    <div className="job" key={job.name}>
                        <img
                            src={job.img}
                            alt={job.alt}
                            className="job__logo"
                        />
                        <div className="job__description">
                            <p className="job__name">{job.name}</p>
                            <p className="job__period">{job.period}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;
