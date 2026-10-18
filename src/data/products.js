// src/data/products.js
// Official products catalogue for R-Resources.
// Includes photos, specifications, and company credentials.

export const PHONE_3D_PRINTING = "+91 93159 21702";
export const WHATSAPP_3D_PRINTING = "919315921702";

export const PHONE_FOUNDRY = "+91 98103 00628";
export const WHATSAPP_FOUNDRY = "919810300628";

// Default WhatsApp number for product enquiries (Foundry & Industrial Products)
export const WHATSAPP_NUMBER = "919810300628";

export const LINKEDIN_URL = "https://www.linkedin.com/company/r-resources/posts/";

export const COMPANY_INFO = {
  name: "R-Resources",
  proprietor: "MRS. NEETU KUMARI SINGH",
  tagline: "Industrial Manufacturing & Foundry Solutions",
  location: "New Delhi, Delhi - 110042, India",
  established: 2017,
  experience: "11+ Years Experience",
  businessType: "Trader - Wholesaler / Distributor",
  gstVerified: true,
  trustSeal: true,
  responseRate: "84%",
  rating: 3.8,
  ratingCount: 23,
  phoneFoundry: "+91 98103 00628",
  phonePrinting: "+91 93159 21702",
  phone: "+91 98103 00628",
  whatsapp: "+91 98103 00628",
  whatsappPrinting: "+91 93159 21702",
  linkedinUrl: "https://www.linkedin.com/company/r-resources/posts/",
};

export const buildWhatsAppLink = (productName) =>
  `https://wa.me/${WHATSAPP_FOUNDRY}?text=${encodeURIComponent(
    `Hello R-Resources, I am interested in ${productName}. Please share the quotation and details.`
  )}`;

export const categories = [
  {
    "slug": "melting-solution",
    "name": "Melting Solution",
    "shortDescription": "Ferro alloys and metal materials used as melting and alloying additions in foundries.",
    "image": "/Product/ferro-silicon-granules.png",
    "productSlugs": [
      "ferro-silicon-granules",
      "ferro-silicon-si-70-75",
      "manganese-metal-flakes",
      "magnesium-metal",
      "magnesium-metal-ingots",
      "ferro-silicon-inoculant"
    ]
  },
  {
    "slug": "industrial-chemicals",
    "name": "Industrial Chemicals",
    "shortDescription": "Industrial metal and chemical materials supplied to foundries and manufacturers.",
    "image": "/Product/industrial-silicon-metal.jpg",
    "productSlugs": [
      "industrial-silicon-metal",
      "manganese-metal-flake",
      "foundry-fluxes-chemicals"
    ]
  },
  {
    "slug": "aluminium-sand-casting",
    "name": "Aluminium Sand Casting",
    "shortDescription": "Aluminium and sand casting products for industrial components.",
    "image": "/Product/aluminium-sand-casting.jpg",
    "productSlugs": [
      "aluminium-alloy-castings",
      "aluminium-sand-casting-product",
      "industrial-sand-casting",
      "ss-casting-spoon"
    ]
  },
  {
    "slug": "emery-belt",
    "name": "Emery Belt",
    "shortDescription": "Coated abrasive belts used for surface finishing and fettling applications.",
    "image": "/Product/emery-belt.jpg",
    "productSlugs": [
      "coated-abrasive-belts",
      "emery-belt-product",
      "sanding-disc-for-spectro-meter"
    ]
  },
  {
    "slug": "fettling-solution",
    "name": "Fettling Solution",
    "shortDescription": "Abrasive discs and belts used for fettling and finishing castings.",
    "image": "/Product/4inch-sanding-disk.png",
    "productSlugs": [
      "4-inch-sanding-disc",
      "starcke-emery-belts"
    ]
  },
  {
    "slug": "graphite-crucible",
    "name": "Graphite Crucible",
    "shortDescription": "Graphite crucibles and graphite material parts used for metal melting.",
    "image": "/Product/high-quality-graphite-parts.jpg",
    "productSlugs": [
      "high-quality-graphite-parts",
      "natural-graphite-powder",
      "natural-graphite-flakes"
    ]
  },
  {
    "slug": "liquid-metal-filtration-solution",
    "name": "Liquid Metal Filtration Solution",
    "shortDescription": "Filtration products used for filtering molten / liquid metal in foundries.",
    "image": "/Product/fiber-cloth-filter.png",
    "productSlugs": [
      "fiber-cloth-filter",
      "refractories-foundry-filter"
    ]
  },
  {
    "slug": "ceramic-foam-filter",
    "name": "Ceramic Foam Filter",
    "shortDescription": "Ceramic foam filters used in foundries to filter molten metal.",
    "image": "/Product/ceramic-foam-filter.jpg",
    "productSlugs": [
      "ceramic-foam-filter-product",
      "ceramic-fibre-blanket"
    ]
  },
  {
    "slug": "graphite-sheet",
    "name": "Graphite Sheet",
    "shortDescription": "Flexible graphite sheet material.",
    "image": "/Product/flexible-graphite-sheet.png",
    "productSlugs": [
      "flexible-graphite-sheet"
    ]
  },
  {
    "slug": "graphite-rods",
    "name": "Graphite Rods",
    "shortDescription": "Graphite rods used in industrial and metallurgical applications.",
    "image": "/Product/graphite-round-rod.png",
    "productSlugs": [
      "graphite-round-rod"
    ]
  },
  {
    "slug": "vacuum-chamber",
    "name": "Vacuum Chamber",
    "shortDescription": "Aluminium degassing machines and related vacuum chamber equipment.",
    "image": "/Product/aluminium-degassing-machine.png",
    "productSlugs": [
      "aluminium-degassing-machine"
    ]
  },
  {
    "slug": "steel-shots",
    "name": "Steel Shots & Surface Finishing",
    "shortDescription": "Round steel shot and zinc galva sprays used for shot blasting and surface preparation.",
    "image": "/Product/round-steel-shot.png",
    "productSlugs": [
      "round-steel-shot",
      "cosmos-zinc-galva",
      "zinc-metal-spray"
    ]
  },
  {
    "slug": "sample-cutting-machine",
    "name": "Sample Cutting Machine",
    "shortDescription": "Heavy-duty metallographic sample cutting machines engineered for precise, burr-free specimen preparation.",
    "image": "/Product/sample-cutting-machine.png",
    "productSlugs": [
      "sample-cutting-machine"
    ]
  }
];

