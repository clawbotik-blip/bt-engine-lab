export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  sku: string;
  category: string;
  categorySlug: string;
  shortDescription: string;
  description: string;
  applications: string[];
  specifications: Record<string, string>;
  imageUrl: string;
  featured: boolean;
  datasheetUrl?: string;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
  blurb: string;
  imageUrl: string;
}

export const categories: Category[] = [
  {
    slug: "lab-equipment",
    name: "Lab Equipment",
    description: "Precision instruments for every bench — centrifuges, thermal cyclers, spectrophotometers, imaging systems, and general lab apparatus sourced from leading manufacturers.",
    icon: "flask",
    blurb: "Centrifuges, thermal cyclers, imaging systems, and general bench instruments.",
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
  },
  {
    slug: "proteomics-instruments",
    name: "Proteomics Instruments",
    description: "End-to-end instrumentation for protein characterization, quantification, and structural analysis — from 2D gel systems to advanced LC-MS platforms.",
    icon: "dna",
    blurb: "2D gel systems, protein analyzers, and quantification platforms.",
    imageUrl: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=800&q=80",
  },
  {
    slug: "chromatography",
    name: "Chromatography",
    description: "HPLC, UHPLC, and FPLC systems, columns, and accessories for protein purification, metabolite profiling, and small-molecule analysis.",
    icon: "columns",
    blurb: "HPLC, FPLC, columns, and purification accessories.",
    imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80",
  },
  {
    slug: "mass-spectrometry",
    name: "Mass Spectrometry Accessories",
    description: "Consumables and accessories for LC-MS/MS workflows — spray tips, sample plates, calibration standards, and system maintenance kits.",
    icon: "atom",
    blurb: "Spray tips, sample plates, calibration standards, and MS maintenance kits.",
    imageUrl: "https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?w=800&q=80",
  },
  {
    slug: "consumables-reagents",
    name: "Consumables & Reagents",
    description: "High-purity buffers, gels, antibodies, and lab plasticware — everything needed to keep your workflows running without interruption.",
    icon: "vial",
    blurb: "Buffers, antibodies, gels, and lab plasticware.",
    imageUrl: "https://images.unsplash.com/photo-1563991655280-cb95c4bc47b2?w=800&q=80",
  },
  {
    slug: "sample-prep",
    name: "Sample Prep",
    description: "Protein extraction kits, digestion reagents, desalting columns, and cleanup solutions to ensure the highest-quality input for downstream analysis.",
    icon: "tube",
    blurb: "Extraction kits, digestion reagents, and cleanup solutions.",
    imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80",
  },
];

