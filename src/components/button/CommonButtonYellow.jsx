import React from "react";

const CommonButtonYellow = ({ link, text }) => {
  return (
    <a
      href={link}
      className="bg-[#fae86e] rounded-full px-6 py-3 w-fit flex items-center text-base font-semibold"
    >
      {text} &nbsp;
      <span>
        <img src="/png/link-arrow.png" alt="link arrow" />
      </span>
    </a>
  );
};

export default CommonButtonYellow;
