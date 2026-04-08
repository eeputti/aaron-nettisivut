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
            Laita Tästä Viestiä Jos Tarttet Tekijää Johonki Hommaan. Viesti
            Lähtee Oman Sähköpostiohjelman Kautta Osoitteeseen {company.email}.
          </p>
          <ContactForm />
          <p className="note">Aaro Palailee Kun Viesti On Lähteny.</p>
        </div>
      </main>
    </>
  );
}
