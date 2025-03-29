import { Detail, Feature } from "./types";

export const features: Feature[] = [
  {
    id: 1,
    icon: "/images/feature-1.png",
    caption: "Easy integration",
    title: "Work smarter not harder",
    text: "With Edita, tedious tasks are history. Automation and smart processes bring your productivity to new heights. It's like having an extra cup of coffee, but without the jitters.",
    button: {
      icon: "/images/magictouch.svg",
      text: "Watch the demo",
    },
  },
  {
    id: 2,
    icon: "/images/feature-2.png",
    caption: "Secure & trustworthy",
    title: "Sleep easy, we got your back",
    text: "Your data security is our priority. With state-of-the-art encryption and robust privacy controls, Edita helps keeps your information secure and locked up tighter than Fort Knox.",
    button: {
      icon: "/images/docs.svg",
      text: "Read the docs",
    },
  },
];

export const details: Detail[] = [
  {
    id: 1,
    icon: "/images/detail-1.png",
    title: "AI automated video editing",
  },
  {
    id: 2,
    icon: "/images/detail-2.png",
    title: "Collaborate with your team",
  },
  {
    id: 3,
    icon: "/images/detail-3.png",
    title: "Ultra fast cloud-engine",
  },
  {
    id: 4,
    icon: "/images/detail-4.png",
    title: "24 / 7 Customer support",
  },
];
