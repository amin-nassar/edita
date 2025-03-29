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
