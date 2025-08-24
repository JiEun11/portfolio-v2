import React from "react";
import styles from "./Skills.module.scss";

const skills = [
    { name: "React", value: 90 },
    { name: "HTML", value: 90 },
    { name: "CSS", value: 90 },
    { name: "JavaScript", value: 90 },
];

const tools = ["Visual Studio Code", "IntelliJ", "Anaconda", "PyCharm", "Weka"];

const etc = ["Git", "Scrum master", "Math"];

const Skills: React.FC = () => {
    return (
        <section id="skills" className="section">
            <div className="section__container">
                <h1>Skills</h1>
                <h2>Skills & Attributes</h2>
                <p>Passion for learning new technologies.</p>
                <div className={styles.skillset}>
                    <div className={styles.skillset__left}>
                        <h3 className={styles.skillset__title}>Skills</h3>
                        {skills.map((skill) => (
                            <div className={styles.skill} key={skill.name}>
                                <div className={styles.skill__description}>
                                    <span>{skill.name}</span>
                                    <span>{skill.value}%</span>
                                </div>
                                <div className={styles.skill__bar}>
                                    <div
                                        className={styles.skill__value}
                                        style={{ width: `${skill.value}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.skillset__right}>
                        <div className={styles.tools}>
                            <h3 className={styles.skillset__title}>Tools</h3>
                            <ul className={styles.tools__list}>
                                {tools.map((tool) => (
                                    <li key={tool}>
                                        <span>{tool}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.etc}>
                            <h3 className={styles.skillset__title}>Etc</h3>
                            <ul className={styles.etc__list}>
                                {etc.map((item) => (
                                    <li key={item}>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
