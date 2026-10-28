import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="empty-state page-intro">
      <p className="eyebrow">A LITTLE DETOUR</p>
      <h1>
        This page has
        <br />
        <em>turned.</em>
      </h1>
      <p>Let’s find your way back to the collection.</p>
      <Link className="button dark" href="/catalogue">
        Explore the collection ↗
      </Link>
    </main>
  );
}
