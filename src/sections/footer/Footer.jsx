import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container mx-auto px-4 md:px-12">
      <div className="flex justify-between items-center py-3 bg-[#fff8f2]">
        <small>Copyright © 2023. All Rights Reserved.</small>
        <div className="flex gap-4">
          <a
            href="/"
            className="h-[30px] w-[30px] rounded-full border border-gray-900 flex items-center justify-center"
          >
            <FaTwitter className="text-gray-900" />
          </a>
          <a
            href="/"
            className="h-[30px] w-[30px] rounded-full border border-gray-900 flex items-center justify-center"
          >
            <FaFacebookF className="text-gray-900" />
          </a>
          <a
            href="/"
            className="h-[30px] w-[30px] rounded-full border border-gray-900 flex items-center justify-center"
          >
            <FaInstagram className="text-gray-900" />
          </a>
          <a
            href="/"
            className="h-[30px] w-[30px] rounded-full border border-gray-900 flex items-center justify-center"
          >
            <FaYoutube className="text-gray-900" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
