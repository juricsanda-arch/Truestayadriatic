# TrueStay Adriatic

Hrvatski sustav digitalnog povjerenja u turizmu. Next.js (App Router) web-stranica
s alatom za provjeru vjerodostojnosti oglasa smještaja i online ugleda
pružatelja usluga.

## Struktura

- `app/page.tsx` — početna stranica (hero, tri sloja povjerenja, knjiga, galerija, footer)
- `app/provjera/` — alat za provjeru (`/provjera`), klijentska komponenta s tabovima
- `app/ponuda/` — ponuda paketa za vlasnike
- `lib/types.ts` — dijeljeni TypeScript tipovi
- `components/` — Header, Footer, UpgradeForm (mailto forme)

## Pokretanje lokalno

```bash
npm install
npm run dev
```

Otvorite [http://localhost:3000](http://localhost:3000).

## Kako radi alat za provjeru

`/provjera` je jednostavan obrazac — gost ili vlasnik zalijepi tekst oglasa
ili URL, a klikom na "Pošalji na provjeru" otvara se e-mail klijent s
pripremljenom porukom prema `truestay.info@gmail.com`. Nema pozadinskog API
poziva ni ovisnosti o vanjskom AI servisu, pa stranica ne zahtijeva nikakav
API ključ niti plaćanje po korištenju.

Osnovna provjera je besplatna (ručni pregled), a detaljnija/prioritetna
analiza naplaćuje se po paketima navedenima na `/provjera` (Osobno mišljenje
stručnjaka, Personalizirani plan odmora, Osobni pregled) i `/ponuda`.

## Deploy

Projekt je standardna Next.js aplikacija — najlakše ga je deployati na
[Vercel](https://vercel.com/new):

1. Pushajte repozitorij na GitHub.
2. U Vercelu importajte repozitorij (framework se prepoznaje automatski).
3. Deploy — nema obaveznih environment varijabli.

Za druge platforme (Netlify, Cloudflare, vlastiti server): `npm run build`
zatim `npm run start`.

## Napomene

- Plaćanje u alatu za provjeru trenutno nije integrirano — gumbi "Nadogradnja"
  (Osobno mišljenje stručnjaka, Personalizirani plan odmora, Osobni pregled)
  otvaraju e-mail klijent s pripremljenom porukom prema
  `truestay.info@gmail.com`. Pravo plaćanje dodaje se naknadno.
- Fontovi (serif za naslove, monospace za "Verified Notes") koriste sustavske
  font stack-ove (Georgia / ui-monospace) kako build ne bi ovisio o mrežnom
  dohvatu s Google Fonts.
