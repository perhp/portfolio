import { ogContentType, ogImage, ogSize } from "./_components/og";
import { hero, site } from "./_data/site";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Per Hansen, senior freelance web and mobile developer";

export default function Image() {
  return ogImage({ title: hero.headline.join(" "), eyebrow: `${site.name} · ${site.role}`, sub: "Web apps and Expo mobile apps for fintech, biotech, climate tech and SaaS. Clients keep me for years, not weeks." });
}
