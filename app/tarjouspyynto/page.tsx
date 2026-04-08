import { ContactForm } from "@/components/contact-form";
import { Header } from "@/components/header";
import { company } from "@/data/company";

export default function TarjouspyyntoPage() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container narrow page-block flow">
          <h1>Jätä tarjouspyyntö</h1>
          <p className="lead">
            Laita tästä viestiä jos tarttet tekijää johonki hommaan. Viesti
            lähtee oman sähköpostiohjelman kautta osoitteeseen {company.email}.
          </p>
          <ContactForm />
          <p className="note">Aaro palailee kun viesti on lähteny.</p>
        </div>
      </main>
    </>
  );
}
