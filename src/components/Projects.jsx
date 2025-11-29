import React, { useState, useEffect } from "react";
import { Github, SquareArrowOutUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Projects.css";

const Projects = () => {
  const [showHint, setShowHint] = useState(true);
  const [hintTimer, setHintTimer] = useState(null);

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
    // {
    //   title: "Foodivery",
    //   description: "A full-stack food reel scrolling platform.",
    //   image: "/images/foodivery.png",
    //   githubLink: "https://github.com/rcd-env/foodivery",
    //   demoLink: "https://lets-foodivery.vercel.app/",
    // },
    {
      title: "Clima Sphere",
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

  const handleSlideChange = () => {
    setShowHint(false);
    if (hintTimer) {
      clearTimeout(hintTimer);
    }
    const timer = setTimeout(() => {
      setShowHint(true);
    }, 4000);
    setHintTimer(timer);
  };

  useEffect(() => {
    return () => {
      if (hintTimer) {
        clearTimeout(hintTimer);
      }
    };
  }, [hintTimer]);

  return (
    <div className="relative">
      <div className="absolute -inset-1 border-2 border-[#3d2817] rounded-xl"></div>
      <div className="relative p-4 border-2 border-[#3d2817] rounded-lg bg-[#f3ece0] cursor-grab">
        <Swiper
          modules={[]}
          loop={true}
          direction={"horizontal"}
          navigation={true}
          spaceBetween={30}
          slidesPerView={1}
          className="projects-swiper"
          onSlideChange={handleSlideChange}
        >
          {showHint && <div className="swipe-hint">← Swipe →</div>}
          {projects.map((project) => (
            <SwiperSlide key={project.title}>
              <div className="flex flex-col justify-between">
                {/* Image Section */}
                <div className="shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto max-h-[180px] object-cover border border-[#8b7355] rounded-md"
                  />
                </div>

                {/* Content Section */}
                <div className="mt-3 lg:mt-1">
                  <hr className="mb-2 lg:mb-1 border-[#8b7355]" />
                  <h3 className="text-xl font-semibold text-[#3d2817] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#3d2817] mb-4 lg:mb-2">
                    {project.description}
                  </p>
                </div>

                {/* Buttons Section */}
                <div className="flex gap-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 border border-[#8b7355] rounded-md flex items-center gap-2 text-[#3d2817] hover:bg-[#e8d9c3] transition-colors text-md"
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 border border-[#8b7355] rounded-md flex items-center gap-2 text-[#3d2817] hover:bg-[#e8d9c3] transition-colors text-md"
                  >
                    <SquareArrowOutUpRight size={20} />
                    <span>Live</span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
