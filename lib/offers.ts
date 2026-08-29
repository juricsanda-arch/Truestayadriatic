export interface OfferPackage {
  id: string;
  name: string;
  price: string;
  turnaround: string;
  forWhom: string;
  whatYouSend: string[];
  included: string[];
  deliverable: string;
}

export const OFFER_PACKAGES: OfferPackage[] = [
  {
    id: "quick-check",
    name: "TrueStay Quick Check",
    price: "149 €",
    turnaround: "Isporuka za 24–48 h",
    forWhom:
      "Za sve koji ugošćuju gosta — od smještaja i hotela do restorana, barova, agroturizama i nautike — a žele brzu, objektivnu dijagnostiku prije nego što ulažu u veće promjene.",
    whatYouSend: [
      "Poveznicu na Booking, TripAdvisor ili drugu rezervacijsku platformu",
      "Google profil objekta",
      "Instagram profil",
      "Web stranicu, ako postoji",
    ],
    included: [
      "TrueStay Score — ocjena objekta od 0 do 100 iz perspektive gosta",
      "10 najvećih problema koje gost primijeti prije dolaska",
      "10 brzih, konkretnih popravaka",
      "3 stvari koje već radite bolje od konkurencije",
    ],
    deliverable:
      "Kratki pisani izvještaj sa Score-om i listama, plus 5-minutni video u kojem vam pokažemo: “Da sam ja vaš gost, ovo bih vidio/vidjela.” Prolazimo kroz cijeli put gosta — fotografije, opis, cijene i uvjete, online profile, usporedbu s konkurencijom.",
  },
  {
    id: "reality-check",
    name: "TrueStay Reality Check",
    price: "349 €",
    turnaround: "Jedan posjet, 60–90 minuta",
    forWhom:
      "Za vlasnike koji žele znati kako njihov objekt ili plovilo stvarno djeluje uživo — ne samo na fotografijama.",
    whatYouSend: ["Adresu (ili vez/marinu za plovila) i termin kad je dostupno za posjet"],
    included: [
      "Fizički “mystery guest” posjet — bez noćenja za smještaj, jedan dolazak/narudžba za ugostiteljske objekte, jedan izlazak ili razgledavanje za nautiku",
      "Dokumentiran dolazak, parking, ulaz i prvi dojam",
      "Usporedba prostora, ambijenta i ponude sa stanjem prikazanim na fotografijama i u opisu",
      "Detalji koje vlasnik više ne primjećuje, a gost odmah uoči",
    ],
    deliverable:
      "Izvještaj “Reality vs. Oglas” — jasna usporedba onoga što piše u oglasu i onoga što gost stvarno doživi (npr. “5 minuta do plaže” u stvarnosti je 12 minuta hoda uz prometnu cestu, ili “domaća kuhinja” koja na terenu djeluje drugačije od opisa). Bez optužbi — samo očekivanje naspram stvarnosti, uz video i fotografije posjeta.",
  },
  {
    id: "reputation",
    name: "TrueStay Reputation Report",
    price: "490 €",
    turnaround: "Isporuka za 2–4 dana",
    forWhom:
      "Za vlasnike s više recenzija koji žele razumjeti obrasce iza ocjena, ne samo prosjek — bez obzira na djelatnost.",
    whatYouSend: [
      "Pristup Booking, Google i (ako postoji) TripAdvisor recenzijama iz zadnjih 6–12 mjeseci",
    ],
    included: [
      "AI-potpomognuta ljudska analiza svih recenzija iz zadnjih 6–12 mjeseci",
      "Kategorizacija po temama relevantnima za vašu djelatnost (npr. čistoća i lokacija za smještaj i hotele; usluga i kvaliteta hrane za restorane i barove; oprema i sigurnost za nautiku)",
      "Objašnjenje zašto vas gosti hvale — i zašto ipak daju 7 umjesto 10",
    ],
    deliverable:
      "Pisani izvještaj “Top 5 stvari koje vas koštaju recenzija” — konkretni, prioritizirani operativni koraci, a ne samo postotak pozitivnih ocjena.",
  },
  {
    id: "content",
    name: "TrueStay Content Experience",
    price: "od 550 €",
    turnaround: "Jedno terensko snimanje",
    forWhom:
      "Za sve koji žele sadržaj kakav gost stvarno želi vidjeti prije dolaska — ne generički Instagram feed.",
    whatYouSend: ["Termin snimanja i pristup objektu ili plovilu"],
    included: [
      "Dolazimo kao gost i snimamo iskustvo iz njegove perspektive",
      "Prilagođeno djelatnosti: room tour i arrival video za smještaj i hotele; ambijent i priprema za restorane, barove i slastičarnice; obilazak plovila za nautiku; farm-to-table priča za agroturizme",
      "Vodič po okolici — plaža, lokali, znamenitosti u blizini",
      "10–15 vertikalnih videa, 3 Reelsa i 30 fotografija visoke kvalitete, spremni za objavu",
    ],
    deliverable:
      "Gotovi video i foto materijali, spremni za Instagram, Booking/TripAdvisor i web — bez naknadne obrade s vaše strane.",
  },
];
