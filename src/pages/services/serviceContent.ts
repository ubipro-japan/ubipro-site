import { proEstate } from "@/mocks/serviceDetails/proEstate";
import { prosku } from "@/mocks/serviceDetails/prosku";
import { marketingQuest } from "@/mocks/serviceDetails/marketingQuest";
import { enghouse } from "@/mocks/serviceDetails/enghouse";
import { prodesign } from "@/mocks/serviceDetails/prodesign";
import { proOnline } from "@/mocks/serviceDetails/proOnline";

export interface ServiceStat {
  value: string;
  unit: string;
  labelJa: string;
  labelEn: string;
}

export interface ServiceFeatureItem {
  icon: string;
  titleJa: string;
  titleEn: string;
  descJa: string;
}

export interface ServicePlan {
  nameJa: string;
  nameEn: string;
  price: string;
  priceNote: string;
  descJa: string;
  features: string[];
  recommended: boolean;
}

export interface ServiceSpecialPlan {
  labelJa: string;
  nameJa: string;
  nameEn: string;
  price: string;
  priceNote: string;
  descJa: string;
  features: string[];
}

export interface ServiceStep {
  step: string;
  titleJa: string;
  titleEn: string;
  descJa: string;
}

export interface ServiceHighlightContent {
  value: string;
  labelJa: string;
  labelEn: string;
  descJa: string;
  points: string[];
}

export interface ServiceQa {
  q: string;
  a: string;
}

export interface ServiceContent {
  id: string;
  code: string;
  brand: string;
  nameJa: string;
  nameEn: string;
  accent: string;
  icon: string;
  taglineJa: string;
  taglineEn: string;
  leadJa: string;
  leadEn: string;
  heroImage: string;
  stats: ServiceStat[];
  challenges: ServiceFeatureItem[];
  strengths: ServiceFeatureItem[];
  menu: ServiceFeatureItem[];
  pricing: ServicePlan[];
  priceNoteJa: string;
  specialPlan?: ServiceSpecialPlan;
  highlight?: ServiceHighlightContent;
  flow: ServiceStep[];
  faq: ServiceQa[];
  related: string[];
}

export const serviceCatalog: ServiceContent[] = [
  proEstate,
  prosku,
  marketingQuest,
  enghouse,
  prodesign,
  proOnline,
];

export function getServiceContent(slug: string): ServiceContent | undefined {
  return serviceCatalog.find((service) => service.id === slug);
}

export function getRelatedServices(service: ServiceContent): ServiceContent[] {
  return service.related
    .map((id) => serviceCatalog.find((item) => item.id === id))
    .filter((item): item is ServiceContent => Boolean(item));
}