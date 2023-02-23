import { AiOutlineConsoleSql } from "react-icons/ai";
import { FaAws } from "react-icons/fa";
import { ImUpload } from "react-icons/im";
import { IoLogoSass } from "react-icons/io5";
import { IoLogoVercel } from "react-icons/io5";
import { MdDesktopMac } from "react-icons/md";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiEslint } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiFramer } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiGooglechrome } from "react-icons/si";
import { SiGraphql } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiIntellijidea } from "react-icons/si";
import { SiIonic } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiMarkdown } from "react-icons/si";
import { SiMicrosoftoffice } from "react-icons/si";
import { SiMicrosoftteams } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
// import { SiNextDotJs } from "react-icons/si";
// import { SiNodeDotJs } from "react-icons/si";
import { SiNpm } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiPrettier } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiRedis } from "react-icons/si";
import { SiRuby } from "react-icons/si";
import { SiShopify } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiWebpack } from "react-icons/si";
import { SiWordpress } from "react-icons/si";
import { SiYarn } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiSolidity } from "react-icons/si";
import { SiIpfs } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { FaGithub } from "react-icons/fa";

import AwsAmplify from "public/icons/tech-logos/aws_amplify.svg";
import AwsLambda from "public/icons/tech-logos/aws_lambda.svg";
import Axios from "public/icons/tech-logos/axios.svg";
import Emmet from "public/icons/tech-logos/emmet.svg";
import HeadlessUi from "public/icons/tech-logos/headlessui.svg";
import Jsdom from "public/icons/tech-logos/jsdom.svg";
import Mdx from "public/icons/tech-logos/mdx.svg";
import PlanetScale from "public/icons/tech-logos/planetscale.svg";
import Preact from "public/icons/tech-logos/preact.svg";
import Prisma from "public/icons/tech-logos/prisma.svg";
import ReactQuery from "public/icons/tech-logos/react_query.svg";
import Remix from "public/icons/tech-logos/remix.svg";
import Sendgrid from "public/icons/tech-logos/sendgrid.svg";
import Stylelint from "public/icons/tech-logos/stylelint.svg";
import Swc from "public/icons/tech-logos/swc.svg";
import Takealot from "public/icons/tech-logos/takealot.svg";
import Trpc from "public/icons/tech-logos/trpc.svg";
import Turborepo from "public/icons/tech-logos/turborepo.svg";
import Vend from "public/icons/tech-logos/vend_pos.svg";
import NextJs from "public/icons/tech-logos/nextjs.svg";
import Express from "public/icons/tech-logos/express.svg";
import Liquid from "public/icons/tech-logos/liquid.svg";

interface IconProps {
  className?: string;
}

export const TECH = {
  typescript: {
    name: "TypeScript",
    Icon: ({ className }: IconProps) => <SiTypescript className={className} />,
  },
  solidity: {
    name: "Solidity",
    Icon: ({ className }: IconProps) => < SiSolidity className={className} />,
  },
  vercel: {
    name: "Vercel",
    Icon: ({ className }: IconProps) => <IoLogoVercel className={className} />,
  },

  nextjs: {
    name: "Next.js",
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },

  nodejs: {
    name: "Node.js",
    Icon: ({ className }: IconProps) => <FaNodeJs className={className} />,
  },

  graphql: {
    name: "GraphQL",
    Icon: ({ className }: IconProps) => <SiGraphql className={className} />,
  },
  reactjs: {
    name: "React.js",
    Icon: ({ className }: IconProps) => <SiReact className={className} />,
  },


  css_3: {
    name: "CSS",
    Icon: ({ className }: IconProps) => <SiCss3 className={className} />,
  },

  eslint: {
    name: "Eslint",
    Icon: ({ className }: IconProps) => <SiEslint className={className} />,
  },

  git: {
    name: "Git",
    Icon: ({ className }: IconProps) => <SiGit className={className} />,
  },
  github: {
    name: "Github",
    Icon: ({ className }: IconProps) => <SiGithub className={className} />,
  },

  html_5: {
    name: "HTML",
    Icon: ({ className }: IconProps) => <SiHtml5 className={className} />,
  },

  javascript: {
    name: "JavaScript",
    Icon: ({ className }: IconProps) => <SiJavascript className={className} />,
  },
  jest: {
    name: "Jest",
    Icon: ({ className }: IconProps) => <SiJest className={className} />,
  },

  express: {
    name: "Express",
    Icon: ({ className }: IconProps) => <Express className={className} />,
  },

  prettier: {
    name: "Prettier",
    Icon: ({ className }: IconProps) => <SiPrettier className={className} />,
  },
  react: {
    name: "React.js",
    Icon: ({ className }: IconProps) => <SiReact className={className} />,
  },

  tailwindcss: {
    name: "Tailwindcss",
    Icon: ({ className }: IconProps) => <SiTailwindcss className={className} />,
  },

  webpack: {
    name: "Webpack",
    Icon: ({ className }: IconProps) => <SiWebpack className={className} />,
  },
  yarn: {
    name: "Yarn",
    Icon: ({ className }: IconProps) => <SiYarn className={className} />,
  },
  npm: {
    name: "NPM",
    Icon: ({ className }: IconProps) => <SiNpm className={className} />,
  },
  postman: {
    name: "Postman",
    Icon: ({ className }: IconProps) => <SiPostman className={className} />,
  },
} as const;
