import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/utils/cn";

const PHONE_FOUNDRY = "+91 98103 00628";
const PHONE_PRINTING = "+91 93159 21702";
const WHATSAPP_FOUNDRY = "919810300628";
const WHATSAPP_PRINTING = "919315921702";

const links = [
  { label: "HOME", to: "/" },
  { label: "3D PRINTING", to: "/3dprinting" },
  { label: "PRODUCTS", to: "/products" },
  { label: "LASER CUTTING", to: "/lasercutting" },
  { label: "ABOUT", to: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu whenever route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const is3D = location.pathname.includes("3dprinting");
  const targetWhatsApp = is3D ? WHATSAPP_PRINTING : WHATSAPP_FOUNDRY;
  const quoteMsg = is3D
    ? "Hello R-Resources, I would like to request a quote for 3D printing."
    : "Hello R-Resources, I would like to request a quotation.";

  return (
    <header className="sticky top-0 z-50 w-full divider-b" style={{ backgroundColor: "var(--color-ink)" }}>
      <nav className="wrap gutter flex h-20 items-center justify-between" aria-label="Primary">
        <NavLink
          to="/"
          className="heading-md flex items-center gap-2"
          style={{ color: "var(--color-ivory)", fontSize: "1.2rem" }}
          onClick={() => setIsOpen(false)}
        >
          <span>R-RESOURCES</span>
        </NavLink>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "text-xs font-bold uppercase tracking-[0.18em] transition-colors py-2",
                    isActive ? "text-[var(--color-gold)]" : "text-[var(--color-ivory)]/80 hover:text-[var(--color-ivory)]"
                  )
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`https://wa.me/${targetWhatsApp}?text=${encodeURIComponent(quoteMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            QUOTE
            <svg viewBox="0 0 32 32" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.39.67 4.623 1.832 6.527L4 29l7.656-1.797A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75a9.7 9.7 0 0 1-4.95-1.356l-.355-.21-4.542 1.066 1.08-4.428-.232-.37A9.69 9.69 0 0 1 5.25 15c0-5.93 4.823-10.75 10.754-10.75S26.758 9.07 26.758 15 21.934 24.75 16.004 24.75Z" />
            </svg>
          </a>
        </div>

        {/* Mobile controls: Quote button + Hamburger Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={`https://wa.me/${targetWhatsApp}?text=${encodeURIComponent(quoteMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary !py-2 !px-3 text-xs flex items-center gap-1.5"
            aria-label="WhatsApp Quote"
          >
            QUOTE
            <svg viewBox="0 0 32 32" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
              <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.39.67 4.623 1.832 6.527L4 29l7.656-1.797A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75a9.7 9.7 0 0 1-4.95-1.356l-.355-.21-4.542 1.066 1.08-4.428-.232-.37A9.69 9.69 0 0 1 5.25 15c0-5.93 4.823-10.75 10.754-10.75S26.758 9.07 26.758 15 21.934 24.75 16.004 24.75Z" />
            </svg>
          </a>

          <button
            type="button"
            className="relative flex h-11 w-11 items-center justify-center rounded border border-white/15 bg-white/5 text-[var(--color-ivory)] transition-colors hover:border-[var(--color-gold)] hover:bg-white/10 focus:outline-none"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">{isOpen ? "Close Menu" : "Open Menu"}</span>
            <div className="flex h-4 w-5 flex-col justify-between">
              <span
                className={cn(
                  "h-0.5 w-full bg-current transition-all duration-300 origin-center",
                  isOpen ? "translate-y-[7px] rotate-45" : ""
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-full bg-current transition-all duration-300",
                  isOpen ? "opacity-0 scale-x-0" : "opacity-100"
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-full bg-current transition-all duration-300 origin-center",
                  isOpen ? "-translate-y-[7px] -rotate-45" : ""
                )}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed inset-x-0 bottom-0 top-20 z-50 flex flex-col justify-between bg-[var(--color-ink)]/95 backdrop-blur-md border-t border-white/10 overflow-y-auto animate-fadeIn"
          style={{ height: "calc(100vh - 5rem)" }}
        >
          <div className="wrap gutter py-6 flex-1 flex flex-col">
            <p className="eyebrow text-xs mb-4 text-[var(--color-gold)]">NAVIGATION</p>
            <ul className="flex flex-col divide-y divide-white/10">
              {links.map((link, idx) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center justify-between py-4 text-sm font-bold uppercase tracking-[0.16em] transition-all",
                        isActive
                          ? "text-[var(--color-gold)] pl-2 border-l-2 border-[var(--color-gold)]"
                          : "text-[var(--color-ivory)] hover:text-[var(--color-gold)] hover:pl-2"
                      )
                    }
                  >
                    <span>{link.label}</span>
                    <span className="text-xs text-white/30">0{idx + 1} →</span>
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Quick Contact & Details in Mobile Menu */}
            <div className="mt-8 pt-6 border-t border-white/15 space-y-4">
              <p className="eyebrow text-xs text-white/60">CONTACT &amp; QUOTATIONS</p>

              <div className="grid grid-cols-1 gap-2.5">
                <a
                  href={`https://wa.me/${targetWhatsApp}?text=${encodeURIComponent(quoteMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full justify-center text-xs tracking-wider"
                >
                  CHAT ON WHATSAPP
                  <svg viewBox="0 0 32 32" className="h-4 w-4" fill="currentColor">
                    <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.39.67 4.623 1.832 6.527L4 29l7.656-1.797A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75a9.7 9.7 0 0 1-4.95-1.356l-.355-.21-4.542 1.066 1.08-4.428-.232-.37A9.69 9.69 0 0 1 5.25 15c0-5.93 4.823-10.75 10.754-10.75S26.758 9.07 26.758 15 21.934 24.75 16.004 24.75Z" />
                  </svg>
                </a>

                <a
                  href={`tel:${PHONE_FOUNDRY}`}
                  className="btn btn-secondary w-full justify-center text-xs tracking-wider border-white/20 text-[var(--color-ivory)] hover:border-[var(--color-gold)]"
                >
                  FOUNDRY: {PHONE_FOUNDRY}
                </a>

                <a
                  href={`tel:${PHONE_PRINTING}`}
                  className="btn btn-secondary w-full justify-center text-xs tracking-wider border-white/20 text-[var(--color-ivory)] hover:border-[var(--color-gold)]"
                >
                  3D PRINTING: {PHONE_PRINTING}
                </a>

                <a
                  href="https://www.linkedin.com/company/r-resources/posts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-center py-2 text-[var(--color-gold)] hover:underline inline-flex items-center justify-center gap-1.5"
                >
                  Follow R-Resources on LinkedIn ↗
                </a>
              </div>

              <div className="pt-2 text-xs text-white/50 flex flex-wrap items-center justify-between gap-2">
                <span>GST Verified Supplier</span>
                <span>Proprietor: MRS. NEETU KUMARI SINGH</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

