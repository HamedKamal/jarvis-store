"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/dummyData";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  variantSlug?: string;
  variantName?: string;
  variantImage?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  variantSlug,
  variantName,
  variantImage,
}) => {
  const { addToCart } = useCart();
  const isAvailable =
    product.variants.some((v) => v.available) || product.variants.length === 0;

  const href = variantSlug
    ? `/products/${product.handle}?variant=${variantSlug}`
    : `/products/${product.handle}`;

  const displayImage = variantImage || product.featuredImage;
  const displayLabel = variantName || product.title;

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Add first available variant (or the product itself)
    const firstAvailableVariant = product.variants.find((v) => v.available);
    addToCart(product, firstAvailableVariant?.id || product.id, 1);
  };

  return (
    <Link href={href} className="group flex flex-col h-full">
      {/* Card Image Container */}
      <div
        className="relative overflow-hidden bg-surface-container-low aspect-[3/4] w-full"
        style={{ borderRadius: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
      >
        {displayImage ? (
          <Image
            src={displayImage}
            alt={displayLabel}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-surface-container flex items-center justify-center font-label-caps text-xs">
            No Image
          </div>
        )}

        {/* Sold Out overlay */}
        {!isAvailable && (
          <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
            <span
              className="font-label-caps text-[10px] px-3 py-1.5"
              style={{
                backdropFilter: "blur(20px)",
                background: "rgba(255,255,255,0.55)",
                border: "1px solid rgba(255,255,255,0.35)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                borderRadius: "999px",
                color: "#0F1B2D",
              }}
            >
              SOLD OUT
            </span>
          </div>
        )}

        {/* Quick Add Overlay — slides up on hover */}
        {isAvailable && (
          <div className="absolute bottom-0 left-0 right-0 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[250ms] ease-out px-3 pb-3 pointer-events-none group-hover:pointer-events-auto">
            <button
              onClick={handleQuickAdd}
              className="w-full py-3 font-label-caps text-label-caps text-primary text-[11px] tracking-widest"
              style={{
                backdropFilter: "blur(20px)",
                background: "rgba(255,255,255,0.75)",
                border: "1px solid rgba(255,255,255,0.45)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                borderRadius: "14px",
              }}
            >
              QUICK ADD
            </button>
          </div>
        )}

        {/* Subtle hover shadow increase via a pseudo-overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: "inset 0 -60px 40px -20px rgba(0,0,0,0.08)",
          }}
        />
      </div>

      {/* Card Info */}
      <div className="flex flex-col pt-3 px-1">
        <h3 className="font-body-md text-body-md text-primary truncate">{displayLabel}</h3>
        <span className="font-label-caps text-label-caps text-on-surface-variant mt-1">
          LE {product.price}
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
