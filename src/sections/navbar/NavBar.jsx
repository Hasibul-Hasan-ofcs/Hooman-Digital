import React from "react";

const NavBar = () => {
  return (
    <div className="container mx-auto px-4 md:px-12 min-h-[80px] flex items-center justify-between">
      <a href="/" className="flex gap-2">
        <img
          src="/png/hooman-logo-main-rectangle.png"
          alt="hooman main logo"
          className="h-[35px]"
        />
        <img
          src="/png/hooman-logo-main-text.png"
          alt="hooman main logo"
          className="h-[35px]"
        />
      </a>
      <div className="flex gap-4 md:gap-8">
        <a href="/" className="font-bold">
          Home
        </a>
        <a href="/blog" className="font-bold">
          Blog
        </a>
      </div>
    </div>
  );
};

export default NavBar;
