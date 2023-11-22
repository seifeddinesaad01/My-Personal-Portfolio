import React from 'react';
import "./SectionThree.css";
import ProjectCard from '../../components/ProjectCard/ProjectCard';
const projects = [
    {
    },
    {
    },
    {
    },
]   
const SectionThree = () => {
    return (
        <div className="sectionThree">
            <h1>Recent Projects</h1>
            <div className="sectionThree__bottom">
                {projects?.map((project) => {
                    return <> 
                    <ProjectCard
                        title="Project Name"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        imageSrc="https://placekitten.com/800/400" // Replace with your actual image source
                        githubLink="https://github.com/yourusername/yourproject"
                        liveSiteLink="https://yoursite.com"
                    />
                    </>

                })}
            </div>
        </div>)
}

export default SectionThree