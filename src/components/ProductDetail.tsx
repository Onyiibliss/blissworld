"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product, getCategory } from "@/data/catalogue";
import { Arrow } from "./Icons";
export function ProductDetail({ product: p }: { product: Product }) {
  const [active, setActive] = useState(0);
  const c = getCategory(p.category);
  return (
    <section className="product-detail">
      <div className="product-gallery">
        <div className={`gallery-main ${p.concept ? "concept-gallery" : ""}`}>
          <Image
            key={active}
            src={p.gallery[active]}
            alt={`${p.name}${active ? " — original collection view" : ` in ${p.colour}`}${p.concept ? " — generated concept" : ""}`}
            fill
            priority
            sizes="(max-width: 700px) 100vw, 55vw"
          />
          {p.concept && <span className="image-badge">CONCEPT PREVIEW</span>}
        </div>
        {p.gallery.length > 1 && (
          <div className="gallery-thumbs" aria-label="Product photographs">
            {p.gallery.map((src, i) => (
              <button
                key={src}
                className={active === i ? "selected" : ""}
                aria-label={`View ${i === 0 ? "product" : "full collection photograph"}`}
                aria-pressed={active === i}
                onClick={() => setActive(i)}
              >
                <Image src={src} alt="" fill sizes="90px" />
              </button>
            ))}
          </div>
        )}
        <p className="gallery-note">
          {p.concept
            ? "AI-generated design concept. Not confirmed inventory."
            : "Original supplied photography · Product views cropped from the supplied collection."}
        </p>
      </div>
      <div className="detail-copy">
        <div className="breadcrumbs">
          <Link href="/catalogue">Collection</Link>
          <span>/</span>
          <Link href={`/collections/${p.category}`}>{c?.name}</Link>
        </div>
        <p className="eyebrow">
          {p.concept ? "AN IDEA FROM OUR WORLD" : c?.name}
        </p>
        <h1>{p.name}</h1>
        <p className="detail-description">{p.description}</p>
        <div className="detail-colour">
          <span>COLOUR STORY</span>
          <strong>{p.colour}</strong>
        </div>
        {p.variants && <p>Collection colours: {p.variants.join(", ")}</p>}
        <Link href={`/enquiry?product=${p.slug}`} className="button dark">
          {p.concept ? "Ask about this concept" : "Enquire about this piece"}{" "}
          <Arrow diagonal />
        </Link>
        <p className="detail-note">
          {p.concept
            ? "A preview of a possible Blissworld design. Availability is not confirmed."
            : "For sizes, materials and availability, prepare an enquiry about this piece."}
        </p>
        <details open>
          <summary>
            About this piece <span>+</span>
          </summary>
          <dl>
            <div>
              <dt>Collection</dt>
              <dd>{c?.name}</dd>
            </div>
            <div>
              <dt>Colour</dt>
              <dd>{p.colour}</dd>
            </div>
            <div>
              <dt>Presentation</dt>
              <dd>
                {p.concept
                  ? "Generated concept preview"
                  : "Supplied product photography"}
              </dd>
            </div>
          </dl>
        </details>
        <details>
          <summary>
            A note on our imagery <span>+</span>
          </summary>
          <p>
            Our product photographs come from the supplied collection. Branded
            promotional edits and generated designs are identified as concept
            previews or concept editorials. These do not confirm product
            availability.
          </p>
        </details>
      </div>
    </section>
  );
}
