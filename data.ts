import {RiComputerLine} from 'react-icons/ri';
import { IProject, Iservice, Skill } from './type';
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";



export const services:Iservice[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>NestJS,Express,Ruby on Rails</b>",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>",
  },

]

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "JavaScript/TypeScript",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Ruby On Rails",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Django",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "NestJS",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Aurdino",
    level: "70",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "GIt",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Fusion360",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Filmora",
    level: "60",
  },
];


export const projects: IProject[] = [
  { 
    id:1,
    name: "Simple Food Order",
    description:
      "This app is an online food and grocery delivery ",
    image_path: "/images/food.PNG",
    deployed_url: "https://yusoffnike01.github.io/simpleFoodOrder/",
    github_url: "https://github.com/yusoffnike01/simpleFoodOrder",
    category: ["react"],
    key_techs: ["React", "Material UI"],
  },
  {
    id:2,
    name: "E commerce",
    image_path: "/images/commerce.PNG",
    deployed_url: "https://yusoffnike01.github.io/e_commerce/",
    github_url: "https://github.com/yusoffnike01/e_commerce",
    category: ["react"],
    description:
      "Build a custom e-commerce site using React, Commerce.js, Stripe",
    key_techs: ["React", "Commerce js", "Stripe"],
  },

  {
    id:3,
    name: "Shopify Shop",
    image_path: "/images/shop.PNG",
    deployed_url: "",
    github_url: "https://github.com/yusoffnike01/e-commerce",
    category: ["node", "react"],
    description:
      "Shopify is a commerce platform that allows anyone to set up an online store and sell their products",
    key_techs: [
      "React",
      "Shopify"
    ],
  },

  {
    id:4,
    name: "Realtime Chat App",
    image_path: "/images/chat.PNG",
    deployed_url: "https://flamboyant-shirley-f6d336.netlify.app/",
    github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
    category: ["node", "react"],
    description:
      "Basic Realtime Chat App where one can create a room can talk to each other",
    key_techs: ["React", "Node", "Chat Engine"],
  },
];