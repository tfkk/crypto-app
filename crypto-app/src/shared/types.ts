export enum SelectedPage {
  Home = "home",
  About = "about",
  LiveRates = "liverates",
  ContactUs = "contactus",
}

export interface CardType {
  icon: JSX.Element;
  title: string;
  description: string;
}
