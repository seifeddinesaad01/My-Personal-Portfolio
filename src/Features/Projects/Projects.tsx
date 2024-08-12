import React, { useEffect, useState } from 'react';
import "./Projects.css";
import  ProjectCard  from '../../components/ProjectCard/ProjectCard';
import { projects } from '../../data/constants';
import Spinner from '../../components/Spinner/Spinner';
const Projects = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Simulating loading time with setTimeout. Replace this with your actual loading logic.

        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            {loading ?
                <Spinner />
                :
                <div className="sectionThree" style={{
                    marginBottom:"2rem"
                }}>
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
                </div>
            }
        </>
    )
}

export default Projects