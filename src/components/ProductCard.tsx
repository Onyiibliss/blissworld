import Image from "next/image";
import Link from "next/link";
import { Product, getCategory } from "@/data/catalogue";
import { Arrow } from "./Icons";
export function ProductCard({ product: p }: { product: Product }) {
  return (
    <Link
      href={`/products/${p.slug}`}
      className={`product-card ${p.concept ? "concept-product" : ""}`}
    >
      <div className="product-image">
        <Image
          src={p.image}
          alt={
            p.concept
              ? `${p.name} — generated concept preview`
              : `${p.name} in ${p.colour}`
          }
          fill
          sizes="(max-width: 600px) 90vw, (max-width: 1000px) 44vw, 30vw"
        />
        {p.concept && <span className="image-badge">CONCEPT PREVIEW</span>}
        <span className="product-arrow">
          <Arrow diagonal />
        </span>
      </div>
      <div className="product-meta">
        <p className="eyebrow">{getCategory(p.category)?.name}</p>
        <h3>{p.name}</h3>
        <p className="product-colour">{p.colour}</p>
      </div>
    </Link>
  );
}
