import React from "react";
import PubMark from "./PubMark.jsx";

const HOURS = [
  { days: "Monday to Thursday", hours: "4 PM – 1 AM" },
  { days: "Friday and Saturday", hours: "4 PM – 2 AM" },
  { days: "Sunday", hours: "12 PM – 12 AM" },
];

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="site-footer__inner">
          <section className="site-footer__location" aria-labelledby="footer-location-title">
            <h2 id="footer-location-title">Find us</h2>
            <address>
              12 Easton Ave
              <br />
              New Brunswick, NJ
            </address>
            <p>A short walk from campus and the train station.</p>
            <a
              className="site-footer__directions"
              href="https://www.google.com/maps/search/?api=1&query=12+Easton+Ave%2C+New+Brunswick%2C+NJ"
              target="_blank"
              rel="noreferrer"
            >
              Get directions
            </a>
          </section>

          <section className="site-footer__hours" aria-labelledby="footer-hours-title">
            <h2 id="footer-hours-title">Hours</h2>
            <dl className="site-footer__schedule">
              {HOURS.map(({ days, hours }) => (
                <div className="site-footer__schedule-row" key={days}>
                  <dt>{days}</dt>
                  <dd>{hours}</dd>
                </div>
              ))}
            </dl>
            <address className="site-footer__contact">
              Call <a href="tel:+17325550142">(732) 555-0142</a>
              <br />
              Email <a href="mailto:hello@eastonpub.com">hello@eastonpub.com</a>
            </address>
            <p className="site-footer__responsibility">Please drink responsibly.</p>
          </section>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="site-footer__bottom-inner">
          <a className="site-footer__brand" href="#home" aria-label="Easton Pub home">
            <PubMark />
          </a>
          <p className="site-footer__copyright">
            © {new Date().getFullYear()} Easton Pub, 12 Easton Ave, New Brunswick, NJ
          </p>
          <p className="site-footer__social">Instagram · Facebook</p>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
