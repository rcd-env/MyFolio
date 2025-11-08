import React from "react";

function Links() {
  const links = [
    {
      name: "GitHub",
      url: "https://github.com/rcd-env",
      logo: "/images/github.png",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/rcd_env",
      logo: "/images/twitter.png",
    },
    {
      name: "Gmail",
      url: "mailto:donerakesh001@gmail.com",
      logo: "/images/gmail.png",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/rakesh-das001",
      logo: "/images/linkedin.png",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/919874660384",
      logo: "/images/whatsapp.png",
    },
  ];

  return (
    <div className="w-full justify-around items-center">
      <p className="text-3xl font-semibold mb-2 hidden md:block">Links.</p>
      <div className="flex justify-evenly md:justify-between items-center">
        {links.map((link) => (
          <div key={link.name} className="relative group">
            <a href={link.url} className="cursor-pointer">
              <img
                src={link.logo}
                alt={`${link.name} logo`}
                className={`rounded-lg ${
                  link.name === "Gmail" || link.name === "Gmail"
                    ? "h-9 w-9"
                    : "h-10 w-10"
                }`}
              />
              <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                {link.name}
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Links;
