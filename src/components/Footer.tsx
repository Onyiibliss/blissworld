import Link from "next/link";
import { categories } from "@/data/catalogue";
import { Arrow, Sparkle } from "./Icons";
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <p className="eyebrow">WELCOME TO OUR WORLD</p>
          <h2>
            Everyday things.
            <br />
            <em>Extraordinary feeling.</em>
          </h2>
          <Link className="text-link" href="/enquiry">
            Start a conversation <Arrow diagonal />
          </Link>
        </div>
        <div className="footer-links">
          <div>
            <p>EXPLORE</p>
            {categories.map((c) => (
              <Link key={c.id} href={`/collections/${c.id}`}>
                {c.name}
              </Link>
            ))}
          </div>
          <div>
            <p>BLISSWORLD</p>
            <Link href="/about">Our world</Link>
            <Link href="/enquiry">Enquiries</Link>
            <Link href="/#book">The lookbook</Link>
            <Link href="/catalogue">All products</Link>
          </div>
        </div>
      </div>
      <div className="footer-wordmark">
        BLISSWORLD
        <span>
          <Sparkle />
        </span>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Blissworld</span>
        <span>Quality · Style · Everyday living</span>
        <span>Made for a little more bliss.</span>
      </div>
    </footer>
  );
}
