export interface ClientCardInfoProps {
  id: string;
  title: string;
  specialty: string;
  shortDesc: string;
  fullDesc: string;
  serviceProvided: string;
  description: string;
  testimony: string;
  image: string;
  features: string[];
}

export interface ClientCardsProps {
  services: ClientCardInfoProps[];
}
