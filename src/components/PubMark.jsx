import React from "react";

export default function PubMark({ compact = false }) {
  return (
    <span className={`pub-mark${compact ? " pub-mark--compact" : ""}`} aria-label="Easton Pub">
      <span className="pub-mark__flame" aria-hidden="true">✦</span>
      <span className="pub-mark__easton">EASTON</span>
      <span className="pub-mark__pub">PUB</span>
    </span>
  );
}
