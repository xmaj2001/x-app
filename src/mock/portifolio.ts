export interface Project {
  id: string;
  title: string;
  badge: string;
  tags: string[];
  stars: number;
  views: string;
}

export interface SocialAccount {
  id: string;
  name: string;
  handle: string;
  iconName: string;
  enabled: boolean;
}

export interface VisitorCountry {
  id: string;
  code: string;
  country: string;
  cities: string;
  count: string;
  percentage: string;
}

export const mockProjects: Project[] = [
  {
    id: "1",
    title: "DevFlow Cloud IDE",
    badge: "#1 Destaque",
    tags: ["React", "TypeScript", "Docker", "Go"],
    stars: 420,
    views: "1.1k",
  },
  {
    id: "2",
    title: "FinTrack API",
    badge: "#2 Destaque",
    tags: ["Node.js", "PostgreSQL", "Redis", "GraphQL"],
    stars: 188,
    views: "730",
  },
];

export const mockSocialAccounts: SocialAccount[] = [
  {
    id: "1",
    name: "GitHub",
    handle: "@lucassilva",
    iconName: "code",
    enabled: true,
  },
  {
    id: "2",
    name: "LinkedIn",
    handle: "in/lucassilva-dev",
    iconName: "briefcase",
    enabled: true,
  },
  {
    id: "3",
    name: "X (Twitter)",
    handle: "@lucas_dev",
    iconName: "at-sign",
    enabled: false,
  },
];

export const mockVisitorCountries: VisitorCountry[] = [
  {
    id: "1",
    code: "U S",
    country: "Estados Unidos",
    cities: "São Francisco, Nova Iorque",
    count: "5.820",
    percentage: "41%",
  },
  {
    id: "2",
    code: "P T",
    country: "Portugal",
    cities: "Lisboa, Porto",
    count: "3.410",
    percentage: "24%",
  },
  {
    id: "3",
    code: "B R",
    country: "Brasil",
    cities: "São Paulo, Rio de Janeiro",
    count: "2.840",
    percentage: "20%",
  },
  {
    id: "4",
    code: "G B",
    country: "Reino Unido",
    cities: "Londres, Bristol",
    count: "2.210",
    percentage: "15%",
  },
];
