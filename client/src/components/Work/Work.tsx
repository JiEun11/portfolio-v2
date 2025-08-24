import React, { useState } from "react";
import styles from "./Work.module.scss";

type Category = "all" | "front-end" | "back-end" | "data-analysis";

const categories = [
    { key: "all", label: "All" },
    { key: "front-end", label: "Front-End" },
    { key: "back-end", label: "Back-End" },
    { key: "data-analysis", label: "Data-Analysis" },
] as const;

const projects = [
    {
        href: "https://github.com/JiEun11/portfolio",
        img: "/assets/projects/project1.png",
        alt: "Youtube",
        title: "Portfolio Site",
        desc: "Portfolio Site by JavaScript",
        type: "front-end",
    },
    {
        href: "https://github.com/JiEun11/portfolio",
        img: "/assets/projects/project2.png",
        alt: "mobile",
        title: "Application",
        desc: "Frontend development through collaboration with the Product experience Design team",
        type: "front-end",
    },
    {
        href: "https://github.com/JiEun11/portfolio",
        img: "/assets/projects/project3.png",
        alt: "mobile",
        title: "Application",
        desc: "API Design and Implementation by Node Express & Spring Boot",
        type: "back-end",
    },
    {
        href: "https://github.com/JiEun11/portfolio",
        img: "/assets/projects/project4.png",
        alt: "mobile",
        title: "Batch system",
        desc: "Creating raw material data crawlers using external APIs, Java, Python, SQLalchemy, Pandas",
        type: "data-analysis",
    },
    {
        href: "https://github.com/JiEun11/portfolio",
        img: "/assets/projects/project5.png",
        alt: "mobile",
        title: "Mobile",
        desc: "Responsive website by React",
        type: "front-end",
    },
];

const Work: React.FC = () => {
    const [selected, setSelected] = useState<Category>("all");

    // 카테고리별 프로젝트 개수 계산
    const categoryCount = (cat: Category) =>
        cat === "all"
            ? projects.length
            : projects.filter((p) => p.type === cat).length;

    // 필터링된 프로젝트 목록
    const filteredProjects =
        selected === "all"
            ? projects
            : projects.filter((p) => p.type === selected);

    return (
        <section id="work" className="section">
            <div className="section__container">
                <h1>My work</h1>
                <h3>Projects</h3>
                <div className={styles.work__categories}>
                    {categories.map((cat) => (
                        <button
                            key={cat.key}
                            className={`${styles.category__btn} ${
                                selected === cat.key ? styles.selected : ""
                            }`}
                            data-filter={cat.key === "all" ? "*" : cat.key}
                            onClick={() => setSelected(cat.key as Category)}
                        >
                            {cat.label}
                            <span className={styles.category__count}>
                                {categoryCount(cat.key as Category)}
                            </span>
                        </button>
                    ))}
                </div>
                <div className={styles.work__projects}>
                    {filteredProjects.map((p, idx) => (
                        <a
                            key={idx}
                            href={p.href}
                            className={styles.project}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-type={p.type}
                        >
                            <img
                                className={styles.project__img}
                                src={p.img}
                                alt={p.alt}
                            />
                            <div className={styles.project__description}>
                                <h3>{p.title}</h3>
                                <span>{p.desc}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
