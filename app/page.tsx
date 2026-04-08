import { Header } from "@/components/header";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container page-block flow homepage-intro">
          <h1>AP Powerbuilding &amp; Demolition</h1>
          <p className="lead">kaikenlaisia hommia.</p>
          <a className="button-link" href="/tarjouspyynto">
            Jätä tarjouspyyntö
          </a>
        </div>
      </main>
    </>
  );
}
