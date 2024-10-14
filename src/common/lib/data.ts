import React from 'react';

import campwithusImg from '@/../public/images/camp-with-us.png';
import carcatalogImg from '@/../public/images/car-catalog.png';
import chatappImg from '@/../public/images/chat-app.png';
import projectmanagementImg from '@/../public/images/project-management.png';
import reactfoodImg from '@/../public/images/react-food.png';
import portfolioImg from '@/../public/images/portfolio.png';
import {
  BookIcon,
  BriefcaseBusinessIcon,
  LaptopMinimalIcon,
} from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const experiencesData = [
  {
    label: 'Junior Web Developer',
    title: 'BA Unique Web Solutions',
    location: 'Karachi, Pakistan',
    description: `Experienced Junior Web Developer specializing in building scalable, responsive web applications, leveraging expertise in modern JavaScript frameworks, full-stack development, and project leadership to deliver innovative digital solutions. `,
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Jul 2024 - Present',
  },
  {
    label: 'ERP Operator',
    title: 'Liberty Mills Limited',
    location: 'Karachi, Pakistan',
    description: `Efficiently managed and maintained ERP systems to streamline business processes, ensuring optimal functionality and data accuracy for enhanced decision-making.`,
    icon: React.createElement(LaptopMinimalIcon),
    date: 'Jan 2024 - May 2024',
  },
] as const;

export const images = {
  campwithusImg,
  carcatalogImg,
  chatappImg,
  projectmanagementImg,
  reactfoodImg,
};

export const projectsData = [
  {
    title: 'Portfolio',
    description:
      `Portfolio that you're currently viewing! This project showcases my work and provides information about me.`,
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Framer Motion',
      'Cloudinary',
      'React Email',
      'Tailwind',
    ],
    imageUrl: portfolioImg,
    link: 'https://github.com/AhmedDeveloper14/My-Portfolio',
  },
] as const;

export const skillsData = [
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['React', '/svgs/react.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['Express', '/svgs/express-original.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  ['Framer', '/svgs/framer.svg'],
  ['Shadcn', '/svgs/shadcnui.svg'],
  ['Redux', '/svgs/redux-original.svg'],
  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['MySQL', '/svgs/MySQL.svg'],
  ['Cloudinary', '/svgs/cloudinary.svg'],
  ['Axios', '/svgs/axios.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['Sass', '/svgs/Sass.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['', '/svgs/etc.svg'],
] as const;
