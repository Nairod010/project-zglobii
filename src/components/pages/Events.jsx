import "./Events.css";

export default function Events() {
  const events = [
    { id: 1, title: "Charity Run 2024", date: "March 15, 2024", location: "City Park", description: "Join us for a fun run to support local charities." },
    { id: 2, title: "Community Cleanup", date: "April 22, 2024", location: "Riverbank Area", description: "Help clean up the environment and make a difference." },
    { id: 3, title: "Fundraiser Gala", date: "May 10, 2024", location: "Grand Hall", description: "An elegant evening to raise funds for our cause." },
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

