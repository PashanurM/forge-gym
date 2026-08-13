export const brand = {
  name: "Forge Athletics",
  shortName: "Forge",
  tagline: "Train harder. Become forged.",
  email: "hello@forgeathletics.com",
  phone: "+1 (555) 014-2090",
  address: "420 Ironworks Ave, Downtown",
  city: "Metro City",
  social: {
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    x: "https://x.com",
  },
} as const;

export type NavChild = { href: string; labelKey: string };
export type NavItem =
  | { href: string; labelKey: string; children?: undefined }
  | { labelKey: string; href?: undefined; children: NavChild[] };

export const mainNav: NavItem[] = [
  { href: "/", labelKey: "home" },
  { href: "/about", labelKey: "about" },
  {
    labelKey: "gym",
    children: [
      { href: "/branches", labelKey: "branches" },
      { href: "/saloons", labelKey: "halls" },
      { href: "/trainers", labelKey: "trainers" },
      { href: "/services", labelKey: "services" },
      { href: "/tools", labelKey: "tools" },
      { href: "/equipment", labelKey: "equipment" },
    ],
  },
  { href: "/pricing", labelKey: "pricing" },
  { href: "/shop", labelKey: "shop" },
  { href: "/blog", labelKey: "blog" },
  { href: "/faq", labelKey: "faq" },
  { href: "/contact", labelKey: "contact" },
];

export const footerLinkKeys = [
  { href: "/", labelKey: "home" },
  { href: "/about", labelKey: "about" },
  { href: "/branches", labelKey: "branches" },
  { href: "/saloons", labelKey: "halls" },
  { href: "/services", labelKey: "services" },
  { href: "/tools", labelKey: "tools" },
  { href: "/equipment", labelKey: "equipment" },
  { href: "/trainers", labelKey: "trainers" },
  { href: "/pricing", labelKey: "pricing" },
  { href: "/shop", labelKey: "shop" },
  { href: "/blog", labelKey: "blog" },
  { href: "/faq", labelKey: "faq" },
  { href: "/contact", labelKey: "contact" },
] as const;
