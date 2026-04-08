import { projects } from "@/data/projects";

function ProjectImage({
  label,
  path,
  title,
  placeholder,
}: {
  label: string;
  path: string;
  title: string;
  placeholder?: boolean;
}) {
  return (
    <div className="project-image">
      <span>{label}</span>
      {placeholder ? (
        <div className="placeholder-box" role="img" aria-label={`${title}, ${label}`}>
          <div>
            <p>Kuva lisätään tähän</p>
            <p className="placeholder-hint">{path}</p>
          </div>
        </div>
      ) : (
        <img className="image-frame" src={path} alt={`${title}, ${label}`} />
      )}
    </div>
  );
}

export function ProjectGallery() {
  return (
    <div className="projects">
      {projects.map((project) => (
        <article key={project.slug} className="project">
          <div className="project-meta flow">
            <h3>{project.title}</h3>
            <p className="project-category">{project.category}</p>
            {project.description ? (
              <p className="project-description">{project.description}</p>
            ) : null}
          </div>

          <div className="project-grid">
            <ProjectImage
              label="ennen"
              path={project.beforeImage}
              title={project.title}
              placeholder={project.placeholder}
            />
            <ProjectImage
              label="jälkeen"
              path={project.afterImage}
              title={project.title}
              placeholder={project.placeholder}
            />
          </div>
        </article>
      ))}
    </div>
  );
}
