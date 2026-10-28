"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Arrow } from "./Icons";
export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <>
      <div className="announcement">
        A little more bliss, in the everyday.{" "}
        <span>
          Discover the Blissworld collection <span aria-hidden="true">↗</span>
        </span>
      </div>
      <header className="site-header">
        <Link
          className="brand"
          href="/"
          aria-label="Blissworld home"
          onClick={() => setOpen(false)}
        >
          <Image src="/images/monogram.webp" width={42} height={42} alt="" />
          <span>
            BLISSWORLD<small>QUALITY · STYLE · EVERYDAY LIVING</small>
          </span>
        </Link>
        <button
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close −" : "Menu +"}
        </button>
        <nav
          id="main-nav"
          className={open ? "main-nav is-open" : "main-nav"}
          aria-label="Main navigation"
        >
          <Link
            className={path === "/catalogue" ? "active" : ""}
            href="/catalogue"
            onClick={() => setOpen(false)}
          >
            The collection
          </Link>
          <Link href="/#book" onClick={() => setOpen(false)}>
            The lookbook
          </Link>
          <Link
            className={path === "/about" ? "active" : ""}
            href="/about"
            onClick={() => setOpen(false)}
          >
            Our world
          </Link>
          <Link
            className="nav-enquiry"
            href="/enquiry"
            onClick={() => setOpen(false)}
          >
            Let’s talk <Arrow diagonal />
          </Link>
        </nav>
      </header>
    </>
  );
}
