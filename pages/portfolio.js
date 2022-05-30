import React from "react";
import Meta from "../components/Meta";
import { projects } from "../projectsData";
import Link from "next/link";

const portfolio = () => {
  return (
    <div>
      <Meta
        title={"Portfolio dev, les tous derniers projets réalisés"}
        description={
          "Des projets intéressants dynamiques et à la pointe de la technologie"
        }
      />
      <h2>Portfolio</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link href="projects/[id}" as={"projects/" + project.id}>
              <a>
                {project.title} <span>➡</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default portfolio;
