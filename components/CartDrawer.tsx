"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { ringerTeeProduct } from "@/data/dummyData";

const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    removeFromCart,
    updateQuantity,
    cartSubtotal,
    addToCart,
  } = useCart();

  const shippingMilestone = 1500;
  const discountMilestone = 3000;

  const isShippingUnlocked = cartSubtotal >= shippingMilestone;
  const isDiscountUnlocked = cartSubtotal >= discountMilestone;

  // Track maxes at 3000 (Free Shipping + 5% OFF milestone)
  const visualPct = Math.min((cartSubtotal / discountMilestone) * 100, 100);
  const remainingForShipping = Math.max(shippingMilestone - cartSubtotal, 0);
  const remainingForDiscount = Math.max(discountMilestone - cartSubtotal, 0);

  // Animation triggers on subtotal change
  const [animKey, setAnimKey] = useState(0);
  const prevSubtotal = useRef(cartSubtotal);

  useEffect(() => {
    if (cartSubtotal !== prevSubtotal.current) {
      setAnimKey((prev) => prev + 1);
      prevSubtotal.current = cartSubtotal;
    }
  }, [cartSubtotal]);

  // Recommendations: Other color variants of THE RINGER TEE that are not in the cart
  // Recommend only one size (M) of each colorway to avoid duplicating products
  const recVariants = ringerTeeProduct.variants
    .filter((variant) => {
      // Extract color option
      const color = variant.options.Color;
      const size = variant.options.Size;
      // Only recommend 'M' size for listing representation
      if (size !== "M") return false;

      // Check if this colorway is already in the cart
      const isColorInCart = cartItems.some((item) =>
        item.variantTitle.toLowerCase().includes(color.toLowerCase())
      );
      return !isColorInCart;
    })
    .slice(0, 3);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/45 backdrop-blur-sm z-40"
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
            className="fixed top-0 right-0 h-full w-full md:w-[480px] z-50 flex flex-col bg-[#F9F8F6] border-l border-neutral-200 shadow-2xl"
          >
            {/* Header */}
            <div className="px-6 py-5 border-b border-neutral-200/60 flex justify-between items-center bg-[#F9F8F6]">
              <h2 className="font-sans text-lg font-medium text-neutral-800 tracking-normal capitalize">
                Shopping cart
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-neutral-500 hover:text-black transition-colors p-1"
                aria-label="Close cart"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* If cart is empty, show empty state ONLY (all progress metrics, checkout, and recs hidden) */}
            {cartCount === 0 ? (
              <div className="flex-1 flex flex-col justify-center items-center px-8 text-center bg-[#F9F8F6]">
                <h3 className="font-label-caps text-md tracking-widest text-[#1b1c1c] font-bold mb-8 uppercase">
                  YOUR CART IS EMPTY
                </h3>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full bg-[#1b1c1c] text-white font-label-caps text-xs py-4 uppercase tracking-widest hover:bg-neutral-800 transition-colors font-bold"
                >
                  CONTINUE SHOPPING
                </button>
              </div>
            ) : (
              <>
                {/* Progress Experience (Shown ONLY when cart is NOT empty) */}
                <div className="px-6 pt-6 pb-8 border-b border-neutral-200/60 bg-[#F3F2EE]/50 select-none">
                  {/* Status Message Text */}
                  <div className="mb-4 text-center min-h-[20px]">
                    {!isShippingUnlocked ? (
                      <p className="text-[12px] text-neutral-600 tracking-wide font-sans">
                        You're only <span className="font-bold text-neutral-900">LE {remainingForShipping.toFixed(2)}</span> away from <span className="font-bold text-neutral-900">Free Shipping</span>!
                      </p>
                    ) : !isDiscountUnlocked ? (
                      <p className="text-[12px] text-neutral-600 tracking-wide font-sans">
                        You're only <span className="font-bold text-neutral-900">LE {remainingForDiscount.toFixed(2)}</span> away from <span className="font-bold text-neutral-900">Free Shipping + 5% OFF</span>!
                      </p>
                    ) : (
                      <p className="text-[11px] text-[#C28a5c] font-bold tracking-widest uppercase font-sans">
                        ✓ FREE SHIPPING + 5% OFF UNLOCKED!
                      </p>
                    )}
                  </div>

                  {/* Progress Track Container */}
                  <div className="relative pt-4 pb-8 px-1">
                    {/* Track Line (Height 6px, track color #E4E2E1, rounded ends) */}
                    <div className="h-[6px] w-full bg-[#E4E2E1] rounded-full relative">
                      {/* Progress Fill (Jarvis brand color #C28a5c) */}
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${visualPct}%` }}
                        transition={{ type: "spring", stiffness: 80, damping: 15 }}
                        className="h-full rounded-full bg-[#C28a5c]"
                      />

                      {/* Milestone Indicators (Ticks) */}
                      {/* Milestone 1: Free Shipping (at 50% of track) */}
                      <div className="absolute top-1/2 -translate-y-1/2 left-[50%] -translate-x-1/2">
                        <div
                          className={`w-3.5 h-3.5 rounded-full border-2 bg-white transition-all duration-300 ${
                            isShippingUnlocked ? "border-[#C28a5c]" : "border-neutral-200"
                          }`}
                        />
                      </div>

                      {/* Milestone 2: Free Shipping + 5% OFF (at 100% of track) */}
                      <div className="absolute top-1/2 -translate-y-1/2 left-[100%] -translate-x-1/2">
                        <div
                          className={`w-3.5 h-3.5 rounded-full border-2 bg-white transition-all duration-300 ${
                            isDiscountUnlocked ? "border-[#C28a5c]" : "border-neutral-200"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Milestone Labels Below Track Line */}
                    <div className="relative w-full text-[9px] font-bold tracking-wide uppercase text-neutral-400 mt-2.5 min-h-[24px]">
                      <span className="absolute left-[50%] -translate-x-1/2 text-center whitespace-nowrap leading-tight">
                        FREE SHIPPING
                      </span>
                      <span className="absolute left-[100%] -translate-x-1/2 text-center whitespace-nowrap leading-tight">
                        FREE SHIPPING <br />
                        <span className="text-[8px] text-neutral-400 font-medium">+ 5% OFF</span>
                      </span>
                    </div>

                    {/* Hero Jarvis SVG Icon (Sits ON the track line, centered vertically, travels horizontally) */}
                    <motion.div
                      className="absolute top-[19px] -translate-y-1/2 z-10 origin-center select-none"
                      style={{
                        left: `${visualPct}%`,
                        x: "-50%",
                      }}
                      animate={{
                        rotate: [0, 360, 360],
                      }}
                      transition={{
                        rotate: {
                          repeat: Infinity,
                          duration: 2.3,
                          times: [0, 0.13, 1],
                          ease: ["easeInOut", "linear"]
                        },
                        left: { type: "spring", stiffness: 80, damping: 15, duration: 0.4 },
                      }}
                    >
                      <div className="w-11 h-11 md:w-[52px] md:h-[52px] lg:w-[56px] lg:h-[56px] flex items-center justify-center">
                        <svg
                          viewBox="0 0 2000 2000"
                          className="w-full h-full"
                          style={{
                            filter: "drop-shadow(0 2px 8px rgba(194, 138, 92, 0.15))",
                          }}
                        >
                          <defs>
                            <mask id="jarvis-liquid-mask">
                              <rect x="0" y="0" width="2000" height="2000" fill="black" />
                              <path fill="white" d="M1050.25,1017.16c0,18.39-13.14,39-30,47.07-1.22.58-2.47,1.12-3.73,1.59-.82.31-1.68.6-2.52.87l-1.27.37c-.86.24-1.71.46-2.58.64a50.71,50.71,0,0,1-33.19-4.22c-1.62-.81-3.21-1.69-4.76-2.66a48.88,48.88,0,0,1-19-22c-3.92-9.11-5.72-28.3-3.35-35.73A56.19,56.19,0,0,1,957,988.45c.48-.69,1-1.36,1.46-2a53.6,53.6,0,0,1,12.59-12.09c1.13-.78,2.28-1.5,3.46-2.17s2.37-1.31,3.59-1.89,2.45-1.12,3.7-1.59a48.84,48.84,0,0,1,22.95-3c1.3.14,2.61.34,3.91.6a47.61,47.61,0,0,1,11.6,3.85C1037.11,978.18,1050.25,998.79,1050.25,1017.16Z" />
                              <path fill="white" d="M1390.56,587.86l-69.91,50.8H678.38l-69.9-50.8H365.86L518,854.83l76.78,15.07,305.64,631.69-32.85,135.35,132,245.38,132-245.38-32.91-135.35L1404.3,869.9l76.78-15.07,152.14-267Zm-178.18,450.92a59.29,59.29,0,0,1-11.64,19.25c-.49.53-1,1.07-1.52,1.6a59.37,59.37,0,0,1-8.3,7.09q-1.79,1.24-3.64,2.37a55.58,55.58,0,0,1-32,8c-1.12-.08-2.23-.19-3.35-.32h0c-1.12-.14-2.24-.32-3.35-.54s-2.23-.47-3.35-.76c-19.84-5.23-32.84-16.8-40.66-36.23q-2-4.93-4-9.88h-27.87c-.78,2.66-1.54,5.31-2.32,8a74.86,74.86,0,0,1-16.79,30.57c-2.44,2.74-4.9,5.46-7.35,8.19q3.48,6.11,7,12.22c.3.53.59,1,.88,1.54a69.8,69.8,0,0,0,4.16,6.62c.18.25.37.48.54.69a5.88,5.88,0,0,0,.52.6c.15.18.32.35.48.52a6.64,6.64,0,0,0,.69.58,3.6,3.6,0,0,0,1.49.64,3.35,3.35,0,0,0,1,0l.52-.11a2.26,2.26,0,0,0,.37-.11,27.26,27.26,0,0,1,6.6-1l1.49-.07a90.61,90.61,0,0,1,16.33,1.08q1.23.19,2.43.42a51.72,51.72,0,0,1,6.78,1.73c12.42,4.25,27.48,18.53,33,31.37,5.88,13.51,6.07,35.93.43,48.58-5.24,11.73-16.61,24.08-27.32,29.68a41.55,41.55,0,0,1-4.26,1.91c-1.38.52-2.83,1-4.31,1.4-.66.19-1.32.37-2,.52-1.24.31-2.49.57-3.78.78s-2.43.4-3.65.54c-.73.09-1.45.17-2.19.23l-1.49.1a68.59,68.59,0,0,1-10.14-.09l-1.86-.18-1.47-.18c-1-.14-1.94-.31-2.89-.48a43.88,43.88,0,0,1-10.44-3.27c-13.44-6.33-23.82-16.43-29.87-29.12-4.28-9-5-12.87-5-25.58.1-17,3.74-27.53,13.5-38.95l5.91-6.94q-3.09-5.39-6.22-10.75c-.15-.27-.31-.53-.46-.79-.29-.51-.58-1-.85-1.45-2-3.47-3.41-5.52-4.74-6.7a6.42,6.42,0,0,0-.54-.41v0a5.22,5.22,0,0,0-1.09-.58,9.65,9.65,0,0,0-4.19-.34l-.61,0c-.49,0-1,.08-1.68.11-1.25.07-2.78.12-4.53.18h-.07c-7.55.21-18.87.24-27.47.09-1,0-2,0-3-.06l-1.36,0c-.23,0-.45,0-.67,0l-1.24,0h0l-1.15,0-.53,0-1,0c-.62,0-1.16-.07-1.62-.12a8.6,8.6,0,0,0-3.44.2,1.07,1.07,0,0,0-.33.11,6.09,6.09,0,0,0-2.24,1.57,12.25,12.25,0,0,0-.84,1,65.75,65.75,0,0,0-4.63,7.26c-2,3.54-4.1,7-6.14,10.58,2.41,3.27,4.81,6.55,7.23,9.82,8.8,12,12.17,23.14,11.84,39.39-.41,21-11.29,38.93-30,49.4-7.86,4.4-12.54,5.59-24.32,6.22-13.1.67-23.22-1.33-32.15-6.67-.6-.36-1.18-.73-1.76-1.11-1.09-.72-2.16-1.48-3.2-2.3a62.15,62.15,0,0,1-6.19-5.51c-13-13.23-16.8-22.87-16.77-43,0-14.64.66-18.1,4.91-26.41,6.44-12.59,20.93-25.84,32.65-29.85a39.51,39.51,0,0,1,4.45-1.14l1.52-.29c1.28-.23,2.67-.43,4.11-.61.58-.08,1.16-.16,1.74-.22,1.76-.2,3.58-.36,5.38-.5s3.64-.23,5.38-.28c.57,0,1.14,0,1.69,0,2.15,0,4.17,0,5.93.09l1.34.11c.71.06,1.36.15,1.94.24a10.2,10.2,0,0,1,1.87.46,3.16,3.16,0,0,1,.61.29h0a.3.3,0,0,0,.29,0,3.55,3.55,0,0,0,.39-.27,1.22,1.22,0,0,0,.17-.15h0a9.4,9.4,0,0,0,.78-.83c.3-.32.61-.7.94-1.13.19-.22.36-.44.54-.69h0c.38-.48.75-1,1.15-1.53l.61-.86c.41-.58.84-1.19,1.25-1.8a127.67,127.67,0,0,0,7.39-12.23l.64-1.38a5.66,5.66,0,0,0,.55-1.82c0-.58-3.21-4.65-7.14-9a74.6,74.6,0,0,1-16.62-30.42l-2.34-8c-4.81.19-9.64.37-14.46.54l-14.46.55-3.44,9.49c-.26.72-.54,1.42-.83,2.13a53,53,0,0,1-2.93,6.07c-.72,1.28-1.5,2.55-2.33,3.77-.41.6-.84,1.21-1.26,1.79q-1.32,1.79-2.74,3.44a57.56,57.56,0,0,1-7.86,7.52c-1.13.89-2.31,1.74-3.5,2.56s-2.41,1.57-3.67,2.29-2.52,1.39-3.81,2a58.72,58.72,0,0,1-14.26,4.74c-1.4.27-2.81.5-4.23.65a54.07,54.07,0,0,1-17.84-.84c-1-.21-1.88-.44-2.82-.7s-1.85-.55-2.78-.86a50.72,50.72,0,0,1-5.46-2.21c-22.09-10.49-32.91-26.73-34.12-51.2-.93-19.14,3.61-32.72,15-44.76,13.22-14,20.74-17.06,42-17.06,15.57,0,19.36.64,26.14,4.37,11.5,6.31,23.13,19.46,27.25,30.8l3.53,9.77,14.61.54,14.62.55c.41-2.07.84-4.12,1.25-6.16,2.08-10.16,9.75-24.4,17.6-32.67l7.38-7.79q-3.07-5.73-6.13-11.48t-6.14-11.46l-12,1.21c-19,1.94-36.21-4.73-48.12-16.7-.66-.67-1.3-1.34-1.93-2-10.41-11.54-16.22-27.41-14.84-45.05,2.41-31.07,24.12-53,54.15-54.82a62.18,62.18,0,0,1,20.39,2c1.25.35,2.48.75,3.68,1.18a49.08,49.08,0,0,1,8.61,4c1.09.64,2.16,1.33,3.2,2.06s2,1.5,3,2.31a53.63,53.63,0,0,1,5.62,5.38c.89,1,1.75,2,2.59,3.06a68.6,68.6,0,0,1,7.75,12.61c4.83,10.07,5.9,14.58,6,24.73.06,15.55-4.39,29.2-12.78,39.29-2.14,2.59-4.3,5.16-6.44,7.74,2,3.81,4,7.6,6,11.4.14.28.27.54.41.78.41.78.8,1.49,1.15,2.14.59,1.1,1.13,2.07,1.6,2.89.29.49.57,1,.83,1.35h0l.5.75q.35.48.66.87c1.94,2.34,3.52,2.13,7.26,1.46,14.91-2.71,26.3-3.09,36.23-1a53.16,53.16,0,0,1,6.51,1.72c1,.32,2,.69,3,1.07a1.81,1.81,0,0,0,.75.16,3.3,3.3,0,0,0,2.06-.92l.46-.43A14.4,14.4,0,0,0,1028,943c.38-.47.76-1,1.17-1.62,1-1.5,2.21-3.39,3.55-5.73,3.65-6.31,6.65-12.09,6.65-12.86s-2.4-3.74-5.34-6.63-7-9.27-9.06-14.17c-12.32-29.49-1.53-62.33,25.58-77.77.55-.32,1.08-.61,1.59-.89l1.43-.78c.81-.44,1.58-.82,2.33-1.14.35-.17.68-.32,1-.46s.78-.31,1.16-.44a.74.74,0,0,1,.22-.08l.52-.18.64-.2a28.55,28.55,0,0,1,5.72-1c.73-.06,1.52-.13,2.37-.17,2.66-.14,5.88-.17,10-.17,14.52,0,18.54.69,25.12,4.3a63.79,63.79,0,0,1,27.13,28.16c4.22,8.85,5,13,5.06,25.57,0,17.75-5.2,31.48-16.39,43a52.93,52.93,0,0,1-10.09,8.06c-.82.51-1.66,1-2.52,1.48a62.86,62.86,0,0,1-10.79,4.76c-.93.3-1.87.59-2.8.87-.47.14-1,.26-1.44.38-.93.25-1.88.46-2.81.66a48.9,48.9,0,0,1-20.88.15l-7.68-1.79c-2,3.52-4,7-6,10.55-3.29,5.81-6.26,11.22-6.61,12s2.68,5.14,6.7,9.65A74.62,74.62,0,0,1,1070.35,997c.78,2.65,1.54,5.31,2.32,8h27.73q2.58-6,5.14-12.1c9.17-21.68,28.65-34.86,51.55-34.91,13.93,0,24.84,3.35,34.82,10.74,8.52,6.29,17.72,18.52,21.12,28C1216.86,1007.53,1216.56,1027.47,1212.38,1038.78Z" />
                              <path fill="white" d="M1045.89,1142.61c6.94-13.07,19.29-21.45,31.66-21.45,14.29,0,31.35,13.72,33.82,27.15,3.39,18.64-3.41,33.57-18.85,41.42-1,.5-2,.94-3,1.36-.65.26-1.31.52-2,.75a35.8,35.8,0,0,1-3.91,1.11,27.36,27.36,0,0,1-2.91.52,29.21,29.21,0,0,1-15.36-2.14,27.66,27.66,0,0,1-3-1.44,42.67,42.67,0,0,1-12.86-11.29c-4.63-5.92-5.65-9-6.13-18.73C1043.08,1151.72,1043.79,1146.55,1045.89,1142.61Z" />
                              <path fill="white" d="M1048.34,896.82c-6-9-6.87-26.71-1.82-36.25,6.13-11.58,19.47-20.33,31-20.33,12.44,0,29.12,12,32.87,23.73,1.17,3.65,1.77,11.13,1.33,16.61a39.31,39.31,0,0,1-1.93,9.44,28,28,0,0,1-1.07,2.81,33.92,33.92,0,0,1-7.32,10.72,31,31,0,0,1-3.58,3c-.63.47-1.27.9-1.91,1.31s-1.31.81-2,1.18c0,0,0,0,0,0-.63.33-1.25.65-1.89.94a35.25,35.25,0,0,1-3.44,1.38c-.85.29-1.72.53-2.59.75l-.27.07c-.79.19-1.58.35-2.39.49l-.31,0c-.8.13-1.61.22-2.42.29l-.27,0c-.87.07-1.74.1-2.61.11h-.09c-.51,0-1,0-1.55-.05-.18,0-.37,0-.55,0l-1.45-.12-.67-.08-1.35-.19q-1-.16-2-.39c-.84-.18-1.67-.41-2.49-.67-.61-.2-1.23-.4-1.82-.63s-1.21-.49-1.81-.75-1-.47-1.57-.75-.83-.41-1.24-.65a35.5,35.5,0,0,1-7.44-5.57c-.55-.53-1.09-1.1-1.62-1.68A41.07,41.07,0,0,1,1048.34,896.82Z" />
                              <path fill="white" d="M1192.57,1011.87a36.35,36.35,0,0,1,.43,5.55,34.89,34.89,0,0,1-3,14.08,32.94,32.94,0,0,1-1.56,3.15,36.38,36.38,0,0,1-2.87,4.39q-.39.53-.81,1c-.55.68-1.13,1.33-1.73,2q-.43.48-.9.93c-8.91,8.85-22,13.1-34.36,8.91-20.17-6.84-30-30.07-21.21-50,4-9.14,15.76-18.64,25.27-20.47,0.84-.17,1.67-.28,2.51-.37l1.07-.1c.53,0,1.07-.07,1.6-.08l.75,0a5.35,5.35,0,0,1,.58,0c.58,0,1.17,0,1.75.06l1.17.12c.39,0,.77.09,1.15.16s.75.12,1.12.18.84.17,1.25.26.64.14,1,.23c.74.18,1.46.38,2.17.62a35.92,35.92,0,0,1,14.4,9.12c.42.41.81.84,1.2,1.26a40.08,40.08,0,0,1,3.21,4.16c.65,1,1.27,2,1.82,3a36.57,36.57,0,0,1,2.18,4.86c.22.55.41,1.12.58,1.7A36.83,36.83,0,0,1,1192.57,1011.87Z" />
                              {/* Negative space cuts inside mask */}
                              <path fill="black" d="M1157.79,980.78l-.75,0c.45,0,.89,0,1.33,0A5.35,5.35,0,0,0,1157.79,980.78Zm-128.66-39.37c-.41.61-.81,1.15-1.17,1.62C1028.34,942.56,1028.72,942,1029.13,941.41Zm-5.24,4.73a2,2,0,0,1-.75-.16A1.81,1.81,0,0,0,1023.89,946.14Zm-4.57,144.68c-1.25.07-2.78.12-4.53.18C1016.54,1091,1018.07,1090.89,1019.32,1090.82ZM938.46,908a30.59,30.59,0,0,1-3.42,2A23.69,23.69,0,0,0,938.46,908Zm-2.79,217.17a29.59,29.59,0,0,0-2.76-1.25C933.85,1124.25,934.76,1124.66,935.67,1125.12Zm-2.76-1.25a26.81,26.81,0,0,0-3.77-1.24A33.23,33.23,0,0,1,932.91,1123.87Zm-3.77-1.24a22.64,22.64,0,0,0-2.55-.53C927.44,1122.23,928.3,1122.42,929.14,1122.63Zm-8.35-1c.35,0,.7,0,1.06,0a5.62,5.62,0,0,0-.58,0Zm-.14,0c-.93,0-1.85.06-2.79.16C918.79,1121.71,919.74,1121.65,920.65,1121.64Zm-7.58-22.57c1.76-.2,3.58-.36,5.38-.5C916.65,1098.69,914.83,1098.86,913.07,1099.07Zm-23.22,109.34c-1.09-.72-2.16-1.48-3.2-2.3C887.69,1206.94,888.76,1207.7,889.85,1208.41Zm-14.31-143.92c-1.13.89-2.31,1.74-3.5,2.56C873.25,1066.25,874.41,1065.39,875.54,1064.49Zm-45.63-12.78c-1.09-.37-2.16-.79-3.2-1.25C827.75,1050.93,828.82,1051.34,829.91,1051.71Z" />
                            </mask>
                            <linearGradient id="bronze-liquid-grad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#dfbfa7" />
                              <stop offset="50%" stopColor="#C28a5c" />
                              <stop offset="100%" stopColor="#7f5539" />
                            </linearGradient>
                          </defs>

                          {/* Outlines of original logo (Faint Bronze structure definition) */}
                          <g fill="#C28a5c" opacity="0.25">
                            <path d="M1050.25,1017.16c0,18.39-13.14,39-30,47.07-1.22.58-2.47,1.12-3.73,1.59-.82.31-1.68.6-2.52.87l-1.27.37c-.86.24-1.71.46-2.58.64a50.71,50.71,0,0,1-33.19-4.22c-1.62-.81-3.21-1.69-4.76-2.66a48.88,48.88,0,0,1-19-22c-3.92-9.11-5.72-28.3-3.35-35.73A56.19,56.19,0,0,1,957,988.45c.48-.69,1-1.36,1.46-2a53.6,53.6,0,0,1,12.59-12.09c1.13-.78,2.28-1.5,3.46-2.17s2.37-1.31,3.59-1.89,2.45-1.12,3.7-1.59a48.84,48.84,0,0,1,22.95-3c1.3.14,2.61.34,3.91.6a47.61,47.61,0,0,1,11.6,3.85C1037.11,978.18,1050.25,998.79,1050.25,1017.16Z" />
                            <path d="M1390.56,587.86l-69.91,50.8H678.38l-69.9-50.8H365.86L518,854.83l76.78,15.07,305.64,631.69-32.85,135.35,132,245.38,132-245.38-32.91-135.35L1404.3,869.9l76.78-15.07,152.14-267Zm-178.18,450.92a59.29,59.29,0,0,1-11.64,19.25c-.49.53-1,1.07-1.52,1.6a59.37,59.37,0,0,1-8.3,7.09q-1.79,1.24-3.64,2.37a55.58,55.58,0,0,1-32,8c-1.12-.08-2.23-.19-3.35-.32h0c-1.12-.14-2.24-.32-3.35-.54s-2.23-.47-3.35-.76c-19.84-5.23-32.84-16.8-40.66-36.23q-2-4.93-4-9.88h-27.87c-.78,2.66-1.54,5.31-2.32,8a74.86,74.86,0,0,1-16.79,30.57c-2.44,2.74-4.9,5.46-7.35,8.19q3.48,6.11,7,12.22c.3.53.59,1,.88,1.54a69.8,69.8,0,0,0,4.16,6.62c.18.25.37.48.54.69a5.88,5.88,0,0,0,.52.6c.15.18.32.35.48.52a6.64,6.64,0,0,0,.69.58,3.6,3.6,0,0,0,1.49.64,3.35,3.35,0,0,0,1,0l.52-.11a2.26,2.26,0,0,0,.37-.11,27.26,27.26,0,0,1,6.6-1l1.49-.07a90.61,90.61,0,0,1,16.33,1.08q1.23.19,2.43.42a51.72,51.72,0,0,1,6.78,1.73c12.42,4.25,27.48,18.53,33,31.37,5.88,13.51,6.07,35.93.43,48.58-5.24,11.73-16.61,24.08-27.32,29.68a41.55,41.55,0,0,1-4.26,1.91c-1.38.52-2.83,1-4.31,1.4-.66.19-1.32.37-2,.52-1.24.31-2.49.57-3.78.78s-2.43.4-3.65.54c-.73.09-1.45.17-2.19.23l-1.49.1a68.59,68.59,0,0,1-10.14-.09l-1.86-.18-1.47-.18c-1-.14-1.94-.31-2.89-.48a43.88,43.88,0,0,1-10.44-3.27c-13.44-6.33-23.82-16.43-29.87-29.12-4.28-9-5-12.87-5-25.58.1-17,3.74-27.53,13.5-38.95l5.91-6.94q-3.09-5.39-6.22-10.75c-.15-.27-.31-.53-.46-.79-.29-.51-.58-1-.85-1.45-2-3.47-3.41-5.52-4.74-6.7a6.42,6.42,0,0,0-.54-.41v0a5.22,5.22,0,0,0-1.09-.58,9.65,9.65,0,0,0-4.19-.34l-.61,0c-.49,0-1,.08-1.68.11-1.25.07-2.78.12-4.53.18h-.07c-7.55.21-18.87.24-27.47.09-1,0-2,0-3-.06l-1.36,0c-.23,0-.45,0-.67,0l-1.24,0h0l-1.15,0-.53,0-1,0c-.62,0-1.16-.07-1.62-.12a8.6,8.6,0,0,0-3.44.2,1.07,1.07,0,0,0-.33.11,6.09,6.09,0,0,0-2.24,1.57,12.25,12.25,0,0,0-.84,1,65.75,65.75,0,0,0-4.63,7.26c-2,3.54-4.1,7-6.14,10.58,2.41,3.27,4.81,6.55,7.23,9.82,8.8,12,12.17,23.14,11.84,39.39-.41,21-11.29,38.93-30,49.4-7.86,4.4-12.54,5.59-24.32,6.22-13.1.67-23.22-1.33-32.15-6.67-.6-.36-1.18-.73-1.76-1.11-1.09-.72-2.16-1.48-3.2-2.3a62.15,62.15,0,0,1-6.19-5.51c-13-13.23-16.8-22.87-16.77-43,0-14.64.66-18.1,4.91-26.41,6.44-12.59,20.93-25.84,32.65-29.85a39.51,39.51,0,0,1,4.45-1.14l1.52-.29c1.28-.23,2.67-.43,4.11-.61.58-.08,1.16-.16,1.74-.22,1.76-.2,3.58-.36,5.38-.5s3.64-.23,5.38-.28c.57,0,1.14,0,1.69,0,2.15,0,4.17,0,5.93.09l1.34.11c.71.06,1.36.15,1.94.24a10.2,10.2,0,0,1,1.87.46,3.16,3.16,0,0,1,.61.29h0a.3.3,0,0,0,.29,0,3.55,3.55,0,0,0,.39-.27,1.22,1.22,0,0,0,.17-.15h0a9.4,9.4,0,0,0,.78-.83c.3-.32.61-.7.94-1.13.19-.22.36-.44.54-.69h0c.38-.48.75-1,1.15-1.53l.61-.86c.41-.58.84-1.19,1.25-1.8a127.67,127.67,0,0,0,7.39-12.23l.64-1.38a5.66,5.66,0,0,0,.55-1.82c0-.58-3.21-4.65-7.14-9a74.6,74.6,0,0,1-16.62-30.42l-2.34-8c-4.81.19-9.64.37-14.46.54l-14.46.55-3.44,9.49c-.26.72-.54,1.42-.83,2.13a53,53,0,0,1-2.93,6.07c-.72,1.28-1.5,2.55-2.33,3.77-.41.6-.84,1.21-1.26,1.79q-1.32,1.79-2.74,3.44a57.56,57.56,0,0,1-7.86,7.52c-1.13.89-2.31,1.74-3.5,2.56s-2.41,1.57-3.67,2.29-2.52,1.39-3.81,2a58.72,58.72,0,0,1-14.26,4.74c-1.4.27-2.81.5-4.23.65a54.07,54.07,0,0,1-17.84-.84c-1-.21-1.88-.44-2.82-.7s-1.85-.55-2.78-.86a50.72,50.72,0,0,1-5.46-2.21c-22.09-10.49-32.91-26.73-34.12-51.2-.93-19.14,3.61-32.72,15-44.76,13.22-14,20.74-17.06,42-17.06,15.57,0,19.36.64,26.14,4.37,11.5,6.31,23.13,19.46,27.25,30.8l3.53,9.77,14.61.54,14.62.55c.41-2.07.84-4.12,1.25-6.16,2.08-10.16,9.75-24.4,17.6-32.67l7.38-7.79q-3.07-5.73-6.13-11.48t-6.14-11.46l-12,1.21c-19,1.94-36.21-4.73-48.12-16.7-.66-.67-1.3-1.34-1.93-2-10.41-11.54-16.22-27.41-14.84-45.05,2.41-31.07,24.12-53,54.15-54.82a62.18,62.18,0,0,1,20.39,2c1.25.35,2.48.75,3.68,1.18a49.08,49.08,0,0,1,8.61,4c1.09.64,2.16,1.33,3.2,2.06s2,1.5,3,2.31a53.63,53.63,0,0,1,5.62,5.38c.89,1,1.75,2,2.59,3.06a68.6,68.6,0,0,1,7.75,12.61c4.83,10.07,5.9,14.58,6,24.73.06,15.55-4.39,29.2-12.78,39.29-2.14,2.59-4.3,5.16-6.44,7.74,2,3.81,4,7.6,6,11.4.14.28.27.54.41.78.41.78.8,1.49,1.15,2.14.59,1.1,1.13,2.07,1.6,2.89.29.49.57,1,.83,1.35h0l.5.75q.35.48.66.87c1.94,2.34,3.52,2.13,7.26,1.46,14.91-2.71,26.3-3.09,36.23-1a53.16,53.16,0,0,1,6.51,1.72c1,.32,2,.69,3,1.07a1.81,1.81,0,0,0,.75.16,3.3,3.3,0,0,0,2.06-.92l.46-.43A14.4,14.4,0,0,0,1028,943c.38-.47.76-1,1.17-1.62,1-1.5,2.21-3.39,3.55-5.73,3.65-6.31,6.65-12.09,6.65-12.86s-2.4-3.74-5.34-6.63-7-9.27-9.06-14.17c-12.32-29.49-1.53-62.33,25.58-77.77.55-.32,1.08-.61,1.59-.89l1.43-.78c.81-.44,1.58-.82,2.33-1.14.35-.17.68-.32,1-.46s.78-.31,1.16-.44a.74.74,0,0,1,.22-.08l.52-.18.64-.2a28.55,28.55,0,0,1,5.72-1c.73-.06,1.52-.13,2.37-.17,2.66-.14,5.88-.17,10-.17,14.52,0,18.54.69,25.12,4.3a63.79,63.79,0,0,1,27.13,28.16c4.22,8.85,5,13,5.06,25.57,0,17.75-5.2,31.48-16.39,43a52.93,52.93,0,0,1-10.09,8.06c-.82.51-1.66,1-2.52,1.48a62.86,62.86,0,0,1-10.79,4.76c-.93.3-1.87.59-2.8.87-.47.14-1,.26-1.44.38-.93.25-1.88.46-2.81.66a48.9,48.9,0,0,1-20.88.15l-7.68-1.79c-2,3.52-4,7-6,10.55-3.29,5.81-6.26,11.22-6.61,12s2.68,5.14,6.7,9.65A74.62,74.62,0,0,1,1070.35,997c.78,2.65,1.54,5.31,2.32,8h27.73q2.58-6,5.14-12.1c9.17-21.68,28.65-34.86,51.55-34.91,13.93,0,24.84,3.35,34.82,10.74,8.52,6.29,17.72,18.52,21.12,28C1216.86,1007.53,1216.56,1027.47,1212.38,1038.78Z" />
                            <path d="M1964.53,377.25V381L1340.13,1587l-50.64-150.66-78,150.66-34.67-103.39,270.48-535.87,65-14.69,205-406.19-81.82-6.4H1392.79l-69.89,50.8H1080.65a139.26,139.26,0,0,0,58.42-114c0-48.43-24.16-91-60.83-115.69H1297.4L1354,268.23h354.6l96.85-135.35Z" />
                            <path d="M364.53,520.46l-81.82,6.4,205.36,406.8,62.28,14.08,270.48,535.87L786.09,1587l-76.56-147.84L659.93,1587,35.48,381v-3.7l159-244.37,96.86,135.35H646l56.64,73.29H929.77c-36.63,24.69-60.83,67.26-60.83,115.69,0,47.33,23.13,89.15,58.41,114.05H677.11l-69.91-50.8Z" />
                          </g>

                          {/* Masked wave liquid group */}
                          <g mask="url(#jarvis-liquid-mask)">
                            <rect x="0" y="0" width="2000" height="2000" fill="#C28a5c" opacity="0.15" />
                            
                            {/* Wave 1 (Custom large scale) */}
                            <path
                              d="M 0,700 Q 600,600 1200,700 T 2400,700 T 3600,700 T 4800,700 L 4800,2000 L 0,2000 Z"
                              fill="url(#bronze-liquid-grad)"
                              className={`wave-1-custom ${isDiscountUnlocked ? "wave-stopped" : ""}`}
                            />
                            
                            {/* Wave 2 (Custom large scale) */}
                            <path
                              d="M 0,900 Q 600,1000 1200,900 T 2400,900 T 3600,900 T 4800,900 L 4800,2000 L 0,2000 Z"
                              fill="url(#bronze-liquid-grad)"
                              opacity="0.6"
                              className={`wave-2-custom ${isDiscountUnlocked ? "wave-stopped" : ""}`}
                            />
                          </g>
                        </svg>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Cart Items List & Recommendations (Scrollable Container) */}
                <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-8 custom-scrollbar">
                  <div className="flex flex-col gap-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-4 group item-fade-in">
                        <div className="w-24 h-32 bg-[#F3F2EE] shrink-0 relative overflow-hidden">
                          <Image
                            src={item.product.featuredImage}
                            alt={item.product.title}
                            fill
                            sizes="96px"
                            className="object-cover mix-blend-multiply"
                          />
                        </div>
                        <div className="flex flex-col justify-between flex-1 py-1">
                          <div>
                            <div className="flex justify-between items-start">
                              <h3 className="font-label-caps text-xs tracking-wide text-neutral-800 uppercase font-bold leading-tight">
                                {item.product.title}
                              </h3>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-neutral-400 hover:text-red-600 transition-colors md:opacity-0 group-hover:opacity-100"
                              >
                                <span className="material-symbols-outlined text-[18px]">delete</span>
                              </button>
                            </div>
                            <p className="font-label-caps text-[9px] text-neutral-400 mt-1 uppercase tracking-wide">
                              {item.variantTitle}
                            </p>
                          </div>
                          <div className="flex justify-between items-end mt-4">
                            <div className="flex items-center border border-neutral-200 rounded-none w-max">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="px-2.5 py-1 text-xs text-neutral-500 hover:bg-neutral-100 transition-colors"
                              >
                                -
                              </button>
                              <span className="font-mono text-xs px-3 text-neutral-800 w-8 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="px-2.5 py-1 text-xs text-neutral-500 hover:bg-neutral-100 transition-colors"
                              >
                                +
                              </button>
                            </div>
                            <span className="font-mono text-xs font-bold text-black">
                              EGP {item.price * item.quantity}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Recommendations (Inside Scrollable Container) */}
                  {recVariants.length > 0 && (
                    <div className="mt-4 pt-6 border-t border-neutral-200/60">
                      <h4 className="font-label-caps text-xs tracking-widest text-[#1b1c1c] mb-6 uppercase font-bold">
                        RECOMMENDED FOR YOU
                      </h4>
                      <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
                        {recVariants.map((variant) => {
                          const color = variant.options.Color;
                          return (
                            <div key={variant.id} className="w-32 shrink-0 group cursor-pointer">
                              <div className="w-full h-40 bg-[#F3F2EE] mb-3 overflow-hidden relative">
                                <Image
                                  src={variant.image || ringerTeeProduct.featuredImage}
                                  alt={variant.title}
                                  fill
                                  sizes="128px"
                                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                              </div>
                              <h5 className="font-label-caps text-[10px] tracking-wide text-neutral-800 truncate font-bold uppercase">
                                {ringerTeeProduct.title}
                              </h5>
                              <p className="font-mono text-[9px] text-[#C28a5c] mt-1 font-bold">
                                {color}
                              </p>
                              <p className="font-mono text-[9px] text-neutral-500 mt-0.5">
                                EGP {variant.price}
                              </p>
                              <button
                                onClick={() => addToCart(ringerTeeProduct, variant.id)}
                                className="mt-3 w-full py-2 bg-transparent border border-[#1b1c1c] text-[#1b1c1c] font-label-caps text-[9px] tracking-wider uppercase hover:bg-[#1b1c1c] hover:text-white transition-colors"
                              >
                                Add
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Order Summary & Checkout CTA */}
                <div className="p-6 bg-[#F9F8F6] border-t border-neutral-200/60 mt-auto">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-label-caps text-xs tracking-widest text-neutral-500 uppercase">Subtotal</span>
                    <span className="font-mono text-sm font-bold text-black">EGP {cartSubtotal}</span>
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-label-caps text-xs tracking-widest text-neutral-500 uppercase">Shipping</span>
                    <span className="font-label-caps text-[10px] text-neutral-400 tracking-wider">Calculated at checkout</span>
                  </div>
                  <Link
                    href="/checkout"
                    onClick={() => setIsCartOpen(false)}
                    className="w-full bg-[#1b1c1c] text-white font-label-caps text-xs py-4 hover:bg-neutral-800 transition-colors flex justify-center items-center gap-2 group tracking-widest uppercase font-bold text-center"
                  >
                    PROCEED TO CHECKOUT →
                  </Link>
                  <p className="font-label-caps text-[8px] text-center text-neutral-400 mt-4 uppercase tracking-widest">
                    Secure, Encrypted Payment
                  </p>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
