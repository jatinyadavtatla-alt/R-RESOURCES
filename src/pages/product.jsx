import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import SafeImage from "@/components/products/SafeImage";
import ProductCard from "@/components/products/ProductCard";
import CategoryCard from "@/components/products/CategoryCard";
import { categories, products, WHATSAPP_NUMBER } from "@/data/products";
import "@/products.css";

const FEATURED_SLUGS = [
  "sample-cutting-machine",
  "ferro-silicon-granules",
  "manganese-metal-flakes",
  "ceramic-foam-filter-product",
  "emery-belt-product",
  "high-quality-graphite-parts",
  "round-steel-shot",
];

const featuredProducts = FEATURED_SLUGS.map((slug) => products.find((p) => p.slug === slug)).filter(Boolean);

export default function ProductsLanding() {
  return (
    <main>
      {/* Hero */}
      <section className="section-dark">
        <div className="wrap gutter grid gap-12 pt-24 pb-16 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">R-RESOURCES · INDUSTRIAL PRODUCTS</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="heading-xl">
                <span style={{ color: "var(--color-ivory)" }}>MATERIALS.</span>
                <br />
                <span className="tone-grey">COMPONENTS.</span>
                <br />
                <span className="tone-grey">SOLUTIONS.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="body-text mt-8">
                Explore our range of industrial materials, foundry consumables, graphite products,
                abrasive belts, filtration solutions and casting products.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#categories" className="btn btn-primary">
                  EXPLORE PRODUCTS →
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  ENQUIRE ON WHATSAPP
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="product-frame cover border" style={{ borderColor: "var(--divider-color)" }}>
              <SafeImage src="/images/hero-products.jpg" alt="R-Resources industrial materials" loading="eager" fit="cover" />
            </div>
          </Reveal>
        </div>

        <div className="divider">
          <div className="wrap gutter py-6 ticker">
            {categories.map((cat, i) => (
              <span key={cat.slug} className="flex items-center gap-[14px]">
                {cat.name.toUpperCase()}
                {i < categories.length - 1 && <span className="slash">/</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-light divider">
        <div className="wrap gutter py-20">
          <Reveal>
            <p className="eyebrow mb-6">OUR PRODUCTS</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="heading-lg max-w-3xl">
              BUILT AROUND
              <br />
              INDUSTRIAL NEEDS.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="body-text mt-8">
              R-Resources supplies a diverse range of industrial materials, foundry products,
              abrasives, graphite components and manufacturing-related solutions.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="section-light">
        <div className="wrap gutter py-20">
          <Reveal>
            <p className="eyebrow mb-6">EXPLORE OUR RANGE</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="heading-lg max-w-3xl">PRODUCTS &amp; MATERIALS.</h2>
          </Reveal>

          <div className="mt-6">
            {categories.map((category, i) => (
              <Reveal key={category.slug} delay={Math.min(i * 40, 240)}>
                <CategoryCard category={category} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="section-dark">
        <div className="wrap gutter py-20">
          <Reveal>
            <p className="eyebrow mb-6">SELECTED PRODUCTS</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="heading-lg max-w-3xl" style={{ color: "var(--color-ivory)" }}>
              A CLOSER LOOK.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product, i) => (
              <Reveal key={product.slug} delay={i * 60}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why R-Resources */}
      <section className="section-light divider">
        <div className="wrap gutter py-20">
          <Reveal>
            <p className="eyebrow mb-6">WORK WITH US</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="heading-lg max-w-3xl">
              THE RIGHT PRODUCT.
              <br />A DIRECT CONVERSATION.
            </h2>
          </Reveal>

          <div className="mt-6">
            {[
              "A diverse range of industrial products.",
              "Product enquiries based on your actual requirements.",
              "Direct communication with the R-Resources team.",
            ].map((text, i) => (
              <Reveal key={text} delay={i * 60}>
                <div className="divider grid gap-6 py-8 md:grid-cols-[auto_1fr] md:items-center">
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  <p className="heading-md" style={{ fontSize: "1.1rem" }}>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-14 flex flex-col items-start gap-6 border p-8 md:flex-row md:items-center" style={{ borderColor: "var(--divider-color)" }}>
              <div className="h-20 w-20 flex-shrink-0 overflow-hidden" style={{ backgroundColor: "#e9e6de" }}>
                <SafeImage src="/Product/certificate.png" alt="R-Resources quality certification" fit="cover" />
              </div>
              <p className="text-muted text-sm leading-relaxed">
                R-Resources is a verified supplier operating since 2017, trusted across foundries and manufacturing industries.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-dark">
        <div className="wrap gutter py-24">
          <Reveal>
            <p className="eyebrow mb-6">HAVE A REQUIREMENT?</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="heading-lg max-w-3xl" style={{ color: "var(--color-ivory)" }}>
              LET'S FIND
              <br />
              THE RIGHT SOLUTION.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="body-text mt-8">
              Tell us which product you need, the quantity and any relevant specifications. Our
              team can discuss your requirement directly.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-10"
            >
              ENQUIRE ON WHATSAPP
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
