import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Header1 } from "@/components/ui/header";
import { toCategorySlug, toTitleCase } from "@/lib/categorySeo";
import { absoluteUrl, productCategoryDetails, siteConfig } from "@/lib/seo";

const categoryProducts = [
  {
    _id: "category-medicines",
    name: "Medicine Availability Support",
    category: "Medicines",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=85",
    description: "Share your prescription or medicine name and our team will help confirm availability.",
  },
  {
    _id: "category-wellness",
    name: "Healthcare Essentials",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=900&q=85",
    description: "Daily wellness, personal care, hygiene, and family healthcare products.",
  },
  {
    _id: "category-devices",
    name: "Home Health Devices",
    category: "Devices",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=85",
    description: "Basic health monitoring devices and home-care products.",
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const slug = toCategorySlug(decodeURIComponent(category));
  const categoryDetail = productCategoryDetails.find((item) => item.slug === slug);
  const displayCategory = categoryDetail?.name ?? toTitleCase(slug.replace(/-/g, " "));
  const canonicalPath = `/products/category/${categoryDetail?.slug ?? slug}`;
  const title = `${displayCategory} in Moradabad`;
  const description = categoryDetail?.description ?? `Explore ${displayCategory} support at Jay Ambey Medical Store in Moradabad.`;

  return {
    title,
    description,
    keywords: [
      `${displayCategory} Moradabad`,
      `${displayCategory} near me`,
      "Jay Ambey Medical Store",
      "medical store in Moradabad",
    ],
    alternates: { canonical: canonicalPath },
    openGraph: {
      title,
      description,
      url: absoluteUrl(canonicalPath),
      type: "website",
      siteName: siteConfig.name,
      images: [absoluteUrl("/medical-logo.svg")],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/medical-logo.svg")],
    },
  };
}

export default async function ProductCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const slug = toCategorySlug(decodeURIComponent(category));
  const categoryDetail = productCategoryDetails.find((item) => item.slug === slug);
  const displayCategory = categoryDetail?.name ?? toTitleCase(slug.replace(/-/g, " "));

  return (
    <main className="bg-white">
      <Header1 />

      <section className="relative w-full py-10 md:py-20 bg-gradient-to-r from-slate-800 via-emerald-700 to-slate-800 text-white px-4 -mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-2xl md:text-5xl font-bold mb-4">{displayCategory} at Jay Ambey Medical Store</h1>
          <p className="text-sm md:text-xl text-emerald-50">
            {categoryDetail?.description ?? "Explore healthcare products and request availability support from our team."}
          </p>
        </div>
      </section>

      <section className="py-8 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <p className="text-slate-700 font-medium">Common healthcare categories available.</p>
            <Link href="/products" className="text-emerald-700 hover:text-emerald-800 font-semibold">
              View all categories
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {categoryProducts.map((product) => (
              <ProductCard key={product._id} {...product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold text-gray-700 mb-4">
            Need a Specific Medicine?
          </h2>
          <p className="text-slate-700 mb-6 md:text-lg">
            Send the product name or prescription and our team will confirm availability.
          </p>
          <Link href="/quote" className="inline-flex bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition">
            Request Medicine
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
