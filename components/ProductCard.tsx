"use client";

import React, { useState } from "react";
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
  const [isFavorite, setIsFavorite] = useState(false);
  const isAvailable =
    product.variants.some((v) => v.available) || product.variants.length === 0;

  const href = variantSlug
    ? `/products/${product.handle}?variant=${variantSlug}`
    : `/products/${product.handle}`;

  const displayImage = variantImage || product.featuredImage;
  const displayLabel = variantName || product.title;

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
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

        {/* Action Buttons Overlay (Centered horizontally near the bottom, shows on hover) */}
        <div className="absolute inset-x-0 bottom-8 flex justify-center items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
          {/* Favorites Button */}
          <button
            onClick={handleFavorite}
            className="w-12 h-12 rounded-full flex items-center justify-center bg-[#0F1B2D]/90 text-[#F7F6F2] hover:bg-[#C28a5c] transition-all duration-200 shadow-lg scale-90 group-hover:scale-100 hover:scale-105 pointer-events-auto"
            aria-label="Add to favorites"
          >
            <span
              className="material-symbols-outlined text-[20px] transition-colors"
              style={{
                color: isFavorite ? "#ba1a1a" : "#F7F6F2",
                fontVariationSettings: isFavorite ? "'FILL' 1" : "'FILL' 0",
              }}
            >
              favorite
            </span>
          </button>

          {/* Quick View Button (Eye) */}
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center bg-[#0F1B2D]/90 text-[#F7F6F2] hover:bg-[#C28a5c] transition-all duration-200 shadow-lg scale-90 group-hover:scale-100 hover:scale-105 pointer-events-auto"
            aria-label="View product details"
          >
            <span className="material-symbols-outlined text-[20px] text-[#F7F6F2]">
              visibility
            </span>
          </div>
        </div>

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
