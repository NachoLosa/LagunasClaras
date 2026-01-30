import type { ServiceCardBase } from './ServiceCard';

export interface AboutUsProps {
  sectionHeader: string;
  title: string;
  body: string;
  viewMore: string;
  viewMoreText: string;
  serviceCards: ServiceCardBase[];
}
