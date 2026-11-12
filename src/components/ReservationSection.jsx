import React from "react";

const RESERVATION_TIMES = [
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
  "10:00 PM",
  "11:00 PM",
  "12:00 AM",
  "1:00 AM",
];

function handleReservationSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const details = [
    `Name: ${formData.get("name")}`,
    `Email: ${formData.get("email")}`,
    `Date: ${formData.get("date")}`,
    `Time: ${formData.get("time")}`,
    `Guests: ${formData.get("guests")}`,
    `Occasion or requests: ${formData.get("requests") || "None"}`,
  ].join("\n");
  const subject = encodeURIComponent("Table reservation request");
  const body = encodeURIComponent(details);

  window.location.href = `mailto:hello@eastonpub.com?subject=${subject}&body=${body}`;
}

function ReservationSection() {
  return (
    <section className="reservation" id="booking" aria-labelledby="reservation-title">
      <div className="reservation__inner">
        <div className="reservation__intro">
          <h2 id="reservation-title">Book a table</h2>
          <p>Tell us when you&apos;re coming. We&apos;ll confirm by email within a few hours.</p>
          <ul className="reservation__details">
            <li>Groups of 4 to 12 seated together</li>
            <li>Booths held for 15 minutes</li>
            <li>Walk-ins welcome when there&apos;s room</li>
          </ul>
        </div>

        <form className="reservation__form" onSubmit={handleReservationSubmit}>
          <div className="reservation__field">
            <label htmlFor="reservation-name">Name</label>
            <input id="reservation-name" name="name" autoComplete="name" required />
          </div>
          <div className="reservation__field">
            <label htmlFor="reservation-email">Email</label>
            <input
              id="reservation-email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </div>
          <div className="reservation__field">
            <label htmlFor="reservation-date">Date</label>
            <input id="reservation-date" name="date" type="date" required />
          </div>
          <div className="reservation__field">
            <label htmlFor="reservation-time">Time</label>
            <select id="reservation-time" name="time" defaultValue="" required>
              <option value="" disabled>Select time</option>
              {RESERVATION_TIMES.map((time) => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>
          <div className="reservation__field reservation__field--full">
            <label htmlFor="reservation-guests">Guests</label>
            <select id="reservation-guests" name="guests" defaultValue="2">
              {Array.from({ length: 12 }, (_, index) => index + 1).map((count) => (
                <option key={count} value={count}>{count} {count === 1 ? "guest" : "guests"}</option>
              ))}
            </select>
          </div>
          <div className="reservation__field reservation__field--full">
            <label htmlFor="reservation-requests">Occasion or requests (optional)</label>
            <textarea
              id="reservation-requests"
              name="requests"
              placeholder="Birthday, allergies, booth preference"
              rows="3"
            />
          </div>
          <button className="reservation__submit" type="submit">Request table</button>
          <p className="reservation__note">
            Valid government ID required. 21+ after 9 PM. Your email app will open to send the request.
          </p>
        </form>
      </div>
    </section>
  );
}

export default ReservationSection;
