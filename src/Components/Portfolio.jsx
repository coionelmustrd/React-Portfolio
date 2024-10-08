import React from 'react';

const projects = [
  { title: 'Placeholder', image: 'placeholder', deployedUrl: '#', repoUrl: '#' },
  { title: 'Placeholder', image: 'placeholder', deployedUrl: '#', repoUrl: '#' },
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      {projects.map((project, index) => (
        <div key={index}>
          <h2>{project.title}</h2>
          <img src={project.image} alt={project.title} />
          <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">Deployed App</a>
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;