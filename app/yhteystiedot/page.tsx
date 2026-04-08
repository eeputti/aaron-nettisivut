import { Header } from "@/components/header";
import { company } from "@/data/company";

export default function YhteystiedotPage() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container narrow page-block flow">
          <p className="eyebrow">Yhteystiedot</p>
          <h1>Yhteystiedot</h1>
          <p className="lead">tähänkin voi laittaa jotain lisää myöhemmin.</p>
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
              <dt>Puhelinnumero</dt>
              <dd>
                <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
              </dd>
            </div>
            <div>
              <dt>Y-tunnus</dt>
              <dd>{company.businessId}</dd>
            </div>
            <div>
              <dt>Toimipaikka</dt>
              <dd>{company.location}</dd>
            </div>
            <div>
              <dt>Postiosoite</dt>
              <dd>{company.postalAddress}</dd>
            </div>
          </dl>
        </div>
      </main>
    </>
  );
}
