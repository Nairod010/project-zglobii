import "./Events.css";

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Teatru Zglobii",
      date: "20 ianuarie 2024",
      location: "Teatrul Zglobii, București",
      description: "Un spectacol teatral încântător pentru copii și părinți, plin de râsete și creativitate.",
    },
    {
      id: 2,
      title: "Petreceri Zglobii",
      date: "14 februarie 2024",
      location: "Happy Kids Club, Cluj-Napoca",
      description: "Sărbătoriți alături de noi la un eveniment tematic pentru copii, cu jocuri, muzică și distracție.",
    },
    {
      id: 3,
      title: "Spectacole Interactive",
      date: "10 martie 2024",
      location: "Scena Centrală, Timișoara",
      description: "Alăturați-vă unui spectacol interactiv ce îmbină povestirea, muzica și participarea publicului.",
    },
  ];


  return (
    <div className="events-container">
      <h1 className="events-title">Upcoming Events</h1>
      <div className="events-list">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <h2 className="event-title">{event.title}</h2>
            <p className="event-date"><strong>Date:</strong> {event.date}</p>
            <p className="event-location"><strong>Location:</strong> {event.location}</p>
            <p className="event-description">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

