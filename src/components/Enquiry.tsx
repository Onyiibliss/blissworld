"use client";
import { useState } from "react";
import { products } from "@/data/catalogue";
import { Arrow } from "./Icons";
export function Enquiry({ initialProduct = "" }: { initialProduct?: string }) {
  const [product, setProduct] = useState(initialProduct),
    [name, setName] = useState(""),
    [message, setMessage] = useState(""),
    [status, setStatus] = useState("");
  const selected = products.find((p) => p.slug === product);
  const text = `Hello Blissworld,${name ? ` my name is ${name}.` : ""}\n\n${selected ? `I’d like to enquire about ${selected.name} (${selected.colour})${selected.concept ? " — concept preview" : ""}.` : "I’d like to know more about your collection."}\n${message || "Could you please share more information?"}\n\nThank you.`;
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setStatus(
        "Enquiry copied. You can paste it into your preferred messaging app.",
      );
    } catch {
      setStatus(
        "Copy is unavailable in this browser. Select and copy the prepared text below.",
      );
    }
  }
  return (
    <div className="enquiry-form">
      <div>
        <label htmlFor="name">
          Your name <span>(optional)</span>
        </label>
        <input
          id="name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="How should we call you?"
        />
      </div>
      <div>
        <label htmlFor="product">What caught your eye?</label>
        <select
          id="product"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        >
          <option value="">The collection, in general</option>
          {products.map((p) => (
            <option key={p.slug} value={p.slug}>
              {p.name}
              {p.concept ? " · Concept" : ""}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message">
          Your message <span>(optional)</span>
        </label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask about a colour, a size, or a piece you love…"
        />
      </div>
      <button className="button dark" onClick={copy}>
        Copy my enquiry <Arrow diagonal />
      </button>
      <p className="form-help">
        Prepare your message here. Nothing is sent or stored by this website.
      </p>
      <p className="copy-status" role="status">
        {status}
      </p>
      <details className="prepared-message" open>
        <summary>Your prepared enquiry</summary>
        <textarea
          aria-label="Prepared enquiry text"
          readOnly
          value={text}
          rows={8}
          onFocus={(e) => e.target.select()}
        />
      </details>
    </div>
  );
}
