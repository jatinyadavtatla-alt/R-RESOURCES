import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import { WHATSAPP_NUMBER } from "@/data/products";
import "@/products.css";

const PHONE_FOUNDRY_TEL = "tel:+919810300628";
const PHONE_3D_TEL = "tel:+919315921702";
const WA_FOUNDRY = "https://wa.me/919810300628";
const WA_3D = "https://wa.me/919315921702";
const EMAIL = "weldncastaid@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/company/r-resources/posts/";


const FACTS = [
  { k: "Company", v: "R-Resources" },
  { k: "Established", v: "2017" },
  { k: "Location", v: "New Delhi, India" },
  { k: "Proprietor", v: "MRS. NEETU KUMARI SINGH" },
  { k: "Standing", v: "ISO-aligned wholesaler" },
  { k: "GSTIN", v: "07BJLPS0952E1Z3" },
];

const CAPABILITIES = [
  {
    n: "01",
    title: "3D Printing",
    desc: "Additive manufacturing solutions for prototypes and functional parts.",
    to: "/3dprinting",
  },
  {
    n: "02",
    title: "Laser Cutting",
    desc: "Precision laser cutting for sheet metal, components and custom designs.",
    to: "/lasercutting",
  },
  {
    n: "03",
    title: "Industrial Products",
    desc: "Supply of dependable industrial and manufacturing-related products.",
    to: "/products",
  },
  {
    n: "04",
    title: "Manufacturing Solutions",
    desc: "Coordination and support across fabrication and production requirements.",
    to: null,
  },
];

const CONTACT_ROWS = [
  { label: "Foundry: +91 98103 00628", href: PHONE_FOUNDRY_TEL, external: false },
  { label: "3D Printing: +91 93159 21702", href: PHONE_3D_TEL, external: false },
  { label: EMAIL, href: `mailto:${EMAIL}`, external: false },
  { label: "LinkedIn — R-Resources", href: LINKEDIN_URL, external: true },
  { label: "WhatsApp (Foundry) — +91 98103 00628", href: WA_FOUNDRY, external: true },
  { label: "WhatsApp (3D Printing) — +91 93159 21702", href: WA_3D, external: true },
];

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="section-dark">
        <div className="wrap gutter pt-24 pb-16">
          <Reveal>
            <p className="eyebrow mb-6">R-RESOURCES · ABOUT US</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="heading-xl max-w-4xl">
              <span style={{ color: "var(--color-ivory)" }}>BUILT AROUND</span>
              <br />
              <span className="tone-grey">WHAT INDUSTRY NEEDS.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="body-text mt-8">
              R-Resources is a New Delhi based industrial and manufacturing solutions company
              serving businesses with dependable products, fabrication and manufacturing services.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={PHONE_FOUNDRY_TEL} className="btn btn-primary">
                CALL: +91 98103 00628
              </a>
              <a
                href={WA_FOUNDRY}
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
            <span>MANUFACTURING SOLUTIONS</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-light">
        <div className="wrap gutter py-20">
          <Reveal>
            <p className="eyebrow mb-6">ABOUT R-RESOURCES</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="heading-lg max-w-3xl">
              INDUSTRIAL SOLUTIONS,
              <br />
              WITHOUT THE NOISE.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-12 lg:grid-cols-[3fr_2fr]">
            <Reveal delay={120}>
              <p className="body-text">
                R-Resources operates out of New Delhi, working with businesses that need dependable
                industrial products and manufacturing support. Our focus stays on practical
                execution — supplying products, coordinating fabrication and supporting
                manufacturing requirements with a straightforward approach.
              </p>
              <p className="body-text mt-6">
                From 3D printed components to precision laser-cut parts, the work is organised
                around what a customer actually needs — clear communication, realistic timelines
                and consistent quality, without unnecessary complexity.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <table className="specs-table">
                <tbody>
                  {FACTS.map((f) => (
                    <tr key={f.k}>
                      <td>{f.k}</td>
                      <td>{f.v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          </div>
        </div>
      </section>


                    
      {/* Capabilities */}
      <section className="section-dark">
        <div className="wrap gutter py-20">
          <Reveal>
            <p className="eyebrow mb-6">CAPABILITIES</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="heading-lg max-w-3xl" style={{ color: "var(--color-ivory)" }}>
              FROM PRODUCT
              <br />
              TO PRODUCTION.
            </h2>
          </Reveal>

          <div className="mt-14">
            {CAPABILITIES.map((item, i) => {
              const row = (
                <div className="divider grid gap-4 py-8 md:grid-cols-[6rem_1fr_1.4fr] md:items-center">
                  <span className="num">{item.n}</span>
                  <h3 className="heading-md" style={{ color: "var(--color-ivory)" }}>
                    {item.title}
                  </h3>
                  <p className="body-text text-base">{item.desc}</p>
                </div>
              );
              return (
                <Reveal key={item.n} delay={i * 60}>
                  {item.to ? (
                    <Link to={item.to} className="block hover:opacity-90 transition-opacity">
                      {row}
                    </Link>
                  ) : (
                    row
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reach us */}
      <section className="section-light">
        <div className="wrap gutter py-20">
          <Reveal>
            <p className="eyebrow mb-6">CONTACT</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="heading-lg max-w-3xl">REACH US.</h2>
          </Reveal>

          <div className="mt-14 grid gap-14 lg:grid-cols-2">
            <Reveal delay={120}>
              <p className="heading-md" style={{ fontSize: "1.25rem" }}>R-Resources</p>
              <p className="body-text mt-3 text-base">
                GH 1 / 210, Second Floor
                <br />
                Sector 28, Rohini, Pehladpur Bangar
                <br />
                New Delhi — 110042
              </p>

              <p className="heading-md mt-10" style={{ fontSize: "1.25rem" }}>MRS. NEETU KUMARI SINGH</p>
              <p className="eyebrow mt-2">PROPRIETOR</p>

              <p className="eyebrow mt-10">GSTIN</p>
              <p className="body-text mt-2 text-base">07BJLPS0952E1Z3</p>
            </Reveal>

            <Reveal delay={200}>
              <div className="divider-b">
                {CONTACT_ROWS.map((row) => (
                  <a
                    key={row.label}
                    href={row.href}
                    {...(row.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="divider block py-6 text-lg hover:text-[var(--color-gold)] transition-colors"
                  >
                    {row.label}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={240}>
            <div
              className="mt-14 flex flex-col items-start gap-6 border p-8 md:flex-row md:items-center"
              style={{ borderColor: "var(--divider-color)" }}
            >
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
              LET'S BUILD
              <br />
              SOMETHING.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="body-text mt-8">
              Have a requirement or want to discuss a project? Reach out to R-Resources.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={PHONE_FOUNDRY_TEL} className="btn btn-primary">
                CALL FOUNDRY: +91 98103 00628
              </a>
              <a href={PHONE_3D_TEL} className="btn btn-secondary">
                CALL 3D: +91 93159 21702
              </a>
              <a
                href={WA_FOUNDRY}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                CHAT ON WHATSAPP
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}