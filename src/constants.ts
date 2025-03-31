import { Detail, FAQItem, Feature, Plan } from "./types";

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

export const plans: Plan[] = [
  {
    id: 1,
    title: "Core",
    priceMonthly: 19,
    priceYearly: 12,
    caption: "Best for solo creators",
    features: [
      "100MB Cloud storage",
      "100+ prompt templates",
      "5 projects",
      "24/7 support",
    ],
    icon: "/images/circle.svg",
    logo: "/images/plan-1.png",
  },
  {
    id: 2,
    title: "Overdrive",
    priceMonthly: 79,
    priceYearly: 59,
    caption: "Most popular plan",
    features: [
      "All Starter features",
      "1TB additional storage",
      "Unlimited projects",
      "Analytics",
    ],
    icon: "/images/triangle.svg",
    logo: "/images/plan-2.png",
  },
  {
    id: 3,
    title: "Team",
    priceMonthly: 39,
    priceYearly: 29,
    caption: "Exclusively for teams",
    features: [
      "All Overdrive features",
      "10TB additional storage",
      "50% off per member",
      "Real-time collaboration",
    ],
    icon: "/images/hexagon.svg",
    logo: "/images/plan-3.png",
  },
];

export const faqs: FAQItem[] = [
  {
    id: 1,
    question: "How easy is it to setup Xora?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: 2,
    question: "Can I integrate Xora with other platforms?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: 3,
    question: "How often do you add new content?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: 4,
    question: "What your refund policy?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: 5,
    question: "Do you have corporate plans?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: 6,
    question: "What happens when I’m out of storage?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: 7,
    question: "Can I upgrade my plan?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: 8,
    question: "How do I invite my team?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: 9,
    question: "Do you offer training for individuals and teams?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: 10,
    question: "I'm locked out of my account what do I do?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
];
