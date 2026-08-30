import ProvjeraClient from "./ProvjeraClient";
import type { CheckMode } from "@/lib/types";

export const metadata = {
  title: "Provjera",
  description:
    "Provjera vjerodostojnosti oglasa smještaja i online ugleda pružatelja usluga — besplatna osnovna provjera, stručni pregled na zahtjev.",
};

export default async function ProvjeraPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const modParam = Array.isArray(params.mod) ? params.mod[0] : params.mod;
  const initialMode: CheckMode = modParam === "pruzatelji" ? "pruzatelji" : "gosti";

  return <ProvjeraClient initialMode={initialMode} />;
}
