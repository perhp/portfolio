import { ogContentType, ogImage, ogSize } from "../../_components/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Case studies by Per Hansen";

export default function Image() {
  return ogImage({ title: "Clients I have built for, and how long they kept me.", eyebrow: "Case studies" });
}
