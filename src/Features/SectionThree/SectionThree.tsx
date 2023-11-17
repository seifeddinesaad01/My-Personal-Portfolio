import React from 'react';
import "./SectionThree.css";
import ProjectCard from '../../components/ProjectCard/ProjectCard';
const projects = [
    {}
]
const SectionThree = () => {
    return (
        <div className="sectionThree">
            <h1>Recent Projects</h1>
            <div className="sectionThree__bottom">
                {projects?.map((project) => {
                    return <ProjectCard />
                })}
            </div>
        </div>)
}

export default SectionThree