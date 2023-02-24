import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaNpm,
  FaLinux,
  FaEthereum,
  FaBootstrap
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
  SiPostman,
  SiBinance,
  SiWeb3Dotjs
} from "react-icons/si";
import { GoMarkGithub } from "react-icons/go";


export const getTechnos = (size: number) => [
  <FaReact size={size} key="react" />,
  <TbBrandNextjs size={size} key="nextjs" />,
  <SiJavascript size={size} key="javascript" />,
  <SiTypescript size={size} key="javascript" />,
  <FaEthereum size={size} key="Ethereum" />,
  <SiSolidity size={size} key="solidity" />,
  <SiWeb3Dotjs size={size} key="Web3.js" />,
  <FaNodeJs size={size} key="node" />,
  <SiExpress size={size} key="express" />,
  <FaEthereum size={size} key="ethereum" />,
  <SiBinance size={size}  key="binance"/>,
  <SiChainlink size={size} key="chainlink" />,
  <SiMongodb size={size} key="mongo" />,
  <SiTailwindcss size={size} key="tailwindcss" />,
  <FaBootstrap size={size} key="bootstrap" />,
  <FaDocker size={size} key="docker" />,
  <FaNpm size={size} key="npm" />,
  <GoMarkGithub size={size} key="github" />,
  <FaLinux size={size} key="linux" />,
  <SiPostman size={size} key="postman" />,
  <SiVim size={size} key="vim" />,
  <SiVisualstudio size={size} key="vscode" />,
];
