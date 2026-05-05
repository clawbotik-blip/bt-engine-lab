import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-32 pb-24 flex flex-col items-center justify-center text-center px-6 min-h-[60vh]">
      <p className="eyebrow mb-4">404</p>
      <h1 className="text-4xl font-bold text-brand-navy mb-4">Page Not Found</h1>
      <p className="text-slate-500 mb-8 max-w-sm">
        This page doesn&apos;t exist or may have moved. Start from the homepage or search our catalog.
      </p>
      <div className="flex gap-4">
        <Link href="/"         className="btn-primary">Go Home</Link>
        <Link href="/products" className="btn-outline">Browse Products</Link>
      </div>
    </div>
  );
}
