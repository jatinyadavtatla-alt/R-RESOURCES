import { useState } from "react";
import Reveal from "@/components/Reveal";
import { WHATSAPP_NUMBER } from "@/data/products";
import "@/products.css";

const WHATSAPP_DISPLAY = "+91 93159 21702";
const WA_LINK_QUOTE = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello R-Resources, I would like a quote for 3D printing."
)}`;
const WA_LINK_GENERIC = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello R-Resources, I want to discuss a 3D printing requirement."
)}`;

const STEPS = [
  { n: "01", title: "Share your requirement", desc: "Send STL, STEP, OBJ, 3MF or a photo, sketch or dimensions if you don't have a 3D model." },
  { n: "02", title: "Design review & quote", desc: "We review dimensions, geometry, material requirements, quantity and print feasibility, then provide the quotation." },
  { n: "03", title: "Material & settings", desc: "You confirm material, colour, quantity, quality/finish and any other specific requirements." },
  { n: "04", title: "Print & quality check", desc: "The part is printed and checked for dimensions, visible defects, print quality and finishing requirements." },
  { n: "05", title: "Ready for delivery", desc: "The completed parts are packed and prepared for delivery or pickup." },
];

const CAPABILITIES = [
  { title: "Prototypes", desc: "Functional prototypes and concept validation." },
  { title: "Custom Parts", desc: "Components designed around specific requirements." },
  { title: "Mechanical Components", desc: "Custom engineering and replacement parts." },
  { title: "Product Models", desc: "Display models, product concepts and presentation pieces." },
  { title: "Small Batch Production", desc: "Multiple units for testing or limited production." },
  { title: "Custom Designs", desc: "Parts based on customer dimensions, sketches or models." },
];

const MATERIALS = [
  { name: "PLA", use: "Standard prototyping & models" },
  { name: "PETG", use: "Durable & functional parts" },
  { name: "ABS", use: "Tough & heat resistant" },
  { name: "TPU", use: "Flexible & rubber-like" },
  { name: "Resin", use: "High detail & smooth finish" },
];

const PRICE_FACTORS = [
  { title: "Material", desc: "Based on material consumption and specific type." },
  { title: "Machine / print time", desc: "Based on estimated printing time required." },
  { title: "Quantity", desc: "Bulk requirements may be quoted separately." },
  { title: "Finishing", desc: "Additional finishing requirements may affect the quotation." },
  { title: "Custom design", desc: "Design/model preparation may be quoted separately depending on complexity." },
];

const WHY = [
  { title: "Custom approach", desc: "Every requirement is reviewed individually for optimal results." },
  { title: "Clear quotation", desc: "Pricing is confirmed before production starts." },
  { title: "Prototype to batch", desc: "Suitable for prototypes and selected small batch production requirements." },
  { title: "Direct communication", desc: "Discuss requirements directly with us through WhatsApp." },
];

