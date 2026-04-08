import { Header } from "@/components/header";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container narrow page-block flow">
          <p className="eyebrow">Etusivu</p>
          <h1>AP Powerbuilding &amp; Demolition Tmi</h1>
          <p className="lead">
            tähän tulee myöhemmin vähän lisää tietoa firmasta tai jotai. nyt
            tässä on vaan perus etusivu.
          </p>
          <a className="button-link" href="/tarjouspyynto">
            Jätä tarjouspyyntö
          </a>
        </div>
      </main>
    </>
  );
}
