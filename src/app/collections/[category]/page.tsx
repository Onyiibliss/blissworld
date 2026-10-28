import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { categories, getCategory } from "@/data/catalogue";
import { Catalogue } from "@/components/Catalogue";
export function generateStaticParams() {
  return categories.map((c) => ({ category: c.id }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{
    category: string;
  }>;
}) {
  const c = getCategory((await params).category);
  return { title: c?.name || "Collection" };
}
export default async function CollectionPage({
  params,
}: {
  params: Promise<{
    category: string;
  }>;
}) {
  const c = getCategory((await params).category);
  if (!c) notFound();
  return (
    <main id="main">
      <div
        className={`category-hero category-hero-${c.id}`}
        style={{ backgroundColor: c.colour }}
      >
        <div>
          <div className="breadcrumbs">
            <Link href="/catalogue">The collection</Link>
            <span>/</span>
            <span>{c.name}</span>
          </div>
          <p className="eyebrow">{c.subtitle}</p>
          <h1>
            {c.title.split("\n").map((t, i) => (
              <span key={i}>{i === 1 ? <em>{t}</em> : t}</span>
            ))}
          </h1>
          <p>{c.description}</p>
        </div>
        <div className="category-hero-image">
          <Image
            src={c.image}
            alt={`${c.name}${c.editorial ? " — branded concept editorial" : ""}`}
            fill
            priority
            sizes="(max-width: 700px) 100vw, 50vw"
          />
          {c.editorial && (
            <span className="image-badge">CONCEPT EDITORIAL</span>
          )}
        </div>
      </div>
      <Catalogue category={c.id} />
      <div className="next-collection">
        <p className="eyebrow">KEEP EXPLORING</p>
        {categories
          .filter((cat) => cat.id !== c.id)
          .map((cat) => (
            <Link key={cat.id} href={`/collections/${cat.id}`}>
              {cat.name} ↗
            </Link>
          ))}
      </div>
    </main>
  );
}
