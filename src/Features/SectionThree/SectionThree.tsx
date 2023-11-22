import React from 'react';
import "./SectionThree.css";
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { projects } from '../../data/constants';
const SectionThree = () => {
    return (
        <div className="sectionThree">
            <h1>Recent Projects</h1>
            <div className="sectionThree__bottom">
                {projects?.map((project) => {
                    return <>
                        <ProjectCard
                            title={project.title}
                            description={project?.description}
                            imageSrc={project?.imageSrc} // Replace with your actual image source
                            githubLink={project?.githubLink}
                            liveSiteLink={project?.liveSiteLink}
                        />
                    </>
                })}
            </div>
        </div>)
}

export default SectionThree