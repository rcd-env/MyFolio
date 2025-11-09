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
    {
      title: "Foodivery",
      description: "A full-stack food reel scrolling platform.",
      image: "/images/foodivery.png",
      githubLink: "https://github.com/rcd-env/foodivery",
      demoLink: "https://lets-foodivery.vercel.app/",
    },
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
    <div className="p-4 md:p-2 border border-gray-500 rounded-lg bg-white cursor-grab">
      <Swiper
        modules={[]}
        loop={true}
        direction={"vertical"}
        speed={250}
        navigation={true}
        spaceBetween={10}
        slidesPerView={1}
        className="mySwiper vertical-swiper"
        onSlideChange={handleSlideChange}
      >
        {showHint && <div className="swipe-hint vertical-hint">↕ Scroll</div>}
        {projects.map((project) => (
          <SwiperSlide key={project.title}>
            <div className="flex flex-col h-full">
              <img
                src={project.image}
                alt={project.title}
                className="border border-gray-500 rounded-md mb-2"
              />
              <hr />
              <div className="flex flex-col justify-between grow">
                <div>
                  <p className="text-xl font-semibold mt-2">{project.title}</p>
                  <p className="md:text-sm">{project.description}</p>
                </div>
                <div className="flex gap-4 mt-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-1 border border-gray-600 rounded-md flex gap-1.5 justify-around"
                  >
                    <Github /> GitHub
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-1 border border-gray-600 rounded-md flex gap-1.5 justify-around"
                  >
                    <SquareArrowOutUpRight /> Live
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[]}
        loop={true}
        direction={"horizontal"}
        navigation={true}
        spaceBetween={30}
        slidesPerView={1}
        className="mySwiper horizontal-swiper"
        onSlideChange={handleSlideChange}
      >
        {showHint && (
          <div className="swipe-hint horizontal-hint">← Swipe →</div>
        )}
        {projects.map((project) => (
          <SwiperSlide key={project.title}>
            <div className="relative flex flex-col pb-12">
              <img
                src={project.image}
                alt={project.title}
                className="border border-gray-500 rounded-md mb-3"
              />
              <hr />
              <p className="text-xl font-semibold mt-2 mb-1">{project.title}</p>
              <p className="md:text-sm">{project.description}</p>
              <div className="flex gap-4 absolute bottom-0 left-0">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-1 border border-gray-600 rounded-md flex gap-2 justify-around"
                >
                  <Github /> GitHub
                </a>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-1 border border-gray-600 rounded-md flex gap-2 justify-around"
                >
                  <SquareArrowOutUpRight /> Live
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
