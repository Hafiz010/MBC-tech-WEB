// Navigation configuration
export const NAVIGATION_ITEMS = [
  { id: 2, label: 'Division', url: '/divisi' },
  { id: 3, label: 'Contact', url: '/kontak' },
  { id: 4, label: 'Developer', url: '/developer' },
] as const;

export const LOGO_CONFIG = {
  id: 1,
  label: 'MBC Laboratory',
  url: '/',
  image_url: '/logo.png',
} as const;

// Hero section configuration
export const HERO_TEXTS = [
  {
    id: 1,
    text: "We're Not Only",
    highlight: "Laboratory",
    highlightColor: "text-red-700"
  },
  {
    id: 2,
    text: "We're partners in your",
    highlight: "growth",
    highlightColor: "text-blue-500"
  }
] as const;

export const HASHTAGS = ["#GoGoMBC", "#WeAttack", "#WeProtect"] as const;

// Video configuration
export const HERO_VIDEO_ID = "KCVN-SuBBWM";

// Animation configuration
export const ANIMATION_CONFIG = {
  heroTextDuration: 5000,
  fadeDuration: 0.8,
  hashtagDelay: 0.1,
  hashtagDuration: 0.5,
} as const;

// Scroll configuration
export const SCROLL_CONFIG = {
  headerHideThreshold: 100,
  animationThreshold: 0.2,
} as const; 