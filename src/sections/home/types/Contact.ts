export interface ContactCard {
  title: string;
  description: string;
  icon: any;
  href?: string;
  colorScheme: 'green' | 'blue' | 'slate';
}

export interface ContactSectionProps {
  title: string;
  description: string;
  cta: string;
  contactCards: ContactCard[];
}