const FAQS = [
  { q: "What file formats do you accept?", a: "We can work with commonly used 3D formats such as STL, STEP, OBJ and 3MF. If you are unsure about the correct format, send us your available file and we can guide you." },
  { q: "I don't have a 3D file. Can you still help?", a: "Yes. You can share a photograph, sketch, dimensions or reference of the required part. Depending on the requirement, we can discuss the best way to prepare the model for printing." },
  { q: "How strong will my 3D printed part be?", a: "Part strength depends on the material, geometry, wall thickness, infill, layer settings, print orientation and intended application. Tell us how the part will be used and we can suggest suitable printing parameters." },
  { q: "How long does 3D printing take?", a: "Print time depends on the size, geometry, material, layer height, infill and quantity. After reviewing the design, we can provide an estimated production time along with the quotation." },
  { q: "Can I request a specific material or colour?", a: "Yes, you can mention your preferred material and colour while requesting a quotation. Availability will be confirmed based on the requirement." },
  { q: "Do you accept bulk or multiple-part orders?", a: "Yes. Share the required quantity along with the design and application. Bulk and repeat requirements can be evaluated separately." },
  { q: "Can you print a part from a photo or sketch?", a: "If you do not have a 3D model, send us the available reference, dimensions or sketch. We can discuss whether the part can be modelled for printing." },
  { q: "Can I change or cancel my order?", a: "Please contact us as early as possible if you need to change your requirement. Changes or cancellation depend on the production stage and will be confirmed by our team." },
  { q: "How do I get a quotation?", a: `Send your file or requirement to R-Resources on WhatsApp at ${WHATSAPP_DISPLAY}. Include the quantity, preferred material and any important application details. We will review the requirement and respond with the quotation.` },
  { q: "Will my design remain private?", a: "We use the files you provide for evaluating and fulfilling your requirement. If you have specific confidentiality requirements, please discuss them with our team before sharing sensitive designs." },
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

export default function Printing() {
  const [openIdx, setOpenIdx] = useState(0);

  const scrollToProcess = () => {
    document.getElementById("process")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      {/* Hero */}
      <section className="section-dark">
        <div className="wrap gutter grid gap-12 pt-24 pb-16 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">R-RESOURCES · 3D PRINTING</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="heading-xl">
                <span style={{ color: "var(--color-ivory)" }}>PRECISION</span>
                <br />
                <span style={{ color: "var(--color-ivory)" }}>PRINTED.</span>
                <br />
                <span className="tone-grey">BUILT FOR</span>
                <br />
                <span className="tone-grey">YOUR IDEA.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="body-text mt-8">
                Professional custom 3D printing for prototypes, functional components, models,
                product development and custom manufacturing requirements.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href={WA_LINK_QUOTE} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  GET A QUOTE
                </a>
                <button type="button" onClick={scrollToProcess} className="btn btn-secondary">
                  EXPLORE PROCESS
                </button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div
              className="flex items-center justify-center border p-10"
              style={{ borderColor: "var(--divider-color)" }}
            >
              <svg
                viewBox="0 0 220 220"
                className="h-64 w-64"
                fill="none"
                stroke="var(--color-gold)"
                strokeWidth="1"
                role="img"
                aria-label="Wireframe cube"
              >
                <polygon points="110,10 200,60 200,160 110,210 20,160 20,60" />
                <polygon points="110,10 200,60 110,110 20,60" />
                <line x1="110" y1="110" x2="110" y2="210" />
                <line x1="20" y1="60" x2="20" y2="160" />
                <line x1="200" y1="60" x2="200" y2="160" />
              </svg>
            </div>
          </Reveal>
        </div>

        <div className="divider">
          <div className="wrap gutter py-6 ticker">
            <span>CUSTOM 3D PRINTING</span>
            <span className="slash">/</span>
            <span>PROTOTYPING</span>
            <span className="slash">/</span>
            <span>FUNCTIONAL PARTS</span>
            <span className="slash">/</span>
            <span>BULK REQUIREMENTS</span>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="section-light">
        <div className="wrap gutter py-20">
          <Reveal>
            <p className="eyebrow mb-6">OUR PROCESS</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="heading-lg max-w-3xl">
              FIVE STEPS.
              <br />
              ONE SIMPLE PROCESS.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="body-text mt-8">
              From sharing your requirement to receiving the finished part, R-Resources keeps the
              process straightforward and transparent.
            </p>
          </Reveal>

          <div className="mt-10">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 60}>
                <div className="divider grid gap-4 py-8 md:grid-cols-[6rem_1fr_1.6fr] md:items-start">
                  <span className="num">{s.n}</span>
                  <h3 className="heading-md">{s.title}</h3>
                  <p className="body-text text-base">{s.desc}</p>
                </div>
              </Reveal>
            ))}
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
              WHAT WE CAN MAKE.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <div className="h-full border p-8" style={{ borderColor: "var(--divider-color)" }}>
                  <h3 className="heading-md" style={{ color: "var(--color-ivory)", fontSize: "1.1rem" }}>
                    {item.title}
                  </h3>
                  <p className="body-text mt-3 text-base">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="section-light">
        <div className="wrap gutter py-20">
          <Reveal>
            <p className="eyebrow mb-6">MATERIALS</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="heading-lg max-w-3xl">THE RIGHT MATERIAL FOR THE PART.</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="body-text mt-8">
              Available materials depend on the application and requirement. We help select the
              optimal material for your specific part. Material availability and suitability are
              confirmed during quotation.
            </p>
          </Reveal>

          <div className="mt-12">
            <table className="specs-table">
              <tbody>
                {MATERIALS.map((m) => (
                  <tr key={m.name}>
                    <td>{m.name}</td>
                    <td>{m.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
              WHAT DOES 3D PRINTING COST?
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-12 lg:grid-cols-2">
            <Reveal delay={120}>
              <p className="body-text">
                Pricing depends on various factors. Every part is evaluated to give you an accurate
                and fair quotation.
              </p>
              <div className="mt-8 border p-6" style={{ borderColor: "var(--divider-color)" }}>
                <p className="eyebrow mb-3">STARTING RATES</p>
                <p style={{ color: "var(--color-ivory)" }}>Rs 1.5/g for PLA</p>
                <p className="mt-2" style={{ color: "var(--color-ivory)" }}>
                  Rs 250 per hour for designing
                </p>
                <p className="mt-2" style={{ color: "var(--color-ivory)" }}>
                  Rs 40 per hour for Machine
                </p>
              </div>
              <a
                href={WA_LINK_QUOTE}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-10 inline-flex"
              >
                GET YOUR QUOTE ON WHATSAPP
              </a>
            </Reveal>

            <div>
              {PRICE_FACTORS.map((f, i) => (
                <Reveal key={f.title} delay={i * 60}>
                  <div className="divider py-6">
                    <h3 className="heading-md" style={{ color: "var(--color-ivory)", fontSize: "1.05rem" }}>
                      {f.title}
                    </h3>
                    <p className="body-text mt-2 text-base">{f.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
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
              BUILT AROUND
              <br />
              YOUR REQUIREMENT.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {WHY.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="divider pt-6">
                  <h3 className="heading-md" style={{ fontSize: "1.05rem" }}>{item.title}</h3>
                  <p className="body-text mt-3 text-base">{item.desc}</p>
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
            <h2 className="heading-lg max-w-3xl">FREQUENTLY ASKED QUESTIONS.</h2>
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
            <p className="eyebrow mb-6">READY TO BUILD?</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="heading-lg max-w-3xl" style={{ color: "var(--color-ivory)" }}>
              SEND YOUR REQUIREMENT.
              <br />
              LET'S MAKE IT REAL.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="body-text mt-8">
              Share your design, dimensions or idea with R-Resources and talk to our team directly
              on WhatsApp.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="heading-md mt-8" style={{ color: "var(--color-gold)" }}>{WHATSAPP_DISPLAY}</p>
          </Reveal>
          <Reveal delay={280}>
            <a
              href={WA_LINK_GENERIC}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-8 inline-flex"
            >
              CHAT ON WHATSAPP
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}