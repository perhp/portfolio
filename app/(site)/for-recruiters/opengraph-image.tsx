import { ogContentType, ogImage, ogSize } from "../../_components/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Per Hansen for recruiters";

export default function Image() {
  return ogImage({ title: "A senior React, Next.js and Expo contractor you can place fast.", eyebrow: "For recruiters", sub: "10+ years, EU timezone, Danish company invoicing, printable CV." });
}
