import React from "react";

function DailyToolStack() {
  const tools = [
    { name: "VSCode", icon: "/images/vscode.svg" },
    { name: "Google Chrome", icon: "/images/chrome.svg" },
    { name: "hiAnime", icon: "/images/hianime.png" },
    { name: "Github Copilot", icon: "/images/copilot.png" },
    { name: "Spotify", icon: "/images/spotify.svg" },
  ];
  return (
    <div className="h-full p-4 border rounded-lg flex flex-col gap-2 cursor-grab">
      <div>
        <p className="text-2xl font-bold">DAILY</p>
        <p>TOOL</p>
        <p className="text-3xl font-bold">STACK.</p>
      </div>
      <div className="h-full flex sm:flex-col gap-4 justify-evenly">
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
    </div>
  );
}

export default DailyToolStack;
