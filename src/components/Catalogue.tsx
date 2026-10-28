"use client";
import { useMemo, useState } from "react";
import { categories, products, CategoryId } from "@/data/catalogue";
import { ProductCard } from "./ProductCard";
export function Catalogue({ category }: { category?: CategoryId }) {
  const [filter, setFilter] = useState(category || "all"),
    [sort, setSort] = useState("curated"),
    [search, setSearch] = useState("");
  const visible = useMemo(() => {
    const list = products.filter(
      (p) =>
        (filter === "all" || p.category === filter) &&
        `${p.name} ${p.colour}`.toLowerCase().includes(search.toLowerCase()),
    );
    return sort === "az"
      ? list.sort((a, b) => a.name.localeCompare(b.name))
      : sort === "za"
        ? list.sort((a, b) => b.name.localeCompare(a.name))
        : list;
  }, [filter, sort, search]);
  return (
    <section className="catalogue-section" aria-label="Browse products">
      <div className="catalogue-toolbar">
        {!category && (
          <div className="filter-chips" aria-label="Filter by category">
            <button
              onClick={() => setFilter("all")}
              aria-pressed={filter === "all"}
              className={filter === "all" ? "selected" : ""}
            >
              All pieces
            </button>
            {categories.map((c) => (
              <button
                key={c.id}
                aria-pressed={filter === c.id}
                className={filter === c.id ? "selected" : ""}
                onClick={() => setFilter(c.id)}
              >
                {c.name}
              </button>
            ))}
          </div>
        )}
        <div className="search-sort">
          <label className="search-field">
            <span className="sr-only">Search products</span>
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="10" cy="10" r="6.5" stroke="currentColor" />
              <path d="m15 15 5 5" stroke="currentColor" />
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Find a little bliss…"
              type="search"
            />
          </label>
          <label className="sort-field">
            <span>Sort by</span>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="curated">Our edit</option>
              <option value="az">Name: A–Z</option>
              <option value="za">Name: Z–A</option>
            </select>
          </label>
        </div>
      </div>
      <div className="catalogue-count" aria-live="polite">
        {visible.length} {visible.length === 1 ? "piece" : "pieces"} to explore{" "}
        <span>Concept previews are labelled throughout.</span>
      </div>
      {visible.length ? (
        <div className="product-grid">
          {visible.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>A little more exploring?</h2>
          <p>No pieces match “{search}”. Try another name or colour.</p>
          <button
            className="button dark"
            onClick={() => {
              setSearch("");
              if (!category) setFilter("all");
            }}
          >
            Reset search
          </button>
        </div>
      )}
    </section>
  );
}
