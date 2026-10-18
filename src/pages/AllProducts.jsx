import { useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import ProductCard from "@/components/products/ProductCard";
import { categories, products } from "@/data/products";
import "@/products.css";

export default function AllProducts() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "";
  const query = searchParams.get("q") || "";

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = activeCategory ? p.categorySlug === activeCategory : true;
      const matchesQuery = query ? p.name.toLowerCase().includes(query.toLowerCase()) : true;
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const updateParams = (next) => {
    const params = new URLSearchParams(searchParams);
    Object.entries(next).forEach(([key, value]) => {
      if (value) params.set(key, value);
      else params.delete(key);
    });
    setSearchParams(params);
  };

  const clearFilters = () => setSearchParams({});

  return (
    <main>
      <section className="section-dark">
        <div className="wrap gutter py-16">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-muted">
              <li><Link to="/" className="hover:text-[var(--color-gold)]">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/products" className="hover:text-[var(--color-gold)]">Products</Link></li>
              <li aria-hidden="true">/</li>
              <li style={{ color: "var(--color-gold)" }}>All Products</li>
            </ol>
          </nav>
          <p className="eyebrow mt-8 mb-4">BROWSE THE CATALOGUE</p>
          <h1 className="heading-lg" style={{ color: "var(--color-ivory)" }}>ALL PRODUCTS.</h1>
        </div>
      </section>

      <section className="section-light">
        <div className="wrap gutter py-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <input
              type="search"
              value={query}
              onChange={(e) => updateParams({ q: e.target.value })}
              placeholder="Search products by name…"
              aria-label="Search products"
              className="search-input md:max-w-sm"
            />
            <p className="text-muted text-sm whitespace-nowrap">
              {filtered.length} product{filtered.length === 1 ? "" : "s"} found
            </p>
          </div>

          <div className="no-scrollbar mt-6 flex gap-3 overflow-x-auto pb-2">
            <button
              type="button"
              className={`chip ${activeCategory === "" ? "active" : ""}`}
              onClick={() => updateParams({ category: "" })}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                type="button"
                className={`chip ${activeCategory === cat.slug ? "active" : ""}`}
                onClick={() => updateParams({ category: cat.slug })}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="mt-12">
            {filtered.length === 0 ? (
              <div className="divider py-20 text-center">
                <p className="heading-md">No products match your search.</p>
                <button type="button" onClick={clearFilters} className="btn btn-secondary mt-8">
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
