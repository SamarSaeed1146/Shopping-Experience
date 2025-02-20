"use client";

import { currentCart } from "@wix/ecom";
import { useCart } from "../hooks/cart";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { ShoppingCartIcon } from "lucide-react";

interface ShoppingCartButtonProps {
  initialData: currentCart.Cart | null;
}

export default function ShoppingCartButton({
  initialData,
}: ShoppingCartButtonProps) {
  const [sheetOpen, setSheetOpen] = useState(false);

  const cartQuary = useCart(initialData);

  const totalQuantity =
    cartQuary.data?.lineItems?.reduce(
      (acc, item) => acc + (item.quantity || 0),
      0,
    ) || 0;

  return (
    <div className="relative">
      <Button variant="ghost" size="icon" onClick={() => setSheetOpen(true)}>
        <ShoppingCartIcon />
        <span className="absolute right-0 top-0 flex size-5 items-center justify-center bg-primary text-xs text-primary-foreground rounded-xl">
          {totalQuantity < 10 ? totalQuantity : "9+"}
        </span>
      </Button>
    </div>
  );
}
