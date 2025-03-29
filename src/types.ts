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
