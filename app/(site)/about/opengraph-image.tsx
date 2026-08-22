import { ogContentType, ogImage, ogSize } from "../../_components/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "About Per Hansen";

export default function Image() {
  return ogImage({ title: "The person behind the code.", eyebrow: "About", sub: "Freelance full-stack developer from Denmark, 10+ years, clients kept for one to six years." });
}
