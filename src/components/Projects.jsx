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
      // tags: ["React.js", "Tailwind CSS", "CELO"],
    },
    {
      title: "RoomGo",
      description: "A full-stack accommodation booking platform.",
      image: "/images/roomgo.png",
      githubLink: "https://github.com/rcd-env/roomgo",
      demoLink: "https://roomgo.onrender.com/",
      // tags: ["Node.js", "Express.js", "MongoDB", "BootStrap", "EJS"],
    },
    {
      title: "ClimaSphere",
      description:
        "A sleek weather app that provides real-time weather updates based on your location or search queries.",
      image: "/images/ClimaSphere.png",
      githubLink: "https://github.com/rcd-env/climasphere",
      demoLink: "https://weather-wizard-topaz.vercel.app/",
      // tags: ["JavaScript", "HTML", "CSS", "OpenWeather API"],
    },
    {
      title: "Simon Says Game",
      description:
        "A fun, interactive memory game built with JavaScript, replicating the classic 'Simon Says' gameplay.",
      image: "/images/SimonSaysGame.png",
      githubLink: "https://github.com/rcd-env/simon-says-game",
      demoLink: "https://simon-says-game-murex.vercel.app/",
      // tags: ["JavaScript", "HTML", "CSS"],
    },
    {
      title: "Line Dropper",
      description:
        "A content generation tool that helps creators craft perfect social media posts. Just enter a topic, tone, length, and platform — it suggests optimized titles, hashtags, and descriptions.",
      image: "/images/LineDropper.png",
      githubLink: "https://github.com/rcd-env/line-dropper",
      demoLink: "https://line-dropper.vercel.app/",
      // tags: ["Node.js", "Express.js", "OpenAI API", "HTML", "CSS"],
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
