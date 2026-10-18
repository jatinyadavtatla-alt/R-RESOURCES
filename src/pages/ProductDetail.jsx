import { Link, useParams } from "react-router-dom";
import ProductGallery from "@/components/products/ProductGallery";
import ProductCard from "@/components/products/ProductCard";
import {
  getProductBySlug,
  getCategoryBySlug,
  getProductsByCategory,
  buildWhatsAppLink,
} from "@/data/products";
import "@/products.css";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <main>
        <section className="section-dark">
          <div className="wrap gutter py-32 text-center">
            <p className="eyebrow mb-6 justify-center">NOT FOUND</p>
            <h1 className="heading-lg" style={{ color: "var(--color-ivory)" }}>
              THIS PRODUCT DOESN'T EXIST.
            </h1>
            <Link to="/products" className="btn btn-primary mt-10 inline-flex">
              ← BACK TO PRODUCTS
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const category = getCategoryBySlug(product.categorySlug);

  const related = (() => {
    const sameCategory = getProductsByCategory(product.categorySlug).filter((p) => p.slug !== product.slug);
    const extra = (product.related || [])
      .map((s) => getProductBySlug(s))
      .filter((p) => p && p.slug !== product.slug && !sameCategory.some((sc) => sc.slug === p.slug));
    return [...sameCategory, ...extra].slice(0, 4);
  })();

  const images = [product.image, ...(product.gallery || [])];

  return (
    <main>
      <section className="section-light divider-b">
        <div className="wrap gutter py-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-muted">
              <li><Link to="/" className="hover:text-[var(--color-gold)]">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/products" className="hover:text-[var(--color-gold)]">Products</Link></li>
              <li aria-hidden="true">/</li>
              {category && (
                <>
                  <li>
                    <Link to={`/products/all?category=${category.slug}`} className="hover:text-[var(--color-gold)]">
                      {category.name}
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                </>
              )}
              <li style={{ color: "var(--color-gold)" }}>{product.name}</li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="section-light">
        <div className="wrap gutter grid gap-14 py-16 lg:grid-cols-2">
          <div>
            <ProductGallery images={images} alt={product.name} />
          </div>

          <div>
            {category && <p className="eyebrow mb-4">{category.name}</p>}
            <h1 className="heading-lg">{product.name}</h1>

            <div className="mt-6 p-5 rounded-lg bg-[var(--color-ink)]/5 border border-[var(--divider-color)] flex flex-wrap items-baseline justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase font-bold tracking-widest text-muted block mb-1">
                  Pricing Information
                </span>
                <span className="text-2xl font-extrabold tracking-tight" style={{ color: "var(--color-gold)" }}>
                  Price on Enquiry
                </span>
                <p className="text-xs text-muted mt-1">
                  Custom quote provided upon enquiry based on quantity and required specifications.
                </p>
              </div>
              <div className="flex flex-col sm:items-end gap-1">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-500/15 px-3 py-1 rounded-full border border-emerald-600/20">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  GST Verified Supplier
                </span>
                <span className="text-[11px] text-muted">R-Resources · New Delhi (11+ yrs)</span>
              </div>
            </div>

            {product.description && <p className="body-text mt-6 leading-relaxed">{product.description}</p>}

            <div className="divider mt-10 pt-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="eyebrow">SPECIFICATIONS</h2>
                <span className="text-[11px] text-muted uppercase tracking-wider font-semibold">
                  Verified Technical Specs
                </span>
              </div>
              {product.specs && product.specs.length > 0 ? (
                <table className="specs-table">
                  <tbody>
                    {product.specs.map((spec) => (
                      <tr key={spec.label}>
                        <td>{spec.label}</td>
                        <td className="font-medium">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-muted text-sm">Contact us for specifications.</p>
              )}
            </div>

            {product.applications && product.applications.length > 0 && (
              <div className="divider mt-8 pt-8">
                <h2 className="eyebrow mb-6">APPLICATIONS</h2>
                <ul className="space-y-2 text-sm text-muted">
                  {product.applications.map((app) => (
                    <li key={app} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="divider mt-10 pt-10 flex flex-wrap items-center gap-5">
              <a
                href={buildWhatsAppLink(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                ENQUIRE ON WHATSAPP
                <svg viewBox="0 0 32 32" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.39.67 4.623 1.832 6.527L4 29l7.656-1.797A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75a9.7 9.7 0 0 1-4.95-1.356l-.355-.21-4.542 1.066 1.08-4.428-.232-.37A9.69 9.69 0 0 1 5.25 15c0-5.93 4.823-10.75 10.754-10.75S26.758 9.07 26.758 15 21.934 24.75 16.004 24.75Z" />
                </svg>
              </a>
              <a
                href="tel:+919810300628"
                className="btn btn-secondary text-xs uppercase"
              >
                CALL: +91 98103 00628
              </a>
              <Link
                to="/products/all"
                className="text-xs font-bold uppercase tracking-[0.12em]"
                style={{ color: "var(--color-gold)" }}
              >
                ← BACK TO PRODUCTS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-dark">
          <div className="wrap gutter py-20">
            <p className="eyebrow mb-6">RELATED PRODUCTS</p>
            <h2 className="heading-lg max-w-3xl" style={{ color: "var(--color-ivory)" }}>
              YOU MAY ALSO NEED.
            </h2>
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
