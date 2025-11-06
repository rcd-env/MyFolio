import React from "react";

function Quote() {
  return (
    <div className="w-full flex flex-col items-center gap-1">
      <p className="text-center text-sm italic">Hire me, Please.</p>
      <img
        src="/images/hire-me.jpeg"
        alt=""
        className="h-full w-full rounded-lg"
      />
    </div>
  );
}

export default Quote;
