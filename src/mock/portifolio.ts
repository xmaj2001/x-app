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
    handle: "@Lucas_dev",
    iconName: "at-sign",
    enabled: false,
  },
];
