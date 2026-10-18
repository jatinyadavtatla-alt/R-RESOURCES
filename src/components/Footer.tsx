import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="section-dark divider">
      <div className="wrap gutter py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <p className="heading-md" style={{ fontSize: "1.1rem" }}>
              R-RESOURCES
            </p>
            <p className="body-text mt-4 max-w-xs text-sm">
              Industrial materials, foundry consumables and manufacturing solutions.
            </p>
            <div className="mt-6">
              <a
                href="https://www.linkedin.com/company/r-resources/posts/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-gold)] hover:underline"
                aria-label="R-Resources LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.76-1.75 1.76m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
                LinkedIn: R-Resources ↗
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow mb-4">NAVIGATE</p>
            <ul className="space-y-3 text-sm">
              <li><Link to="/3dprinting" className="text-muted hover:text-[var(--color-gold)]">3D Printing</Link></li>
              <li><Link to="/lasercutting" className="text-muted hover:text-[var(--color-gold)]">Laser Cutting</Link></li>
              <li><Link to="/products" className="text-muted hover:text-[var(--color-gold)]">Products</Link></li>
              <li><Link to="/about" className="text-muted hover:text-[var(--color-gold)]">About Us</Link></li>
            </ul>
          </nav>

          <div>
            <p className="eyebrow mb-4">CONTACT</p>
            <ul className="space-y-3 text-sm">
              <li className="text-muted">
                <span className="text-[var(--color-ivory)] font-medium block">Foundry:</span>
                Call / WA:{" "}
                <a href="tel:+919810300628" className="hover:text-[var(--color-gold)] font-medium text-[var(--color-ivory)]">
                  +91 98103 00628
                </a>
              </li>
              <li className="text-muted">
                <span className="text-[var(--color-ivory)] font-medium block">3D Printing:</span>
                Call / WA:{" "}
                <a href="tel:+919315921702" className="hover:text-[var(--color-gold)] font-medium text-[var(--color-ivory)]">
                  +91 93159 21702
                </a>
              </li>
              <li className="text-muted pt-1">New Delhi, Delhi - 110042, India</li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">VERIFIED SELLER</p>
            <p className="text-muted text-sm leading-relaxed">
              GST verified supplier. 11+ years serving foundries &amp; manufacturing industries across India.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href="https://www.linkedin.com/company/r-resources/posts/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[var(--color-gold)] hover:underline inline-flex items-center gap-1.5"
              >
                LinkedIn Company Posts ↗
              </a>
              <span className="text-xs text-muted">
                Proprietor: MRS. NEETU KUMARI SINGH
              </span>
            </div>
          </div>
        </div>

        <div className="divider mt-12 pt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-muted">
          <span>© 2026 R-Resources. All rights reserved.</span>
          <span>Trader - Wholesaler / Distributor of Foundry Materials &amp; Industrial Consumables</span>
        </div>
      </div>
    </footer>
  );
}
