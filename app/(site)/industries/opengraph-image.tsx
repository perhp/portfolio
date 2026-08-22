import { ogContentType, ogImage, ogSize } from "../../_components/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Industries Per Hansen works in";

export default function Image() {
  return ogImage({ title: "Sectors where mistakes are expensive, and where I have stayed for years.", eyebrow: "Industries" });
}
