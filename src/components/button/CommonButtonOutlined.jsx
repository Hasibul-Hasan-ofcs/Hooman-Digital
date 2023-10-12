import React from "react";

const CommonButtonOutlined = ({ link, text }) => {
  return (
    <a
      href={link}
      className="border font-semibold border-gray-900 rounded-full px-3 py-2 w-fit flex items-center text-base"
    >
      {text}
    </a>
  );
};

export default CommonButtonOutlined;
