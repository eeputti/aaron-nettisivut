import { Header } from "@/components/header";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container page-block flow homepage-intro">
          <h1>AP Powerbuilding &amp; Demolition</h1>
          <p className="lead">
            kaikenlaiset hommat. kato täältä mitä oon tehny ennen ja jälkeen
            nii osaat arvioida mitä teen.
          </p>
          <a className="text-link" href="/ennen-jalkeen">
            katso ennen &amp; jälkeen
          </a>
          <a className="button-link" href="/tarjouspyynto">
            Jätä tarjouspyyntö
          </a>
        </div>
      </main>
    </>
  );
}
