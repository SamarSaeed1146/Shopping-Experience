import Link from "next/link";
import logo from "@/public/shopping-logo.png";
import Image from "next/image";
import { getCart } from "../wix-api/cart";
import { getWixServerClient } from "../lib/wix-client.server";
import ShoppingCartButton from "./ShoppingCartButton";

export default async function Navbar() {
  const cart = await getCart(getWixServerClient());

  const totalQuantity =
    cart?.lineItems.reduce((acc, item) => acc + (item.quantity || 0), 0) || 0;

  return (
    <header className="bg-background shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 p-5">
        <Link href="/" className="flex items-center gap-4">
          <Image src={logo} alt="Shopping Logo" width={40} height={40} />
          <span className="text-xl font-bold">Shopping Experience</span>
        </Link>
        <ShoppingCartButton initialData={cart} />
      </div>
    </header>
  );
}
