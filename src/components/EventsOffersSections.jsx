import React from "react";

const WEEKLY_EVENTS = [
  {
    day: "Mon",
    title: "Open mic",
    description: "8 PM. Music, comedy or poetry. Sign up at the bar.",
  },
  {
    day: "Wed",
    title: "Trivia night",
    description: "9 PM. Teams of up to six. Winners drink free.",
  },
  {
    day: "Thu",
    title: "Late night DJ",
    description: "10 PM. Open floor, no cover before 11.",
  },
  {
    day: "Fri",
    title: "Live band",
    description: "9 PM. Local bands, then the DJ takes over.",
  },
  {
    day: "Sat",
    title: "Weekend DJ",
    description: "10 PM. Hip-hop, house and throwbacks.",
  },
  {
    day: "Sun",
    title: "Game day",
    description: "12 PM. Every game on the big screens.",
  },
];

export function EventsSection() {
  return (
    <section className="events" id="events" aria-labelledby="events-title">
      <div className="events__canvas">
        <header className="events__heading">
          <h2 id="events-title">Events</h2>
          <p>Something on every night we&apos;re open.</p>
        </header>

        <ul className="events__schedule" aria-label="Weekly events">
          {WEEKLY_EVENTS.map((event) => (
            <li className="events__item" key={event.day}>
              <span className="events__day">{event.day}</span>
              <div className="events__item-copy">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <aside className="events__booking" aria-labelledby="events-booking-title">
          <div className="events__booking-copy">
            <h3 id="events-booking-title">Hosting a birthday or club event?</h3>
            <p>We take private bookings for groups of 15 to 60.</p>
          </div>
          <a className="events__button" href="mailto:hello@eastonpub.com?subject=Private%20event%20enquiry">Enquire now</a>
        </aside>
      </div>
    </section>
  );
}

const OFFERS = [
  {
    name: "Happy hour",
    schedule: "Mon to Fri, 4–7 PM",
    description: "Half-price drafts and well pours.",
    value: "50% off",
  },
  {
    name: "Student night",
    schedule: "Tuesday, all night",
    description: "$5 signature shots and $4 drafts with a student ID.",
    value: "$4 drafts",
  },
  {
    name: "Two for Thursday",
    schedule: "Thursday, 8 PM–close",
    description: "Buy one cocktail, get one free.",
    value: "2 for 1",
  },
  {
    name: "Weekend bucket",
    schedule: "Fri to Sun, all night",
    description: "Five bottled beers on ice.",
    value: "$25",
  },
  {
    name: "Game day pitchers",
    schedule: "Sunday, 12 PM–close",
    description: "Any draft pitcher, with free wings at kickoff.",
    value: "$18",
  },
];

export function OffersSection() {
  return (
    <section className="offers" id="offers" aria-labelledby="offers-title">
      <div className="offers__canvas">
        <header className="offers__heading">
          <h2 id="offers-title">Offers</h2>
          <p>Student ID gets you in on every deal.</p>
        </header>

        <ul className="offers__list" aria-label="Current offers">
          {OFFERS.map((offer) => (
            <li className="offers__row" key={offer.name}>
              <h3 className="offers__name">{offer.name}</h3>
              <span className="offers__schedule">{offer.schedule}</span>
              <p className="offers__description">{offer.description}</p>
              <span className="offers__value">{offer.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
