import React from "react";
import { Github, SquareArrowOutUpRight } from "lucide-react";
const Projects = () => {
  const projects = [
    {
      title: "Earno",
      description:
        "Earno is a decentralized gaming dApp built on the Celo blockchain.",
      image: "/images/earno.png",
      githubLink: "https://github.com/rcd-env/earno",
      demoLink: "https://earno-celo.vercel.app/",
    },
    {
      title: "RoomGo",
      description: "A full-stack accommodation booking platform.",
      image: "/images/roomgo.png",
      githubLink: "https://github.com/rcd-env/roomgo",
      demoLink: "https://roomgo.onrender.com/",
    },
    {
      title: "Zuno",
      description:
        "A frontend clone of Zerodha built with React.js and Tailwind CSS.",
      image: "/images/zuno.png",
      githubLink: "https://github.com/rcd-env/zuno",
      demoLink: "https://zuno-sand.vercel.app/",
    },
    {
      title: "Foodivery",
      description: "A full-stack food reel scrolling platform.",
      image: "/images/foodivery.png",
      githubLink: "https://github.com/rcd-env/foodivery",
      demoLink: "https://lets-foodivery.vercel.app/",
    },
    {
      title: "ClimaSphere",
      description: "A sleek weather app built with HTML, CSS, and JavaScript.",
      image: "/images/climasphere.png",
      githubLink: "https://github.com/rcd-env/climasphere",
      demoLink: "https://weather-wizard-topaz.vercel.app/",
    },
    {
      title: "Simon Says Game",
      description: "A fun, interactive memory game built with JavaScript.",
      image: "/images/simon.png",
      githubLink: "https://github.com/rcd-env/SimonSaysGame",
      demoLink: "https://simon-says-game-murex.vercel.app/",
    },
    {
      title: "Line Dropper",
      description: "A content generation tool that helps creators craft posts",
      image: "/images/linedropper.png",
      githubLink: "https://github.com/rcd-env/LineDropper",
      demoLink: "https://line-dropper.vercel.app/",
    },
  ];

  return (
    <div className="p-4 border rounded-lg cursor-grab">
      {/* {projects.map((project, index) => ( */}
      <div className="flex flex-col">
        <img
          src={projects[0].image}
          alt={projects[0].title}
          className="border rounded-md mb-2"
        />
        <hr />
        <div className="flex flex-col">
          <p className="text-xl font-semibold mt-2">{projects[0].title}</p>
          <p className="md:text-sm">{projects[0].description}</p>
          {/* <div className="flex flex-wrap gap-2">
            {projects[0].tags.map((tag, i) => (
              <span key={i} className="text-xs px-2 py-1 border rounded-full">
                {tag}
              </span>
            ))}
          </div> */}
          <div className="flex gap-4 mt-3">
            <a
              href={projects[0].githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 border rounded-md flex gap-1.5 justify-around"
            >
              <Github /> GitHub
            </a>
            <a
              href={projects[0].demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 border rounded-md flex gap-1.5 justify-around"
            >
              <SquareArrowOutUpRight /> Live
            </a>
          </div>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
};

export default Projects;
