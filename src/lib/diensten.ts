import { diensten } from "@/lib/content";

export const services = diensten.map((dienst) => ({
  href: `/diensten/${dienst.slug}`,
  label: dienst.menuLabel,
}));
