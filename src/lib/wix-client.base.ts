import { env } from "@/env";
import {
  recommendations,
  orders,
  currentCart,
  checkout,
  backInStockNotifications,
} from "@wix/ecom";
import { files } from "@wix/media";
import { members } from "@wix/members";
import { redirects } from "@wix/redirects";
import { reviews } from "@wix/reviews";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";

export function getWixClient() {
  return createClient({
    modules: {
      products,
      collections,
      checkout,
      currentCart,
      recommendations,
      orders,
      backInStockNotifications,
      files,
      members,
      redirects,
      reviews,
    },
    auth: OAuthStrategy({
      clientId: env.NEXT_PUBLIC_WIX_CLIENT_ID,
    }),
  });
}
