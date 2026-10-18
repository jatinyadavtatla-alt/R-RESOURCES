import { useState } from "react";
import Reveal from "@/components/Reveal";
import SafeImage from "@/components/products/SafeImage";
import { WHATSAPP_NUMBER } from "@/data/products";
import "@/products.css";

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const WHATSAPP_QUOTE_URL = `${WHATSAPP_URL}?text=${encodeURIComponent(
  "Hello R-Resources, I would like a quote for laser cutting."
)}`;
const PHONE_TEL = "tel:+919810300628";
const WHATSAPP_DISPLAY = "+91 93159 21702";
const EMAIL = "weldncastaid@gmail.com";

const CAPABILITIES = [
  { n: "01", title: "Sheet Metal Cutting", desc: "Laser cutting of sheet metal for a range of industrial applications." },
  { n: "02", title: "Custom Components", desc: "Cutting of components based on customer-provided designs and requirements." },
  { n: "03", title: "Prototype Parts", desc: "Support for prototype parts before moving into larger production runs." },
  { n: "04", title: "Production Batches", desc: "Cutting coordinated for larger quantities as per project requirements." },
];

const GALLERY = [
  { src: "/images/laser-machine-1.jpg", alt: "Laser cutting machine in operation", caption: "Laser machine" },
  { src: "/images/laser-design-1.jpg", alt: "Laser cut design sample", caption: "Design sample 1" },
  { src: "/images/laser-design-2.jpg", alt: "Laser cut design sample", caption: "Design sample 2" },
  { src: "/images/laser-machine-2.jpg", alt: "Laser cutting machine detail", caption: "Machine detail" },
];

const STEPS = [
  { n: "01", title: "Share your design", desc: "Send your drawing, CAD file or requirements." },
  { n: "02", title: "Review & quote", desc: "We review the requirement and provide a quotation." },
  { n: "03", title: "Production", desc: "Once approved, the job moves into production." },
  { n: "04", title: "Delivery", desc: "The finished parts are prepared for pickup or delivery." },
];

const PRICING = [
  { label: "Custom Laser Cutting", value: "Price on enquiry" },
  { label: "Prototype / Small Batch", value: "Price on enquiry" },
  { label: "Production Quantity", value: "Bulk pricing available" },
  { label: "Material & Thickness", value: "Quoted based on requirement" },
];

const WHY = ["Precision", "Consistent Quality", "Custom Requirements", "Production Support"];

const FAQS = [
  {
    q: "What file formats can I send?",
    a: "Share your available drawing or CAD file and our team can review the requirement. Common CAD and drawing formats can be discussed with the team.",
  },
  {
    q: "Can you cut custom designs?",
    a: "Yes. Share your design or requirement and we can review the feasibility and provide a quotation.",
  },
  {
    q: "How is laser cutting priced?",
    a: "Pricing depends on material, thickness, design complexity, quantity and other production requirements.",
  },
  {
    q: "Do you handle bulk orders?",
    a: "Yes. Share the required quantity and specifications with us so we can provide a quotation.",
  },
  {
    q: "Can I request a quotation on WhatsApp?",
    a: "Yes. Send your requirement directly to our WhatsApp number and our team can review it.",
  },
  {
    q: "How do I contact R-Resources?",
    a: `You can call +91 98103 00628 or contact us on WhatsApp at ${WHATSAPP_DISPLAY}.`,
  },
];

