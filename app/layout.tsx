import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://truestayadriatic.vercel.app";
const SITE_NAME = "TrueStay Adriatic";
const DESCRIPTION =
  "TrueStay Adriatic verificira kvalitetu ponude i forenziku vjerodostojnosti smještaja, hotela, restorana i destinacijske ponude u Hrvatskoj. Standardizacija digitalnog povjerenja u turizmu.";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — Hrvatski sustav digitalnog povjerenja`,
    template: `%s — ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  keywords: [
    "provjera smještaja",
    "vjerodostojnost oglasa",
    "digitalno povjerenje turizam",
    "TrueStay Adriatic",
    "provjera iznajmljivača Hrvatska",
    "sigurna rezervacija Jadran",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE_NAME} — The Gold Standard of Visual Trust`,
    description:
      "Verifying Croatia, one destination at a time. Verifikacija kvalitete ponude i forenzika vjerodostojnosti smještaja, hotela, restorana i destinacijske ponude.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "hr_HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — The Gold Standard of Visual Trust`,
    description: DESCRIPTION,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  description: DESCRIPTION,
  email: "truestay.info@gmail.com",
  areaServed: "HR",
  founder: { "@type": "Person", name: "Sanda Jurić" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="hr" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-navy-950 text-cream">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
