import Image from "next/image";
import Link from "next/link";
import { Book } from "@/components/Book";
import { Arrow, Sparkle } from "@/components/Icons";
import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/data/catalogue";
export default function Home() {
  return (
    <main id="main">
      <section className="hero" id="book">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="gold-dot" /> THE ART OF EVERYDAY LIVING
          </p>
          <h1>
            A little more
            <br />
            <em>bliss.</em> Every day.
          </h1>
          <p className="hero-description">
            For wherever life takes you.
            <br />
            Thoughtful pieces. Beautiful little details.
            <br />A world that feels like you.
          </p>
          <Link href="/catalogue" className="button dark">
            Discover the collection <Arrow diagonal />
          </Link>
          <a href="#collections" className="skip-book">
            Skip to exploring <span>↓</span>
          </a>
          <div className="hero-note">
            <Sparkle />
            <span>
              Quality. Style. Everyday living.
              <br />
              <small>Welcome to the world of Blissworld.</small>
            </span>
          </div>
        </div>
        <Book />
        <span className="hero-side-note">A NEW CHAPTER IN EVERYDAY LIVING</span>
      </section>
      <div className="brand-ribbon">
        <span>MADE FOR YOUR EVERYDAY</span>
        <Sparkle />
        <span>A LITTLE COLOUR</span>
        <Sparkle />
        <span>A LITTLE CONFIDENCE</span>
        <Sparkle />
        <span>A LITTLE BLISS</span>
        <Sparkle />
      </div>
      <section className="section collections-section" id="collections">
        <div className="section-heading">
          <div>
            <p className="eyebrow">MANY LITTLE WORLDS. ONE BLISSWORLD.</p>
            <h2>
              Find your kind of <em>bliss.</em>
            </h2>
          </div>
          <Link className="text-link" href="/catalogue">
            Explore everything <Arrow diagonal />
          </Link>
        </div>
        <div className="collection-grid">
          {categories.map((c, i) => (
            <Link
              className={`collection-tile collection-${c.id}`}
              href={`/collections/${c.id}`}
              key={c.id}
              style={{ backgroundColor: c.colour }}
            >
              <div className="collection-image">
                <Image
                  src={
                    c.id === "handbags"
                      ? "/images/originals/ivory-top-handle.webp"
                      : c.image
                  }
                  alt={
                    c.editorial && c.id !== "handbags"
                      ? `${c.name} — concept editorial`
                      : c.name
                  }
                  fill
                  sizes={
                    i < 2
                      ? "(max-width: 600px) 90vw, 46vw"
                      : "(max-width: 600px) 90vw, 30vw"
                  }
                />
                {c.editorial && c.id !== "handbags" && (
                  <span className="tile-concept">CONCEPT EDITORIAL</span>
                )}
              </div>
              <div className="collection-label">
                <div>
                  <p className="eyebrow">COLLECTION {c.number}</p>
                  <h3>{c.name}</h3>
                </div>
                <span className="round-arrow">
                  <Arrow diagonal />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="editorial-feature">
        <div className="editorial-visual">
          <Image
            src="/images/editorial/everyday-pair.webp"
            alt="Blissworld branded burgundy handbag and ivory bottle — concept editorial"
            fill
            sizes="(max-width: 700px) 100vw, 56vw"
          />
          <span className="editorial-caption">
            THE EVERYDAY PAIR · CONCEPT EDITORIAL
          </span>
        </div>
        <div className="editorial-copy">
          <p className="eyebrow">BETTER, TOGETHER</p>
          <h2>
            Perfectly paired.
            <br />
            <em>Entirely you.</em>
          </h2>
          <p>
            A rich burgundy. A soft ivory. A touch of gold. Discover colour
            stories that belong together, and little details that make them
            yours.
          </p>
          <Link className="button light" href="/products/everyday-pair-concept">
            Meet the everyday pair <Arrow diagonal />
          </Link>
          <div className="colour-story">
            <span style={{ background: "#62272e" }} />
            <span style={{ background: "#e6dac1" }} />
            <span style={{ background: "#b99752" }} />
            <small>BURGUNDY / IVORY / GOLD</small>
          </div>
        </div>
      </section>
      <section className="section featured-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A FEW OF OUR FAVOURITES</p>
            <h2>
              The everyday <em>edit.</em>
            </h2>
          </div>
          <Link className="text-link" href="/catalogue">
            View the collection <Arrow diagonal />
          </Link>
        </div>
        <div className="product-grid featured-grid">
          {[products[0], products[9], products[16]].map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
      <section className="world-section">
        <p className="eyebrow">THE BLISSWORLD WAY</p>
        <Sparkle />
        <h2>
          It’s the little things
          <br />
          that make life <em>beautiful.</em>
        </h2>
        <p>
          A bag for your next chapter. A splash of colour for theirs.
          <br />
          We bring everyday pieces into one thoughtfully curated world.
        </p>
        <Link className="text-link" href="/about">
          Step into our world <Arrow diagonal />
        </Link>
      </section>
    </main>
  );
}