export const products: Product[] = [
  {
    id: "pro-001",
    slug: "ultra-proteome-analyzer-x500",
    name: "UltraProteome Analyzer X500",
    brand: "ProteoTech",
    sku: "PTA-X500-001",
    category: "Proteomics Instruments",
    categorySlug: "proteomics-instruments",
    shortDescription: "High-throughput protein identification system with automated sample handling and integrated database search.",
    description: "The UltraProteome Analyzer X500 delivers end-to-end proteomics workflows in a single, integrated platform. Designed for core facilities and high-throughput research labs, it combines automated nano-LC separation with a high-resolution mass analyzer and intuitive data processing software — enabling confident protein identification from complex biological matrices.",
    applications: ["Protein identification", "Quantitative proteomics", "Biomarker discovery", "Post-translational modification analysis"],
    specifications: {
      "Mass Range": "50–8,000 m/z",
      "Mass Accuracy": "< 2 ppm RMS",
      "Resolution": "≥ 60,000 FWHM at m/z 200",
      "Sensitivity": "< 10 amol for BSA digest",
      "Scan Speed": "Up to 40 Hz",
      "Sample Throughput": "Up to 192 samples / 24 hr",
    },
    imageUrl: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=800&q=80",
    featured: true,
  },
  {
    id: "pro-002",
    slug: "2d-gel-electrophoresis-system-pg2000",
    name: "PG2000 2D Gel Electrophoresis System",
    brand: "SepTech",
    sku: "ST-PG2000",
    category: "Proteomics Instruments",
    categorySlug: "proteomics-instruments",
    shortDescription: "Complete IEF and SDS-PAGE system for high-resolution 2D protein separation with integrated imaging.",
    description: "The PG2000 is a complete, walk-up 2D gel electrophoresis solution. The system integrates isoelectric focusing, SDS-PAGE separation, and gel imaging into a unified workflow, dramatically reducing hands-on time while improving reproducibility across runs.",
    applications: ["Proteome profiling", "Differential expression analysis", "Post-translational modification mapping"],
    specifications: {
      "IEF Capacity": "12 IPG strips simultaneously",
      "IPG Strip Lengths": "7, 11, 17, 24 cm",
      "pH Range": "3–11 (linear and non-linear)",
      "SDS-PAGE Format": "1D vertical, up to 20×20 cm",
      "Imaging Resolution": "100 µm pixel",
    },
    imageUrl: "https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?w=800&q=80",
    featured: false,
  },
  {
    id: "eq-001",
    slug: "centrifuge-ultra-24k",
    name: "UltraSpin 24K Refrigerated Centrifuge",
    brand: "SpinTech",
    sku: "SPN-24K-R",
    category: "Lab Equipment",
    categorySlug: "lab-equipment",
    shortDescription: "24,000 × g refrigerated microcentrifuge with 36-position rotor and touchscreen control.",
    description: "The UltraSpin 24K is engineered for demanding biochemistry and molecular biology applications. Its brushless motor reaches maximum speed in under 10 seconds, and the precisely controlled refrigeration system maintains sample integrity at temperatures as low as −10°C.",
    applications: ["Nucleic acid pelleting", "Protein precipitation", "Cell fractionation", "Organelle isolation"],
    specifications: {
      "Max Speed": "24,000 rpm",
      "Max RCF": "65,000 × g",
      "Temperature Range": "−10°C to +40°C",
      "Rotor Capacity": "36 × 1.5/2.0 mL",
      "Noise Level": "< 52 dB",
    },
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    featured: true,
  },
  {
    id: "eq-002",
    slug: "thermal-cycler-quantplex96",
    name: "QuantPlex 96 Real-Time PCR System",
    brand: "BioAmp",
    sku: "BA-QP96",
    category: "Lab Equipment",
    categorySlug: "lab-equipment",
    shortDescription: "96-well real-time PCR system with six-channel fluorescence detection and cloud-connected data management.",
    description: "The QuantPlex 96 combines fast thermal cycling with six-channel optical detection to support all major real-time PCR chemistries. Integrated cloud connectivity enables seamless data sharing, protocol templating, and remote run monitoring.",
    applications: ["Gene expression", "SNP genotyping", "Copy number variation", "Pathogen detection"],
    specifications: {
      "Block Format": "96-well (0.1 mL or 0.2 mL)",
      "Detection Channels": "6 (FAM, HEX, ROX, Cy5, Cy5.5, SYBR)",
      "Ramping Rate": "≥ 6°C/s (heating), ≥ 4°C/s (cooling)",
      "Uniformity": "±0.1°C across block",
      "Dynamic Range": "10 decades",
    },
    imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80",
    featured: false,
  },
  {
    id: "chr-001",
    slug: "nexera-uhplc-system",
    name: "Nexera UHPLC System",
    brand: "ChromPure",
    sku: "CP-NEX-UHPLC",
    category: "Chromatography",
    categorySlug: "chromatography",
    shortDescription: "Ultra-high-performance LC system for proteomics and metabolomics, compatible with MS ionization sources.",
    description: "The Nexera UHPLC delivers sub-2-µm particle column compatibility, ultra-low dwell volume, and gradient accuracy that eliminates run-to-run variability. MS-ready design with minimal dead volume makes it the preferred front-end for LC-MS/MS proteomics workflows.",
    applications: ["Nano-LC proteomics", "Metabolomics profiling", "Protein intact mass analysis", "Peptide mapping"],
    specifications: {
      "Pressure Range": "Up to 130 MPa (19,000 psi)",
      "Flow Rate": "0.001–10 mL/min",
      "Gradient Delay Volume": "< 25 µL",
      "Pump Accuracy": "± 0.1%",
      "Detector": "Dual-wavelength UV, optional fluorescence",
    },
    imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80",
    featured: true,
  },
  {
    id: "sp-001",
    slug: "protein-extraction-kit-total",
    name: "TotalExtract Protein Extraction Kit",
    brand: "BioPrep",
    sku: "BP-TPEX-100",
    category: "Sample Prep",
    categorySlug: "sample-prep",
    shortDescription: "Universal protein extraction kit for cells, tissue, and biofluid samples — optimized for downstream LC-MS and 2D gel workflows.",
    description: "TotalExtract delivers reproducible, high-yield protein extraction from a wide variety of biological matrices without detergent contamination that could compromise MS ionization. The proprietary lysis buffer formulation maintains native-like protein integrity while enabling complete extraction of cytoplasmic, membrane, and nuclear fractions.",
    applications: ["Proteomic sample prep", "Western blot", "ELISA", "2D gel input"],
    specifications: {
      "Yield (Cell Lysate)": "≥ 3 mg/mL from 10^6 HeLa cells",
      "Recovery": "> 95% for most cytoplasmic proteins",
      "MS Compatibility": "Yes — detergent-free formulation",
      "Sample Input": "Cells, fresh/frozen tissue, serum, plasma",
      "Reactions": "100 extractions",
    },
    imageUrl: "https://images.unsplash.com/photo-1563991655280-cb95c4bc47b2?w=800&q=80",
    featured: true,
  },
  {
    id: "ms-001",
    slug: "ms-spray-tip-nano-emitter-pack",
    name: "NanoSpray Emitter Tips — Pack of 100",
    brand: "MSAccess",
    sku: "MSA-NSE-100",
    category: "Mass Spectrometry Accessories",
    categorySlug: "mass-spectrometry",
    shortDescription: "Fused-silica nano-ESI emitter tips for online LC-MS/MS; 10 µm tip ID for optimal spray stability.",
    description: "MSAccess NanoSpray emitter tips are manufactured from optical-grade fused silica with laser-pulled 10 µm internal diameter tips for stable Taylor cone formation at nL/min flow rates. Lot-to-lot consistency ensures reproducible signal across extended sample batches.",
    applications: ["Nano-LC-MS/MS proteomics", "Metabolomics", "Native MS", "Top-down proteomics"],
    specifications: {
      "Tip ID": "10 µm",
      "OD": "360 µm",
      "Material": "Fused silica",
      "Coating": "Uncoated / PicoTip® compatible",
      "Pack Size": "100 tips",
      "Flow Rate": "Optimized for 50–500 nL/min",
    },
    imageUrl: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=800&q=80",
    featured: false,
  },
  {
    id: "cr-001",
    slug: "protease-inhibitor-cocktail-100x",
    name: "ProteaseBlock Cocktail — 100×, 1 mL",
    brand: "BioPrep",
    sku: "BP-PBI-100X",
    category: "Consumables & Reagents",
    categorySlug: "consumables-reagents",
    shortDescription: "Broad-spectrum protease inhibitor cocktail for mammalian cell and tissue extracts.",
    description: "ProteaseBlock 100× is a ready-to-use, DMSO-soluble cocktail providing broad-spectrum inhibition of serine, cysteine, aspartyl, and metallo-proteases. Compatible with standard lysis buffers and does not interfere with common downstream assays including Western blot, ELISA, and mass spectrometry.",
    applications: ["Protein extraction", "Cell lysis", "Tissue homogenization", "Immunoprecipitation"],
    specifications: {
      "Inhibitors Included": "AEBSF, aprotinin, bestatin, E-64, leupeptin, pepstatin A",
      "Working Concentration": "1× (dilute 1:100)",
      "Solvent": "DMSO",
      "Storage": "−20°C, stable 24 months",
      "Volume": "1 mL (makes 100 mL working solution)",
    },
    imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80",
    featured: false,
  },
];

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, limit);
}
