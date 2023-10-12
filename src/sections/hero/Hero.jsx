import React from "react";
import CommonButtonYellow from "../../components/button/CommonButtonYellow.jsx";
import CommonButtonOutlined from "../../components/button/CommonButtonOutlined.jsx";

const contents = [
  {
    text: "Web Design",
    link: "/",
  },
  {
    text: "UI/UX design",
    link: "/",
  },
  {
    text: "Web3",
    link: "/",
  },
  {
    text: "Content writing",
    link: "/",
  },
  {
    text: "Branding",
    link: "/",
  },
];

const Hero = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full lg:w-3/5 min-h-[680px] bg-[url('/svg/hero-grid.svg')] bg-cover bg-no-repeat bg-right">
        <div className="container ms-auto ps-4 md:ps-20 pt-20">
          <h1 className="text-[50px] md:text-7xl lg:text-[85px] leading-none font-medium">
            INSPIRING BRAND EXPERIENCES
          </h1>
          <p className="py-6 text-xl">
            Our team of experts specializes in web design & Development,
            branding, content creation, UI/UX Design, Community manage, and
            more.
          </p>
          <div className="py-6">
            <CommonButtonYellow text="Our portfolio" link="/" />
          </div>
          <div className="py-9">
            <img src="/png/persons.png" alt="persons" />
            <p className="py-6 text-xl w-1/2">
              A forward-thinking digital design studio delivering subtle
              experiences.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/5 ps-4 lg:ps-20 pe-4 lg:pe-20 flex flex-col justify-end items-center lg:items-end">
        <img src="/png/meet-1.png" alt="meeting image" className="w-full" />
        <div className="flex justify-end">
          <div className="flex flex-wrap gap-4 py-6 w-fit">
            {contents.map(({ text, link }, indx) => (
              <CommonButtonOutlined text={text} link={link} key={indx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
