"use client";

import { currentCart } from "@wix/ecom";
import {
  useCart,
  useRemoveCartItem,
  useUpdateCartItemQuantity,
} from "../hooks/cart";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Loader2, ShoppingCartIcon, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../components/ui/sheet";
import Link from "next/link";
import WixImage from "../components/WixImage";

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
    <>
      <div className="relative">
        <Button variant="ghost" size="icon" onClick={() => setSheetOpen(true)}>
          <ShoppingCartIcon />
          <span className="absolute right-0 top-0 flex size-5 items-center justify-center rounded-xl bg-primary text-xs text-primary-foreground">
            {totalQuantity < 10 ? totalQuantity : "9+"}
          </span>
        </Button>
      </div>
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent className="flex flex-col sm:max-w-lg">
          <SheetHeader>
            <SheetTitle>
              Your Cart{" "}
              <span className="text-base">
                ({totalQuantity}
                {totalQuantity === 1 ? " item" : " items"})
              </span>
            </SheetTitle>
          </SheetHeader>
          <div className="flex grow flex-col space-y-5 overflow-y-auto pt-1">
            <ul className="space-y-5">
              {cartQuary.data?.lineItems?.map((item) => (
                <ShoppingCartItems
                  key={item._id}
                  item={item}
                  onProductIdLinkClicked={() => setSheetOpen(false)}
                />
              ))}
            </ul>
            {cartQuary.isPending && (
              <Loader2 className="mx-auto animate-spin" />
            )}
            {cartQuary.error && (
              <p className="text-destructive">{cartQuary.error.message}</p>
            )}
            {!cartQuary.isPending && cartQuary.data?.lineItems?.length && (
              <div className="flex items-center justify-center text-center">
                <div className="spay1.5">
                  <p className="text-lg font-semibold">Your Cart is empty</p>
                  <Link
                    href="/shop"
                    className="text-primary hover:underline"
                    onClick={() => setSheetOpen(false)}
                  >
                    Continue Shopping Now
                  </Link>
                </div>
              </div>
            )}
          </div>
          <hr />
          <div className="flex items-center justify-between gap-5">
            <div className="space-y-0.5">
              <p className="text-sm">Subtotal amount:</p>
              <p className="font-bold">
                {/* @ts-expect-error */}
                {cartQuary.data?.subtotal?.formattedConvertedAmount}
              </p>
              <p className="text-sm text-muted-foreground">
                Shipping and taxes calculated at checkout
              </p>
            </div>
            <Button size="lg" disabled={!totalQuantity || cartQuary.isFetching}>
              Checkout
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

interface ShippingCartItemsProps {
  item: currentCart.LineItem;
  onProductIdLinkClicked: () => void;
}

function ShoppingCartItems({
  item,
  onProductIdLinkClicked,
}: ShippingCartItemsProps) {
  const updateQuantityMutation = useUpdateCartItemQuantity();

  const removeItemMutation = useRemoveCartItem();

  const productId = item._id;

  if (!productId) return null;

  const slug = item.url?.split("/").pop();

  const quantityLimitReached =
    !!item.quantity &&
    !!item.availability?.quantityAvailable &&
    item.quantity >= item.availability.quantityAvailable;

  return (
    <li className="flex items-center gap-3">
      <div className="relative size-fit flex-none">
        <Link href={`/product/${slug}`} onClick={onProductIdLinkClicked}>
          <WixImage
            mediaIdentifier={item.image}
            width={110}
            height={110}
            alt={item.productName?.translated || "Product image"}
            className="flex-none bg-secondary"
          />
        </Link>
        <button
          className="absolute -right-1 -top-1 rounded-full border bg-background p-0.5"
          onClick={() => removeItemMutation.mutate(productId)}
        >
          <X className="size-3" />
        </button>
      </div>
      <div className="space-y-1.5 text-sm">
        <Link href={`/product/${slug}`} onClick={onProductIdLinkClicked}>
          <p className="font-bold">{item.productName?.translated || "Items"}</p>
        </Link>
        {!!item.descriptionLines?.length && (
          <p>
            {item.descriptionLines
              ?.map(
                (line) =>
                  line.colorInfo?.translated || line.plainText?.translated,
              )
              .join(", ")}
          </p>
        )}
        <div className="flex items-center gap-2">
          {item.quantity} x {item.price?.formattedConvertedAmount}
          {item.fullPrice && item.fullPrice.amount !== item.price?.amount && (
            <span className="text-muted-foreground line-through">
              {item.fullPrice.formattedConvertedAmount}
            </span>
          )}
        </div>
        <div className="gap1.5 flex items-center">
          <Button
            size="sm"
            variant="outline"
            disabled={item.quantity === 1}
            onClick={() =>
              updateQuantityMutation.mutate({
                productId,
                newQuantity: !item.quantity ? 0 : item.quantity - 1,
              })
            }
          >
            -
          </Button>
          <span>{item.quantity}</span>
          <Button
            size="sm"
            variant="outline"
            disabled={quantityLimitReached}
            onClick={() =>
              updateQuantityMutation.mutate({
                productId,
                newQuantity: !item.quantity ? 1 : item.quantity + 1,
              })
            }
          >
            +
          </Button>
          {quantityLimitReached && <span>Quantity limit reached</span>}
        </div>
      </div>
    </li>
  );
}
