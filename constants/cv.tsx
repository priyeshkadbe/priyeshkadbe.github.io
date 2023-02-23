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
        DBCN: {
          content: [
            "Event management from planning, purchasing, production, venue setup to on-the-day coordination.",
            "random",
          ],
        },

        Ollyswap: {
          content:[
            "random"
          ],
        },
        CoinspaceX:{
          content: [
            "random"
          ]
        }
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
};
