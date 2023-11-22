import React from 'react';
import "./SectionThree.css";
import ProjectCard from '../../components/ProjectCard/ProjectCard';
const projects = [
    {
        title: "YOUTUBE-CLONE",
        description: "Experience the essence of YouTube in our seamless and user-friendly video-sharing clone."  ,      imageSrc:"https://github.com/seifeddinesaad01/youtube-clone/blob/master/src/yt-clone.png?raw=true",
        githubLink:"https://github.com/seifeddinesaad01/youtube-clone",
        liveSiteLink:"vdfv"
    },
    {
        title:"MOVIX APP",
        description:"Discover and showcase the best movies with Movix app",
        imageSrc:"https://github.com/seifeddinesaad01/MOVIX-APP/raw/master/public/overview.png",
        githubLink:"https://github.com/seifeddinesaad01/MOVIX-APP",
        liveSiteLink:"sfvs"
    }
    
]
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