function FAQItem({ q, a, isOpen, onClick }) {
  return (
    <div className="divider">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
        className="group flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="heading-md group-hover:text-[var(--color-gold)] transition-colors" style={{ fontSize: "1.1rem" }}>
          {q}
        </span>
        <span
          aria-hidden="true"
          className="shrink-0 text-2xl leading-none transition-transform duration-300"
          style={{ color: "var(--color-gold)", transform: isOpen ? "rotate(45deg)" : "none" }}
        >
          +
        </span>
      </button>
      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", opacity: isOpen ? 1 : 0 }}
      >
        <div className="overflow-hidden">
          <p className="text-muted pb-6 max-w-2xl leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function LaserCutting() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <main>
      {/* Hero */}
      <section className="section-dark">
        <div className="wrap gutter grid gap-12 pt-24 pb-16 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">R-RESOURCES · PRECISION LASER CUTTING</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="heading-xl">
                <span style={{ color: "var(--color-ivory)" }}>CUT CLEAN.</span>
                <br />
                <span className="tone-grey">CUT PRECISE.</span>
                <br />
                <span className="tone-grey">CUT TO SPEC.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="body-text mt-8">
                Precision laser cutting for prototypes, custom parts, fabrication and production
                requirements.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href={WHATSAPP_QUOTE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  GET A QUOTE ON WHATSAPP
                </a>
                <a href={PHONE_TEL} className="btn btn-secondary">
                  CALL US
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="product-frame cover border" style={{ borderColor: "var(--divider-color)" }}>
              <SafeImage
                src="/images/laser-machine-1.jpg"
                alt="R-Resources laser cutting machine"
                loading="eager"
                fit="cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="divider">
          <div className="wrap gutter py-6 ticker">
            <span>SHEET METAL CUTTING</span>
            <span className="slash">/</span>
            <span>CUSTOM FABRICATION</span>
            <span className="slash">/</span>
            <span>PROTOTYPES</span>
            <span className="slash">/</span>
            <span>BULK ORDERS</span>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-light">
        <div className="wrap gutter py-20">
          <Reveal>
            <p className="eyebrow mb-6">CAPABILITIES</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="heading-lg max-w-3xl">
              MADE FOR THE
              <br />
              DETAILS THAT MATTER.
            </h2>
          </Reveal>

          <div className="mt-14">
            {CAPABILITIES.map((item, i) => (
              <Reveal key={item.n} delay={i * 60}>
                <div className="divider grid gap-4 py-8 md:grid-cols-[6rem_1fr_1.4fr] md:items-center">
                  <span className="num">{item.n}</span>
                  <h3 className="heading-md">{item.title}</h3>
                  <p className="body-text text-base">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-dark">
        <div className="wrap gutter py-20">
          <Reveal>
            <p className="eyebrow mb-6">THE WORK</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="heading-lg max-w-3xl" style={{ color: "var(--color-ivory)" }}>
              FROM SHEET
              <br />
              TO FINISHED PART.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {GALLERY.map((img, i) => (
              <Reveal key={img.src} delay={i * 60}>
                <figure>
                  <div className="product-frame cover border" style={{ borderColor: "var(--divider-color)" }}>
                    <SafeImage src={img.src} alt={img.alt} fit="cover" />
                  </div>
                  <figcaption className="eyebrow mt-3">{img.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-light">
        <div className="wrap gutter py-20">
          <Reveal>
            <p className="eyebrow mb-6">PROCESS</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="heading-lg max-w-3xl">
              FROM DRAWING
              <br />
              TO CUT PART.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className="divider pt-6">
                  <span className="num block">{s.n}</span>
                  <h3 className="heading-md mt-3" style={{ fontSize: "1.1rem" }}>{s.title}</h3>
                  <p className="body-text mt-3 text-base">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-dark">
        <div className="wrap gutter py-20">
          <Reveal>
            <p className="eyebrow mb-6">PRICING</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="heading-lg max-w-3xl" style={{ color: "var(--color-ivory)" }}>
              WHAT IT COSTS.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-12 lg:grid-cols-[3fr_2fr]">
            <Reveal delay={120}>
              <div>
                {PRICING.map((r) => (
                  <div key={r.label} className="divider flex flex-wrap items-center justify-between gap-2 py-6">
                    <span className="text-lg" style={{ color: "var(--color-ivory)" }}>{r.label}</span>
                    <span className="eyebrow">{r.value}</span>
                  </div>
                ))}
              </div>
              <p className="body-text mt-8 text-base">
                Laser cutting cost depends on material, thickness, geometry, quantity and finishing
                requirements. Share your requirement for an accurate quotation.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="border p-8" style={{ borderColor: "var(--divider-color)" }}>
                <p className="eyebrow mb-4">READY WHEN YOU ARE</p>
                <p className="heading-md" style={{ color: "var(--color-ivory)", fontSize: "1.3rem" }}>
                  Tell us what you need cut — we'll quote it.
                </p>
                <a
                  href={WHATSAPP_QUOTE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-8 inline-flex"
                >
                  GET A QUOTE
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section-light divider">
        <div className="wrap gutter py-20">
          <Reveal>
            <p className="eyebrow mb-6">WORK WITH US</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="heading-lg max-w-3xl">
              WHY WORK WITH
              <br />
              R-RESOURCES?
            </h2>
          </Reveal>

          <div className="mt-6">
            {WHY.map((text, i) => (
              <Reveal key={text} delay={i * 60}>
                <div className="divider grid gap-6 py-8 md:grid-cols-[auto_1fr] md:items-center">
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  <p className="heading-md" style={{ fontSize: "1.1rem" }}>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-light">
        <div className="wrap gutter py-20">
          <Reveal>
            <p className="eyebrow mb-6">FAQ</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="heading-lg max-w-3xl">BEFORE YOU SEND.</h2>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-12 max-w-4xl divider-b">
              {FAQS.map((f, i) => (
                <FAQItem
                  key={f.q}
                  q={f.q}
                  a={f.a}
                  isOpen={openIdx === i}
                  onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-dark">
        <div className="wrap gutter py-24">
          <Reveal>
            <p className="eyebrow mb-6">START A QUOTE</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="heading-lg max-w-3xl" style={{ color: "var(--color-ivory)" }}>
              SEND THE REQUIREMENT.
              <br />
              WE'LL TAKE IT FROM THERE.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="body-text mt-8">
              Share your design, material, quantity or simply describe what you need.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="heading-md mt-8" style={{ color: "var(--color-gold)" }}>{WHATSAPP_DISPLAY}</p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a href={WHATSAPP_QUOTE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                CHAT ON WHATSAPP
              </a>
              <a href={`mailto:${EMAIL}`} className="btn btn-secondary">
                EMAIL US
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}