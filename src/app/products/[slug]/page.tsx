import { notFound } from "next/navigation";
import { products, getProduct } from "@/data/catalogue";
import { ProductDetail } from "@/components/ProductDetail";
import { ProductCard } from "@/components/ProductCard";
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const p = getProduct((await params).slug);
  return { title: p?.name || "Product" };
}
export default async function ProductPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const p = getProduct((await params).slug);
  if (!p) notFound();
  let related = products.filter(
    (x) => x.category === p.category && x.slug !== p.slug,
  );
  if (related.length < 3)
    related = [
      ...related,
      ...products.filter((x) => x.category !== p.category),
    ].slice(0, 3);
  return (
    <main id="main">
      <ProductDetail product={p} />
      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THERE’S MORE TO DISCOVER</p>
            <h2>
              A little more <em>inspiration.</em>
            </h2>
          </div>
        </div>
        <div className="product-grid">
          {related.slice(0, 3).map((x) => (
            <ProductCard key={x.slug} product={x} />
          ))}
        </div>
      </section>
    </main>
  );
}
