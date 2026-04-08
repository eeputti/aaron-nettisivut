# AP Powerbuilding & Demolition Tmi

Yksinkertainen Next.js-sivusto yritykselle AP Powerbuilding & Demolition Tmi.

## Käynnistys

1. Asenna riippuvuudet komennolla `npm install`
2. Käynnistä kehityspalvelin komennolla `npm run dev`

## Ennen & jälkeen -kohteiden lisääminen

1. Lisää kuvat kansioihin muodossa `public/images/projects/projektin-nimi/before.jpg` ja `public/images/projects/projektin-nimi/after.jpg`
2. Lisää uusi kohde tiedostoon `data/projects.ts`
3. Aseta `placeholder: false`, kun oikeat kuvat ovat käytössä

Esimerkki:

```ts
{
  slug: "keittio-remontti",
  title: "Keittiöremontti",
  category: "Remontti",
  beforeImage: "/images/projects/keittio-remontti/before.jpg",
  afterImage: "/images/projects/keittio-remontti/after.jpg",
  description: "Lyhyt kuvaus kohteesta.",
  placeholder: false,
}
```

## Yhteystietojen muuttaminen

Päivitä yrityksen tiedot tiedostossa `data/company.ts`. Sivun yhteystiedot ja lomakkeen sähköpostiosoite käyttävät samaa tiedostoa.
