import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(135deg, #082d4f 0%, #0b3d6b 50%, #0f4c81 100%)",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 12,
              background: "#f97316",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            NE
          </div>
          <div style={{ color: "white", fontSize: 36, fontWeight: 700 }}>
            {siteConfig.name}
          </div>
        </div>
        <div style={{ color: "#f97316", fontSize: 22, fontWeight: 600, marginBottom: 16 }}>
          {siteConfig.tagline}
        </div>
        <div style={{ color: "#cbd5e1", fontSize: 28, lineHeight: 1.4, maxWidth: 800 }}>
          Pharmaceutical & Chemical Machinery Manufacturers
        </div>
      </div>
    ),
    { ...size },
  );
}
