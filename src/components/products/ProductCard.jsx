import { Link } from "react-router-dom";
import SafeImage from "./SafeImage";
import { buildWhatsAppLink, getCategoryBySlug } from "@/data/products";

export default function ProductCard({ product, showEnquire = true }) {
  const category = getCategoryBySlug(product.categorySlug);
  const galleryCount = (product.gallery || []).length;

  return (
    <article className="product-card group transition-all duration-300 hover:border-[var(--color-gold)]">
      <Link to={`/products/${product.slug}`} className="img-zoom product-frame block relative">
        <SafeImage src={product.image} alt={product.name} />
        {galleryCount > 0 && (
          <span className="absolute bottom-2 right-2 bg-black/75 backdrop-blur-sm text-[var(--color-ivory)] text-[10px] font-bold px-2 py-0.5 rounded tracking-wider uppercase border border-white/10">
            +{galleryCount + 1} Photos
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2">
          {category && (
            <span className="eyebrow eyebrow-dot" style={{ fontSize: "0.68rem" }}>
              {category.name}
            </span>
          )}
          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)] border border-[var(--color-gold)]/30">
            On Enquiry
          </span>
        </div>

        <h3 className="heading-md mt-2" style={{ fontSize: "1.05rem" }}>
          <Link to={`/products/${product.slug}`} className="hover:text-[var(--color-gold)] transition-colors">
            {product.name}
          </Link>
        </h3>

        <div className="mt-2.5 flex items-baseline gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-gold)]">
            Price on Enquiry
          </span>
        </div>

        {product.description && (
          <p className="text-muted mt-2 text-xs leading-relaxed line-clamp-2">{product.description}</p>
        )}

        <div className="mt-auto flex items-center justify-between gap-4 pt-4 border-t border-[var(--divider-color)]">
          <Link
            to={`/products/${product.slug}`}
            className="text-xs font-bold uppercase tracking-[0.12em] transition-colors hover:text-[var(--color-gold)]"
            style={{ color: "var(--color-gold)" }}
          >
            Details →
          </Link>
          {showEnquire && (
            <a
              href={buildWhatsAppLink(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted text-xs font-bold uppercase tracking-[0.12em] hover:text-[var(--color-gold)]"
            >
              Enquire
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

