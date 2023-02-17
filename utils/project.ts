import { kebabCase, kebabArray } from "./utils";
import { Project } from "../types/interfaces";

const projects: Project[] = [
  {
    id: 0,
    title: "Learn.TheYEI",
    desc: "All the resources you will need to get a boost into economics.",
    img: "/projects/yei-learn.png",
    link: "#",
    github: "https://github.com/priyeshkadbe/",
    tags: ["React", "NextJS", "TailwindCSS", "CSS", "Firebase"],
  },
  {
    id: 1,
    title: "BuildFaster",
    desc: "Beautiful HTML templates ready-made for your next landing page.",
    img: "/projects/buildfaster.png",
    link: "#",
    tags: ["HTML", "CSS", "Javascript", "Gumroad"],
  },
  {
    id: 2,
    title: "React Emoji Search",
    desc: "1800+ emojis at your fingertips. Ready-to-use with just a simple copy+paste.",
    img: "/projects/react-emoji-search.png",
    link: "#",
    github: "https://github.com/priyeshkadbe/",
    tags: ["React", "CSS", "JSON"],
  },
  {
    id: 3,
    title: "BitcoinTemp",
    desc: "A fun way to check the price of bitcoin! Cloudy days, sunny days, and Bitcoin Storms!",
    img: "/projects/bitcointemp.png",
    link: "#",
    tags: ["React", "NextJS", "SCSS", "API"],
  },
  {
    id: 4,
    title: "Create HTML Boilerplate",
    desc: "Generate a vanilla HTML boilerplate in a flash!",
    img: "/projects/create-html-boilerplate.png",
    github: "https://github.com/priyeshkadbe/",
    tags: ["Node", "Javascript", "NPM", "HTML"],
  },
  {
    id: 5,
    title: "8 Ball in your CLI",
    desc: "An 8 ball simulation in your CLI built with Rust!",
    img: "/projects/8ball-rust.png",
    github: "https://github.com/priyeshkadbe/",
    tags: ["Rust", "CLI", "Game"],
  },
  
];

export const allTags: string[] = [];

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects