import React from "react";

function Quote() {
  return (
    <div className="w-full flex flex-col gap-1 mt-auto cursor-grab">
      <p className="text-center text-md font-semibold mb-1 italic text-[#3d2817]">
        “I am gonna be hokage someday.”
      </p>
      <div className="relative">
        <div className="absolute -inset-1 border-2 border-[#3d2817] rounded-xl"></div>
        <img
          src="/images/hokage.jpeg"
          alt=""
          className="relative h-full w-full border-2 border-[#3d2817] rounded-lg"
        />
      </div>
    </div>
  );
}

export default Quote;
