import { useEffect, useState } from "react";
import Info from "./components/Info";
import TechStack from "./components/TechStack";
import Links from "./components/Links";
import Projects from "./components/Projects";
import XP from "./components/XP";
import DailyToolStack from "./components/DailyToolStack";
import Quote from "./components/Quote";
import GitContribution from "./components/GitContribution";
import Song from "./components/Song";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload images and wait for external content
    const preloadContent = async () => {
      // List of images to preload
      const imagesToPreload = [
        "/images/white-waves.jpg",
        // Add any other images used in your components here
      ];

      // Preload all images
      const imagePromises = imagesToPreload.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve; // Resolve even on error to not block animation
        });
      });

      // Wait for images to load
      await Promise.all(imagePromises);

      // Give a small delay for GitContribution and Song iframe to initialize
      await new Promise((resolve) => setTimeout(resolve, 300));

      // Trigger animations
      setIsLoaded(true);
    };

    preloadContent();
  }, []);

  return (
    <div className="px-4 py-4 md:py-5 md:px-10 main">
      <div
        className={`lg:hidden flex flex-col gap-4 max-w-2xl mx-auto animate-on-load ${
          isLoaded ? "animate-fade-in" : ""
        }`}
      >
        <Info />
        <Links />
        <TechStack />
        <Projects />
        <DailyToolStack />
        <XP />
        <GitContribution />
        <Song />
        <Quote />
      </div>

      <div className="hidden lg:flex justify-center gap-4">
        <div
          className={`w-[20%] animate-on-load ${
            isLoaded ? "animate-slide-in-left" : ""
          }`}
        >
          <TechStack />
        </div>
        <div className="w-[35%] flex flex-col gap-4">
          <div
            className={`animate-on-load ${
              isLoaded ? "animate-slide-in-top" : ""
            }`}
          >
            <Info />
          </div>
          <div
            className={`flex gap-4 animate-on-load ${
              isLoaded ? "animate-slide-in-bottom" : ""
            }`}
          >
            <div className="w-1/3">
              <DailyToolStack />
            </div>
            <div className="flex flex-col gap-4 w-2/3">
              <XP />
              <GitContribution />
              <Song />
            </div>
          </div>
        </div>
        <div
          className={`w-[20%] flex flex-col gap-4 animate-on-load ${
            isLoaded ? "animate-slide-in-right" : ""
          }`}
        >
          <Links />
          <Projects />
          <img
            src="/images/white-waves.jpg"
            alt=""
            className="h-2 w-full hidden md:block object-cover rounded-lg"
          />
          <Quote />
        </div>
      </div>
      <hr className="my-4 md:hidden" />
      <p className="pr-2 mb-2 text-end font-mono text-md md:hidden">
        peace out.
      </p>
    </div>
  );
}

export default App;
