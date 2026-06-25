"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ORDER_STEPS = [
  { label: "Order Confirmed", done: true, icon: "check_circle" },
  { label: "Preparing Your Order", done: true, icon: "inventory_2" },
  { label: "Shipped", done: false, icon: "local_shipping" },
  { label: "Delivered", done: false, icon: "home" },
];

const WHAT_NEXT = [
  {
    number: "01",
    title: "Order Review",
    body: "Our team reviews your order and verifies details within the hour.",
  },
  {
    number: "02",
    title: "Product Preparation",
    body: "Your Ringer Tee is quality-checked, folded, and packaged with care.",
  },
  {
    number: "03",
    title: "Shipping",
    body: "Dispatched within 24 hours. You will receive a tracking update.",
  },
  {
    number: "04",
    title: "Delivery",
    body: "Delivered to your door. Estimated 1–4 business days based on city.",
  },
];

const COMING_SOON = [
  {
    name: "Heavyweight Hoodie",
    tag: "COMING SOON",
    image: "/assets/BLACK/atef-front.jpg",
  },
  {
    name: "Quarter Zip",
    tag: "COMING SOON",
    image: "/assets/CREAMY-OLIVE/atef-front_1.jpg",
  },
  {
    name: "Premium Sweatpants",
    tag: "COMING SOON",
    image: "/assets/ARMY/atef-front_2.jpg",
  },
];

const COMMUNITY_IMAGES = [
  "/assets/BLACK/hana-front.jpg",
  "/assets/CREAMY-OLIVE/nour-front_1.jpg",
  "/assets/OLIVE-WHITE/gogo-front_1.jpg",
  "/assets/ROSE/nour-1.jpg",
  "/assets/ARMY/atef-front_2.jpg",
  "/assets/BURGUNDY/hana-front_1.jpg",
];

