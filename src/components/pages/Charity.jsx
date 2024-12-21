import "./Charity.css";

export default function Charity() {
  return (
    <div className="charity-container">
      <h1 className="charity-title">Proiecte caritabile</h1>
      <p className="charity-description">
        Pregatim un nou proiect educativ si interactiv pentru copii si parintii.
        Poiectul va avea ca scop educativ si interactiv RECICLAREA.
      </p>

      <h2 className="charity-subtitle">Cu ce ne puteti ajuta</h2>
      <ul className="charity-list">
        <li>Donează fonduri pentru a susține proiectele noastre în desfășurare.</li>
        <li>Fii voluntar și ajută-ne în organizarea evenimentelor și inițiativelor noastre.</li>
        <li>Răspândește vestea și împărtășește misiunea noastră cu alții.</li>
      </ul>

      <h2 className="charity-subtitle">Contactati-ne</h2>
      <p className="charity-contact">
        Adresa: Ion Mihalache 331, Sector 1, Bucuresti.<br />
        Email: cio_sil@yahoo.com<br />
        Telefon: 0742671808
      </p>
    </div>
  );
}

