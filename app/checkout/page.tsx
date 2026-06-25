"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

const TRUST_ITEMS = [
  "Premium Cotton Fabric",
  "Easy Exchange Policy",
  "Cash On Delivery Available",
  "Fast Shipping Across Egypt",
  "Secure Encrypted Payments",
];

const RECENT_CITIES = ["Alexandria", "Cairo", "Mansoura", "Tanta"];

const EGYPT_CITIES = [
  "Cairo", "Alexandria", "Giza", "Mansoura", "Tanta", "Luxor", "Aswan",
  "Port Said", "Suez", "Ismailia", "Zagazig", "Asyut", "Hurghada", "Sharm El-Sheikh",
];

function getDeliveryEstimate(city: string): string {
  const same = ["Cairo", "Giza", "Alexandria"];
  if (same.includes(city)) return "1–2 business days";
  return "2–4 business days";
}

export default function CheckoutPage() {
  const { cartItems, cartSubtotal } = useCart();
  const router = useRouter();

  const [step, setStep] = useState<"contact" | "delivery" | "payment">("contact");
  const [form, setForm] = useState({
    firstName: "", lastName: "", phone: "", email: "",
    address: "", city: "Cairo", apartment: "", notes: "",
    paymentMethod: "cod",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const hasLowInventory = cartItems.some((item) =>
    item.product.variants.filter((v) => v.available).length <= 2
  );

  const shipping = cartSubtotal >= 450 ? 0 : 60;
  const total = cartSubtotal + shipping;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1400));
    router.push("/thank-you");
  };

  const deliveryEst = getDeliveryEstimate(form.city);

  return (
    <div className="min-h-screen bg-surface">
      {/* Minimal checkout header */}
      <header className="w-full border-b border-outline-variant/15 py-5 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <Link href="/" className="font-display-md text-display-md font-bold tracking-tighter text-primary">
            JARVIS
          </Link>
          <div className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant text-[11px]">
            <span className="material-symbols-outlined text-[16px] text-success">lock</span>
            SECURE CHECKOUT
          </div>
        </div>
      </header>

      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-16 xl:gap-24">

          {/* ── LEFT: Checkout Form ────────────────────────────── */}
          <div className="flex flex-col gap-10">

            {/* Step breadcrumbs */}
            <div className="flex items-center gap-3 font-label-caps text-label-caps text-[11px]">
              {(["contact", "delivery", "payment"] as const).map((s, i) => (
                <React.Fragment key={s}>
                  <span
                    className={`uppercase tracking-widest cursor-pointer transition-colors duration-200 ${
                      step === s ? "text-primary border-b border-primary pb-0.5" : "text-on-surface-variant"
                    }`}
                    onClick={() => {
                      if (s === "contact") setStep("contact");
                      if (s === "delivery" && (form.firstName || form.phone)) setStep("delivery");
                    }}
                  >
                    {["Contact", "Delivery", "Payment"][i]}
                  </span>
                  {i < 2 && <span className="text-outline-variant/50">›</span>}
                </React.Fragment>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-10">

              {/* ── SECTION 1: Contact ──────────────── */}
              <section className="flex flex-col gap-5">
                <div className="flex items-center justify-between border-b border-outline-variant/20 pb-3">
                  <h2 className="font-display-md text-display-md text-primary uppercase">Contact</h2>
                  <span className="font-label-caps text-label-caps text-on-surface-variant text-[10px]">STEP 1 / 3</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <InputField label="First Name" name="firstName" value={form.firstName} onChange={handleChange} required />
                  <InputField label="Last Name" name="lastName" value={form.lastName} onChange={handleChange} required />
                </div>
                <InputField label="Phone Number" name="phone" value={form.phone} onChange={handleChange} type="tel" required placeholder="+20 1XX XXX XXXX" />
                <InputField label="Email (optional)" name="email" value={form.email} onChange={handleChange} type="email" />
              </section>

              {/* ── SECTION 2: Delivery ──────────────── */}
              <section className="flex flex-col gap-5">
                <div className="flex items-center justify-between border-b border-outline-variant/20 pb-3">
                  <h2 className="font-display-md text-display-md text-primary uppercase">Delivery</h2>
                  <span className="font-label-caps text-label-caps text-on-surface-variant text-[10px]">STEP 2 / 3</span>
                </div>

                {/* Delivery Confidence Banner */}
                <div
                  className="flex items-start gap-3 px-5 py-4 rounded-2xl"
                  style={{
                    background: "rgba(78,122,99,0.08)",
                    border: "1px solid rgba(78,122,99,0.18)",
                  }}
                >
                  <span className="material-symbols-outlined text-success text-[20px] mt-0.5">local_shipping</span>
                  <div>
                    <p className="font-label-caps text-label-caps text-success text-[11px] tracking-widest mb-1">ORDER TODAY — SHIPS WITHIN 24 HOURS</p>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                      Estimated delivery to <strong className="text-primary">{form.city}</strong>:{" "}
                      <strong className="text-primary">{deliveryEst}</strong>
                    </p>
                  </div>
                </div>

                {/* City selector */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-caps text-label-caps text-on-surface-variant text-[11px] tracking-widest uppercase">City</label>
                  <select
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    className="w-full border border-outline-variant/30 bg-surface-container-low px-4 py-3.5 font-body-md text-body-md text-primary focus:outline-none focus:border-primary transition-colors duration-200 rounded-xl appearance-none"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%230F1B2D' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
                  >
                    {EGYPT_CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                <InputField label="Street Address" name="address" value={form.address} onChange={handleChange} required placeholder="Building, Street, District" />
                <InputField label="Apartment / Floor (optional)" name="apartment" value={form.apartment} onChange={handleChange} />

                <div className="flex flex-col gap-1.5">
                  <label className="font-label-caps text-label-caps text-on-surface-variant text-[11px] tracking-widest uppercase">Order Notes (optional)</label>
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    rows={2}
                    placeholder="Any special delivery instructions..."
                    className="w-full border border-outline-variant/30 bg-surface-container-low px-4 py-3.5 font-body-md text-body-md text-primary focus:outline-none focus:border-primary transition-colors duration-200 rounded-xl resize-none"
                  />
                </div>
              </section>

              {/* ── SECTION 3: Payment ──────────────── */}
              <section className="flex flex-col gap-5">
                <div className="flex items-center justify-between border-b border-outline-variant/20 pb-3">
                  <h2 className="font-display-md text-display-md text-primary uppercase">Payment</h2>
                  <span className="font-label-caps text-label-caps text-on-surface-variant text-[10px]">STEP 3 / 3</span>
                </div>

                {/* Payment method cards */}
                <div className="flex flex-col gap-3">
                  <PaymentOption
                    id="cod"
                    label="Cash On Delivery"
                    description="Pay when your order arrives"
                    icon="payments"
                    selected={form.paymentMethod === "cod"}
                    onChange={() => setForm((p) => ({ ...p, paymentMethod: "cod" }))}
                  />
                  <PaymentOption
                    id="card"
                    label="Credit / Debit Card"
                    description="Visa, Mastercard — Encrypted & Secure"
                    icon="credit_card"
                    selected={form.paymentMethod === "card"}
                    onChange={() => setForm((p) => ({ ...p, paymentMethod: "card" }))}
                  />
                  <PaymentOption
                    id="instapay"
                    label="InstaPay"
                    description="Egyptian mobile payment — instant confirmation"
                    icon="account_balance_wallet"
                    selected={form.paymentMethod === "instapay"}
                    onChange={() => setForm((p) => ({ ...p, paymentMethod: "instapay" }))}
                  />
                </div>

                {/* Size confidence */}
                <div
                  className="flex items-start gap-3 px-5 py-4 rounded-2xl mt-2"
                  style={{
                    backdropFilter: "blur(12px)",
                    background: "rgba(255,255,255,0.55)",
                    border: "1px solid rgba(255,255,255,0.35)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                  }}
                >
                  <span className="material-symbols-outlined text-tertiary text-[20px] mt-0.5">swap_horiz</span>
                  <div>
                    <p className="font-label-caps text-label-caps text-primary text-[11px] tracking-widest mb-1">NOT SURE ABOUT SIZING?</p>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                      Easy size exchange available after delivery. No questions asked.
                    </p>
                  </div>
                </div>
              </section>

              {/* Place Order CTA */}
              <button
                type="submit"
                disabled={isSubmitting || !form.firstName || !form.phone || !form.address}
                className="w-full py-5 bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-widest transition-all duration-300 hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed rounded-2xl text-sm relative overflow-hidden"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" />
                    Placing Order...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">lock</span>
                    Place Order — LE {total.toLocaleString()}
                  </span>
                )}
              </button>

              <p className="text-center font-label-caps text-label-caps text-on-surface-variant text-[10px] tracking-widest -mt-4">
                By placing your order you agree to our{" "}
                <Link href="/privacy" className="underline underline-offset-2 hover:text-primary transition-colors">Privacy Policy</Link>
                {" "}and{" "}
                <Link href="/refund-policy" className="underline underline-offset-2 hover:text-primary transition-colors">Refund Policy</Link>
              </p>
            </form>
          </div>

          {/* ── RIGHT: Order Summary + Trust Panel ──────────── */}
          <aside className="flex flex-col gap-8 lg:sticky lg:top-24 lg:self-start">

            {/* Order Summary */}
            <div
              className="rounded-3xl p-7 flex flex-col gap-6"
              style={{
                backdropFilter: "blur(20px)",
                background: "rgba(247,246,242,0.75)",
                border: "1px solid rgba(255,255,255,0.35)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.07)",
              }}
            >
              <h3 className="font-display-md text-display-md text-primary uppercase border-b border-outline-variant/20 pb-4">
                Order Summary
              </h3>

              {/* Cart Items */}
              <div className="flex flex-col gap-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="relative w-16 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-surface-container">
                      {item.product.featuredImage && (
                        <Image src={item.product.featuredImage} alt={item.product.title} fill className="object-cover" />
                      )}
                      <span
                        className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center font-label-caps text-[10px]"
                        style={{ background: "#0F1B2D", color: "#F7F6F2" }}
                      >
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-body-md text-body-md text-primary text-sm font-medium truncate">{item.product.title}</p>
                      <p className="font-label-caps text-label-caps text-on-surface-variant text-[10px] mt-0.5">{item.variantTitle}</p>
                    </div>
                    <p className="font-body-md text-body-md text-primary text-sm font-semibold flex-shrink-0">
                      LE {(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>

              {/* Low inventory nudge */}
              {hasLowInventory && (
                <div
                  className="flex items-center gap-2 px-4 py-3 rounded-xl"
                  style={{ background: "rgba(176,122,79,0.10)", border: "1px solid rgba(176,122,79,0.20)" }}
                >
                  <span className="material-symbols-outlined text-tertiary text-[16px]">warning</span>
                  <p className="font-label-caps text-label-caps text-tertiary text-[10px] tracking-widest">
                    ONLY A FEW PIECES REMAIN IN POPULAR SIZES
                  </p>
                </div>
              )}

              {/* Pricing */}
              <div className="flex flex-col gap-2 border-t border-outline-variant/15 pt-4">
                <div className="flex justify-between font-body-md text-body-md text-on-surface-variant text-sm">
                  <span>Subtotal</span>
                  <span>LE {cartSubtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-body-md text-body-md text-on-surface-variant text-sm">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? "text-success font-medium" : ""}>
                    {shipping === 0 ? "FREE" : `LE ${shipping}`}
                  </span>
                </div>
                <div className="flex justify-between font-display-md text-display-md text-primary pt-2 border-t border-outline-variant/15 mt-1">
                  <span>Total</span>
                  <span>LE {total.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Trust Panel */}
            <div className="flex flex-col gap-3">
              <p className="font-label-caps text-label-caps text-on-surface-variant text-[10px] tracking-widest uppercase">
                Why Jarvis
              </p>
              <div className="flex flex-col gap-2.5">
                {TRUST_ITEMS.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-success text-[18px]">check_circle</span>
                    <span className="font-body-md text-body-md text-on-surface-variant text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Proof */}
            <div
              className="rounded-2xl px-5 py-4 flex flex-col gap-3"
              style={{
                backdropFilter: "blur(12px)",
                background: "rgba(255,255,255,0.55)",
                border: "1px solid rgba(255,255,255,0.35)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <p className="font-label-caps text-label-caps text-on-surface-variant text-[10px] tracking-widest uppercase">
                  Recently Ordered By
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {RECENT_CITIES.map((city) => (
                  <span
                    key={city}
                    className="px-3 py-1.5 rounded-full font-label-caps text-label-caps text-[10px] tracking-wider text-on-surface-variant"
                    style={{ background: "rgba(15,27,45,0.06)", border: "1px solid rgba(15,27,45,0.10)" }}
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
}

/* ── Sub-components ───────────────────────────────────────────────── */

function InputField({
  label, name, value, onChange, type = "text", required = false, placeholder = "",
}: {
  label: string; name: string; value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type?: string; required?: boolean; placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="font-label-caps text-label-caps text-on-surface-variant text-[11px] tracking-widest uppercase">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full border border-outline-variant/30 bg-surface-container-low px-4 py-3.5 font-body-md text-body-md text-primary placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary transition-colors duration-200 rounded-xl"
      />
    </div>
  );
}

function PaymentOption({
  id, label, description, icon, selected, onChange,
}: {
  id: string; label: string; description: string; icon: string;
  selected: boolean; onChange: () => void;
}) {
  return (
    <label
      htmlFor={id}
      className="flex items-center gap-4 px-5 py-4 rounded-2xl cursor-pointer transition-all duration-200"
      style={{
        background: selected ? "rgba(15,27,45,0.05)" : "rgba(247,246,242,0.8)",
        border: selected ? "1.5px solid #0F1B2D" : "1.5px solid rgba(15,27,45,0.12)",
      }}
    >
      <input id={id} type="radio" name="paymentMethod" checked={selected} onChange={onChange} className="sr-only" />
      <span className="material-symbols-outlined text-primary text-[22px]">{icon}</span>
      <div className="flex flex-col gap-0.5 flex-1">
        <span className="font-body-md text-body-md text-primary text-sm font-medium">{label}</span>
        <span className="font-label-caps text-label-caps text-on-surface-variant text-[10px] tracking-wider">{description}</span>
      </div>
      <div
        className="w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors duration-200"
        style={{ borderColor: selected ? "#0F1B2D" : "#D8DADF" }}
      >
        {selected && <div className="w-2 h-2 rounded-full bg-primary" />}
      </div>
    </label>
  );
}
