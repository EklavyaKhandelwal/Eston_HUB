import React, { useEffect, useRef, useState } from "react";

const DRINKS = [
  {
    name: "Knight’s Gambit",
    description: "Bourbon, blood orange, smoked honey",
    image: "/images/drink-knights-gambit.png",
    imageClass: "knights",
  },
  {
    name: "Red Velvet Sour",
    description: "Rye, raspberry, lemon, egg white",
    image: "/images/drink-red-velvet-sour.png",
    imageClass: "red-velvet",
  },
  {
    name: "Virgin Espresso Martini",
    description: "Cold brew, vanilla, cream",
    image: "/images/easton-cocktail.png",
    imageClass: "featured",
  },
  {
    name: "Ginger Mule",
    description: "Ginger beer, lime, mint",
    image: "/images/drink-ginger-mule.png",
    imageClass: "ginger",
  },
  {
    name: "Easton Espresso Martini",
    description: "Vodka, cold brew, vanilla",
    image: "/images/drink-easton-espresso.png",
    imageClass: "easton",
  },
];

const MENU_COLUMNS = [
  [
    {
      title: "Signature cocktails",
      items: [
        ["Knight’s Gambit", "Bourbon, blood orange, smoked honey", "$13"],
        ["Red Velvet Sour", "Rye, raspberry, lemon, egg white", "$13"],
        ["Easton Espresso Martini", "Vodka, cold brew, vanilla", "$14"],
        ["Garnet Spritz", "Aperol, pomegranate, prosecco", "$12"],
        ["Old Fashioned", "Bourbon, bitters, orange peel", "$13"],
      ],
    },
    {
      title: "Spirits & shots",
      items: [
        ["Well pours", "Vodka, rum, gin, tequila, whiskey", "$7"],
        ["Top shelf", "Ask the bar for today’s list", "$12+"],
        ["Shot of the night", "Changes daily", "$5"],
        ["Tequila flight", "Three pours, with lime and salt", "$16"],
      ],
    },
  ],
  [
    {
      title: "Beer & wine",
      items: [
        ["Draft, 10 rotating taps", "Local NJ breweries first", "$6–8"],
        ["Bottles & cans", "Lagers, IPAs, ciders", "$5–7"],
        ["Pitchers", "Any draft, serves four", "$22"],
        ["House red or white", "By the glass", "$9"],
        ["Hard seltzer", "Ask for today’s flavors", "$6"],
      ],
    },
    {
      title: "Zero-proof",
      items: [
        ["Garnet Fizz", "Pomegranate, lime, soda", "$8"],
        ["Virgin Espresso Martini", "Cold brew, vanilla, cream", "$8"],
        ["Ginger Mule", "Ginger beer, lime, mint", "$7"],
        ["Soft drinks", "Free refills with any snack", "$3"],
      ],
    },
  ],
];

export function DrinksSection() {
  const [offset, setOffset] = useState(0);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const drinks = [...DRINKS.slice(offset), ...DRINKS.slice(0, offset)];

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 700px)");
    const centerFeaturedCard = () => {
      if (mobile.matches) {
        const track = trackRef.current;
        const featuredCard = cardRefs.current[2];
        if (track && featuredCard) {
          track.scrollTo({
            left: featuredCard.offsetLeft - (track.clientWidth - featuredCard.clientWidth) / 2,
          });
        }
      }
    };

    centerFeaturedCard();
    mobile.addEventListener("change", centerFeaturedCard);
    return () => mobile.removeEventListener("change", centerFeaturedCard);
  }, [offset]);

  function move(direction) {
    setOffset((current) => (current + direction + DRINKS.length) % DRINKS.length);
  }

  return (
    <section className="drink-menu" id="drinks" aria-labelledby="drinks-title">
      <div className="drink-menu__inner">
        <h2 className="drink-menu__title" id="drinks-title">The Drinks</h2>

        <aside className="drink-menu__quote">
          <span className="drink-menu__quote-mark" aria-hidden="true">“</span>
          <p>Cocktails from $12, shots from $6. Every drink is made to order.</p>
          <a className="drink-menu__link" href="#full-menu">
            Explore Menu <span aria-hidden="true">↗</span>
          </a>
          <span className="drink-menu__quote-close" aria-hidden="true">”</span>
        </aside>

        <div className="drinks-track" ref={trackRef} aria-label="Featured drinks">
          {drinks.map((drink, index) => (
            <article
              className={`drink-card${index === 2 ? " drink-card--featured" : ""}`}
              key={drink.name}
              ref={(node) => { cardRefs.current[index] = node; }}
            >
              <img
                className={`drink-card__image drink-card__image--${drink.imageClass}`}
                src={drink.image}
                alt={drink.name}
              />
              <h3>{drink.name}</h3>
              <p>{drink.description}</p>
            </article>
          ))}
        </div>

        <button
          className="drink-menu__arrow drink-menu__arrow--previous"
          type="button"
          aria-label="Show previous drinks"
          onClick={() => move(-1)}
        >
          <span aria-hidden="true">‹</span>
        </button>
        <button
          className="drink-menu__arrow drink-menu__arrow--next"
          type="button"
          aria-label="Show next drinks"
          onClick={() => move(1)}
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>
    </section>
  );
}

export function FullMenuSection() {
  return (
    <section className="full-menu" id="full-menu" aria-label="Full drinks menu">
      <div className="full-menu__columns">
        {MENU_COLUMNS.map((column, columnIndex) => (
          <div className="full-menu__column" key={columnIndex}>
            {column.map((category, categoryIndex) => (
              <section
                className="menu-category"
                key={category.title}
                aria-labelledby={`menu-category-${columnIndex}-${categoryIndex}`}
              >
                <h2 id={`menu-category-${columnIndex}-${categoryIndex}`}>{category.title}</h2>
                <ul>
                  {category.items.map(([name, description, price]) => (
                    <li className="menu-item" key={name}>
                      <span className="menu-item__name">{name}</span>
                      <span className="menu-item__price">{price}</span>
                      <span className="menu-item__description">{description}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
