import type { ServiceCardBase } from './ServiceCard.types';

export interface AboutUsProps {
  sectionHeader: string;
  title: string;
  body: string;
  viewMore: string;
  viewMoreText: string;
  serviceCards: ServiceCardBase[];
}
