import { Enquiry } from "@/components/Enquiry";
import { getProduct } from "@/data/catalogue";
import { Sparkle } from "@/components/Icons";
export const metadata = { title: "Let’s talk" };
export default async function EnquiryPage({
  searchParams,
}: {
  searchParams: Promise<{
    product?: string;
  }>;
}) {
  const { product } = await searchParams;
  const valid = product && getProduct(product) ? product : "";
  return (
    <main id="main" className="enquiry-page">
      <div className="enquiry-intro">
        <p className="eyebrow">LET’S START A CONVERSATION</p>
        <h1>
          A little
          <br />
          <em>hello.</em>
        </h1>
        <p>
          Something caught your eye?
          <br />
          Put your thoughts into a message.
        </p>
        <Sparkle />
        <p className="contact-note">
          Direct contact details are coming soon. For now, prepare and copy an
          enquiry to share with Blissworld through your existing contact.
        </p>
      </div>
      <Enquiry initialProduct={valid} />
    </main>
  );
}
