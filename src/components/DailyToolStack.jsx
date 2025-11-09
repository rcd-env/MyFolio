import React from "react";

function DailyToolStack() {
  const tools = [
    { name: "VSCode", icon: "/images/code.png" },
    { name: "Google Chrome", icon: "/images/chrome.svg" },
    { name: "Github Copilot", icon: "/images/copilot.png" },
    { name: "Youtube", icon: "/images/youtube.png" },
    { name: "hiAnime", icon: "/images/hianime.png" },
    { name: "Spotify", icon: "/images/spotify.png" },
  ];
  return (
    <div className="h-full p-4 border border-gray-500 rounded-lg bg-white flex flex-col gap-2 cursor-grab">
      <div>
        <p className="text-2xl font-bold">DAILY</p>
        <p>TOOL</p>
        <p className="text-3xl font-bold">STACK.</p>
      </div>
      <div className="h-full w-full flex md:hidden gap-4 justify-between mt-1 md:mt-0">
        {tools.map((tool, index) => (
          <div key={tool.name} className="relative group">
            <img
              id={index}
              src={tool.icon}
              alt={`${tool.name} logo`}
              className="h-10 w-10 rounded-lg"
            />
            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
      <div className="h-full justify-around hidden md:flex">
        <div className="h-full w-1/2 flex md:flex-col gap-4 justify-between mt-1 md:mt-0">
          {tools.map((tool, index) => (
            <div key={tool.name} className="relative group">
              <img
                id={index}
                src={tool.icon}
                alt={`${tool.name} logo`}
                className="h-10 w-10 rounded-lg"
              />
              <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
        <div className="h-full w-1/2">
          <img
            src="/images/white-waves.jpg"
            alt="drago"
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default DailyToolStack;
