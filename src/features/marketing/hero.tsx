import Link from "next/link";

export function HeroSection() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-heading">
      <div className="wordwall">
        POTLUCK • PLANT CHEESE • SAUCE • RICE •
      </div>

      <div className="tape mono caps">Made w/ plants • No cow</div>

      <div className="badge-wrap">
        <svg className="badge" viewBox="0 0 200 200" aria-hidden="true">
          <defs>
            <path id="curve" d="M100,10 a90,90 0 1,1 0,180 a90,90 0 1,1 0,-180" />
          </defs>
          <text fontWeight="900" fontSize="14" className="mono">
            <textPath xlinkHref="#curve" startOffset="0">
              ALL CHEESE TO ALL PEOPLE • MELT • DRIP • POP • GOOZLE • STRETCH •{" "}
            </textPath>
          </text>
        </svg>
        <div className="badge-center mono caps">
          ANIMAL
          <br />
          FREE
        </div>
      </div>

      <div className="collage">
        <article className="card">
          <div className="label">NEW</div>
          <img
            src="/images/placeholder-hero.svg"
            alt="Avant Grocery hero collage"
            loading="lazy"
          />
          <p>
            <span className="pill">GOUZLE STRETCH</span> Meet the world&apos;s most playful plant
            cheese. Tacky pull, clean melt, salty-sweet finish. Toss it on kimchi rice or your
            midnight noodles.
          </p>
        </article>
        <aside className="copy">
          <h3 className="mono caps loose">From Farm to Slice</h3>
          <p>
            We partner with independent growers to raise <b>protein-rich beans</b>, then teach them
            our <i>cultured casien</i> dance. The result: joyful blocks that fry, fold, and stretch.
          </p>
          <p className="mono">🌿 harvest → 🧪 culture → 🧀 press → 🔥 sear → 😋 devour</p>
          <Link href="/collections/blocks" className="cta">
            Shop Blocks
          </Link>
        </aside>
      </div>
    </section>
  );
}
