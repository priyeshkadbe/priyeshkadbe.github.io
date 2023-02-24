import Link from "next/link";
import { TECH } from "./tech-stack";
export const CV = {
  intro: (
    <>
      I am a passionate self-taught software developer looking for a new
      challenge. I specialize in front-end- and serverless backend- development
      using Typescript, React.js, and Node.js. As an advocate for web
      performance, accessibility, and an evangelist for the ,I create amazing
      web applications to make the internet a better place. I love encountering
      hard-to-solve-problems and approach them with patience, determination, and
      relentless perseverance.
    </>
  ),
  eduction: [
    {
      dateFrom: "2018-07-01",
      dateTo: "2022-07-01",
      city: "Nagpur",
      country: "India",
      institution: "Rastrasant Tukdoji Maharaj Nagpur University",
      certificate: "Batchors of Engineering in Computer Science & Engineering",
      level: "Graduation",
      type: [],
    },
  ],
  experience: [
    {
      dateFrom: "2021-11-14",
      dateTo: "present",
      city: "Banglore",
      country: "India",
      company: "DBlockchainers",
      title: "Full Stack Software Developer",
      projects: {
        

        Ollyswap: {
          responsibility: [
            "Designed and developed a robust cryptocurrency exchange web application using ReactJS, TypeScript, Node.js, Express.js, Web3.js, Solidity, Truffle, Infura, and Metamask",
            "Implemented integration with various cryptocurrency wallets including Binance, Metamask, and Tron using the Web3Modal library for a seamless user experience.",
            "Led the development of the backend APIs using Node.js and Express.js to handle trading operations, user authentication, and payment processing.",
            "Collaborated with the team to design and implement complex smart contracts in Solidity to enable trading of various cryptocurrencies and ensure secure and transparent transactions",
            "Implemented automated testing for smart contracts using Truffle, Jest, Chai, and Mocha libraries, ensuring the accuracy and security of the application.",
            "Developed and maintained the backend APIs, ensuring seamless integration with the frontend and smooth operation of the application",
            "Conducted code reviews, identified areas for improvement, and optimized the codebase for performance and scalability"
          ],
        },
        DBCN: {
          responsibility: [
            "Developed and maintained cryptocurrency news mobile and web apps using React, Node.js, TailwindCSS, TypeScript, and MongoDB",
            "Guided team members in integrating APIs, ensuring successful project delivery and implementing authentication features",
            "Designed and implemented a comprehensive testing system for news reporters, translators, proofreaders, and graphic designers, including multiple languages and a 30-minute time limit.",
            "Developed backend APIs using NodeJS and ExpressJS for the news app",
            "Acted as a proactive problem solver, identifying and addressing issues as they arose and proposing innovative solutions to improve processes and workflows.",
          ],
        },
        // CoinspaceX: {
        //   responsibility: ["random"],
        // },
      },
    },
  ],
  capabilities: {
    languages: [
      {
        name: "Hindi - native",
        Icon: null,
      },
      {
        name: "English - bilingual",
        Icon: null,
      },
      {
        name: "Marathi - basic",
        Icon: null,
      },
    ],
    programmingLanguages: [
      TECH.typescript,
      TECH.javascript,
      TECH.solidity,
      TECH.graphql,
    ],
    librariesFrameworks: [
      TECH.react,
      TECH.tailwindcss,
      TECH.nextjs,
      TECH.nodejs,
      TECH.jest,
      TECH.express,
      TECH.webpack,
    ],
    serviceProviders: [TECH.vercel, TECH.github],

    tools: [TECH.git, TECH.yarn, TECH.npm, TECH.postman],
  },

  skills: {},
};
