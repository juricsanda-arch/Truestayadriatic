import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0B1B30",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(201,163,90,0.18), transparent 40%), radial-gradient(circle at 85% 80%, rgba(201,163,90,0.14), transparent 45%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#C9A35A",
            marginBottom: 28,
          }}
        >
          Sustav digitalnog povjerenja
        </div>
        <div style={{ display: "flex", fontSize: 92, fontWeight: 700, color: "#F4F0E6" }}>
          TrueStay <span style={{ color: "#C9A35A", marginLeft: 20 }}>Adriatic</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#CFC9B8",
            marginTop: 36,
            letterSpacing: 1,
          }}
        >
          The Gold Standard of Visual Trust
        </div>
      </div>
    ),
    { ...size },
  );
}
