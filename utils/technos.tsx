import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaNpm,
  FaLinux,
  FaEthereum,
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiMongodb,
  SiVim,
  SiVisualstudio,
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiSolidity,
  SiChainlink,
  SiTailwindcss,
} from "react-icons/si";
import { GoMarkGithub } from "react-icons/go";

export const getTechnos = (size: number) => [
  <FaReact size={size} key="react" />,
  <TbBrandNextjs size={size} key="nextjs" />,

  <SiJavascript size={size} key="javascript" />,
  <SiTypescript size={size} key="javascript" />,
  <SiSolidity size={size} key="solidity" />,
  <FaNodeJs size={size} key="node" />,
  <SiExpress size={size} key="express" />,
  <FaEthereum size={size} key="ethereum" />,
  <SiChainlink size={size} key="chainlink" />,
  <SiMongodb size={size} key="mongo" />,
  <SiTailwindcss size={size} key="tailwindcss" />,
  <FaDocker size={size} key="docker" />,
  <FaNpm size={size} key="npm" />,
  <GoMarkGithub size={size} key="github" />,

  <FaLinux size={size} key="linux" />,

  <SiVim size={size} key="vim" />,
  <SiVisualstudio size={size} key="vscode" />,
];
