export function EditorialSection() {
  return (
    <section id="story" className="grid" aria-labelledby="story-heading">
      <div className="poster">
        <h2 id="story-heading" className="tight">
          PLANT CHEESE THAT <span className="shadow-ink">BARKS</span> LOUDER THAN THE COW
        </h2>
        <div className="stack">
          <div>🔥 Fries Golden</div>
          <div>🧲 Sticks to Noodles</div>
          <div>🎈 Bubbly Under Broil</div>
          <div>🧂 Salty / Funky / Clean</div>
        </div>
      </div>
      <aside className="copy">
        <h3 className="mono caps">Sustainable decadence for everyone</h3>
        <p>
          Delicious, addictive, and weirdly beloved. Every bite delivers a tiny techno-optimistic
          parade. By tapping into <b>10M acres</b> of soybean cover crops we empower farmers and
          make absurdly luscious cheese without the cow.
        </p>
        <a className="cta" href="#">
          Read Our Process
        </a>
      </aside>
    </section>
  );
}
