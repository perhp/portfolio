import { ogContentType, ogImage, ogSize } from "../../_components/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Services from Per Hansen";

export default function Image() {
  return ogImage({ title: "Senior web and mobile development, one developer, long term.", eyebrow: "Services" });
}
