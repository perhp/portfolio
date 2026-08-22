import { ImageResponse } from "next/og";
import { site } from "../_data/site";

/**
 * Shared Open Graph image renderer. Used by every opengraph-image.tsx so LinkedIn, Slack and X
 * show a real card instead of a text-only preview. Keep it dependency-free: next/og bundles its own font.
 */
export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

interface OgProps {
  /** Main line, 1-2 sentences. Keep under ~90 characters. */
  title: string;
  /** Small label above the title, e.g. the page family or search intent. */
  eyebrow?: string;
  /** Optional second line under the title. */
  sub?: string;
}

export function ogImage({ title, eyebrow, sub }: OgProps) {
  const long = title.length > 60;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#0f0f0e",
          color: "#f4f2ec",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 28, color: "#a8a49a" }}>
          <span>{eyebrow ?? site.role}</span>
          <span style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ width: 14, height: 14, borderRadius: 999, background: site.available ? "#5fd38d" : "#a8a49a" }} />
            {site.available ? "Available for new projects" : "Currently booked"}
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: long ? 56 : 68, lineHeight: 1.08, fontWeight: 600, letterSpacing: -1.5, maxWidth: 1000 }}>{title}</div>
          {sub ? <div style={{ fontSize: 30, lineHeight: 1.35, color: "#c9c5bb", maxWidth: 1000 }}>{sub}</div> : null}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontSize: 28 }}>
          <span style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontSize: 34, fontWeight: 600 }}>{site.name}</span>
            <span style={{ color: "#a8a49a" }}>Senior freelance web & mobile developer, Denmark</span>
          </span>
          <span style={{ color: "#a8a49a" }}>{site.url.replace("https://", "")}</span>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
