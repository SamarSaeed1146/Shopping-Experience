import Link from "next/link";
import logo from "@/public/shopping-logo.png"
import Image from "next/image";
import { getCart } from "../wix-api/cart";

export default async function Navbar() {
  const cart = await getCart();

  const totalQuantity =
    cart?.lineItems.reduce((acc, item) => acc + (item.quantity || 0), 0) || 0;

  return (
    <header className="bg-background shadow-sm">
      <div className="max-w-7xl mx-auto p-5 flex justify-between items-center gap-5">
        <Link href="/"className="flex items-center gap-4">
          <Image src={logo} alt="Shopping Logo" width={40} height={40} />
          <span className="text-xl font-bold">Shopping Experience</span>
        </Link>
        {totalQuantity} items in cart
      </div>
    </header>
  );
}
