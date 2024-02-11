import React from 'react'
import "./Skills.css";
import { FaReact, FaNode, FaHtml5, FaGit } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiJest } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";
import skillsImg from "../../assets/skills.png"
export const skills = [
    {
        icon: <FaReact />,
        name: "React JS"
    },
    {
        icon: <TbBrandNextjs />,
        name: "Next JS"
    },
    {
        icon: <FaNode />,
        name: "Node JS"
    }, {
        icon: <FaHtml5 />,
        name: "HTML"
    },
    {
        icon: <IoLogoCss3 />,
        name: "CSS"
    },
    {
        icon: <SiTypescript />,
        name: "Typescript"
    },
    {
        icon: <IoLogoJavascript />,
        name: "Javascript"
    },
    {
        icon: <SiJest />,
        name: "Jest JS"
    },
    {
        icon: <FaGit />,
        name: "Git"
    },

]
const Skills = () => {
    return (
        <div className='skills__container'>
            <div className='skills__left'>
                <h1>My Tech Stack</h1>
                <p className='sub__title'>Technologies I’ve been working with recently.</p>
                <div className="icons__container">
                    {skills?.map((skill) => {
                        return <div className="skill">
                            <p className='skill__icon'>{skill?.icon}</p>
                            <p className='skill__name'>{skill?.name}</p>
                        </div>
                    })}
                </div>
            </div>

            <img src={skillsImg} alt="skills" className='skills__hero'/>
        </div>
    )
}

export default Skills;