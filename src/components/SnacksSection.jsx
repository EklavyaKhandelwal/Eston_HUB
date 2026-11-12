import React from "react";

export default function SnacksSection() {
  return (
    <section className="snacks" id="snacks" aria-labelledby="snacks-title">
      <div className="snacks__backdrop" aria-hidden="true">
        <span className="snacks__word snacks__word--free">Free</span>
        <span className="snacks__word snacks__word--bites">Bites</span>
        <span className="snacks__word snacks__word--snacks">Snacks</span>
      </div>

      <div className="snacks__canvas">
        <header className="snacks__heading">
          <h2 id="snacks-title">Snacks</h2>
          <p>Built for sharing. Served until midnight.</p>
        </header>

        <article className="snack-feature snack-feature--fries">
          <img
            className="snack-feature__image"
            src="/images/snack-loaded-fries.png"
            alt="Loaded fries topped with cheese, bacon, and scallions"
          />
          <div className="snack-feature__content">
            <div className="snack-item__heading">
              <h3>Loaded fries</h3>
              <span>$10</span>
            </div>
            <p className="snack-feature__subtitle">Cheese, bacon, scallion, house sauce</p>
            <p className="snack-feature__description">
              A generous portion of golden, crispy fries topped with melted cheese, crunchy
              bacon, spring onions, and a drizzle of creamy house sauce. Perfect for sharing
              or keeping all to yourself.
            </p>
          </div>
        </article>

        <div className="snacks__row" aria-label="More snacks">
          <article className="snack-teaser snack-teaser--burgers">
            <img src="/images/snack-mini-burgers.png" alt="Three mini burgers on a plate" />
            <div className="snack-teaser__content">
              <div className="snack-item__heading">
                <h3>Mini burgers</h3>
                <span>$12</span>
              </div>
              <p>Three sliders, caramelized onion</p>
            </div>
          </article>

          <article className="snack-teaser snack-teaser--nachos">
            <img src="/images/snack-nacho-tray.png" alt="Nachos with cheese, salsa, and guacamole" />
            <div className="snack-teaser__content">
              <div className="snack-item__heading">
                <h3>Nacho tray</h3>
                <span>$12</span>
              </div>
              <p>Cheese, jalapeño, salsa, sour cream</p>
            </div>
          </article>

          <img
            className="snacks__pretzels"
            src="/images/snack-pretzels.png"
            alt="A bowl of soft pretzels"
          />
        </div>

        <article className="snack-feature snack-feature--wings">
          <img
            className="snack-feature__image"
            src="/images/snack-buffalo-wings.png"
            alt="Buffalo wings served with blue cheese dip"
          />
          <div className="snack-feature__content">
            <div className="snack-item__heading">
              <h3>Buffalo wings</h3>
              <span>$13</span>
            </div>
            <p className="snack-feature__subtitle">Eight pieces, blue cheese dip</p>
            <p className="snack-feature__description">
              Crispy, juicy chicken wings tossed in our bold Buffalo sauce, a tangy blend with
              a satisfying kick. Served with celery sticks and a cool ranch or blue cheese dip
              to balance the heat.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
