import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import { WHATSAPP_FOUNDRY } from "@/data/products";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="section-dark">
        <div className="wrap gutter pt-24 pb-16">
          <Reveal>
            <p className="eyebrow mb-6">R-RESOURCES · INDUSTRIAL MANUFACTURING</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="heading-xl max-w-4xl">
              <span style={{ color: "var(--color-ivory)" }}>MATERIALS THAT BUILD.</span>
              <br />
              <span className="tone-grey">SOLUTIONS THAT DELIVER.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="body-text mt-8">
              R-Resources supplies industrial materials, foundry consumables, graphite products,
              abrasive belts, filtration solutions and casting products, alongside custom 3D
              printing and precision laser cutting services.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/products" className="btn btn-primary">
                EXPLORE PRODUCTS →
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP_FOUNDRY}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                ENQUIRE ON WHATSAPP
              </a>
            </div>
          </Reveal>
        </div>
        <div className="divider">
          <div className="wrap gutter py-6 ticker">
            <span>3D PRINTING</span>
            <span className="slash">/</span>
            <span>LASER CUTTING</span>
            <span className="slash">/</span>
            <span>INDUSTRIAL PRODUCTS</span>
            <span className="slash">/</span>
            <span>FOUNDRY CONSUMABLES</span>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="section-light">
        <div className="wrap gutter py-24">
          <Reveal>
            <p className="eyebrow mb-6">WHAT WE OFFER</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="heading-lg max-w-3xl">OUR CORE CAPABILITIES.</h2>
          </Reveal>

          <div className="mt-16 grid gap-0 divider-b divider md:grid-cols-3">
            {[
              { n: "01", title: "3D Printing", desc: "Custom 3D printing and prototyping services.", to: "/3dprinting" },
              { n: "02", title: "Laser Cutting", desc: "Precision laser cutting for metal and sheet materials.", to: "/lasercutting" },
              { n: "03", title: "Products", desc: "Industrial materials, abrasives, graphite and filtration solutions.", to: "/products" },
            ].map((item, i) => (
              <Reveal key={item.n} delay={i * 100}>
                <Link to={item.to} className="block border-t md:border-t-0 md:border-l p-8 h-full" style={{ borderColor: "var(--divider-color)" }}>
                  <span className="num block">{item.n}</span>
                  <h3 className="heading-md mt-4">{item.title}</h3>
                  <p className="body-text mt-3 text-base">{item.desc}</p>
                  <span className="eyebrow eyebrow-dot mt-6 inline-flex">VIEW MORE →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
