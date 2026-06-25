"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { dummyProducts } from "@/data/dummyData";

const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    removeFromCart,
    updateQuantity,
    cartSubtotal,
    freeShippingThreshold,
    addToCart,
  } = useCart();

  const remaining = freeShippingThreshold - cartSubtotal;
  const progressPct = Math.min((cartSubtotal / freeShippingThreshold) * 100, 100);

  // Recommendations: Minimalist Sneaker and Utility Crossbody
  const recProducts = dummyProducts.filter((p) =>
    ["minimalist-sneaker", "utility-crossbody"].includes(p.handle)
  );

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
            className="fixed inset-0 bg-inverse-surface/40 backdrop-blur-sm z-40 transition-opacity duration-300"
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
            className="fixed top-0 right-0 h-full w-full md:w-[480px] z-50 flex flex-col"
            style={{
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              background: "rgba(247,246,242,0.88)",
              borderLeft: "1px solid rgba(255,255,255,0.35)",
              boxShadow: "0 0 60px rgba(0,0,0,0.12), -8px 0 32px rgba(0,0,0,0.04)",
              borderRadius: "24px 0 0 24px",
            }}
          >
            {/* Header */}
            <div
              className="px-margin-mobile md:px-gutter py-6 border-b flex justify-between items-center"
              style={{ borderColor: "rgba(255,255,255,0.3)" }}
            >
              <h2 className="font-display-md text-display-md text-on-surface">
                Your Cart <span className="text-on-surface-variant font-body-md font-normal">({cartItems.reduce((acc, i) => acc + i.quantity, 0)})</span>
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-on-surface-variant hover:text-primary transition-colors p-2 -mr-2"
                aria-label="Close cart"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Free Shipping Progress */}
            <div className="px-margin-mobile md:px-gutter py-4 bg-surface-container-low border-b border-outline-variant/10">
              <div className="flex justify-between items-center mb-stack-sm">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Free Shipping Progress
                </span>
                <span className="font-label-sm text-label-sm font-bold text-success">
                  {remaining > 0 ? `LE ${remaining} away` : "Unlocked"}
                </span>
              </div>
              <div className="h-1 w-full bg-surface-variant rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPct}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="h-full bg-success"
                />
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mt-stack-sm text-sm">
                {remaining > 0
                  ? `Add LE ${remaining} to unlock complimentary global shipping.`
                  : "You have unlocked free shipping!"}
              </p>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto px-margin-mobile md:px-gutter py-6 flex flex-col gap-gutter custom-scrollbar">
              {cartItems.length > 0 ? (
                <div className="flex flex-col gap-gutter">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-stack-md group item-fade-in">
                      <div className="w-24 h-32 bg-surface-container shrink-0 relative overflow-hidden">
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
                            <h3 className="font-body-lg text-body-lg text-on-surface leading-tight">
                              {item.product.title}
                            </h3>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-on-surface-variant hover:text-error transition-colors md:opacity-0 group-hover:opacity-100"
                            >
                              <span className="material-symbols-outlined text-[18px]">delete</span>
                            </button>
                          </div>
                          <p className="font-label-caps text-label-caps text-on-surface-variant mt-1">
                            {item.variantTitle}
                          </p>
                        </div>
                        <div className="flex justify-between items-end mt-4">
                          <div className="flex items-center border border-outline-variant/30 rounded-none w-max">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-2 py-1 text-on-surface hover:bg-surface-variant transition-colors"
                            >
                              -
                            </button>
                            <span className="font-label-caps text-label-caps px-3 text-on-surface w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-2 py-1 text-on-surface hover:bg-surface-variant transition-colors"
                            >
                              +
                            </button>
                          </div>
                          <span className="font-label-caps text-label-caps text-on-surface font-bold">
                            LE {item.price * item.quantity}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center text-on-surface-variant font-body-md">
                  Your cart is empty.
                </div>
              )}

              {/* Recommendations */}
              {recProducts.length > 0 && (
                <div className="mt-stack-lg pt-stack-lg border-t border-outline-variant/10">
                  <h4 className="font-label-caps text-label-caps text-on-surface mb-stack-md">
                    Complete Your Fit
                  </h4>
                  <div className="flex gap-stack-md overflow-x-auto pb-4 hide-scrollbar">
                    {recProducts.map((p) => (
                      <div key={p.id} className="w-32 shrink-0 group cursor-pointer">
                        <div className="w-full h-40 bg-surface-container mb-stack-sm overflow-hidden relative">
                          <Image
                            src={p.featuredImage}
                            alt={p.title}
                            fill
                            sizes="128px"
                            className="object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <h5 className="font-body-md text-body-md text-on-surface truncate text-sm">
                          {p.title}
                        </h5>
                        <p className="font-label-caps text-label-caps text-on-surface-variant mt-1 text-[10px]">
                          LE {p.price}
                        </p>
                        <button
                          onClick={() => addToCart(p, p.variants[0]?.id || p.id)}
                          className="mt-2 w-full py-2 border border-primary text-primary font-label-caps text-[10px] hover:bg-primary hover:text-on-primary transition-colors"
                        >
                          Add
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Order Summary & Checkout CTA */}
            <div className="p-margin-mobile md:p-gutter bg-surface-bright border-t border-outline-variant/20 mt-auto">
              <div className="flex justify-between items-center mb-stack-sm">
                <span className="font-body-md text-body-md text-on-surface-variant">Subtotal</span>
                <span className="font-body-md text-body-md text-on-surface">LE {cartSubtotal}</span>
              </div>
              <div className="flex justify-between items-center mb-stack-lg">
                <span className="font-body-md text-body-md text-on-surface-variant">Shipping</span>
                <span className="font-body-md text-body-md text-on-surface">Calculated at checkout</span>
              </div>
              <Link
                href="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="w-full bg-primary text-on-primary font-label-caps text-label-caps py-4 hover:bg-primary-hover transition-colors flex justify-center items-center gap-2 group rounded-xl text-sm tracking-widest uppercase"
              >
                Proceed to Checkout
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <p className="font-label-sm text-label-sm text-center text-on-surface-variant mt-stack-md uppercase tracking-widest text-[10px]">
                Secure, Encrypted Payment
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
