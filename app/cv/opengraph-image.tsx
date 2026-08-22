import { ogContentType, ogImage, ogSize } from "../_components/og";
import { site } from "../_data/site";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "CV of Per Hansen";

export default function Image() {
  return ogImage({ title: `CV: ${site.name}`, eyebrow: "Printable CV", sub: "Senior freelance web and mobile developer. React, Next.js, Vue, Expo, Node.js, TypeScript." });
}
