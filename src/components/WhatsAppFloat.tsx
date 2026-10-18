import { useState, useRef, useEffect } from "react";

const WHATSAPP_FOUNDRY = "919810300628";
const WHATSAPP_PRINTING = "919315921702";

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-3 w-64 rounded-xl border border-white/15 bg-[var(--color-ink)]/95 p-4 shadow-2xl backdrop-blur-md animate-fadeIn text-[var(--color-ivory)]">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-gold)]">
              Chat on WhatsApp
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white text-xs px-1"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <div className="mt-3 space-y-2">
            <a
              href={`https://wa.me/${WHATSAPP_FOUNDRY}?text=${encodeURIComponent(
                "Hello R-Resources, I would like to enquire about Foundry & Industrial Products."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col p-2.5 rounded-lg border border-white/10 bg-white/5 hover:border-[var(--color-gold)] hover:bg-white/10 transition-colors"
            >
              <span className="text-xs font-bold text-[var(--color-gold)]">
                🏭 Foundry &amp; Products
              </span>
              <span className="text-[11px] text-white/70 mt-0.5">+91 98103 00628</span>
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_PRINTING}?text=${encodeURIComponent(
                "Hello R-Resources, I would like to enquire about 3D Printing services."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col p-2.5 rounded-lg border border-white/10 bg-white/5 hover:border-[var(--color-gold)] hover:bg-white/10 transition-colors"
            >
              <span className="text-xs font-bold text-[var(--color-gold)]">
                🖨️ 3D Printing
              </span>
              <span className="text-[11px] text-white/70 mt-0.5">+91 93159 21702</span>
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat with R-Resources on WhatsApp"
        aria-expanded={isOpen}
        className="flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105 focus:outline-none"
        style={{ backgroundColor: "var(--color-gold)" }}
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="#111111" aria-hidden="true">
          <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.39.67 4.623 1.832 6.527L4 29l7.656-1.797A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75a9.7 9.7 0 0 1-4.95-1.356l-.355-.21-4.542 1.066 1.08-4.428-.232-.37A9.69 9.69 0 0 1 5.25 15c0-5.93 4.823-10.75 10.754-10.75S26.758 9.07 26.758 15 21.934 24.75 16.004 24.75Zm5.46-7.32c-.298-.15-1.763-.87-2.036-.97-.273-.1-.472-.15-.67.15-.198.298-.767.97-.94 1.168-.173.199-.347.224-.645.075-.298-.15-1.258-.464-2.397-1.48-.886-.79-1.484-1.766-1.658-2.064-.173-.298-.018-.459.13-.608.134-.133.298-.347.447-.52.15-.174.198-.298.298-.497.1-.199.05-.373-.025-.522-.075-.15-.67-1.614-.918-2.21-.242-.58-.487-.502-.67-.512l-.57-.01c-.198 0-.521.075-.794.373-.273.298-1.04 1.016-1.04 2.479 0 1.462 1.065 2.874 1.213 3.073.149.198 2.096 3.2 5.08 4.487.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.763-.72 2.011-1.415.248-.696.248-1.292.174-1.416-.075-.124-.273-.199-.571-.348Z" />
        </svg>
      </button>
    </div>
  );
}
