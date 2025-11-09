import React, { useState, useEffect } from "react";
import { MapPin, Dot } from "lucide-react";
function Info() {
  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000); // update every second
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000 * 60 * 60);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="w-full p-4 border border-gray-500 rounded-md bg-white flex flex-col gap-2 cursor-grab">
      <div className="flex gap-2 items-center">
        <img
          src="/images/shawn.jpg"
          alt="Rks D."
          className="h-16 w-16 rounded-lg"
        />
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold ml-2 name tracking-wide">
            Rakesh D.
          </h1>
          <p className="text-sm font-mono mt-0.5 ml-2 flex gap-1 items-center justify-center tracking-wider">
            127.0.0.1 &bull; India
          </p>
        </div>
        <img src="/images/dark.png" alt="" className="h-8 w-12 ml-auto" />
      </div>
      <div className="mt-2">
        <p className="font-semibold">I build.</p>
        <p className="text-sm">oh and i speak fluent json and sarcasm btw.</p>
      </div>
      <div className="flex mt-3 justify-between items-center leading-5">
        <p className="text-gray-500">
          “How to center <br />a div again?”
        </p>
        <div>
          <div className="flex gap-1 items-center">
            <div className="h-2 w-2 bg-[#00ff00] rounded-full ml-auto"></div>
            <span className="text-gray-900">open to work</span>
          </div>
          <div className="text-sm font-mono text-gray-500">
            {formattedTime} &bull; {formattedDate}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
