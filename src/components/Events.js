// filepath: /c:/Users/mng48/source/repos/projects/websites/eia-club/src/components/Events.js
import React from 'react';
import './Events.css';

function Events() {
  const events = [
    { name: 'Startup Workshop', date: 'January 15, 2024', time: '10:00 AM - 2:00 PM' },
    { name: 'Networking Night', date: 'February 10, 2024', time: '6:00 PM - 9:00 PM' },
    { name: 'Pitch Competition', date: 'March 5, 2024', time: '1:00 PM - 4:00 PM' },
  ];

  return (
    <section className="events">
      <h2 className="title-events">Upcoming Events</h2>
      <div className="event-list">
        {events.map((event, index) => (
          <div className="event-tile" key={index}>
            <h3>{event.name}</h3>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
            <button onClick={() => alert(`You have registered for the ${event.name}!`)}>Register</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;