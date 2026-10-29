import type { CSSProperties } from "react";
import type { Project } from "@/data/projects";

function ArrowUpRight() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const style = { "--accent": project.accent } as CSSProperties;

  return (
    <article className="project-card" style={style}>
      <div className="project-top">
        <span className="project-index">{project.index}</span>
        <span className="project-segment">{project.segment}</span>
      </div>

      <h3 className="project-name">{project.name}</h3>
      <p className="project-summary">{project.summary}</p>

      <ul className="project-highlights" aria-label={`Destaques de ${project.name}`}>
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      <ul className="project-stack" aria-label={`Tecnologias de ${project.name}`}>
        {project.stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="project-links">
        <a
          className="project-link project-link-primary"
          href={project.demoUrl}
          target="_blank"
          rel="noreferrer"
        >
          Abrir demonstração
          <ArrowUpRight />
        </a>
        <a
          className="project-link"
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
        >
          Código
        </a>
      </div>
    </article>
  );
}
