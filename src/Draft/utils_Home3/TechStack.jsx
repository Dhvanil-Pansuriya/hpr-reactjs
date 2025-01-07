import React from 'react';
import { FaReact, FaBootstrap, FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";

const TechStack = () => {
  const technologies = [
    { icon: FaBootstrap, name: 'Bootstrap' },
    { icon: RiTailwindCssFill, name: 'Tailwind' },
    { icon: FaReact, name: 'React' },
    { icon: RiNextjsFill, name: 'Next.js' },
    { icon: FaHtml5, name: 'HTML' },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 mt-5">
      {technologies.map((tech, index) => {
        const Icon = tech.icon;
        return (
          <div
            key={index}
            className="flex items-center justify-center w-12 h-12 bg-primary-light rounded-full animate-spin-slow "
          >
            <Icon className="w-6 h-6 text-background transition-transform  ease-in-out hover:scale-100 animate-spin animate-infinite animate-normal animate-fill-backwards animate-duration-[5000ms]" />
          </div>
        );
      })}
    </div>
  );
};

export default TechStack;
