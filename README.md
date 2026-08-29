# TrueStay Adriatic

Hrvatski sustav digitalnog povjerenja u turizmu. Next.js (App Router) web-stranica
s alatom za AI provjeru vjerodostojnosti oglasa smještaja i online ugleda
pružatelja usluga.

## Struktura

- `app/page.tsx` — početna stranica (hero, tri sloja povjerenja, knjiga, galerija, footer)
- `app/provjera/` — alat za provjeru (`/provjera`), klijentska komponenta s tabovima
- `app/api/analyze/route.ts` — server-side API ruta koja sigurno poziva Anthropic API
- `lib/prompts.ts` — sistemski promptovi i JSON shema za strukturirani odgovor
- `lib/types.ts` — dijeljeni TypeScript tipovi
- `components/` — Header, Footer, VerifiedNotes (prikaz rezultata), UpgradeForm (mailto forme)

## Pokretanje lokalno

```bash
npm install
cp .env.local.example .env.local   # zatim upišite svoj ANTHROPIC_API_KEY
npm run dev
```

Otvorite [http://localhost:3000](http://localhost:3000).

## Gdje dodati Anthropic API ključ

Alat za provjeru (`/provjera`) poziva `app/api/analyze/route.ts` — server-side
rutu koja koristi `@anthropic-ai/sdk` s ključem iz environment varijable
**`ANTHROPIC_API_KEY`**. Ključ se nikad ne šalje u preglednik.

- **Lokalno**: kreirajte `.env.local` u korijenu projekta (vidi `.env.local.example`) i dodajte:
  ```
  ANTHROPIC_API_KEY=sk-ant-...
  ```
  Ključ generirate na [console.anthropic.com/settings/keys](https://console.anthropic.com/settings/keys).
- **Vercel** (preporučeno za deploy): Project Settings → Environment Variables →
  dodajte `ANTHROPIC_API_KEY` za Production/Preview/Development, zatim redeploy.
- **Drugi hosting** (Netlify, Docker, VPS...): dodajte `ANTHROPIC_API_KEY` kao
  server environment varijablu prema uputama tog hostinga — nikad je ne
  commit-ajte u repozitorij.

Ako ključ nije postavljen, `/provjera` će korisniku prikazati jasnu poruku
greške umjesto da padne bez objašnjenja.

## Deploy

Projekt je standardna Next.js aplikacija — najlakše ga je deployati na
[Vercel](https://vercel.com/new):

1. Pushajte repozitorij na GitHub.
2. U Vercelu importajte repozitorij (framework se prepoznaje automatski).
3. Dodajte `ANTHROPIC_API_KEY` u Environment Variables prije prvog deploya.
4. Deploy.

Za druge platforme (Netlify, Cloudflare, vlastiti server): `npm run build`
zatim `npm run start`, uz istu `ANTHROPIC_API_KEY` varijablu dostupnu serveru.

## Napomene

- Plaćanje u alatu za provjeru trenutno nije integrirano — gumbi "Nadogradnja"
  (Osobno mišljenje stručnjaka, Personalizirani plan odmora, Osobni pregled)
  otvaraju e-mail klijent s pripremljenom porukom prema
  `truestay.info@gmail.com`. Pravo plaćanje dodaje se naknadno.
- Fontovi (serif za naslove, monospace za "Verified Notes") koriste sustavske
  font stack-ove (Georgia / ui-monospace) kako build ne bi ovisio o mrežnom
  dohvatu s Google Fonts.
