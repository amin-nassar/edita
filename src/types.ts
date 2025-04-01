import { JSX } from "react";

interface FeatureButton {
  icon: string;
  text: string;
}

export interface Feature {
  id: number;
  icon: string;
  caption: string;
  title: string;
  text: string;
  button: FeatureButton;
}

export interface Detail {
  id: number;
  icon: string;
  title: string;
}

export interface Plan {
  id: number;
  title: string;
  priceMonthly: number;
  priceYearly: number;
  caption: string;
  features: string[];
  icon: string;
  logo: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatarUrl: string;
  comment: string;
}

export interface Link {
  id: number;
  title: string;
  icon: JSX.Element;
  url: string;
}

export interface Logo {
  id: number;
  title: string;
  url: string;
  width: number;
  height: number;
}
