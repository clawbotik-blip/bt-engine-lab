"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Product } from "@/lib/products";

interface Props {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: Props) {
  const firstSpec = Object.entries(product.specifications)[0];

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group flex flex-col bg-white rounded-xl border border-slate-100 shadow-card overflow-hidden card-hover"
    >
      {/* Image */}
      <Link href={`/products/${product.slug}`} className="relative block h-48 bg-slate-50 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-inset">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      {/* Content */}
      <div className="flex-1 flex flex-col p-5">
        <p className="text-xs font-medium text-slate-400 mb-1">{product.brand}</p>
        <Link href={`/products/${product.slug}`} className="group/link focus-visible:outline-none">
          <h3 className="font-semibold text-brand-navy leading-snug mb-2 group-hover/link:text-cobalt-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mb-3">
          {product.shortDescription}
        </p>

        {firstSpec && (
          <p className="text-xs text-slate-400">
            <span className="font-medium text-slate-500">{firstSpec[0]}:</span>{" "}
            {firstSpec[1]}
          </p>
        )}

        <div className="mt-auto pt-4 flex items-center justify-between">
          <Link
            href={`/products/${product.slug}`}
            className="text-xs font-medium text-slate-500 hover:text-brand-navy transition-colors"
          >
            View details
          </Link>
          <Link
            href={`/request-quote?product=${encodeURIComponent(product.name)}&sku=${product.sku}`}
            className="inline-flex items-center rounded-md bg-cyan-500 px-3.5 py-1.5 text-xs font-semibold text-brand-navy shadow-sm transition-all duration-200 hover:bg-cyan-400 hover:-translate-y-px hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
