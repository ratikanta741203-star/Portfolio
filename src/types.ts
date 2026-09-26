export interface Project {
  id: string;
  title: string;
  shortTag: string;
  tagline: string;
  category: string;
  featuredNumber: string;
  accentColor: 'blue' | 'cyan' | 'purple' | 'emerald' | 'amber' | 'lime' | 'pink';
  description: string;
  fullOverview?: string;
  techStack: string[];
  subBadge: string;
  githubUrl: string;
  liveDemoUrl?: string;
  image: string;
  layoutReverse?: boolean; // If true, visual preview is left, card is right
  interactiveType: 'disaster-map' | 'cyber-threat' | 'ai-voice' | 'shop-catalog' | 'restaurant-menu' | 'smart-school' | 'rudram-telemetry';
  metrics?: { label: string; value: string }[];
  keyFeatures?: string[];
}

export interface JourneyMilestone {
  id: string;
  year: string;
  title: string;
  institution: string;
  score?: string;
  scoreLabel?: string;
  location: string;
  badge: string;
  badgeType: 'foundation' | 'transition' | 'active' | 'future';
  description: string;
  details?: string[];
  side: 'right' | 'left'; // 1st & 3rd on right, 2nd & 4th on left
  animationClass: string;
  accentColor: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  icon: string;
  badgeColor: string;
  skills: { name: string; highlight?: boolean; colorClass?: string; level?: number }[];
}

export interface EducationItem {
  yearRange: string;
  status: string;
  statusBadgeColor: string;
  degree: string;
  institution: string;
  location: string;
  footerLabel: string;
  footerValue: string;
  scoreHighlight?: boolean;
}

export interface CertificationItem {
  id: string;
  badgeText: string;
  badgeBg: string;
  badgeColor: string;
  title: string;
  issuer: string;
  date: string;
  verificationId: string;
  skillsLearned: string[];
}
