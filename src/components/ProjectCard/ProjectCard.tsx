import React from 'react';
import "./ProjectCard.css";
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
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href={liveSiteLink} target="_blank" rel="noopener noreferrer">
            Live Site <i className="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
