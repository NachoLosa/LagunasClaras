export interface ServiceCardBase {
  title: string;
  Icon: (_props: Record<string, any>) => any;
  shortDescription: string;
}

export interface ServiceCardDesktopProps extends ServiceCardBase {
  viewMoreText: string;
}

export interface ServiceRowMobileProps extends ServiceCardBase {}
