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
    question: "How easy is it to set up Edita?",
    answer:
      "Edita is designed for simplicity! You can start editing in minutes—no installations, no learning curve. Just upload your footage and let AI assist you.",
  },
  {
    id: 2,
    question: "Can I integrate Edita with other platforms?",
    answer:
      "Yes! Edita supports seamless integration with popular platforms like Google Drive, Dropbox, and social media for easy import and export.",
  },
  {
    id: 3,
    question: "How often do you add new features?",
    answer:
      "We continuously improve Edita based on user feedback. Expect frequent updates with new tools, templates, and AI-powered enhancements.",
  },
  {
    id: 4,
    question: "What is your refund policy?",
    answer:
      "We offer a 7-day money-back guarantee for all paid plans. If you're not satisfied, contact our support team for a hassle-free refund.",
  },
  {
    id: 5,
    question: "Do you have corporate plans?",
    answer:
      "Yes! We offer team and enterprise plans with advanced collaboration features, priority support, and bulk pricing. Contact us to learn more.",
  },
  {
    id: 6,
    question: "What happens when I run out of storage?",
    answer:
      "You’ll receive a notification when you're nearing your limit. You can either free up space or upgrade your storage plan at any time.",
  },
  {
    id: 7,
    question: "Can I upgrade my plan?",
    answer:
      "Absolutely! Not only can you upgrade your plan at any time, but you also get a prorated discount, giving you maximum value for your subscription.",
  },
  {
    id: 8,
    question: "How do I invite my team?",
    answer:
      "Easily! Just go to your account settings, navigate to 'Team Management,' and send invites via email. They'll get instant access.",
  },
  {
    id: 9,
    question: "Do you offer training for individuals and teams?",
    answer:
      "Yes! We provide tutorials, live webinars, and custom training sessions to help individuals and teams get the most out of Edita.",
  },
  {
    id: 10,
    question: "I'm locked out of my account. What do I do?",
    answer:
      "No worries! Click 'Forgot Password' on the login page, or contact our support team for quick assistance in regaining access.",
  },
];