export default function ThankYouPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-surface">

      {/* Minimal header */}
      <header className="w-full border-b border-outline-variant/15 py-5 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <Link href="/" className="font-display-md text-display-md font-bold tracking-tighter text-primary">
            JARVIS
          </Link>
          <Link
            href="/products/ringer-tee"
            className="font-label-caps text-label-caps text-on-surface-variant text-[11px] tracking-widest hover:text-primary transition-colors"
          >
            CONTINUE SHOPPING
          </Link>
        </div>
      </header>

      {/* ── HERO ───────────────────────────────────────────── */}
      <section
        className={`w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop pt-20 pb-16 flex flex-col items-center text-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Confirmation pill */}
        <div
          className="flex items-center gap-2 px-5 py-2.5 rounded-full mb-8"
          style={{
            backdropFilter: "blur(16px)",
            background: "rgba(78,122,99,0.10)",
            border: "1px solid rgba(78,122,99,0.22)",
          }}
        >
          <span className="material-symbols-outlined text-success text-[16px]">check_circle</span>
          <span className="font-label-caps text-label-caps text-success text-[11px] tracking-widest">
            ORDER CONFIRMED
          </span>
        </div>

        <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-xl md:text-headline-xl text-primary uppercase leading-none tracking-tight max-w-2xl">
          YOUR RINGER TEE IS ON ITS WAY.
        </h1>

        <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 max-w-md">
          Thank you for your order. We&apos;ll prepare it with care and ship it within 24 hours.
        </p>

        <div className="flex items-center gap-4 mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-hover transition-colors duration-300 rounded-xl text-sm"
          >
            Back to Home
          </Link>
          <Link
            href="/products/ringer-tee"
            className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all duration-300 rounded-xl text-sm"
          >
            Shop More Colors
          </Link>
        </div>
      </section>

      {/* ── ORDER PROGRESS TIMELINE ───────────────────────── */}
      <section className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-16">
        <div
          className="rounded-3xl p-8 md:p-12"
          style={{
            backdropFilter: "blur(20px)",
            background: "rgba(247,246,242,0.75)",
            border: "1px solid rgba(255,255,255,0.35)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.07)",
          }}
        >
          <h2 className="font-display-md text-display-md text-primary uppercase mb-10">Order Progress</h2>

          {/* Timeline — horizontal on desktop, vertical on mobile */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-0 md:gap-0 relative">
            {ORDER_STEPS.map((step, i) => (
              <React.Fragment key={step.label}>
                {/* Step node */}
                <div className="flex md:flex-col items-center md:items-center gap-4 md:gap-3 flex-1 relative z-10">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={
                      step.done
                        ? { background: "#0F1B2D", boxShadow: "0 4px 12px rgba(15,27,45,0.25)" }
                        : { background: "#D8DADF", border: "2px solid #D8DADF" }
                    }
                  >
                    <span
                      className="material-symbols-outlined text-[20px]"
                      style={{ color: step.done ? "#F7F6F2" : "#9EA3AB" }}
                    >
                      {step.icon}
                    </span>
                  </div>
                  <div className="md:text-center">
                    <p
                      className="font-label-caps text-label-caps text-[11px] tracking-widest"
                      style={{ color: step.done ? "#0F1B2D" : "#9EA3AB" }}
                    >
                      {step.label.toUpperCase()}
                    </p>
                    {step.done && (
                      <p className="font-body-md text-body-md text-success text-[12px] mt-0.5 hidden md:block">
                        ✓ Complete
                      </p>
                    )}
                  </div>
                </div>

                {/* Connector line */}
                {i < ORDER_STEPS.length - 1 && (
                  <>
                    {/* Desktop horizontal */}
                    <div
                      className="hidden md:block flex-1 h-0.5 mx-2 -mt-6 relative"
                      style={{ background: step.done ? "#0F1B2D" : "#D8DADF" }}
                    />
                    {/* Mobile vertical */}
                    <div
                      className="md:hidden w-0.5 h-8 ml-6 -my-1"
                      style={{ background: step.done ? "#0F1B2D" : "#D8DADF" }}
                    />
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT HAPPENS NEXT ─────────────────────────────── */}
      <section className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-16 border-t border-outline-variant/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary uppercase">
            What Happens Next?
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xs text-sm">
            Here&apos;s everything that happens from this moment to your doorstep.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHAT_NEXT.map((step, i) => (
            <div
              key={step.number}
              className="flex flex-col gap-4 p-7 rounded-3xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: i < 2 ? "rgba(15,27,45,0.04)" : "rgba(15,27,45,0.02)",
                border: "1px solid rgba(15,27,45,0.07)",
              }}
            >
              <span
                className="font-headline-xl text-headline-xl font-bold leading-none"
                style={{ color: i < 2 ? "#0F1B2D" : "#D8DADF", fontSize: "48px" }}
              >
                {step.number}
              </span>
              <div>
                <h3 className="font-display-md text-display-md text-primary text-base uppercase mb-2">
                  {step.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm leading-relaxed">
                  {step.body}
                </p>
              </div>
              {i < 2 && (
                <div className="flex items-center gap-1.5 mt-auto">
                  <span className="w-1.5 h-1.5 rounded-full bg-success" />
                  <span className="font-label-caps text-label-caps text-success text-[10px] tracking-widest">IN PROGRESS</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── SUPPORT + COMMUNITY ───────────────────────────── */}
      <section className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-16 border-t border-outline-variant/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Need Help */}
          <div
            className="rounded-3xl p-8 flex flex-col gap-5"
            style={{
              backdropFilter: "blur(20px)",
              background: "rgba(255,255,255,0.55)",
              border: "1px solid rgba(255,255,255,0.35)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
            }}
          >
            <span className="material-symbols-outlined text-primary text-[32px]">support_agent</span>
            <div>
              <h3 className="font-display-md text-display-md text-primary uppercase mb-2">Need Help?</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                Our team is available 7 days a week. Reach out anytime and we&apos;ll get back to you promptly.
              </p>
            </div>
            <div className="flex flex-col gap-3 mt-2">
              <a
                href="mailto:support@jarvis.eg"
                className="flex items-center gap-3 font-label-caps text-label-caps text-[11px] text-primary tracking-widest hover:opacity-70 transition-opacity"
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
                support@jarvis.eg
              </a>
              <a
                href="https://wa.me/201000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-label-caps text-label-caps text-[11px] text-primary tracking-widest hover:opacity-70 transition-opacity"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                WhatsApp Support
              </a>
            </div>
            <Link
              href="/faqs"
              className="mt-2 self-start border border-primary text-primary px-6 py-3 font-label-caps text-label-caps text-[11px] uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all duration-300 rounded-xl"
            >
              View FAQs
            </Link>
          </div>

          {/* Community Instagram */}
          <div className="rounded-3xl overflow-hidden flex flex-col" style={{ border: "1px solid rgba(15,27,45,0.07)" }}>
            <div className="flex items-center justify-between px-7 py-5 border-b border-outline-variant/10">
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-primary" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                <span className="font-label-caps text-label-caps text-primary text-[11px] tracking-widest">@JARVIS.EG</span>
              </div>
              <a
                href="https://instagram.com/jarvis.eg"
                target="_blank"
                rel="noopener noreferrer"
                className="font-label-caps text-label-caps text-on-surface-variant text-[10px] tracking-widest hover:text-primary transition-colors"
              >
                FOLLOW →
              </a>
            </div>

            <div className="grid grid-cols-3 gap-0.5 flex-1">
              {COMMUNITY_IMAGES.map((src, i) => (
                <div key={i} className="relative aspect-square overflow-hidden bg-surface-container group">
                  <Image
                    src={src}
                    alt={`Jarvis community photo ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="200px"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/15 transition-colors duration-300" />
                </div>
              ))}
            </div>

            <div className="px-7 py-5 border-t border-outline-variant/10">
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                Tag <strong className="text-primary">@jarvis.eg</strong> to be featured in our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMING SOON ───────────────────────────────────── */}
      <section className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-16 border-t border-outline-variant/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="font-label-caps text-label-caps text-on-surface-variant text-[11px] tracking-widest uppercase mb-2 block">
              What&apos;s Next
            </span>
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary uppercase">
              Coming Soon
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant text-sm max-w-xs">
            The next chapter of Jarvis. Drop notifications available soon.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {COMING_SOON.map((product) => (
            <div key={product.name} className="group flex flex-col">
              <div
                className="relative aspect-[3/4] w-full overflow-hidden bg-surface-container-low"
                style={{ borderRadius: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03] filter grayscale-[40%]"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                {/* Glass badge */}
                <div className="absolute top-3 right-3">
                  <span
                    className="font-label-caps text-label-caps text-[10px] tracking-widest text-on-surface px-3 py-1.5"
                    style={{
                      backdropFilter: "blur(20px)",
                      background: "rgba(255,255,255,0.55)",
                      border: "1px solid rgba(255,255,255,0.35)",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                      borderRadius: "999px",
                    }}
                  >
                    {product.tag}
                  </span>
                </div>
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-primary/20" />
              </div>
              <div className="pt-3 px-1">
                <h3 className="font-body-lg text-body-lg text-primary font-bold uppercase">{product.name}</h3>
                <p className="font-label-caps text-label-caps text-on-surface-variant text-[10px] tracking-widest mt-1">
                  NOTIFY ME WHEN AVAILABLE
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Notify CTA */}
        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="font-body-md text-body-md text-on-surface-variant max-w-sm text-sm">
            Be the first to know when new pieces drop.
          </p>
          <div className="flex items-center gap-0 w-full max-w-sm">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 border border-outline-variant/30 border-r-0 bg-surface-container-low px-4 py-3.5 font-body-md text-body-md text-primary placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary transition-colors duration-200 rounded-l-xl text-sm"
            />
            <button className="bg-primary text-on-primary px-6 py-3.5 font-label-caps text-label-caps text-[11px] uppercase tracking-widest hover:bg-primary-hover transition-colors duration-300 rounded-r-xl whitespace-nowrap">
              Notify Me
            </button>
          </div>
        </div>
      </section>

      {/* Footer strip */}
      <footer className="border-t border-outline-variant/15 py-8 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display-md text-display-md font-bold tracking-tighter text-primary">JARVIS</span>
          <div className="flex items-center gap-6">
            <Link href="/refund-policy" className="font-label-caps text-label-caps text-on-surface-variant text-[10px] tracking-widest hover:text-primary transition-colors">RETURNS</Link>
            <Link href="/faqs" className="font-label-caps text-label-caps text-on-surface-variant text-[10px] tracking-widest hover:text-primary transition-colors">FAQS</Link>
            <Link href="/privacy" className="font-label-caps text-label-caps text-on-surface-variant text-[10px] tracking-widest hover:text-primary transition-colors">PRIVACY</Link>
          </div>
          <p className="font-label-caps text-label-caps text-on-surface-variant text-[10px] tracking-wider">
            © 2024 JARVIS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}
