import { Catalogue } from "@/components/Catalogue";
export const metadata = { title: "The collection" };
export default function CataloguePage() {
  return (
    <main id="main">
      <div className="page-intro">
        <p className="eyebrow">THE BLISSWORLD COLLECTION</p>
        <h1>
          Little things.
          <br />
          <em>Lovely possibilities.</em>
        </h1>
        <p>
          Discover your everyday favourites, and a few new ideas.
          <br />
          Bags, school days, soft layers, and moments of bliss.
        </p>
      </div>
      <Catalogue />
    </main>
  );
}
