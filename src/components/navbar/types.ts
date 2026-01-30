interface NavLinksProps {
  title: string;
  href: string;
}

export type NavbarContent = {
  brandTitle: string;
  links: NavLinksProps[];
};
