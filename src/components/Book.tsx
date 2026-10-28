"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { categories } from "@/data/catalogue";
import { Arrow, Sparkle } from "./Icons";
export function Book() {
  const [page, setPage] = useState(0),
    [opened, setOpened] = useState(false),
    [opening, setOpening] = useState(false),
    [turning, setTurning] = useState(false),
    [oldPage, setOldPage] = useState(0),
    [direction, setDirection] = useState(1);
  const cover = useRef<HTMLDivElement>(null),
    leaf = useRef<HTMLDivElement>(null),
    stage = useRef<HTMLDivElement>(null),
    busy = useRef(false),
    timer = useRef<ReturnType<typeof setTimeout> | null>(null),
    pointer = useRef<number | null>(null),
    suppressClick = useRef(false);
  const category = categories[page];
  const reduced = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function open() {
    if (busy.current || opened) return;
    if (timer.current) clearTimeout(timer.current);
    busy.current = true;
    setOpening(true);
    if (reduced()) {
      setOpened(true);
      setOpening(false);
      busy.current = false;
      return;
    }
    gsap.to(cover.current, {
      rotateY: -178,
      duration: 1.6,
      ease: "power3.inOut",
      onComplete: () => {
        setOpened(true);
        setOpening(false);
        busy.current = false;
      },
    });
    gsap.fromTo(
      stage.current,
      { rotateX: 7, rotateZ: -4 },
      { rotateX: 0, rotateZ: -2, duration: 1.6, ease: "power2.inOut" },
    );
  }
  useEffect(() => {
    timer.current = setTimeout(() => {
      if (!busy.current) {
        busy.current = true;
        setOpening(true);
        const reduce = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;
        if (reduce) {
          setOpened(true);
          setOpening(false);
          busy.current = false;
          return;
        }
        gsap.to(cover.current, {
          rotateY: -178,
          duration: 1.6,
          ease: "power3.inOut",
          onComplete: () => {
            setOpened(true);
            setOpening(false);
            busy.current = false;
          },
        });
        gsap.fromTo(
          stage.current,
          { rotateX: 7, rotateZ: -4 },
          { rotateX: 0, rotateZ: -2, duration: 1.6, ease: "power2.inOut" },
        );
      }
    }, 1700);
    return () => {
      if (timer.current) clearTimeout(timer.current);
      gsap.killTweensOf(cover.current);
      gsap.killTweensOf(stage.current);
    };
  }, []);
  function turn(next: number) {
    if (busy.current || next === page) return;
    if (!opened) {
      setPage(next);
      open();
      return;
    }
    if (reduced()) {
      setPage(next);
      return;
    }
    busy.current = true;
    setOldPage(page);
    setDirection(next > page ? 1 : -1);
    setTurning(true);
    setPage(next);
  }
  useEffect(() => {
    if (!turning || !leaf.current) return;
    const anim = gsap.fromTo(
      leaf.current,
      { rotateY: 0 },
      {
        rotateY: direction > 0 ? -179 : 179,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          setTurning(false);
          busy.current = false;
        },
      },
    );
    return () => {
      anim.kill();
    };
  }, [turning, direction]);
  const previous = () => turn(Math.max(0, page - 1));
  const next = () => turn(Math.min(categories.length - 1, page + 1));
  return (
    <div className="book-experience">
      <div className="book-overline">
        <span className="mini-rule" /> THE BLISSWORLD LOOKBOOK{" "}
        <span className="edition">VOL. 01</span>
      </div>
      <div className="book-scene">
        <div className="book-shadow" />
        <div
          ref={stage}
          className={`book-stage ${opened ? "opened" : ""}`}
          tabIndex={0}
          role="region"
          aria-label="Interactive product lookbook. Use left and right arrow keys to turn pages."
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") {
              e.preventDefault();
              next();
            }
            if (e.key === "ArrowLeft") {
              e.preventDefault();
              previous();
            }
          }}
          onClickCapture={(e) => {
            if (suppressClick.current) {
              e.preventDefault();
              e.stopPropagation();
              suppressClick.current = false;
            }
          }}
          onPointerDown={(e) => {
            pointer.current = e.clientX;
            suppressClick.current = false;
          }}
          onPointerUp={(e) => {
            if (
              pointer.current !== null &&
              Math.abs(e.clientX - pointer.current) > 55
            ) {
              suppressClick.current = true;
              if (e.clientX < pointer.current) next();
              else previous();
            }
            pointer.current = null;
          }}
          onPointerCancel={() => (pointer.current = null)}
        >
          <div className="book-pages" inert={!opened}>
            <div
              className="book-page page-left"
              style={{ backgroundColor: category.colour }}
            >
              <div className="page-running">
                <span>BLISSWORLD</span>
                <Sparkle />
              </div>
              <div className="page-story">
                <p className="eyebrow">CHAPTER {category.number}</p>
                <h2>
                  {category.title.split("\n").map((line, i) => (
                    <span key={i}>{line}</span>
                  ))}
                </h2>
                <p>{category.description}</p>
                <Link
                  className="text-link"
                  href={`/collections/${category.id}`}
                >
                  Explore {category.name.toLowerCase()} <Arrow />
                </Link>
              </div>
              <span className="page-folio">
                {String(page * 2 + 1).padStart(2, "0")}{" "}
                <span>THE EVERYDAY COLLECTION</span>
              </span>
            </div>
            <div
              className={`book-page page-right ${category.editorial ? "editorial-page" : "photo-page"}`}
            >
              <Image
                src={category.image}
                alt={
                  category.editorial
                    ? `${category.name}: Blissworld branded concept composition`
                    : `${category.name} from the supplied product collection`
                }
                fill
                sizes="(max-width: 700px) 85vw, 36vw"
                priority={page === 0}
              />
              <div className="page-photo-label">
                <span>{category.name}</span>
                <span>
                  {category.editorial
                    ? "CONCEPT EDITORIAL"
                    : "COLLECTION PHOTOGRAPH"}
                </span>
              </div>
              <span className="photo-folio">
                {String(page * 2 + 2).padStart(2, "0")}
              </span>
            </div>
          </div>
          <div className="book-gutter" />
          {turning && (
            <div
              ref={leaf}
              className={`turning-leaf ${direction > 0 ? "forward" : "backward"}`}
              aria-hidden="true"
            >
              <div className="leaf-front">
                <Image
                  src={categories[oldPage].image}
                  alt=""
                  fill
                  sizes="36vw"
                />
              </div>
              <div
                className="leaf-back"
                style={{ background: category.colour }}
              >
                <Sparkle />
                <span>BLISSWORLD</span>
              </div>
            </div>
          )}
          {!opened && (
            <div ref={cover} className="book-cover">
              <div className="cover-outer">
                <span className="cover-volume">
                  THE EVERYDAY COLLECTION · VOL. 01
                </span>
                <Image
                  src="/images/logo.webp"
                  alt="Blissworld — Quality, Style, Everyday Living"
                  width={400}
                  height={400}
                  priority
                />
                <div>
                  <p>A world of little joys.</p>
                  <button
                    onClick={open}
                    disabled={opening}
                    className="cover-open"
                  >
                    {opening ? "Opening your world…" : "Open the lookbook"}{" "}
                    <Arrow />
                  </button>
                </div>
                <span className="cover-year">BLISSWORLD COLLECTION</span>
              </div>
              <div className="cover-inside" />
            </div>
          )}
        </div>
      </div>
      <div className="book-controls">
        <div className="book-progress">
          <span className="chapter-number">{category.number}</span>
          <span className="progress-track">
            <span style={{ width: `${(page + 1) * 20}%` }} />
          </span>
          <span className="chapter-total">05</span>
        </div>
        <div className="page-arrows">
          <button
            onClick={previous}
            disabled={page === 0 || turning || !opened}
            aria-label="Previous chapter"
          >
            <Arrow className="reverse" />
          </button>
          <button
            onClick={next}
            disabled={page === categories.length - 1 || turning || !opened}
            aria-label="Next chapter"
          >
            <Arrow />
          </button>
        </div>
      </div>
      <div className="book-chapters" aria-label="Lookbook chapters">
        {categories.map((c, i) => (
          <button
            key={c.id}
            onClick={() => turn(i)}
            className={page === i ? "selected" : ""}
            aria-pressed={page === i}
            disabled={turning || opening}
          >
            {c.name}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        Chapter {category.number} of 5: {category.name}
      </p>
    </div>
  );
}
