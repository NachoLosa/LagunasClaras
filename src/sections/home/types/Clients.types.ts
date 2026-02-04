export interface ClientLogo {
  name: string;
  imageUrl: string;
  alt: string;
}

export interface ClientsProps {
  sectionTitle: string;
  sectionDescription: string;
  clients: ClientLogo[];
}
