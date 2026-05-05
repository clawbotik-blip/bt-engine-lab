import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180, height: 180,
          background: "#0B1F3A",
          borderRadius: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Top node */}
        <div style={{
          position: "absolute",
          width: 42, height: 42,
          background: "white",
          borderRadius: "50%",
          top: 30, left: 69,
        }} />
        {/* Bottom-left node */}
        <div style={{
          position: "absolute",
          width: 34, height: 34,
          background: "rgba(255,255,255,0.82)",
          borderRadius: "50%",
          bottom: 28, left: 24,
        }} />
        {/* Bottom-right node */}
        <div style={{
          position: "absolute",
          width: 34, height: 34,
          background: "rgba(255,255,255,0.82)",
          borderRadius: "50%",
          bottom: 28, right: 24,
        }} />
        {/* Cyan accent bar at bottom connecting the two lower nodes */}
        <div style={{
          position: "absolute",
          height: 3, width: 62,
          background: "#06B6D4",
          opacity: 0.45,
          borderRadius: 2,
          bottom: 44, left: 59,
        }} />
      </div>
    ),
    { ...size }
  );
}
