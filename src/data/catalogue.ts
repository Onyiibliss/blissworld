export type CategoryId =
  "handbags" | "school" | "tracksuits" | "bottles" | "dining";
export type Product = {
  slug: string;
  name: string;
  category: CategoryId;
  description: string;
  image: string;
  gallery: string[];
  provenance: "supplied" | "generated";
  concept: boolean;
  featured?: boolean;
  colour: string;
  variants?: string[];
};
export type Category = {
  id: CategoryId;
  number: string;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  colour: string;
  editorial: boolean;
};
export const categories: Category[] = [
  {
    id: "handbags",
    number: "01",
    name: "Bags & handbags",
    title: "Carry a little\nconfidence.",
    subtitle: "GOOD COMPANY, WHEREVER YOU GO",
    description:
      "From a quiet coffee to a day with somewhere to be. Discover shapes and shades that bring your everyday look together.",
    image: "/images/editorial/everyday-pair.webp",
    colour: "#e9ddcb",
    editorial: true,
  },
  {
    id: "school",
    number: "02",
    name: "School essentials",
    title: "Small bags.\nBig adventures.",
    subtitle: "FOR THEIR NEXT CHAPTER",
    description:
      "A colourful world of school bags and playful companions. Little details for the days they will remember.",
    image: "/images/editorial/school-pair.webp",
    colour: "#e8e2ef",
    editorial: true,
  },
  {
    id: "tracksuits",
    number: "03",
    name: "Tracksuits",
    title: "Find your\neveryday rhythm.",
    subtitle: "A SOFTER SIDE OF EVERYDAY",
    description:
      "Coordinated silhouettes and expressive colour. Explore the supplied tracksuit collection, from soft grey to rich cocoa.",
    image: "/images/editorial/cocoa-editorial.webp",
    colour: "#e4d5ca",
    editorial: true,
  },
  {
    id: "bottles",
    number: "04",
    name: "Water bottles",
    title: "A fresh\nperspective.",
    subtitle: "LITTLE RITUALS, BEAUTIFULLY REIMAGINED",
    description:
      "An ivory-and-gold bottle concept, paired with rich burgundy. A first look at the Blissworld everyday collection.",
    image: "/images/editorial/ivory-bottle.webp",
    colour: "#e7dfcf",
    editorial: true,
  },
  {
    id: "dining",
    number: "05",
    name: "Little dining",
    title: "A place for\nlittle joys.",
    subtitle: "MAKE ROOM FOR THE LITTLE THINGS",
    description:
      "Soft colour, playful shapes, and a thoughtfully coordinated table. Discover our children’s dining concept collection.",
    image: "/images/editorial/dining-set.webp",
    colour: "#eedfda",
    editorial: true,
  },
];
const original = (name: string) => `/images/originals/${name}.webp`;
const entry = (
  slug: string,
  name: string,
  category: CategoryId,
  colour: string,
  description: string,
  collection: string,
  featured = false,
): Product => ({
  slug,
  name,
  category,
  colour,
  description,
  image: original(slug),
  gallery: [original(slug), original(collection)],
  provenance: "supplied",
  concept: false,
  featured,
});
export const products: Product[] = [
  entry(
    "ivory-top-handle",
    "The Ivory Top Handle",
    "handbags",
    "Ivory",
    "A structured top-handle silhouette in soft ivory with a statement gold-tone clasp. Explore the original supplied collection photographs.",
    "collection-01",
    true,
  ),
  entry(
    "rose-top-handle",
    "The Rose Top Handle",
    "handbags",
    "Blush",
    "A soft blush take on the structured top-handle bag, shown in the supplied colour collection.",
    "collection-01",
  ),
  entry(
    "black-top-handle",
    "The Noir Top Handle",
    "handbags",
    "Black",
    "A compact black top-handle shape with contrasting gold-tone details.",
    "collection-04",
  ),
  entry(
    "burgundy-shoulder",
    "The Burgundy Shoulder Bag",
    "handbags",
    "Burgundy",
    "A rich burgundy shoulder-bag silhouette with a curved flap and decorative gold-tone clasp.",
    "collection-08",
    true,
  ),
  entry(
    "teal-shoulder",
    "The Teal Shoulder Bag",
    "handbags",
    "Teal",
    "A deep teal shoulder bag from the supplied collection, finished with decorative gold-tone details.",
    "collection-08",
  ),
  entry(
    "ivory-shoulder",
    "The Ivory Shoulder Bag",
    "handbags",
    "Ivory",
    "An ivory shoulder-bag silhouette. The full collection image includes additional views of its interior and profile.",
    "collection-08",
  ),
  entry(
    "tan-tote",
    "The Everyday Tote",
    "handbags",
    "Tan",
    "An open, easygoing tote shape in warm tan, with long handles and a gold-tone front detail.",
    "collection-09",
  ),
  entry(
    "navy-tote",
    "The Navy Tote",
    "handbags",
    "Navy",
    "A navy tote silhouette from the supplied range, with contrasting handles and a front accent.",
    "collection-09",
  ),
  entry(
    "teal-handbag",
    "The Teal Top Handle",
    "handbags",
    "Teal",
    "A vivid teal top-handle shape with contrasting brown handles and gold-tone decorative details.",
    "collection-16",
  ),
  entry(
    "red-tracksuit",
    "The Scarlet Co-ord",
    "tracksuits",
    "Scarlet",
    "A coordinated red jacket and trouser look with contrasting gold-tone buttons. See the original supplied styling photographs.",
    "collection-11",
    true,
  ),
  entry(
    "grey-tracksuit",
    "The Cloud Co-ord",
    "tracksuits",
    "Grey",
    "A soft-grey coordinated jacket and trouser look, shown in the supplied styling photographs.",
    "collection-13",
  ),
  entry(
    "cocoa-tracksuit",
    "The Cocoa Co-ord",
    "tracksuits",
    "Cocoa",
    "A rich cocoa jacket and wide-leg trouser pairing with contrasting button details.",
    "collection-12",
  ),
  entry(
    "lavender-backpack",
    "The Lavender School Bag",
    "school",
    "Lavender",
    "A playful lavender backpack from the supplied school collection, with a character-themed front pocket.",
    "collection-14",
    true,
  ),
  entry(
    "pink-backpack",
    "The Pink School Bag",
    "school",
    "Pink",
    "A pink school backpack with a playful front-pocket design. Explore the supplied collection for additional colours and views.",
    "collection-14",
  ),
  entry(
    "dino-backpack",
    "The Little Explorer Bag",
    "school",
    "Lavender & mint",
    "A small backpack with a colourful star-themed front from the supplied children’s collection.",
    "collection-15",
  ),
  {
    slug: "ivory-bottle-concept",
    name: "The Ivory Bottle",
    category: "bottles",
    colour: "Ivory & gold",
    description:
      "A Blissworld design concept pairing a soft ivory finish with a gold cap and the official brand mark. Created to preview the collection’s visual direction; this is not confirmed inventory.",
    image: "/images/editorial/ivory-bottle.webp",
    gallery: [
      "/images/editorial/ivory-bottle.webp",
      "/images/editorial/everyday-pair.webp",
    ],
    provenance: "generated",
    concept: true,
    featured: true,
  },
  {
    slug: "little-dining-concept",
    name: "The Little Dining Set",
    category: "dining",
    colour: "Blush & ivory",
    description:
      "A coordinated concept with a divided plate, bowl, spoon and fork. Blush, ivory and small gold brand details bring this imagined collection together. Not confirmed inventory.",
    image: "/images/editorial/dining-set.webp",
    gallery: ["/images/editorial/dining-set.webp"],
    provenance: "generated",
    concept: true,
    featured: true,
  },
  {
    slug: "adventure-pair-concept",
    name: "The Little Adventure Pair",
    category: "school",
    colour: "Lavender & ivory",
    description:
      "A coordinated lavender backpack and bottle concept featuring Blissworld branding. An editorial preview of a possible pairing, not confirmed inventory.",
    image: "/images/editorial/school-pair.webp",
    gallery: ["/images/editorial/school-pair.webp"],
    provenance: "generated",
    concept: true,
  },
  {
    slug: "everyday-pair-concept",
    name: "The Everyday Pair",
    category: "handbags",
    colour: "Burgundy & ivory",
    description:
      "A burgundy handbag and ivory bottle, imagined together with gold Blissworld details. This branded promotional composition is a concept preview, not a photograph of confirmed inventory.",
    image: "/images/editorial/everyday-pair.webp",
    gallery: ["/images/editorial/everyday-pair.webp"],
    provenance: "generated",
    concept: true,
  },
];
export const getCategory = (id: string) => categories.find((c) => c.id === id);
export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);
