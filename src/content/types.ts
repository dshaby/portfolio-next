export type SocialLink = {
  name: string;
  url: string;
  label: string;
};

export type Project = {
  title: string;
  year: string;
  description: string;
  url?: string;
  images: string[];
  stack: string[];
};

export type Experience = {
  company: string;
  title: string;
  years: string;
  highlights: string[];
  stack: string[];
};

export type Content = {
  site: {
    name: string;
    role: string;
    location: string;
    tagline: string;
    availabilityLabel: string;
    email: string;
    social: SocialLink[];
    profileImage: string;
  };
  hero: {
    headline: string;
    subhead: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    stats: { label: string; value: string }[];
  };
  about: {
    title: string;
    body: string[];
    highlights: { title: string; description: string }[];
  };
  projects: {
    title: string;
    description: string;
    items: Project[];
  };
  experience: {
    title: string;
    items: Experience[];
  };
  skills: {
    title: string;
    description: string;
    categories: { name: string; skills: string[] }[];
  };
  contact: {
    title: string;
    body: string;
    ctaLabel: string;
  };
};