export const products = [
  {
    "slug": "ferro-silicon-granules",
    "name": "Ferro Silicon Granules",
    "categorySlug": "melting-solution",
    "price": "Price on Enquiry",
    "image": "/Product/ferro-silicon-granules.png",
    "gallery": [
      "/Product/ferro-silicon-granules-2.png",
      "/Product/ferro-silicon-granules-3.png"
    ],
    "description": "Industrial Grade Ferro Silicon Granules offered by R-Resources, supplied in 25 kg packets for foundry melting and alloying.",
    "specs": [
      {
        "label": "Grade Standard",
        "value": "Industrial Grade"
      },
      {
        "label": "Packaging Size",
        "value": "25 kg"
      },
      {
        "label": "Packaging Type",
        "value": "Packet"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Usage/Application",
        "value": "Industrial"
      },
      {
        "label": "Material",
        "value": "Ferro Silicon"
      },
      {
        "label": "Country of Origin",
        "value": "Made in India"
      },
      {
        "label": "Form",
        "value": "Powder"
      },
      {
        "label": "Melting Point",
        "value": "1200 Degree Celsius"
      }
    ],
    "applications": [
      "Foundry inoculant",
      "Steel manufacturing deoxidizer",
      "Alloy additive in cast iron production"
    ],
    "related": [
      "ferro-silicon-si-70-75",
      "manganese-metal-flakes",
      "magnesium-metal",
      "ferro-silicon-inoculant"
    ]
  },
  {
    "slug": "ferro-silicon-si-70-75",
    "name": "Ferro Silicon Si 70 75",
    "categorySlug": "melting-solution",
    "price": "Price on Enquiry",
    "image": "/Product/ferro-silicon-si-70-75.png",
    "gallery": [
      "/Product/ferro-silicon-si-70-75-2.png"
    ],
    "description": "Ferro Silicon Si 70 75 with 70-75% silicon content in lump form, providing efficient deoxidation and silicon addition in steel and cast iron foundries.",
    "specs": [
      {
        "label": "Particle Size",
        "value": "100 nm"
      },
      {
        "label": "Composition",
        "value": "Ferrosilicon"
      },
      {
        "label": "Color",
        "value": "Silver"
      },
      {
        "label": "Form",
        "value": "Lumps"
      },
      {
        "label": "Usage/Application",
        "value": "Industrial"
      },
      {
        "label": "Packaging Type",
        "value": "Packet"
      },
      {
        "label": "Country of Origin",
        "value": "Made in India"
      },
      {
        "label": "Melting Point",
        "value": "1200 Degree Celsius"
      },
      {
        "label": "Diameter",
        "value": "2mm"
      },
      {
        "label": "Grade Standard",
        "value": "Industrial Grade"
      }
    ],
    "applications": [
      "Deoxidizing agent in steelmaking",
      "Inoculant in gray and ductile iron castings",
      "Ferroalloy production"
    ],
    "related": [
      "ferro-silicon-granules",
      "manganese-metal-flakes",
      "magnesium-metal",
      "ferro-silicon-inoculant"
    ]
  },
  {
    "slug": "manganese-metal-flakes",
    "name": "Manganese Metal Flakes",
    "categorySlug": "melting-solution",
    "price": "Price on Enquiry",
    "image": "/Product/manganese-metal-flakes.png",
    "gallery": [
      "/Product/manganese-metal-flakes-2.png",
      "/Product/manganese-metal-flakes-3.png"
    ],
    "description": "Electrolytic Manganese Metal Flakes 99% pure offered by R-Resources, New Delhi, used as essential alloying addition for specialty steels and aluminium alloys.",
    "specs": [
      {
        "label": "Purity",
        "value": "99%"
      },
      {
        "label": "Form",
        "value": "Flakes / Solid"
      },
      {
        "label": "Shape",
        "value": "Rectangle / Flake"
      },
      {
        "label": "Packaging Type",
        "value": "Box / Bag"
      },
      {
        "label": "Grade Standard",
        "value": "Industrial Grade"
      },
      {
        "label": "Country of Origin",
        "value": "Made in India"
      }
    ],
    "applications": [
      "High-strength steel production",
      "Aluminium manganese alloys",
      "Foundry alloying addition"
    ],
    "related": [
      "ferro-silicon-granules",
      "ferro-silicon-si-70-75",
      "magnesium-metal",
      "manganese-metal-flake"
    ]
  },
  {
    "slug": "magnesium-metal",
    "name": "Magnesium Metal",
    "categorySlug": "melting-solution",
    "price": "Price on Enquiry",
    "image": "/Product/magnesium-metal.png",
    "gallery": [],
    "description": "High purity Magnesium Metal supplied by R-Resources, used as a nodulizing agent in ductile iron production and desulfurizer in metal melting.",
    "specs": [
      {
        "label": "Material",
        "value": "Magnesium"
      },
      {
        "label": "Purity",
        "value": "99.9%"
      },
      {
        "label": "Form",
        "value": "Solid Ingots"
      },
      {
        "label": "Usage/Application",
        "value": "Industrial Melting & Deoxidizing"
      },
      {
        "label": "Melting Point",
        "value": "650 Degree Celsius"
      },
      {
        "label": "Country of Origin",
        "value": "Made in India"
      }
    ],
    "applications": [
      "Ductile iron nodulization",
      "Desulfurization in steel and iron melting",
      "Aluminium-magnesium alloy casting"
    ],
    "related": [
      "ferro-silicon-granules",
      "ferro-silicon-si-70-75",
      "manganese-metal-flakes",
      "magnesium-metal-ingots"
    ]
  },
  {
    "slug": "magnesium-metal-ingots",
    "name": "Magnesium Metal Ingots",
    "categorySlug": "melting-solution",
    "price": "Price on Enquiry",
    "image": "/Product/magnesium-metal-ingots.jpg",
    "gallery": [],
    "description": "Pure Magnesium Metal Ingots for foundry alloying, magnesium alloy components, and desulfurization applications.",
    "specs": [
      {
        "label": "Material",
        "value": "Magnesium"
      },
      {
        "label": "Purity",
        "value": "99.9% Pure Mg"
      },
      {
        "label": "Form",
        "value": "Ingots"
      },
      {
        "label": "Usage/Application",
        "value": "Foundry & Metallurgical Alloying"
      },
      {
        "label": "Country of Origin",
        "value": "Made in India"
      }
    ],
    "applications": [
      "Alloy manufacturing",
      "Foundry casting additive",
      "Desulfurization"
    ],
    "related": [
      "magnesium-metal",
      "manganese-metal-flakes",
      "ferro-silicon-granules"
    ]
  },
  {
    "slug": "ferro-silicon-inoculant",
    "name": "Ferro Silicon Inoculant",
    "categorySlug": "melting-solution",
    "price": "Price on Enquiry",
    "image": "/Product/ferro-silicon-inoculant.jpg",
    "gallery": [],
    "description": "Specialized Ferro Silicon Inoculant for foundries to improve graphite structure, prevent chill, and enhance mechanical properties of castings.",
    "specs": [
      {
        "label": "Composition",
        "value": "Ferrosilicon Inoculant Base"
      },
      {
        "label": "Form",
        "value": "Granules / Powder"
      },
      {
        "label": "Packaging Size",
        "value": "25 kg / 50 kg Bag"
      },
      {
        "label": "Usage/Application",
        "value": "Cast Iron Inoculation & Chill Reduction"
      },
      {
        "label": "Grade Standard",
        "value": "Industrial Grade"
      }
    ],
    "applications": [
      "Gray iron inoculation",
      "Ductile / SG iron casting",
      "Chill elimination"
    ],
    "related": [
      "ferro-silicon-granules",
      "ferro-silicon-si-70-75",
      "magnesium-metal"
    ]
  },
  {
    "slug": "industrial-silicon-metal",
    "name": "Industrial Silicon Metal",
    "categorySlug": "industrial-chemicals",
    "price": "Price on Enquiry",
    "image": "/Product/industrial-silicon-metal.jpg",
    "gallery": [
      "/Product/industrial-silicon-metal-2.jpg",
      "/Product/industrial-silicon-metal-3.jpg",
      "/Product/industrial-silicon-metal-4.jpg"
    ],
    "description": "Technical Grade Industrial Silicon Metal offered by R-Resources, featuring 99% purity for chemical and metallurgical industries.",
    "specs": [
      {
        "label": "Material Grade",
        "value": "Technical Grade"
      },
      {
        "label": "Usage/Application",
        "value": "Industrial"
      },
      {
        "label": "Purity",
        "value": "99%"
      },
      {
        "label": "Form",
        "value": "Solid"
      },
      {
        "label": "Color",
        "value": "Grey"
      }
    ],
    "applications": [
      "Aluminium smelting and alloying",
      "Silicones and silanes chemical synthesis",
      "Semiconductor and solar precursors"
    ],
    "related": [
      "manganese-metal-flake",
      "foundry-fluxes-chemicals",
      "ferro-silicon-si-70-75"
    ]
  },
  {
    "slug": "manganese-metal-flake",
    "name": "Manganese Metal Flake",
    "categorySlug": "industrial-chemicals",
    "price": "Price on Enquiry",
    "image": "/Product/manganese-metal-flake.jpg",
    "gallery": [
      "/Product/manganese-metal-flake-2.jpg"
    ],
    "description": "Pure Manganese Metal Flake (99% purity, melting point 1246°C) supplied by R-Resources for industrial and chemical manufacturing.",
    "specs": [
      {
        "label": "Purity",
        "value": "99%"
      },
      {
        "label": "Form",
        "value": "Flake"
      },
      {
        "label": "Melting Point",
        "value": "1246 Degree C"
      },
      {
        "label": "Packaging Size",
        "value": "Loose"
      },
      {
        "label": "Technique",
        "value": "Hot Rolled"
      },
      {
        "label": "Density",
        "value": "7.2g/cm3"
      },
      {
        "label": "Usage",
        "value": "Industrial"
      }
    ],
    "applications": [
      "Specialty chemicals production",
      "Manganese salt synthesis",
      "Industrial alloy compounding"
    ],
    "related": [
      "industrial-silicon-metal",
      "foundry-fluxes-chemicals",
      "manganese-metal-flakes"
    ]
  },
  {
    "slug": "foundry-fluxes-chemicals",
    "name": "Foundry Fluxes Chemicals",
    "categorySlug": "industrial-chemicals",
    "price": "Price on Enquiry",
    "image": "/Product/foundry-fluxes-chemicals.png",
    "gallery": [
      "/Product/foundry-fluxes-chemicals-2.png",
      "/Product/foundry-fluxes-chemicals-3.png"
    ],
    "description": "High purity Foundry Fluxes and Chemicals in powder state for drossing, degassing, and refining molten non-ferrous metals.",
    "specs": [
      {
        "label": "Physical State",
        "value": "Powder"
      },
      {
        "label": "Packaging Type",
        "value": "Box"
      },
      {
        "label": "Purity",
        "value": "99%"
      },
      {
        "label": "Shelf Life",
        "value": "12 Months"
      },
      {
        "label": "Melting Point",
        "value": "19 Degree Celsius"
      },
      {
        "label": "Grade Standard",
        "value": "Technical Grade"
      },
      {
        "label": "Usage/Application",
        "value": "Industrial"
      },
      {
        "label": "Country of Origin",
        "value": "Made in India"
      },
      {
        "label": "Boiling Point",
        "value": "57 Degree Celsius"
      },
      {
        "label": "Moisture",
        "value": "0.5%"
      }
    ],
    "applications": [
      "Aluminium drossing and cover flux",
      "Molten metal cleaning and degassing",
      "Slag conditioning in foundry ladles"
    ],
    "related": [
      "industrial-silicon-metal",
      "manganese-metal-flake",
      "aluminium-degassing-machine"
    ]
  },
  {
    "slug": "aluminium-alloy-castings",
    "name": "Aluminum Alloy Castings",
    "categorySlug": "aluminium-sand-casting",
    "price": "Price on Enquiry",
    "image": "/Product/aluminum-alloy-castings.png",
    "gallery": [
      "/Product/aluminum-alloy-castings-2.png",
      "/Product/aluminum-alloy-castings-3.png"
    ],
    "description": "Precision polished Aluminum Alloy Castings manufactured for automotive parts, industrial machinery, and structural assemblies.",
    "specs": [
      {
        "label": "Usage/Application",
        "value": "Automotive Parts"
      },
      {
        "label": "Finishing",
        "value": "Polished"
      },
      {
        "label": "Material",
        "value": "Aluminum Alloy"
      },
      {
        "label": "Material Grade",
        "value": "LM0"
      },
      {
        "label": "Alloy",
        "value": "With Alloy"
      },
      {
        "label": "Surface Treatment",
        "value": "Polished"
      },
      {
        "label": "Packaging Type",
        "value": "Box"
      },
      {
        "label": "I Deal In",
        "value": "New Only"
      },
      {
        "label": "Country of Origin",
        "value": "Made in India"
      }
    ],
    "applications": [
      "Automotive components",
      "Industrial machinery housings",
      "Custom engineered mechanical parts"
    ],
    "related": [
      "aluminium-sand-casting-product",
      "industrial-sand-casting",
      "ss-casting-spoon"
    ]
  },
  {
    "slug": "aluminium-sand-casting-product",
    "name": "Aluminium Sand Casting",
    "categorySlug": "aluminium-sand-casting",
    "price": "Price on Enquiry",
    "image": "/Product/aluminium-sand-casting.jpg",
    "gallery": [
      "/Product/aluminium-sand-casting-2.jpg"
    ],
    "description": "High-integrity Aluminium Sand Casting products tailored for industrial requirements with excellent surface finish and dimensional accuracy.",
    "specs": [
      {
        "label": "Usage/Application",
        "value": "Industrial"
      },
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Pressure",
        "value": "High Pressure"
      },
      {
        "label": "Size",
        "value": "3ft"
      },
      {
        "label": "Weight",
        "value": "15 Kg"
      },
      {
        "label": "Finishing",
        "value": "Polished"
      },
      {
        "label": "Shape",
        "value": "Cylindrical"
      },
      {
        "label": "Country of Origin",
        "value": "Made in India"
      }
    ],
    "applications": [
      "Heavy equipment parts",
      "Engine blocks and pump housings",
      "Custom prototype castings"
    ],
    "related": [
      "aluminium-alloy-castings",
      "industrial-sand-casting",
      "ss-casting-spoon"
    ]
  },
  {
    "slug": "industrial-sand-casting",
    "name": "Industrial Sand Casting",
    "categorySlug": "aluminium-sand-casting",
    "price": "Price on Enquiry",
    "image": "/Product/industrial-sand-casting.png",
    "gallery": [
      "/Product/industrial-sand-casting-2.png",
      "/Product/industrial-sand-casting-3.png"
    ],
    "description": "Heavy-duty Industrial Sand Casting components supplied by R-Resources for demanding mechanical and structural industrial environments.",
    "specs": [
      {
        "label": "Usage/Application",
        "value": "Industrial"
      },
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Pressure",
        "value": "High Pressure"
      },
      {
        "label": "Weight",
        "value": "10Kg"
      },
      {
        "label": "Finishing",
        "value": "Polished"
      },
      {
        "label": "Shape",
        "value": "Cylindrical"
      },
      {
        "label": "Country of Origin",
        "value": "Made in India"
      },
      {
        "label": "Packaging Type",
        "value": "Box"
      }
    ],
    "applications": [
      "Pump and valve bodies",
      "Machinery brackets and frames",
      "High-stress structural components"
    ],
    "related": [
      "aluminium-alloy-castings",
      "aluminium-sand-casting-product",
      "ss-casting-spoon"
    ]
  },
  {
    "slug": "ss-casting-spoon",
    "name": "SS Casting Spoon",
    "categorySlug": "aluminium-sand-casting",
    "price": "Price on Enquiry",
    "image": "/Product/ss-casting-spoon.jpg",
    "gallery": [],
    "description": "Heavy-duty Stainless Steel Casting Spoon for molten aluminium and metal sampling, pouring, and ladle skimming in foundries.",
    "specs": [
      {
        "label": "Material",
        "value": "Stainless Steel (SS304/SS316)"
      },
      {
        "label": "Usage/Application",
        "value": "Molten Metal Pouring & Sampling"
      },
      {
        "label": "Heat Resistance",
        "value": "High Temperature Rated"
      },
      {
        "label": "Handle",
        "value": "Extended Ergonomic Handle"
      },
      {
        "label": "Country of Origin",
        "value": "Made in India"
      }
    ],
    "applications": [
      "Molten metal sampling for spectrometer analysis",
      "Crucible skimming",
      "Small batch pouring"
    ],
    "related": [
      "aluminium-sand-casting-product",
      "aluminium-alloy-castings",
      "high-quality-graphite-parts"
    ]
  },
  {
    "slug": "coated-abrasive-belts",
    "name": "Coated Abrasive Belts",
    "categorySlug": "emery-belt",
    "price": "Price on Enquiry",
    "image": "/Product/coated-abrasive-belts.png",
    "gallery": [
      "/Product/coated-abrasive-belts-2.png",
      "/Product/coated-abrasive-belts-3.png",
      "/Product/coated-abrasive-belts-4.png",
      "/Product/coated-abrasive-belts-5.png",
      "/Product/coated-abrasive-belts-6.png"
    ],
    "description": "Industrial Aluminium Oxide Coated Abrasive Belts engineered for aggressive deburring, weld grinding, and satin surface finishing.",
    "specs": [
      {
        "label": "Abrasive Material",
        "value": "Yes"
      },
      {
        "label": "Thickness",
        "value": "1 mm"
      },
      {
        "label": "Material",
        "value": "Leather"
      },
      {
        "label": "Color",
        "value": "Brown"
      },
      {
        "label": "Usage/Application",
        "value": "Industrial"
      },
      {
        "label": "Country of Origin",
        "value": "Made in India"
      },
      {
        "label": "Packaging Type",
        "value": "Box"
      }
    ],
    "applications": [
      "Metal fabrication deburring",
      "Stainless steel tube and plate polishing",
      "Wood and composite sanding"
    ],
    "related": [
      "emery-belt-product",
      "4-inch-sanding-disc",
      "starcke-emery-belts",
      "sanding-disc-for-spectro-meter"
    ]
  },
  {
    "slug": "emery-belt-product",
    "name": "Emery Belt",
    "categorySlug": "emery-belt",
    "price": "Price on Enquiry",
    "image": "/Product/emery-belt.jpg",
    "gallery": [
      "/Product/emery-belt-2.jpg",
      "/Product/emery-belt-3.jpg"
    ],
    "description": "Heavy duty Emery Belts offered by R-Resources, New Delhi, designed for long belt life and consistent cutting action across metals.",
    "specs": [
      {
        "label": "Product Type",
        "value": "Endless Emery Abrasive Belt"
      },
      {
        "label": "Backing Material",
        "value": "Heavy Duty Cloth Backing"
      },
      {
        "label": "Abrasive Grain",
        "value": "Aluminium Oxide / Silicon Carbide"
      },
      {
        "label": "Usage/Application",
        "value": "Metal Grinding, Deburring, Surface Preparation"
      },
      {
        "label": "Country of Origin",
        "value": "Made in India"
      }
    ],
    "applications": [
      "Foundry casting fettling",
      "General metal fabrication",
      "Edge chamfering and finishing"
    ],
    "related": [
      "coated-abrasive-belts",
      "starcke-emery-belts",
      "4-inch-sanding-disc"
    ]
  },
  {
    "slug": "sanding-disc-for-spectro-meter",
    "name": "Sanding Disc For Spectro Meter",
    "categorySlug": "emery-belt",
    "price": "Price on Enquiry",
    "image": "/Product/sanding-disc-for-spectro-meter.jpg",
    "gallery": [],
    "description": "Specialized high-precision Sanding Discs for spectrometer sample surface preparation in metallurgical quality laboratories.",
    "specs": [
      {
        "label": "Usage/Application",
        "value": "Spectrometer Sample Surface Prep"
      },
      {
        "label": "Abrasive Material",
        "value": "Zirconia / Aluminium Oxide"
      },
      {
        "label": "Backing Type",
        "value": "Adhesive PSA / Plain Paper Backing"
      },
      {
        "label": "Flatness",
        "value": "Ultra-flat Calibration Grade"
      },
      {
        "label": "Country of Origin",
        "value": "Made in India"
      }
    ],
    "applications": [
      "Laboratory spectrometer sample polishing",
      "Metallurgical spark testing",
      "Rapid surface grinding"
    ],
    "related": [
      "coated-abrasive-belts",
      "4-inch-sanding-disc",
      "emery-belt-product"
    ]
  },
  {
    "slug": "4-inch-sanding-disc",
    "name": "4-inch Sanding Disc",
    "categorySlug": "fettling-solution",
    "price": "Price on Enquiry",
    "image": "/Product/4inch-sanding-disk.png",
    "gallery": [
      "/Product/4inch-sanding-disk-2.png",
      "/Product/4inch-sanding-disk-3.png"
    ],
    "description": "4 Inch Waterproof Ceramic Sanding Disc for fast stock removal, weld blending, and surface leveling on castings and steel parts.",
    "specs": [],
    "applications": [
      "Angle grinder fettling",
      "Weld seam leveling",
      "Rust and paint removal"
    ],
    "related": [
      "starcke-emery-belts",
      "emery-belt-product",
      "coated-abrasive-belts"
    ]
  },
  {
    "slug": "starcke-emery-belts",
    "name": "Starcke Emery Belts",
    "categorySlug": "fettling-solution",
    "price": "Price on Enquiry",
    "image": "/Product/starcke-emery-belts.png",
    "gallery": [
      "/Product/starcke-emery-belts-2.png",
      "/Product/starcke-emery-belts-3.png"
    ],
    "description": "Premium 2mm thickness Starcke Emery Belts made with durable abrasive cloth backing for precision fettling and consistent high cut rate.",
    "specs": [
      {
        "label": "Thickness",
        "value": "2 mm"
      },
      {
        "label": "Belt Type",
        "value": "Emery Belt"
      },
      {
        "label": "Material",
        "value": "Abrasive Cloth"
      },
      {
        "label": "Color",
        "value": "Blue"
      },
      {
        "label": "Size",
        "value": "50 x 3500 ( L x W ) mm"
      },
      {
        "label": "Length",
        "value": "50mm"
      },
      {
        "label": "I Deal In",
        "value": "New Only"
      },
      {
        "label": "Usage/Application",
        "value": "Industrial"
      },
      {
        "label": "Packaging Type",
        "value": "Box"
      },
      {
        "label": "Country of Origin",
        "value": "Made in India"
      }
    ],
    "applications": [
      "Precision fettling of castings",
      "Stainless steel grain finishing",
      "Contour belt grinding"
    ],
    "related": [
      "4-inch-sanding-disc",
      "coated-abrasive-belts",
      "emery-belt-product"
    ]
  },
  {
    "slug": "high-quality-graphite-parts",
    "name": "High Quality Graphite Parts",
    "categorySlug": "graphite-crucible",
    "price": "Price on Enquiry",
    "image": "/Product/high-quality-graphite-parts.jpg",
    "gallery": [
      "/Product/high-quality-graphite-parts-2.jpg",
      "/Product/high-quality-graphite-parts-3.png"
    ],
    "description": "Precision machined High Quality Graphite Parts and Crucibles (500g capacity) with outstanding thermal shock resistance for metal melting.",
    "specs": [
      {
        "label": "Crucibles Capacity",
        "value": "500 grams"
      },
      {
        "label": "Material",
        "value": "Graphite"
      },
      {
        "label": "Crucible Diameter(mm)",
        "value": "1mm"
      },
      {
        "label": "Crucibles Height",
        "value": "1 inch"
      },
      {
        "label": "Max Temperature",
        "value": "1000 degree Celsius"
      },
      {
        "label": "Shape",
        "value": "Cylindrical"
      },
      {
        "label": "Usage/Application",
        "value": "Industrial"
      },
      {
        "label": "Color",
        "value": "Silver"
      },
      {
        "label": "Melting Temp.",
        "value": "19 Degree Celsius"
      },
      {
        "label": "Country of Origin",
        "value": "Made in India"
      }
    ],
    "applications": [
      "Precious and non-ferrous metal melting",
      "Continuous casting dies",
      "High temperature furnace fixtures"
    ],
    "related": [
      "natural-graphite-powder",
      "natural-graphite-flakes",
      "graphite-round-rod",
      "flexible-graphite-sheet"
    ]
  },
  {
    "slug": "natural-graphite-powder",
    "name": "Natural Graphite Powder",
    "categorySlug": "graphite-crucible",
    "price": "Price on Enquiry",
    "image": "/Product/natural-graphite-powder.png",
    "gallery": [
      "/Product/natural-graphite-powder-2.png",
      "/Product/natural-graphite-powder-3.png"
    ],
    "description": "High purity Natural Graphite Powder supplied by R-Resources for refractory molds, conductive coatings, lubricants, and foundry washes.",
    "specs": [
      {
        "label": "Type",
        "value": "Steam Coal"
      },
      {
        "label": "Packaging size",
        "value": "20 Kg"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Usuage/Application",
        "value": "Industrial"
      },
      {
        "label": "Purity",
        "value": "0.8"
      },
      {
        "label": "Packaging Type",
        "value": "Packet"
      },
      {
        "label": "Form",
        "value": "Powder"
      },
      {
        "label": "Material",
        "value": "Graphite"
      },
      {
        "label": "Country of Origin",
        "value": "Made in India"
      }
    ],
    "applications": [
      "Foundry mold coatings and parting agents",
      "Dry lubricants and grease additives",
      "Conductive additives in batteries and electronics"
    ],
    "related": [
      "high-quality-graphite-parts",
      "natural-graphite-flakes",
      "flexible-graphite-sheet",
      "graphite-round-rod"
    ]
  },
  {
    "slug": "natural-graphite-flakes",
    "name": "Natural Graphite Flakes",
    "categorySlug": "graphite-crucible",
    "price": "Price on Enquiry",
    "image": "/Product/natural-graphite-flakes.webp",
    "gallery": [],
    "description": "Natural Flake Graphite featuring high crystalline carbon structure, superior thermal conductivity, and natural lubricity.",
    "specs": [
      {
        "label": "Material",
        "value": "Natural Flake Graphite"
      },
      {
        "label": "Carbon Content",
        "value": "92% - 98%"
      },
      {
        "label": "Form",
        "value": "Flakes"
      },
      {
        "label": "Thermal Conductivity",
        "value": "High"
      },
      {
        "label": "Usage/Application",
        "value": "Refractories, Crucibles, Foundry Coatings"
      },
      {
        "label": "Country of Origin",
        "value": "Made in India"
      }
    ],
    "applications": [
      "Graphite crucible manufacturing",
      "Refractory bricks",
      "Expandable graphite production"
    ],
    "related": [
      "natural-graphite-powder",
      "high-quality-graphite-parts",
      "flexible-graphite-sheet"
    ]
  },
  {
    "slug": "fiber-cloth-filter",
    "name": "Fiber Cloth Filter",
    "categorySlug": "liquid-metal-filtration-solution",
    "price": "Price on Enquiry",
    "image": "/Product/fiber-cloth-filter.png",
    "gallery": [
      "/Product/fiber-cloth-filter-2.png",
      "/Product/fiber-cloth-filter-3.png"
    ],
    "description": "High temperature silica Fiber Cloth Filter for filtering non-metallic inclusions and slag from molten aluminium and copper alloys.",
    "specs": [
      {
        "label": "Micron Ratings",
        "value": "0.1 Micron"
      },
      {
        "label": "Cloth Size",
        "value": "400 mm"
      },
      {
        "label": "Cloth Thickness",
        "value": "0.1 mm"
      },
      {
        "label": "Weave Patterns",
        "value": "Double Layer Weave"
      },
      {
        "label": "Cloth Yarn Designs",
        "value": "Multifilaments"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Maximum Operating Temperature",
        "value": "50 Deg. C"
      },
      {
        "label": "Country of Origin",
        "value": "Made in India"
      }
    ],
    "applications": [
      "Aluminium foundry filtration",
      "Copper and brass casting gates",
      "Ladle pouring spout filters"
    ],
    "related": [
      "refractories-foundry-filter",
      "ceramic-foam-filter-product"
    ]
  },
  {
    "slug": "refractories-foundry-filter",
    "name": "Refractories Foundry Filter",
    "categorySlug": "liquid-metal-filtration-solution",
    "price": "Price on Enquiry",
    "image": "/Product/refractories-foundry-filter.png",
    "gallery": [
      "/Product/refractories-foundry-filter-2.png",
      "/Product/refractories-foundry-filter-3.png"
    ],
    "description": "High duty Refractories Foundry Filter designed to withstand extreme thermal conditions during molten cast iron and steel pouring.",
    "specs": [
      {
        "label": "Filter Type",
        "value": "Suction Filters"
      },
      {
        "label": "Shape",
        "value": "Rectangular"
      },
      {
        "label": "Material",
        "value": "Polyester"
      },
      {
        "label": "Usage/Application",
        "value": "Steam Filter"
      },
      {
        "label": "Color",
        "value": "White"
      },
      {
        "label": "Portable",
        "value": "Yes"
      },
      {
        "label": "Dimension",
        "value": "40 x 40 x 15 ( L x W x H )cm"
      },
      {
        "label": "Country of Origin",
        "value": "Made in India"
      }
    ],
    "applications": [
      "Iron casting gating systems",
      "Steel foundry ladles",
      "Turbulence dampening during mold fill"
    ],
    "related": [
      "fiber-cloth-filter",
      "ceramic-foam-filter-product"
    ]
  },
  {
    "slug": "ceramic-foam-filter-product",
    "name": "Ceramic Foam Filter",
    "categorySlug": "ceramic-foam-filter",
    "price": "Price on Enquiry",
    "image": "/Product/ceramic-foam-filter.jpg",
    "gallery": [
      "/Product/ceramic-foam-filter-2.webp"
    ],
    "description": "Aluminum Oxide 5-inch Ceramic Foam Filter with 3D reticulated structure for laminar molten metal flow and high efficiency slag removal.",
    "specs": [
      {
        "label": "Length",
        "value": "5 inch"
      },
      {
        "label": "Usage/Application",
        "value": "Steam Filter"
      },
      {
        "label": "Shape",
        "value": "Round"
      },
      {
        "label": "Material",
        "value": "Aluminum Oxide"
      },
      {
        "label": "Diameter",
        "value": "2 inch"
      },
      {
        "label": "Color",
        "value": "Grey"
      },
      {
        "label": "Dimension",
        "value": "40 x 40 x 15 ( L x W x H ) cm"
      }
    ],
    "applications": [
      "Aluminium wheel and engine casting",
      "Sand mold gating systems",
      "Precision investment casting"
    ],
    "related": [
      "ceramic-fibre-blanket",
      "fiber-cloth-filter",
      "refractories-foundry-filter"
    ]
  },
  {
    "slug": "ceramic-fibre-blanket",
    "name": "Ceramic Fibre Blanket",
    "categorySlug": "ceramic-foam-filter",
    "price": "Price on Enquiry",
    "image": "/Product/ceramic-fibre-blanket.webp",
    "gallery": [],
    "description": "Refractory Ceramic Fibre Blanket offering exceptional insulating value, low thermal conductivity, and high temperature endurance up to 1260°C.",
    "specs": [
      {
        "label": "Material",
        "value": "Alumino-Silicate Ceramic Fiber"
      },
      {
        "label": "Temperature Rating",
        "value": "1260°C - 1425°C"
      },
      {
        "label": "Form",
        "value": "Roll / Blanket"
      },
      {
        "label": "Density",
        "value": "96 - 128 kg/m3"
      },
      {
        "label": "Usage/Application",
        "value": "Furnace Lining, Kiln Insulation, Foundry Heat Shields"
      },
      {
        "label": "Color",
        "value": "Pure White"
      }
    ],
    "applications": [
      "Foundry furnace door seals and lining",
      "Ladle preheater insulation",
      "High-temperature pipe wrapping"
    ],
    "related": [
      "ceramic-foam-filter-product",
      "refractories-foundry-filter",
      "fiber-cloth-filter"
    ]
  },
  {
    "slug": "flexible-graphite-sheet",
    "name": "Flexible Graphite Sheet",
    "categorySlug": "graphite-sheet",
    "price": "Price on Enquiry",
    "image": "/Product/flexible-graphite-sheet.png",
    "gallery": [
      "/Product/flexible-graphite-sheet-2.png",
      "/Product/flexible-graphite-sheet-3.png"
    ],
    "description": "High purity Flexible Expanded Graphite Sheet for gaskets, heat shields, high-temperature thermal barriers, and electrical grounding.",
    "specs": [
      {
        "label": "Finishing",
        "value": "Fine Finish"
      },
      {
        "label": "Thickness",
        "value": "0.5 mm"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Vaccum",
        "value": "710 mm/HG"
      },
      {
        "label": "Material",
        "value": "Graphite"
      },
      {
        "label": "pH Value",
        "value": "14"
      },
      {
        "label": "Country of Origin",
        "value": "Made in India"
      },
      {
        "label": "Pressure",
        "value": "High Pressure"
      },
      {
        "label": "Packging Type",
        "value": "Packet"
      }
    ],
    "applications": [
      "Exhaust and engine gasket manufacturing",
      "Electronic heat spreaders",
      "High pressure furnace seals"
    ],
    "related": [
      "high-quality-graphite-parts",
      "graphite-round-rod",
      "natural-graphite-powder"
    ]
  },
  {
    "slug": "graphite-round-rod",
    "name": "Graphite Round Rod",
    "categorySlug": "graphite-rods",
    "price": "Price on Enquiry",
    "image": "/Product/graphite-round-rod.png",
    "gallery": [
      "/Product/graphite-round-rod-2.png",
      "/Product/graphite-round-rod-3.png"
    ],
    "description": "Fine grain high-density Graphite Round Rod engineered for EDM electrodes, degassing rotors, stirrers, and metallurgical heating elements.",
    "specs": [
      {
        "label": "Diameter",
        "value": "5 mm"
      },
      {
        "label": "Finishing",
        "value": "Fine Finish"
      },
      {
        "label": "Material",
        "value": "Graphite"
      },
      {
        "label": "Color",
        "value": "Black"
      },
      {
        "label": "Sizes",
        "value": "3ft"
      },
      {
        "label": "Shape",
        "value": "Cylindrical"
      },
      {
        "label": "Country of Origin",
        "value": "Made in India"
      },
      {
        "label": "Packaging Type",
        "value": "Box"
      },
      {
        "label": "Max Length",
        "value": "50mm"
      }
    ],
    "applications": [
      "Degassing rotor shafts in aluminium melting",
      "EDM machining electrodes",
      "Furnace heating fixtures and susceptors"
    ],
    "related": [
      "high-quality-graphite-parts",
      "flexible-graphite-sheet",
      "aluminium-degassing-machine"
    ]
  },
  {
    "slug": "aluminium-degassing-machine",
    "name": "Aluminium Degassing Machine",
    "categorySlug": "vacuum-chamber",
    "price": "Price on Enquiry",
    "image": "/Product/aluminium-degassing-machine.png",
    "gallery": [
      "/Product/aluminium-degassing-machine-2.png",
      "/Product/aluminium-degassing-machine-3.png"
    ],
    "description": "Automatic Aluminium Degassing Machine designed to inject inert gas (nitrogen/argon) through rotary impeller to eliminate hydrogen porosity and slag.",
    "specs": [
      {
        "label": "Automation Grade",
        "value": "Automatic"
      },
      {
        "label": "Production Capacity",
        "value": "1 Ton"
      },
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Voltage",
        "value": "240V"
      },
      {
        "label": "Weight",
        "value": "50 Kg"
      },
      {
        "label": "Frequency",
        "value": "50 Hz"
      },
      {
        "label": "Phase",
        "value": "Single Phase"
      },
      {
        "label": "Country of Origin",
        "value": "Made in India"
      }
    ],
    "applications": [
      "Foundry ladle degassing",
      "Secondary aluminium smelting refinement",
      "Zero-porosity aerospace casting preparation"
    ],
    "related": [
      "graphite-round-rod",
      "foundry-fluxes-chemicals",
      "aluminium-sand-casting-product"
    ]
  },
  {
    "slug": "round-steel-shot",
    "name": "Round Steel Shot",
    "categorySlug": "steel-shots",
    "price": "Price on Enquiry",
    "image": "/Product/round-steel-shot.png",
    "gallery": [
      "/Product/round-steel-shot-2.png",
      "/Product/round-steel-shot-3.png"
    ],
    "description": "Premium Round Steel Shot for shot blasting, scale removal, deburring, and shot peening fatigue strength enhancement on cast metal parts.",
    "specs": [
      {
        "label": "Packaging Size",
        "value": "1 kg"
      },
      {
        "label": "Size",
        "value": "S 70"
      },
      {
        "label": "Machine Type",
        "value": "Table Type"
      },
      {
        "label": "Packaging Type",
        "value": "Packet"
      },
      {
        "label": "Material",
        "value": "Steel"
      },
      {
        "label": "Shape",
        "value": "Round"
      },
      {
        "label": "Color",
        "value": "Silver"
      },
      {
        "label": "Diameter",
        "value": "3mm"
      },
      {
        "label": "Country of Origin",
        "value": "Made in India"
      },
      {
        "label": "Technique",
        "value": "Hot Rolled"
      }
    ],
    "applications": [
      "Castings shot blasting descaling",
      "Shot peening of gears and springs",
      "Surface profiling before protective coating"
    ],
    "related": [
      "cosmos-zinc-galva",
      "zinc-metal-spray",
      "emery-belt-product",
      "coated-abrasive-belts"
    ]
  },
  {
    "slug": "cosmos-zinc-galva",
    "name": "Cosmos Zinc Galva",
    "categorySlug": "steel-shots",
    "price": "Price on Enquiry",
    "image": "/Product/cosmos-zinc-galva.jpg",
    "gallery": [
      "/Product/cosmos-zinc-galva-2.jpg",
      "/Product/cosmos-zinc-galva-3.jpg",
      "/Product/cosmos-zinc-galva-4.jpg"
    ],
    "description": "Cosmos Zinc Galva Cold Galvanizing Spray for sacrificial cathodic corrosion protection on fabricated steel, welds, and outdoor structures.",
    "specs": [
      {
        "label": "Brand",
        "value": "Cosmos"
      },
      {
        "label": "Packaging Size",
        "value": "400ml"
      },
      {
        "label": "Packaging Type",
        "value": "Bottle"
      },
      {
        "label": "Paint Color",
        "value": "Zinc"
      },
      {
        "label": "Usage/Application",
        "value": "Metal"
      },
      {
        "label": "Shelf Life",
        "value": "36 Months"
      }
    ],
    "applications": [
      "Weld seam touch-up after fabrication",
      "Galvanized sheet repairs",
      "Heavy-duty marine and industrial rust protection"
    ],
    "related": [
      "zinc-metal-spray",
      "round-steel-shot",
      "coated-abrasive-belts"
    ]
  },
  {
    "slug": "zinc-metal-spray",
    "name": "Zinc Metal Spray",
    "categorySlug": "steel-shots",
    "price": "Price on Enquiry",
    "image": "/Product/zinc-metal-spray.jpg",
    "gallery": [],
    "description": "High purity Zinc Metal Spray providing long-lasting corrosion-resistant barrier and cold-galvanized metallic protective finish.",
    "specs": [
      {
        "label": "Packaging Size",
        "value": "100 mL"
      },
      {
        "label": "Color",
        "value": "Grey"
      },
      {
        "label": "Usage/Application",
        "value": "Industrial"
      },
      {
        "label": "Surface Of Application",
        "value": "Polished"
      },
      {
        "label": "Packaging Type",
        "value": "Bottle"
      },
      {
        "label": "Shelf Life",
        "value": "12 Months"
      },
      {
        "label": "Finish",
        "value": "High Gloss"
      },
      {
        "label": "Country of Origin",
        "value": "Made in India"
      }
    ],
    "applications": [
      "Automotive chassis protection",
      "Industrial steel structures",
      "Treated casting surface preservation"
    ],
    "related": [
      "cosmos-zinc-galva",
      "round-steel-shot",
      "aluminium-alloy-castings"
    ]
  },
  {
    "slug": "sample-cutting-machine",
    "name": "Sample Cutting Machine",
    "categorySlug": "sample-cutting-machine",
    "price": "Price on Enquiry",
    "image": "/Product/sample-cutting-machine.png",
    "gallery": [
      "/Product/sample-cutting-machine-2.png",
      "/Product/sample-cutting-machine-3.png"
    ],
    "description": "Heavy-duty Industrial Sample Cutting Machine manufactured by R-Resources, engineered for precise, burr-free metallurgical sample cutting with high-capacity 2HP 3-phase AC motor and integrated coolant circulation system.",
    "specs": [
      {
        "label": "Cutting Capacity",
        "value": "Up to 60mm Dia"
      },
      {
        "label": "Motor Power",
        "value": "2HP 3 Phase AC Motor"
      },
      {
        "label": "Cutoff Wheel Size",
        "value": "10-inch Dia"
      },
      {
        "label": "Spindle Speed",
        "value": "1400 / 2800 RPM"
      },
      {
        "label": "Coolant System",
        "value": "Coolant circulation system for burr free sample cutting"
      },
      {
        "label": "Machine Size",
        "value": "700 x 600 x 600 mm"
      },
      {
        "label": "Controls",
        "value": "Cutting ON, OFF, and Pump ON Push Buttons"
      },
      {
        "label": "Application / Usage",
        "value": "Metallographic sample preparation, foundry testing & quality inspection"
      },
      {
        "label": "Brand",
        "value": "R-Resources"
      },
      {
        "label": "Country of Origin",
        "value": "Made in India"
      }
    ],
    "applications": [
      "Metallographic specimen preparation for microstructure examination",
      "Burr-free cutting of steel, cast iron, aluminium, and alloys",
      "Quality control and metallurgical laboratory testing",
      "Foundry melt sample preparation for spectrometry"
    ],
    "features": [
      "Heavy-duty rigid steel body construction for vibration-free cutting",
      "Ergonomic handle lever for smooth and controlled feed",
      "Inspection view window with splash-proof door design",
      "High-pressure coolant circulation system prevents thermal damage to specimens"
    ],
    "related": [
      "aluminium-degassing-machine",
      "sanding-disc-for-spectro-meter",
      "high-quality-graphite-parts"
    ]
  }
];

export const getCategoryBySlug = (slug) => categories.find((c) => c.slug === slug);
export const getProductBySlug = (slug) => products.find((p) => p.slug === slug);
export const getProductsByCategory = (categorySlug) =>
  products.filter((p) => p.categorySlug === categorySlug);
export const getAllProducts = () => products;
