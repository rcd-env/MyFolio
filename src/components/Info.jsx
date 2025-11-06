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
    <div className="w-1/3 p-4 border rounded-md flex flex-col gap-2">
      <div className="flex gap-2">
        <img
          src="/images/hokage.jpeg"
          alt="Rks D."
          className="h-16 w-16 rounded-2xl"
        />
        <div className="flex flex-col ">
          <h1 className="font-semibold ml-1">Rakesh D.</h1>
          <p className="mt-1 flex items-center justify-center">
            <MapPin /> 127.0.0.1
          </p>
        </div>
      </div>
      <div className="mt-2">
        <p>I build.</p>
      </div>
      <div className="flex mt-3 justify-between">
        <p className="w-28 text-gray-500">"How to center a div again?"</p>
        <div>
          <div className="flex gap-1 items-center">
            <div className="h-2 w-2 bg-[#00ff00] rounded-full ml-auto"></div>
            <span className="text-gray-900">Online</span>
          </div>
          <div className="text-gray-500">
            {formattedTime} &bull; {formattedDate}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
