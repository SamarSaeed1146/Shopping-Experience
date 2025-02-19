import { getProductBySlug } from "@/src/wix-api/product";
import { notFound } from "next/navigation";
import ProductDetails from "./ProductDetails";
import { Metadata } from "next";
import { delay } from "@/src/lib/utils";
import { getWixServerClient } from "@/src/lib/wix-client.server";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params: { slug },
}: PageProps): Promise<Metadata> {
  const product = await getProductBySlug(getWixServerClient(), slug);

  if (!product?._id) notFound();

  const mainImage = product.media?.mainMedia?.image;

  return {
    title: product.name,
    description: "Get this product on Shopping Experience",
    openGraph: {
      images: mainImage?.url
        ? [
            {
              url: mainImage?.url,
              width: mainImage?.width,
              height: mainImage?.height,
              alt: mainImage?.altText || "",
            },
          ]
        : undefined,
    },
  };
}

export default async function Page({ params: { slug } }: PageProps) {
  await delay(2000);

  const product = await getProductBySlug(getWixServerClient(), slug);

  if (!product?._id) notFound();
  {
    return (
      <main className="mx-auto max-w-7xl space-y-10 px-5 py-10">
        <ProductDetails product={product} />
      </main>
    );
  }
}
