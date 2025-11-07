import React from "react";

function Quote() {
  return (
    <div className="w-full flex flex-col items-center gap-1 mt-auto cursor-grab">
      <p className="text-center sm:text-base sm:ml-auto text-lg italic order-1 md:order-2 md:border-r-2 pr-1">
        “Hire me, Please.”
      </p>
      <img
        src="/images/hire-me.jpeg"
        alt=""
        className="h-full w-full rounded-lg order-2 md:order-1"
      />
    </div>
  );
}

export default Quote;
