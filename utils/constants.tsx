import { ReactElement } from "react";
import {Routes} from "../types/interfaces"
import { FaDocker, FaLinkedin, FaNpm,FaGithub ,} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi"
export const routes:Routes[]=[
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Contact",
    path: "/contact",
  },
]

type FooterCol = {
  title: string,
  links: {
    name: string,
    link: string,
    icon?: ReactElement,
    leavesWebsite: boolean
  }[]
}


type Footer = {
  columns: FooterCol[]
  support: {
    buymeacoffee: string
    paypal: string
    message: string
  }
};


export const footer: Footer = {
  columns: [
    {
      title: "Pages",
      links: [
        {
          name: "Home",
          link: "/",
          leavesWebsite: false,
        },
        {
          name: "About",
          link: "/about",
          leavesWebsite: false,
        },
        {
          name: "Projects",
          link: "/projects",
          leavesWebsite: false,
        },
        {
          name: "Contact",
          link: "/contact",
          leavesWebsite: false,
        },
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "GitHub",
          link: "https://github.com/priyeshkadbe",
          icon: <FaGithub size={25}/>,
          leavesWebsite: true,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/0xpriyesh/",
          icon: <FaLinkedin size={25}/>,
          leavesWebsite: true,
        },
        {
          name: "Email",
          link: "mailto:priyeshkadbe49@gmail.com",
          icon: <HiOutlineMail size={25}/>,
          leavesWebsite: true,
        },
      ],
    },
  ],
  support: {
    buymeacoffee: "priyeshkadbe",
    paypal: "priyeshkadbe49@gmail.com",
    message: "I appreciate your support very much! 💙",
  },
};
