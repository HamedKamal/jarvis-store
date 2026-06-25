"use client";

import React from "react";
import Accordion from "@/components/Accordion";

export default function FAQPage() {
  const categories = [
    {
      title: "ORDERS & PRE-ORDERS",
      items: [
        {
          q: "How do pre-orders work for Jarvis collections?",
          a: "Due to our low-waste architectural production model, limited items are offered via pre-order. Shipping dates are specified on the product page (typically 2-3 weeks from order release). Your card is charged at checkout to reserve the slot."
        },
        {
          q: "Can I modify or cancel my order after placement?",
          a: "Orders are processed immediately by our Cairo fulfillment center. You can modify or cancel your order within 1 hour of placement by emailing support@jarvis.com. After 1 hour, standard return policies apply."
        }
      ]
    },
    {
      title: "SHIPPING & FULFILLMENT",
      items: [
        {
          q: "Do you ship internationally?",
          a: "Yes, we ship globally via DHL Express. Free shipping is automatically unlocked on all orders over LE 450 (or $450 equivalent). Duties and custom fees are calculated at checkout."
        },
        {
          q: "How long does shipping take?",
          a: "Standard shipping takes 3-5 business days. Express shipping takes 1-3 business days. Pre-order timelines are separate and depend on raw fabric processing."
        }
      ]
    },
    {
      title: "SIZING & TEXTILES",
      items: [
        {
          q: "How do your architectural fits run?",
          a: "Our fits are designed to be slightly boxy and relaxed to maintain structural drape. We recommend buying your true size for the intended streetwear look. Refer to our Size Guide on each product details page."
        },
        {
          q: "How should I wash my Jarvis heavy cotton items?",
          a: "Wash in cold water on a delicate cycle, inside out, with similar colors. Do not bleach. Air dry flat to protect the cotton fibers and preserve the architectural drape."
        }
      ]
    }
  ];

  return (
    <div className="w-full max-w-[800px] mx-auto px-margin-mobile md:px-0 py-section-gap">
      <span className="font-label-caps text-label-caps text-tertiary tracking-widest block mb-4">
        SUPPORT
      </span>
      <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase mb-8">
        FREQUENTLY ASKED QUESTIONS
      </h1>
      
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
        Find quick answers regarding our limited releases, brutalist design sizing, Nile delta cotton textiles, and global shipments.
      </p>

      <div className="flex flex-col gap-12">
        {categories.map((cat, catIdx) => (
          <div key={catIdx} className="flex flex-col gap-4">
            <h2 className="font-label-caps text-label-caps text-primary tracking-widest font-bold border-b border-outline-variant/30 pb-2">
              {cat.title}
            </h2>
            <div className="flex flex-col">
              {cat.items.map((item, idx) => (
                <Accordion key={idx} title={item.q} iconName="help_outline">
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {item.a}
                  </p>
                </Accordion>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
