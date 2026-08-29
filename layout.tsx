import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TrueStay Adriatic — Hrvatski sustav digitalnog povjerenja",
  description:
    "TrueStay Adriatic verificira kvalitetu ponude i forenziku vjerodostojnosti smještaja, hotela, restorana i destinacijske ponude u Hrvatskoj. Standardizacija digitalnog povjerenja u turizmu.",
  metadataBase: new URL("https://truestayadriatic.com"),
  openGraph: {
    title: "TrueStay Adriatic — The Gold Standard of Visual Trust",
    description:
      "Verifying Croatia, one destination at a time. Verifikacija kvalitete ponude i forenzika vjerodostojnosti smještaja, hotela, restorana i destinacijske ponude.",
    locale: "hr_HR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="hr" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-navy-950 text-cream">
        {children}
      </body>
    </html>
  );
}
