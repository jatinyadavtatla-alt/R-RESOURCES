import { useMemo, useState } from "react";
import SafeImage from "./SafeImage";

export default function ProductGallery({ images, alt }) {
  const uniqueImages = useMemo(() => Array.from(new Set(images.filter(Boolean))).slice(0, 4), [images]);
  const [active, setActive] = useState(0);

  const activeImage = uniqueImages[active] || uniqueImages[0];

  return (
    <div>
      <div className="product-frame" key={activeImage}>
        <div className="fade-swap h-full w-full">
          <SafeImage src={activeImage} alt={alt} loading="eager" />
        </div>
      </div>

      {uniqueImages.length > 1 && (
        <div className="mt-4 flex gap-3" role="tablist" aria-label={`${alt} thumbnails`}>
          {uniqueImages.map((img, i) => (
            <button
              key={img + i}
              type="button"
              className="thumb-btn"
              aria-label={`Show image ${i + 1} of ${alt}`}
              aria-current={active === i}
              onClick={() => setActive(i)}
            >
              <SafeImage src={img} alt={`${alt} thumbnail ${i + 1}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
