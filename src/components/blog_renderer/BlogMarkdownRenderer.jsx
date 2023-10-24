import React from "react";
import style from "./css/style.module.css";

const BlogMarkdownRenderer = ({ children }) => {
  return (
    <article
      className={`container max-w-[872px] mx-auto px-4 md:px-12 pb-20 ${style.blogRenderer}`}
    >
      {children}
    </article>
  );
};

export default BlogMarkdownRenderer;
