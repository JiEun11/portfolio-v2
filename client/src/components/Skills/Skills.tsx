// src/sections/Skills.tsx
import React from "react";

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
                <div className="skillset">
                    <div className="skillset__left">
                        <h3 className="skillset__title">Skills</h3>
                        {skills.map((skill) => (
                            <div className="skill" key={skill.name}>
                                <div className="skill__description">
                                    <span>{skill.name}</span>
                                    <span>{skill.value}%</span>
                                </div>
                                <div className="skill__bar">
                                    <div
                                        className="skill__value"
                                        style={{ width: `${skill.value}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="skillset__right">
                        <div className="tools">
                            <h3 className="skillset__title">Tools</h3>
                            <ul className="tools__list">
                                {tools.map((tool) => (
                                    <li key={tool}>
                                        <span>{tool}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="etc">
                            <h3 className="skillset__title">Etc</h3>
                            <ul className="etc__list">
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
