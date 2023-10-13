import React from "react";

const CommonButtonOutlinedArrow = ({ link, text }) => {
  return (
    <a
      href={link}
      className="border font-semibold border-gray-900 rounded-full px-5 py-1 w-fit flex items-center text-base"
    >
      {text} &nbsp;
      <span>
        <img src="/png/link-arrow.png" alt="link arrow" />
      </span>
    </a>
  );
};

export default CommonButtonOutlinedArrow;
