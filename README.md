# AP Powerbuilding & Demolition Tmi

Yksinkertainen monisivuinen Next.js-sivusto yritykselle AP Powerbuilding & Demolition Tmi.

## Käynnistys

1. Asenna riippuvuudet komennolla `npm install`
2. Käynnistä kehityspalvelin komennolla `npm run dev`

## Sivut

- `/` etusivu
- `/tarjouspyynto`
- `/ennen-jalkeen`
- `/yhteystiedot`

## Tekstien muokkaus

- Etusivu: `app/page.tsx`
- Tarjouspyyntö: `app/tarjouspyynto/page.tsx`
- Ennen & jälkeen -sivu: `app/ennen-jalkeen/page.tsx`
- Yhteystiedot: `app/yhteystiedot/page.tsx`

## Ennen & jälkeen -kohteiden lisääminen

1. Lisää kuvat kansioihin muodossa `public/images/projects/projektin-nimi/before.jpg` ja `public/images/projects/projektin-nimi/after.jpg`
2. Lisää uusi kohde tiedostoon `data/projects.ts`
3. Aseta `placeholder: false`, kun oikeat kuvat ovat käytössä

Esimerkki:

```ts
{
  slug: "keittio-remontti",
  title: "Keittiöremontti",
  category: "esimerkki",
  beforeImage: "/images/projects/keittio-remontti/before.jpg",
  afterImage: "/images/projects/keittio-remontti/after.jpg",
  placeholder: false,
}
```

## Yhteystietojen muuttaminen

Päivitä yrityksen tiedot tiedostossa `data/company.ts`. Yhteystiedot-sivu ja lomakkeen sähköpostiosoite käyttävät samaa tiedostoa.
