import { ContactForm } from "@/components/contact-form";
import { Header } from "@/components/header";
import { ProjectGallery } from "@/components/project-gallery";
import { company } from "@/data/company";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section id="etusivu" className="section hero">
          <div className="container flow">
            <p className="eyebrow">Etusivu</p>
            <h1>AP Powerbuilding &amp; Demolition Tmi</h1>
            <p className="lead">
              AP Powerbuilding &amp; Demolition Tmi tekee purku-, remontti- ja
              saneeraustöitä luotettavasti ja selkeästi. Ota yhteyttä matalalla
              kynnyksellä ja pyydä tarjous.
            </p>
            <a className="button-link" href="#tarjouspyynto">
              Jätä tarjouspyyntö
            </a>
          </div>
        </section>

        <section id="tarjouspyynto" className="section section-border">
          <div className="container narrow flow">
            <p className="eyebrow">Jätä tarjouspyyntö</p>
            <h2>Pyydä tarjous työstä</h2>
            <p>
              Täytä tiedot alle. Viesti avautuu oman sähköpostiohjelmasi kautta
              osoitteeseen {company.email}.
            </p>
            <ContactForm />
            <p className="note">
              Aaro on yhteydessä viestin lähettämisen jälkeen.
            </p>
          </div>
        </section>

        <section id="ennen-jalkeen" className="section section-border">
          <div className="container flow">
            <p className="eyebrow">Ennen &amp; jälkeen</p>
            <h2>Esimerkkikohteita</h2>
            <p>
              Tähän osioon voidaan lisätä uusia kohteita helposti myöhemmin.
            </p>
            <ProjectGallery />
          </div>
        </section>

        <section id="yhteystiedot" className="section section-border">
          <div className="container narrow flow">
            <p className="eyebrow">Yhteystiedot</p>
            <h2>Yhteystiedot</h2>
            <dl className="contact-list">
              <div>
                <dt>Yritys</dt>
                <dd>{company.name}</dd>
              </div>
              <div>
                <dt>Sähköposti</dt>
                <dd>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </dd>
              </div>
              <div>
                <dt>Puhelin</dt>
                <dd>
                  <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
                </dd>
              </div>
              <div>
                <dt>Y-tunnus</dt>
                <dd>{company.businessId}</dd>
              </div>
              <div>
                <dt>Sijainti</dt>
                <dd>{company.location}</dd>
              </div>
              <div>
                <dt>Postiosoite</dt>
                <dd>{company.postalAddress}</dd>
              </div>
            </dl>
          </div>
        </section>
      </main>
    </>
  );
}
