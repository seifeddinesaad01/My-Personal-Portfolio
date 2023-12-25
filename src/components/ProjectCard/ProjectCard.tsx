import React from 'react';
import "./ProjectCard.css";
import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  githubLink: string;
  liveSiteLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageSrc,
  githubLink,
  liveSiteLink,
}) => {
  return (
    <div className="project-card">
      <img className="project-image" src={imageSrc} alt={title} />
      <div className="project-details">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-links">
          <a href={githubLink} target="_blank" rel="noopener noreferrer"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.5rem"
            }}>
            <FaGithub /> GitHub
          </a>
          {liveSiteLink !== "empty" &&
            <a
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.5rem"
              }} href={liveSiteLink} target="_blank" rel="noopener noreferrer">
              <MdLiveTv /> Live Site
            </a>}

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
