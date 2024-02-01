import techStackData from "../../assets/techStackData.json";
import projectData from "../../assets/projectData.json";
import "./Projects.scss";

const Projects = () => {
  const allTechs = techStackData.map(tech => (
    <li key={tech.name} className="tech-stack__item">
      <img
        className="tech-stack__image"
        src={tech.src}
        alt=""
        aria-hidden="true"
      />
      <p className="tech-stack__name">{tech.name}</p>
    </li>
  ));

  const allProjects = projectData.map(project => (
    <li key={project.name} className="project-list__item">
      <img
        src={new URL(`.${project.image}`, import.meta.url).href}
        alt={`A preview screenshot of the ${project.name}.`}
        loading="lazy"
      />

      <h3 className="project-list__title">{project.name}</h3>

      <div className="project-list__btn-wrapper">
        <a
          className="btn btn--project"
          href={project.demo}
          target="_blank"
          rel="noreferrer">
          Demo
          <img
            src="/assets/images/icons/newtab-svgrepo-com.svg"
            alt=""
            aria-hidden="true"
            className="icon"
          />
        </a>
        <a
          className="btn btn--project"
          href={project.code}
          target="_blank"
          rel="noreferrer">
          Code
          <img
            src="/assets/images/icons/newtab-svgrepo-com.svg"
            alt=""
            aria-hidden="true"
            className="icon"
          />
        </a>
      </div>
    </li>
  ));

  return (
    <section id="projects" className="projects">
      <h2 className="projects__title title--sub">Projects</h2>

      <div className="tech-stack">
        <p className="tech-stack__desc">
          Feel free to browse through my projects. Here are some of the
          technologies I've used to create them:
        </p>
        <ul className="tech-stack__list">{allTechs}</ul>
      </div>

      <ul className="project-list">{allProjects}</ul>
    </section>
  );
};

export default Projects;
