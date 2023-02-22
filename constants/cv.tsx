import Link from "next/link"
import { TECH } from "./tech-stack";


export const CV = {

  intro: (
    <>
      I am a passionate self-taught software developer  looking for
      a new challenge. I specialize in front-end- and serverless backend- development using
      Typescript, React.js, and Node.js. As an advocate for web performance, accessibility, and an
      evangelist for the{" "}
      ,I create amazing web applications to make the internet a better place. I love encountering
      hard-to-solve-problems and approach them with patience, determination, and relentless
      perseverance.
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
    }
  ],
  experience: [
    {
      dateFrom: "2010-02-01",
      dateTo: "2018-01-01",
      city: "Banglore",
      country: "India",
      company: "DBlockchainers",
      title: "Full Stack Software Developer",
      description: "full time",
      type:"full time",
      responsibilities: [
        {
          content: "Founded the business to cater for small scale catering needs",
          type: ["entrepreneurial"],
        },
        {
          content:
            "Event management from planning, purchasing, production, venue setup to on-the-day coordination.",
          type: ["management"],
        },
        {
          content: "Menu planning, development and costing, creating standardized recipe cards.",
          type: ["restaurant", "management"],
        },
        {
          content: "Hired & trained part-time employees for on the day event execution",
          type: ["entrepreneurial", "management"],
        },
      ],
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
      TECH.html_5,
      TECH.css_3,
      TECH.sass,
      TECH.graphql,
      TECH.markdown,
      TECH.liquid,
      TECH.sql,
      TECH.ruby,
      TECH.php,
    ],
    librariesFrameworks: [
      TECH.react,
      TECH.tailwindcss,
      TECH.nextjs,
      TECH.trpc,
      TECH.prisma,
      TECH.react_query,
      TECH.remix,
      TECH.jest,
      TECH.turborepo,
      TECH.express,
      TECH.webpack,
      TECH.framer,
      TECH.redis,
    ],
    serviceProviders: [
      TECH.vercel,
      TECH.aws,
      TECH.firebase,
      TECH.netlify,
      TECH.planetscale,
      TECH.github,
    ],
  
    tools: [
      TECH.intellij_idea,
      TECH.git,
      TECH.yarn,
      TECH.npm,
      TECH.illustrator,
      TECH.photoshop,
      TECH.figma,
      TECH.postman,
      TECH.ftp,
      TECH.office,
      TECH.dev_tools,
    ],
  },
  certifications: [
    {
      date: "2016",
      name: "FreeCodeCamp - Front-end Developer Certification",
      type: ["web / tech dev", "relevant"],
    },
    {
      date: "2017",
      name: "FreeCodeCamp - Back-end Developer Certification",
      type: ["web / tech dev", "relevant"],
    },
    {
      date: "2017",
      name: "Shopify - Theme Development Certification",
      type: ["web / tech dev", "relevant"],
    },
    {
      date: "2017",
      name: "Shopify - Product Fundamentals Certification",
      type: ["web / tech dev", "relevant"],
    },
    {
      date: "2017",
      name: "Shopify - App Development Certification",
      type: ["web / tech dev", "relevant"],
    },
    {
      date: "2018",
      name: "Shopify - Business Fundamentals Certification",
      type: ["web / tech dev", "relevant"],
    },
    {
      date: "2018",
      name: "CodeCademy - React.js Certification",
      type: ["web / tech dev", "relevant"],
    },
    {
      date: "2016",
      name: "Diners Club - Diamond Wine list award",
      type: ["restaurant"],
    },
    {
      date: "2015",
      name: "Diners Club - Diamond Wine list award",
      type: ["restaurant"],
    },
    {
      date: "2015",
      name: "Eat out Magazine - Best Asian Restauth with Kitima Restaurant ",
      type: ["restaurant"],
    },
  ],
  other: [
    {
      name: "Cape Wine Academy - Wine Certificate",
    },
    {
      name: "First Aid Course - Level one",
    },
    {
      name: "ICDL - International Computer Drivers License",
    },
    {
      name: "Cardio Pulmonary Resuscitation Certificate",
    },
    {
      name: "Crowd Management & Passenger Service Safety Certificate",
    },
    {
      name: "Artful Food Competition - 1st price",
    },
  ],
  references: [
    {
      author: "Jeroen Hartgers",
      title: "Managing Director",
      company: "Kids Living",
      reference:
        "It is a pleasure to work with Felix as a design and development partner and ecommerce specialist. You can point out a problem to him and know that it will be handled, and he brings a positive vibe to the team at the same time. His approach to web is modern and progressive, and it is very refreshing. Furthermore, he has a real passion for web development, producing excellent results, being up to date with all the latest technology and being reliable and easy to work with. Ask him about anything from performance to accessibility or on-site tech support, he'll go out of his way to find a solution.",
    },
    {
      author: "Thomas Fuss",
      title: "Managing Director",
      company: "Ademas Solutions",
      reference:
        "Felix has a highly technical aptitude, which is further enhanced by his experience and general desire to be the best. My favorite thing about working with Felix is his ability to tell when a problem needs to be fixed right away and when a problem needs to be solved quickly. Whatever he does, he is always dedicated to doing an excellent job, and he makes the right engineering decisions for the project. In addition to learning new technologies at an exceptionally fast rate, he is often the first one to come to when a technical problem arises. In his role as a team player, Felix appears equally comfortable joining a project team and working directly on it, mentoring less experienced developers, or leading a project as a technical lead. Felix has always been a pleasant presence at customer meetings, as he is able to answer questions clearly and accurately, and he is not afraid to express his opinion on technical issues as well. I will miss working with Felix and will be confident in recommending him for any technical position in the future. He is well liked and highly respected by his colleagues from all areas of the business.",
    },
    {
      author: "Juan De Bruyn",
      title: "Restaurant Manager",
      company: "The Exchange Restaurant",
      reference: `I have been fortunate enough to be working both along & with Felix Tellmann for the past 8 months. Felix has been an absolute light and strength in the team he runs. His approach to every challenge with a calm, firm & respectful attitude is something to be admired and to be learned by everyone. In spite of the challenges, this type of leadership makes a happy and productive work environment because it brings everyone together. I wish Felix all the best for his future endeavors. He is sure to make any challenge he takes on an absolute success.`,
    },
  ],
  personal: `After spending my childhood in Germany and early work career, I moved to Cape Town 14 years ago. Cooking and hosting dinners for family and friends are some of my favorite activities, and I enjoy connecting with people through good food, technology, and intelligent discussion. You will often find me on and around Table Mountain, hiking or running with my dog Alpha. I am very excited about the new age Space Race and the innovation it brings, and I would like to witness a rocket launch in my lifetime. It is also important to me to keep up with web technology and UX design developments by listening to podcasts, attending local events, attending conferences, and using Twitter.`,
};
