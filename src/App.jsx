import React from "react";
import PubMark from "./components/PubMark.jsx";
import { DrinksSection, FullMenuSection } from "./components/DrinksSection.jsx";
import SnacksSection from "./components/SnacksSection.jsx";
import { EventsSection, OffersSection } from "./components/EventsOffersSections.jsx";
import ReservationSection from "./components/ReservationSection.jsx";
import SiteFooter from "./components/SiteFooter.jsx";

function App() {
  return (
    <main className="landing">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Easton Pub home">
          <PubMark compact />
          <span className="brand__name">Easton <span>Pub</span></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#drinks">Menu</a>
          <a href="#events">Events</a>
          <a href="#booking">Book</a>
        </nav>
        <a className="button button--small" href="#booking">Book a table</a>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <h1 className="hero__title" id="hero-title">
          <span>Easton</span><span className="hero__title-pub">Pub</span>
        </h1>
        <div className="hero__art">
          <img
            src="/images/easton-cocktail.png"
            alt="A ruby-red cocktail with citrus and rosemary"
          />
        </div>
        <p className="hero__tagline">
          Great cocktails,<br />
          <em>right on Easton<br className="tagline-break" /> Ave.</em>
        </p>
        <div className="hero__intro">
          <PubMark />
          <p>Handcrafted cocktails, cold draft and a dark corner booth, steps from campus on Easton Ave. Half price happy hour every weekday, 4–7 PM. Your table is waiting.</p>
          <div className="hero__actions">
            <a className="button" href="#booking">Book a table</a>
            <a className="button button--outline" href="#drinks">See the drinks</a>
          </div>
        </div>
      </section>

      <footer className="quick-info" aria-label="Pub details">
        <div><strong>Open tonight</strong><span>4 PM to 2 AM</span></div>
        <div><strong>Happy hour</strong><span>Mon to Fri, 4–7 PM</span></div>
        <div><strong>12 Easton Ave</strong><span>New Brunswick, NJ</span></div>
      </footer>

      <section className="pub-story-frame" id="about" aria-labelledby="pub-story-title">
        <div className="pub-story">
          <div className="pub-story__content">
            <h2 id="pub-story-title">Your Pub on<br />Easton Ave.</h2>
            <p className="pub-story__intro">
              Easton Pub is a cocktail-first bar on Easton Ave. We pair a tight drinks list with
              warm lighting, good music and a team that remembers your order. Come after work,
              bring a date, or settle in for a late night with friends. The drinks are serious.
              The room isn&apos;t.
            </p>
            <div className="pub-story__features">
              <article>
                <h3>Drinks first</h3>
                <p>Handcrafted cocktails, local draft and a short, well-made list.</p>
              </article>
              <article>
                <h3>Fair prices</h3>
                <p>New deals every week, so every visit costs a little less.</p>
              </article>
              <article>
                <h3>Open late</h3>
                <p>Kitchen until midnight, doors until 2 AM on weekends.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <DrinksSection />
      <FullMenuSection />
      <SnacksSection />
      <EventsSection />
      <OffersSection />
      <ReservationSection />
      <SiteFooter />
    </main>
  );
}

export default App;
