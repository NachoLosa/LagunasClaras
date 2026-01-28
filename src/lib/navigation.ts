export interface NavLinksProps {
  title: string;
  href: string;
}
export const DEFAULT_NAV_LINKS: NavLinksProps[] = [
  { title: 'Home', href: '/' },
  { title: 'Quienes Somos', href: '/quienes-somos' },
  { title: 'Servicios', href: '/servicios' },
  { title: 'Clientes', href: '/clientes' },
  { title: 'Faq', href: '/faq' },
  { title: 'Contacto', href: '/contacto' },
];
