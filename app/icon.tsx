import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32, height: 32,
          background: "#0B1F3A",
          borderRadius: 7,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Top node */}
        <div style={{
          position: "absolute",
          width: 8, height: 8,
          background: "white",
          borderRadius: "50%",
          top: 6, left: 12,
        }} />
        {/* Bottom-left node */}
        <div style={{
          position: "absolute",
          width: 6, height: 6,
          background: "rgba(255,255,255,0.82)",
          borderRadius: "50%",
          bottom: 5, left: 4,
        }} />
        {/* Bottom-right node */}
        <div style={{
          position: "absolute",
          width: 6, height: 6,
          background: "rgba(255,255,255,0.82)",
          borderRadius: "50%",
          bottom: 5, right: 4,
        }} />
        {/* Cyan dot accent center */}
        <div style={{
          position: "absolute",
          width: 3, height: 3,
          background: "#06B6D4",
          borderRadius: "50%",
          bottom: 7, left: 14.5,
          opacity: 0.7,
        }} />
      </div>
    ),
    { ...size }
  );
}
