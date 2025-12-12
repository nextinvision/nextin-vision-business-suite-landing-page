export interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

export interface FooterProps {
  logo?: {
    url: string;
    src?: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

