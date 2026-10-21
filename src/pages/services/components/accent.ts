export interface ServiceAccentClasses {
  text: string;
  bg: string;
  softBg: string;
  border: string;
  chip: string;
  ring: string;
  dot: string;
}

export const accentMap: Record<string, ServiceAccentClasses> = {
  primary: {
    text: "text-primary-700",
    bg: "bg-primary-500",
    softBg: "bg-primary-100",
    border: "border-primary-300",
    chip: "bg-primary-100 text-primary-800",
    ring: "ring-primary-200",
    dot: "bg-primary-500",
  },
  secondary: {
    text: "text-secondary-700",
    bg: "bg-secondary-500",
    softBg: "bg-secondary-100",
    border: "border-secondary-300",
    chip: "bg-secondary-100 text-secondary-800",
    ring: "ring-secondary-200",
    dot: "bg-secondary-500",
  },
  accent: {
    text: "text-accent-700",
    bg: "bg-accent-500",
    softBg: "bg-accent-100",
    border: "border-accent-300",
    chip: "bg-accent-100 text-accent-800",
    ring: "ring-accent-200",
    dot: "bg-accent-500",
  },
};

export function getAccent(key: string): ServiceAccentClasses {
  return accentMap[key] || accentMap.primary;
}