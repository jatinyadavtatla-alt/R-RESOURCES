import { useState } from "react";

/**
 * Image component with a graceful fallback. If the given src fails to
 * load (e.g. a placeholder path with no real file), a neutral placeholder
 * block is rendered instead so the layout never breaks.
 */
export default function SafeImage({ src, alt, className = "", loading = "lazy", fit = "contain" }) {
  const [errored, setErrored] = useState(false);

  if (errored || !src) {
    return (
      <div className="product-placeholder" role="img" aria-label={alt}>
        <span>{alt || "Image coming soon"}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      className={className}
      style={{ objectFit: fit }}
      onError={() => setErrored(true)}
    />
  );
}
