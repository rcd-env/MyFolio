import React from "react";

function Quote() {
  return (
    <div className="w-full flex flex-col items-center gap-1 mt-auto cursor-grab">
      <img
        src="/images/hire-me.jpeg"
        alt=""
        className="h-full w-full rounded-lg"
      />
      <p className="mr-auto text-lg italic flex items-center justify-center">
        ~ “Hire me, Please.”
      </p>
    </div>
  );
}

export default Quote;
