import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200, height: 630,
          background: "linear-gradient(135deg, #0B1F3A 0%, #0f2847 55%, #1c3f6e 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 90px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Dot grid background accent */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(6,182,212,0.18) 1.5px, transparent 1.5px)",
          backgroundSize: "38px 38px",
          display: "flex",
        }} />

        {/* Glow blob */}
        <div style={{
          position: "absolute",
          width: 600, height: 500,
          background: "radial-gradient(ellipse, rgba(30,64,175,0.45) 0%, transparent 70%)",
          right: -60, top: -60,
          display: "flex",
        }} />

        {/* Logo row */}
        <div style={{ display: "flex", alignItems: "center", gap: 22, marginBottom: 44 }}>
          {/* Icon mark */}
          <div style={{
            width: 68, height: 68,
            background: "#06B6D4",
            borderRadius: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            flexShrink: 0,
          }}>
            <div style={{ position: "absolute", width: 24, height: 24, background: "white", borderRadius: "50%", top: 10, left: 22 }} />
            <div style={{ position: "absolute", width: 18, height: 18, background: "rgba(255,255,255,0.82)", borderRadius: "50%", bottom: 10, left: 8 }} />
            <div style={{ position: "absolute", width: 18, height: 18, background: "rgba(255,255,255,0.82)", borderRadius: "50%", bottom: 10, right: 8 }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <span style={{ fontSize: 28, fontWeight: 700, color: "white", letterSpacing: "-0.3px" }}>
              BT Engine Lab
            </span>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", letterSpacing: "2.5px" }}>
              LIFE SCIENCE &amp; PROTEOMICS EQUIPMENT
            </span>
          </div>
        </div>

        {/* Headline */}
        <div style={{
          fontSize: 64,
          fontWeight: 800,
          color: "white",
          lineHeight: 1.08,
          letterSpacing: "-1.5px",
          marginBottom: 20,
          display: "flex",
          flexDirection: "column",
        }}>
          <span>Engineering the</span>
          <span style={{ color: "#06B6D4" }}>Tools of Discovery</span>
        </div>

        {/* Subhead */}
        <div style={{ fontSize: 22, color: "rgba(148,163,184,1)", lineHeight: 1.5, maxWidth: 640 }}>
          Precision instruments, consumables &amp; proteomics supplies for life science research — backed by expert guidance.
        </div>

        {/* Domain badge */}
        <div style={{
          position: "absolute",
          bottom: 52, right: 90,
          display: "flex",
          alignItems: "center",
          gap: 10,
          background: "rgba(6,182,212,0.12)",
          border: "1px solid rgba(6,182,212,0.35)",
          borderRadius: 50,
          padding: "10px 22px",
        }}>
          <div style={{ width: 8, height: 8, background: "#06B6D4", borderRadius: "50%", display: "flex" }} />
          <span style={{ fontSize: 18, color: "rgba(255,255,255,0.75)", fontWeight: 600 }}>btenginelab.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
