import Image from "next/image";
import Link from "next/link";
import { Arrow, Sparkle } from "@/components/Icons";
export const metadata = { title: "Our world" };
export default function About() {
  return (
    <main id="main">
      <section className="about-hero">
        <div>
          <p className="eyebrow">THIS IS BLISSWORLD</p>
          <h1>
            A world for
            <br />
            <em>your everyday.</em>
          </h1>
          <p>Quality. Style. Everyday living.</p>
          <p>
            From the bag you reach for to the colours that make them smile,
            Blissworld brings bags, school essentials, tracksuits and everyday
            inspiration into one place.
          </p>
          <Link className="button dark" href="/catalogue">
            Explore our collection <Arrow diagonal />
          </Link>
        </div>
        <div className="about-brand">
          <Image
            src="/images/logo.webp"
            width={650}
            height={650}
            alt="Official gold Blissworld logo — Quality, Style, Everyday Living"
            priority
          />
        </div>
      </section>
      <section className="world-section">
        <Sparkle />
        <p className="eyebrow">OUR POINT OF VIEW</p>
        <h2>
          Every day holds
          <br />a little <em>possibility.</em>
        </h2>
        <p>
          Expressive colours. Pieces that come together.
          <br />A collection to explore at your own pace.
        </p>
      </section>
      <section className="about-editorial">
        <Image
          src="/images/editorial/school-pair.webp"
          alt="Lavender Blissworld backpack and bottle concept pairing"
          width={1536}
          height={1024}
        />
        <div>
          <p className="eyebrow">IMAGINING WHAT’S NEXT</p>
          <h2>
            Room for
            <br />
            <em>new ideas.</em>
          </h2>
          <p>
            Alongside the supplied product collection, our lookbook explores
            coordinated colours and new branded concepts. These imagined pieces
            are clearly marked, so you can enjoy the inspiration and know what
            you’re viewing.
          </p>
          <Link className="text-link" href="/enquiry">
            Tell us what caught your eye <Arrow diagonal />
          </Link>
        </div>
      </section>
    </main>
  );
}
