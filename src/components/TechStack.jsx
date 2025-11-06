import React from "react";
import { Braces } from "lucide-react";

function TechStack() {
  const frontend = [
    "HTML",
    "CSS",
    "BootStrap",
    "TailwindCSS",
    "JavaScript",
    "ShadCN",
    "NextJS",
  ];
  const backend = [
    "NodeJS",
    "Bun",
    "ExpressJS",
    "Hono",
    "JWT",
    "REST API",
    "Socket.IO",
  ];
  const database = ["MySQL", "MongoDB", "PostgreSQL", "Firebase", "Supabase"];

  const language = ["C", "Java", "JavaScript", "TypeScript", "Python"];

  const extra = ["Git", "GitHub", "Docker", "Kubernetes"];

  return (
    <div className="h-full w-1/3 p-8 border rounded-lg">
      <div className="flex gap-4 mb-4 text-7xl items-center">
        <Braces size={54} /> <span className="text-3xl">Arsenal</span>
      </div>
      <hr />
      {frontend.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Frontend</h2>
          <div className="flex flex-wrap">
            {frontend.map((tech) => (
              <div key={tech} className="mr-2">
                {tech}
              </div>
            ))}
          </div>
        </div>
      )}
      {backend.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Backend</h2>
          <div className="flex flex-wrap">
            {backend.map((tech) => (
              <div key={tech} className="mr-2">
                {tech}
              </div>
            ))}
          </div>
        </div>
      )}
      {database.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Database</h2>
          <div className="flex flex-wrap">
            {database.map((tech) => (
              <div key={tech} className="mr-2">
                {tech}
              </div>
            ))}
          </div>
        </div>
      )}
      {language.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Languages</h2>
          <div className="flex flex-wrap">
            {language.map((tech) => (
              <div key={tech} className="mr-2">
                {tech}
              </div>
            ))}
          </div>
        </div>
      )}
      {extra.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Extras</h2>
          <div className="flex flex-wrap">
            {extra.map((tech) => (
              <div key={tech} className="mr-2">
                {tech}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default TechStack;
