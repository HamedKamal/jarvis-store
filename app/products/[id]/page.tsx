"use client";

import React, { use, useState, useEffect } from "react";
import Image from "next/image";
import { dummyProducts } from "@/data/dummyData";
import { useCart } from "@/context/CartContext";
import Accordion from "@/components/Accordion";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: PageProps) {
  const { id } = use(params);
  const { addToCart, setIsCartOpen } = useCart();

  // Find product by handle, fallback to first product (Gray Camo Jersey) if not found
  let product = dummyProducts.find((p) => p.handle === id);
  if (!product) {
    product = dummyProducts[0];
  }

  // Gallery state
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Color option state
  const colorOption = product.options.find((o) => o.name === "Color");
  const [selectedColor, setSelectedColor] = useState(colorOption?.values[0] || "");

  // Size option state (default to first available variant, or first option value)
  const sizeOption = product.options.find((o) => o.name === "Size");
  
  const getFirstAvailableSize = (color: string) => {
    return sizeOption?.values.find((val) => {
      const variant = product.variants.find(
        (v) => v.options["Color"] === color && v.options["Size"] === val
      );
      return variant?.available;
    }) || sizeOption?.values[0] || "";
  };

  const [selectedSize, setSelectedSize] = useState(getFirstAvailableSize(colorOption?.values[0] || ""));
  const [quantity, setQuantity] = useState(1);

  // Get active variant
  const activeVariant = product.variants.find(
    (v) => v.options["Color"] === selectedColor && v.options["Size"] === selectedSize
  );

  const getSwatchImage = (colorName: string) => {
    switch (colorName) {
      case "Black / White": return "/assets/BLACK/atef-front.jpg";
      case "Creamy / Olive": return "/assets/CREAMY-OLIVE/nour-front_1.jpg";
      case "Creamy / Burgundy": return "/assets/CREAMY-BURGUNDY/gogo-front.jpg";
      case "Olive / White": return "/assets/OLIVE-WHITE/gogo-front_1.jpg";
      case "Rose / White": return "/assets/ROSE/nour-1.jpg";
      case "Army / White": return "/assets/ARMY/atef-front_2.jpg";
      case "Burgundy / White": return "/assets/BURGUNDY/hana-front_1.jpg";
      default: return "/assets/BLACK/atef-front.jpg";
    }
  };

  const getDotColorHex = (colorName: string) => {
    switch (colorName) {
      case "Black / White": return "#000000";
      case "Creamy / Olive": return "#556B2F";
      case "Creamy / Burgundy": return "#5C2530";
      case "Olive / White": return "#556B2F";
      case "Rose / White": return "#A37577";
      case "Army / White": return "#4B5320";
      case "Burgundy / White": return "#5C2530";
      default: return "#000000";
    }
  };

  const getButtonColorHex = (colorName: string) => {
    switch (colorName) {
      case "Black / White": return "#000000";
      case "Creamy / Olive": return "#556B2F";
      case "Creamy / Burgundy": return "#5C2530";
      case "Olive / White": return "#556B2F";
      case "Rose / White": return "#A37577";
      case "Army / White": return "#4B5320";
      case "Burgundy / White": return "#5C2530";
      default: return "#0F1B2D";
    }
  };

  const buttonColor = getButtonColorHex(selectedColor);

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    setActiveImageIndex(0);
    const firstAvailable = getFirstAvailableSize(color);
    setSelectedSize(firstAvailable);

    // Update URL parameter without page reload
    if (typeof window !== "undefined") {
      const urlMap: { [key: string]: string } = {
        "Black / White": "black-white",
        "Creamy / Olive": "creamy-olive",
        "Creamy / Burgundy": "creamy-burgundy",
        "Olive / White": "olive-white",
        "Rose / White": "rose-white",
        "Army / White": "army-white",
        "Burgundy / White": "burgundy-white",
      };
      const slug = urlMap[color];
      if (slug) {
        const newUrl = `${window.location.pathname}?variant=${slug}`;
        window.history.replaceState(null, "", newUrl);
      }
    }
  };

  // Sync selected variant color from URL parameter on load
  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const variantParam = searchParams.get("variant");
      if (variantParam) {
        const colorMap: { [key: string]: string } = {
          "black-white": "Black / White",
          "creamy-olive": "Creamy / Olive",
          "creamy-burgundy": "Creamy / Burgundy",
          "olive-white": "Olive / White",
          "rose-white": "Rose / White",
          "army-white": "Army / White",
          "burgundy-white": "Burgundy / White",
        };
        const mappedColor = colorMap[variantParam];
        if (mappedColor) {
          setSelectedColor(mappedColor);
          const firstAvailable = getFirstAvailableSize(mappedColor);
          setSelectedSize(firstAvailable);
        }
      }
    }
  }, []);

  const handleAddToCart = () => {
    if (!product) return;
    const variantId = activeVariant?.id || product.id;
    addToCart(product, variantId, quantity);
  };

  const getColorFolder = (colorName: string) => {
    switch (colorName) {
      case "Black / White": return "BLACK";
      case "Creamy / Olive": return "CREAMY-OLIVE";
      case "Creamy / Burgundy": return "CREAMY-BURGUNDY";
      case "Olive / White": return "OLIVE-WHITE";
      case "Rose / White": return "ROSE";
      case "Army / White": return "ARMY";
      case "Burgundy / White": return "BURGUNDY";
      default: return "BLACK";
    }
  };

  const folderName = getColorFolder(selectedColor);
  const filtered = product.images.filter((img) => img.includes(`/${folderName}/`));
  const productImages = filtered.length > 0 ? filtered : [product.featuredImage];

  return (
    <div className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-6 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-gutter">
        
        {/* Product Gallery (Left) */}
        <div className="lg:col-span-7 flex flex-col md:flex-row gap-4 h-[614px] lg:h-[870px] lg:sticky lg:top-[120px]">
          {/* Desktop Thumbnails */}
          <div className="hidden md:flex flex-col gap-4 overflow-y-auto hide-scrollbar w-24 flex-shrink-0">
            {productImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`w-full aspect-[3/4] bg-surface-container border relative overflow-hidden transition-all duration-300 ${
                  activeImageIndex === idx ? "border-primary opacity-100" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`${product.title} thumbnail ${idx + 1}`}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main Large Image */}
          <div className="w-full h-full bg-surface-container relative overflow-hidden flex-1">
            {productImages[activeImageIndex] ? (
              <Image
                src={productImages[activeImageIndex]}
                alt={product.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center font-label-caps text-xs">
                No Image
              </div>
            )}
            
            {/* Mobile Pagination Dots */}
            {productImages.length > 1 && (
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 md:hidden">
                {productImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      activeImageIndex === idx ? "bg-primary" : "bg-primary/30"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Product Info & Cart Form (Right) */}
        <div className="lg:col-span-5 px-margin-mobile lg:px-margin-desktop lg:pr-margin-desktop lg:pl-0 pt-8 lg:pt-0 flex flex-col gap-stack-lg">
          
          {/* Header Block */}
          <div className="flex flex-col gap-stack-sm">
            <div className="flex items-center gap-2 border-b border-outline-variant/20 pb-2 w-max">
              <div className="w-2 h-2 rounded-full bg-tertiary-fixed-dim" />
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                {product.watchCount || 24} People are watching this right now
              </span>
            </div>
            <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase mt-4">
              {product.title}
            </h1>
            <div className="font-display-md text-display-md text-primary mt-2">
              LE {product.price}
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="font-label-caps text-label-caps text-primary border border-primary px-2 py-1">
                BEST SELLER
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                | Selling fast – only 7 left
              </span>
            </div>
          </div>

          {/* Shipping Estimate Card */}
          <div className="flex flex-col gap-2 p-4 bg-surface-container-low border border-outline-variant/10">
            <div className="flex items-center gap-2 text-on-error-container">
              <span className="material-symbols-outlined">local_shipping</span>
              <span className="font-body-md text-body-md font-bold">
                {product.deliveryEstimate || "Estimated delivery : Jun 27 - Jun 29"}
              </span>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant">
              <div className="w-3 h-3 rounded-full bg-green-400 border-2 border-surface" />
              <span className="font-label-sm text-label-sm uppercase">
                {product.preorderText || "Preorders available | Ships by Jul 2"}
              </span>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex flex-col gap-stack-lg">
            
            {/* Color Selector */}
            {colorOption && (
              <div className="flex flex-col gap-stack-md">
                <div className="flex justify-between items-end pb-1 border-b border-outline-variant/10">
                  <span className="font-label-caps text-label-caps text-primary tracking-wider">Color</span>
                  <span className="font-label-caps text-label-caps text-on-surface-variant text-[11px] font-bold uppercase">
                    {selectedColor}
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {colorOption.values.map((color) => {
                    const isSelected = selectedColor === color;
                    const swatchImg = getSwatchImage(color);
                    return (
                      <button
                        key={color}
                        onClick={() => handleColorChange(color)}
                        aria-label={`Select Color ${color}`}
                        className={`w-12 h-12 rounded-full border relative overflow-hidden transition-all duration-300 ${
                          isSelected
                            ? "scale-110 ring-2 ring-offset-2 ring-primary"
                            : "border-outline-variant/50 hover:border-primary hover:scale-105"
                        }`}
                        style={{
                          borderColor: isSelected ? buttonColor : undefined,
                          boxShadow: isSelected ? `0 0 0 2px ${buttonColor}` : undefined
                        }}
                      >
                        <Image
                          src={swatchImg}
                          alt={color}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Selected Color Dot Indicator Display */}
            <div className="flex flex-col gap-2 pt-2 border-t border-outline-variant/10">
              <span className="font-label-caps text-label-caps text-on-surface-variant text-[10px] tracking-wider">
                SELECTED COLOR
              </span>
              <div className="flex items-center gap-2 font-body-md text-body-md text-primary font-bold">
                <span
                  className="inline-block w-3.5 h-3.5 rounded-full border border-primary/10 transition-colors duration-300"
                  style={{ backgroundColor: getDotColorHex(selectedColor) }}
                />
                <span className="uppercase">{selectedColor}</span>
              </div>
            </div>

            {/* Size Selector */}
            {sizeOption && (
              <div className="flex flex-col gap-stack-md pt-2">
                <div className="flex justify-between items-end pb-1 border-b border-outline-variant/10">
                  <span className="font-label-caps text-label-caps text-primary tracking-wider">Size</span>
                  <button className="font-label-sm text-label-sm text-on-surface-variant underline">
                    Size Guide
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {sizeOption.values.map((size) => {
                    const variant = product.variants.find(
                      (v) => v.options["Color"] === selectedColor && v.options["Size"] === size
                    );
                    const isAvailable = variant ? variant.available : false;
                    const isSelected = selectedSize === size;

                    return (
                      <button
                        key={size}
                        onClick={() => isAvailable && setSelectedSize(size)}
                        disabled={!isAvailable}
                        className={`h-14 border font-label-caps text-label-caps transition-all ${
                          !isAvailable
                            ? "out-of-stock cursor-not-allowed opacity-40"
                            : isSelected
                            ? "bg-surface-container-high text-primary font-bold"
                            : "border-outline-variant/50 text-on-surface-variant hover:border-primary"
                        }`}
                        style={{
                          borderColor: isSelected ? buttonColor : undefined
                        }}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ATC / Quantity Panel */}
            <div className="flex flex-col gap-4 pt-2">
              <div className="flex gap-4">
                {/* Quantity */}
                <div className="flex items-center border border-outline-variant/30 h-14 w-1/3 bg-surface-container-lowest">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined">remove</span>
                  </button>
                  <span className="w-full text-center font-label-caps text-label-caps">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
                {/* Add To Cart */}
                <button
                  onClick={handleAddToCart}
                  style={{ borderColor: buttonColor, color: buttonColor }}
                  className="flex-1 h-14 bg-surface-container-lowest border font-label-caps text-label-caps uppercase flex items-center justify-center gap-2 hover:bg-surface-container-low transition-all duration-300"
                >
                  <span className="material-symbols-outlined">shopping_bag</span> Add to Cart
                </button>
              </div>
              
              {/* Buy Now */}
              <button
                onClick={() => {
                  handleAddToCart();
                  setIsCartOpen(true);
                }}
                style={{ backgroundColor: buttonColor }}
                className="w-full h-14 text-white font-label-caps text-label-caps uppercase hover:opacity-90 transition-all duration-300"
              >
                Buy it now
              </button>
            </div>

          </div>

          {/* Trust Strip */}
          <div className="flex justify-center gap-6 py-4 border-y border-outline-variant/20 mt-4">
            <div className="flex items-center gap-2 text-on-surface-variant">
              <span className="material-symbols-outlined text-lg">local_shipping</span>
              <span className="font-label-caps text-label-caps text-[10px]">On-time delivery</span>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant">
              <span className="material-symbols-outlined text-lg">shield</span>
              <span className="font-label-caps text-label-caps text-[10px]">Secure checkout</span>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant">
              <span className="material-symbols-outlined text-lg">sync</span>
              <span className="font-label-caps text-label-caps text-[10px]">Easy exchange</span>
            </div>
          </div>

          {/* Collapsible Accordions */}
          <div className="flex flex-col border-b border-outline-variant/20">
            <Accordion title="Details" iconName="checkroom" defaultOpen={true}>
              <p>{product.description}</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 font-label-sm text-label-sm">
                <li>100% Premium Egyptian Cotton</li>
                <li>Relaxed architectural fit</li>
                <li>Reinforced stitching at stress points</li>
                <li>Made in Cairo</li>
              </ul>
            </Accordion>

            <Accordion title="Delivery" iconName="local_shipping">
              <p>Standard delivery within 3-5 business days. Express shipping available at checkout.</p>
            </Accordion>

            <Accordion title="Return & Exchange Policy" iconName="keyboard_return">
              <p>We accept returns within 14 days of delivery. Items must be unworn with original tags attached.</p>
            </Accordion>

            <Accordion title="Washing Instructions" iconName="laundry">
              <p>Machine wash cold with like colors. Do not bleach. Tumble dry low or hang dry to maintain structural integrity.</p>
            </Accordion>
          </div>

        </div>
      </div>
    </div>
  );
}
