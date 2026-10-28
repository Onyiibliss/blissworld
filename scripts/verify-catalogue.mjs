import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const root = process.cwd();
const source = fs.readFileSync(
  path.join(root, "src/data/catalogue.ts"),
  "utf8",
);
const compiled = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ES2020,
  },
}).outputText;
const { categories, products } = await import(
  `data:text/javascript;base64,${Buffer.from(compiled).toString("base64")}`
);
const categoryIds = new Set(categories.map((category) => category.id));
assert.equal(
  categoryIds.size,
  categories.length,
  "Category IDs must be unique",
);
assert.equal(
  new Set(products.map((product) => product.slug)).size,
  products.length,
  "Product URLs must be unique",
);
const assets = new Set();
for (const category of categories) {
  assets.add(category.image);
  assert.ok(
    products.some((product) => product.category === category.id),
    `${category.id} must have products`,
  );
}
for (const product of products) {
  assert.ok(
    categoryIds.has(product.category),
    `${product.slug} must belong to an existing category`,
  );
  assert.ok(
    product.gallery.includes(product.image),
    `${product.slug} gallery must contain its primary image`,
  );
  if (product.provenance === "generated")
    assert.equal(
      product.concept,
      true,
      `${product.slug} must be labelled as a concept`,
    );
  for (const image of [product.image, ...product.gallery]) assets.add(image);
}
for (const image of assets) {
  assert.ok(
    fs.existsSync(path.join(root, "public", image)),
    `Missing image: ${image}`,
  );
}
const urlFlag = process.argv.indexOf("--url");
if (urlFlag !== -1) {
  const base = process.argv[urlFlag + 1];
  assert.ok(base, "Supply the running preview URL after --url");
  const routes = [
    "/",
    "/about",
    "/catalogue",
    "/enquiry",
    ...categories.map((c) => `/collections/${c.id}`),
    ...products.map((p) => `/products/${p.slug}`),
  ];
  for (let i = 0; i < routes.length; i += 4) {
    await Promise.all(
      routes.slice(i, i + 4).map(async (route) => {
        const response = await fetch(new URL(route, base));
        assert.equal(response.status, 200, `${route} must return 200`);
        const html = await response.text();
        assert.ok(
          html.includes("<main"),
          `${route} must contain its main content`,
        );
      }),
    );
  }
  for (const route of [
    "/products/not-a-product",
    "/collections/not-a-collection",
  ]) {
    const response = await fetch(new URL(route, base));
    assert.equal(response.status, 404, `${route} must return 404`);
  }
  console.log(
    `${routes.length} routes and two missing-route responses verified.`,
  );
}
console.log(
  `${categories.length} categories, ${products.length} products and ${assets.size} referenced images verified.`,
);
