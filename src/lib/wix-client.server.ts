import { Tokens } from "@wix/sdk";
import { getWixClient } from "./wix-client.base";
import { WIX_SESSION_COOKIE } from "./constants";
import { cookies } from "next/headers";
import { cache } from "react";

export const getWixServerClient = cache(() => {
  let tokens: Tokens | undefined;

  try {
    tokens = JSON.parse(cookies().get(WIX_SESSION_COOKIE)?.value || "{}");
  } catch (error) {}

  return getWixClient(tokens);
});
