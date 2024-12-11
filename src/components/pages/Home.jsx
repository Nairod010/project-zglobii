import "./Home.css"

export default function Home() {
  return (
    <div className="main-container">
      <div className="background"></div>
      <div className="description-container">
        <h1 className="home-article-title">Magazinul cu Zglobii</h1>
        <p>Magazinul cu Zglobii este un magazin diversificat. Cu produse dedicate copiilor. Magazinul cu Zglobii va fi si pentru viitori parinti indragostiti dar si pentru cadourile lui Mos Craciun. Iepurasul va gasi pentru copii cadourile perfecte pentru copii si parintii. In Magazinul cu Zgobii veti putea dazii cadoul perfect pentru zile de nastere. Magazinul Zglobii va poate personaliza cana, tricoul sau ghiozdanul preferat cu ce iti doresti sa apara pe produsul final. Multe alte surprize va vom pregatii in micul MAGAZINUL CU ZGLOBII.</p>
      </div>
      <div className="presentation-container">
        <div className="show-one-containter">
          <div className="show-image"></div>
          <h1>Teatru Zglobii</h1>
          <p>In curand vom reveni cu noi surprize pentru Dvs. Avem nevoie de sustinerea Dvs. Proiectele noastre si evenimentele pentru copii, sa mearga mai departe. Prin plasarea unei comenzi, din magazin inseamna sustinerea Dvs pentru noii.</p>
        </div>
        <div className="show-two-containter">
          <div className="show-image"></div>
          <h1>Viitor Proiect</h1>
          <p>Pregatim un nou proiect educativ si interactiv pentru copii si parintii.
            Poiectul va avea ca scop educativ si interactiv RECICLAREA.</p>
        </div>
      </div>
    </div>
  )
}
