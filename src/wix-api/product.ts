import { getWixClient } from "../lib/wix-client.base";

type ProductsSort = "last_updated" | "price asc" | "price desc";

interface QueryProductsFilter {
  collectionIds?: string[] | string;
  sort?: ProductsSort;
}

export async function queryProducts({
  collectionIds,
  sort = "last_updated",
}: QueryProductsFilter) {
  const wixClient = getWixClient();

  let query = wixClient.products.queryProducts();

  const collectionIdsArray = collectionIds
    ? Array.isArray(collectionIds)
      ? collectionIds
      : [collectionIds]
    : [];

  if (collectionIdsArray.length > 0) {
    query = query.hasSome("collectionIds", collectionIdsArray);
  }

  switch (sort) {
    case "price asc":
      query = query.ascending("price");
      break;
    case "price desc":
      query = query.descending("price");
      break;
    case "last_updated":
      query = query.descending("lastUpdated");
      break;
  }

  return await query.find();
}

export async function getProductBySlug(slug: string) {
  const wixClient = getWixClient();
  const { items } = await wixClient.products
    .queryProducts()
    .eq("slug", slug)
    .find();

  const product = items[0];

  if (!product || !product.visible) {
    return null;
  }

  return product;
}
