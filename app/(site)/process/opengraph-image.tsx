import { ogContentType, ogImage, ogSize } from "../../_components/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "How Per Hansen works with clients";

export default function Image() {
  return ogImage({ title: "How we'll work together, from first call to long after launch.", eyebrow: "Process" });
}
