import { Header } from "@/components/header";
import { ProjectGallery } from "@/components/project-gallery";

export default function EnnenJaJalkeenPage() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container page-block flow">
          <p className="eyebrow">Ennen &amp; jälkeen</p>
          <h1>Ennen &amp; jälkeen</h1>
          <p className="lead">Tähän osioon esim uusii kohtei kuvina tai jotai!</p>
          <ProjectGallery />
        </div>
      </main>
    </>
  );
}
