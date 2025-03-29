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
