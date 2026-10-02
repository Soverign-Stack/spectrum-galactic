import { ImageResponse } from "next/og";

export const alt = "Spectrum Galactic | Satellite Backhaul Plan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 90, background: "#050510", color: "#f5f5f5" }}>
        <div style={{ fontSize: 96, fontWeight: 800, color: "#8b5cf6" }}>Spectrum Galactic</div>
        <div style={{ fontSize: 52, marginTop: 24, color: "#f5f5f5" }}>Satellite Backhaul Plan</div>
        <div style={{ fontSize: 30, marginTop: 28, color: "#b9c0cf", maxWidth: 1000 }}>An early-stage plan for satellite backhaul for the Sovereign Stack. No satellites are in orbit yet.</div>
        <div style={{ fontSize: 26, marginTop: 56, color: "#8b5cf6" }}>spectrumgalactic.xyz</div>
      </div>
    ),
    size,
  );
}
