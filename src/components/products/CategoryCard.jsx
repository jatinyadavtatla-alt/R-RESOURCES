import { Link } from "react-router-dom";
import SafeImage from "./SafeImage";
import { getProductBySlug } from "@/data/products";

export default function CategoryCard({ category, index }) {
  const number = String(index + 1).padStart(2, "0");
  const productNames = category.productSlugs
    .map((slug) => getProductBySlug(slug)?.name)
    .filter(Boolean);

  return (
    <div className="divider grid gap-8 py-10 md:grid-cols-[auto_1fr_auto] md:items-center">
      <span className="num">{number}</span>

      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h3 className="heading-md">{category.name}</h3>
          <p className="text-muted mt-3 max-w-xl text-base leading-relaxed">{category.shortDescription}</p>
          <p className="text-muted mt-3 text-sm">{productNames.join(" · ")}</p>
          <Link
            to={`/products/all?category=${category.slug}`}
            className="eyebrow eyebrow-dot mt-5 inline-flex"
          >
            VIEW PRODUCTS →
          </Link>
        </div>
        <Link to={`/products/all?category=${category.slug}`} className="img-zoom product-frame block w-full md:w-48">
          <SafeImage src={category.image} alt={category.name} />
        </Link>
      </div>
    </div>
  );
}
