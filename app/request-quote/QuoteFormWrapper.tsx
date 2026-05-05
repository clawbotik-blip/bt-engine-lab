"use client";

import { useSearchParams } from "next/navigation";
import QuoteForm from "@/components/QuoteForm";

export default function QuoteFormWrapper() {
  const searchParams  = useSearchParams();
  const productParam  = searchParams.get("product") ?? "";
  const skuParam      = searchParams.get("sku")     ?? "";
  const prefill       = productParam ? `${productParam}${skuParam ? ` (${skuParam})` : ""}` : "";

  return <QuoteForm prefillProduct={prefill} />;
}
