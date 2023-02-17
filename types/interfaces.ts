export interface Solution {
  id: string;
  title: string;
  description: string;
  actions: string[];
  icon: JSX.Element;
  example: JSX.Element;
}

export interface Color {
  start: string;
  stop: string;
}

export interface LinkItem {
  id: string;
  name: string;
  url: string;
  logo?: JSX.Element;
  logoDark?: JSX.Element;
}

export interface SocialItem {
  id: string;
  name: string;
  url: string;
  logo?: JSX.Element;
  logoDark?: JSX.Element;
}

export interface PageItem{
  id:string;
  name:string;
  url:string;
}


export interface SupportItem {
  id: string;
  src: string;
  url: string;
  message?:string;
}


export interface Routes{
  title:string;
  path:string;
}




export interface Testimonial {
  id: string;
  author: string;
  url: string;
  company: string;
  job: string;
  location: string;
  rating: string;
  quote: string;
  date: string;
  avatar: string;
}

export interface  Project {
  id: number;
  title: string;
  desc: string;
  img: string;
  link?: string;
  github?: string;
  tags: string[];
};
