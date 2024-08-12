import React from 'react';
import "./ProjectCard.css";
import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import "./ProjectCard.css"
import { Link } from 'react-router-dom';

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
    <div className="card" style={{
      backgroundImage: `url(${imageSrc})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      objectFit:"cover"
  
    }}>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-body">
          {description}
        </p>
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
