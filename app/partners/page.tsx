"use client";

import React from "react";

export default function PartnersPage() {
  const partners = [
    {
      name: "NILE DELTA BASIN COOPERATIVE",
      role: "Raw Organic Cotton Sourcing",
      location: "El Mahalla El Kubra, Egypt",
      desc: "Providing extra-long staple Egyptian Giza cotton grown using sustainable rainwater farming techniques, preserving organic textile purity.",
    },
    {
      name: "KAIRO BRUTALIST ARCHITECTS ASSOCIATES",
      role: "Visual & Structural Direction",
      location: "Cairo, Egypt",
      desc: "Guiding the geometry and layout design of our flagship stores and modern streetwear cuts, establishing architectural silhouettes.",
    },
    {
      name: "HELIOPOLIS WEAVING MILLS",
      role: "High-gsm Textile Knitting & Finishing",
      location: "Heliopolis, Egypt",
      desc: "Our primary finishing mill specializing in weaving ultra-thick 300-380gsm cotton basic structures with customized pre-shrunk finishes.",
    },
  ];

  return (
    <div className="w-full max-w-[800px] mx-auto px-margin-mobile md:px-0 py-section-gap">
      <span className="font-label-caps text-label-caps text-tertiary tracking-widest block mb-4">
        COLLABORATORS
      </span>
      <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase mb-8">
        OUR PARTNERS
      </h1>
      
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
        We partner exclusively with raw material growers, heritage mills, and visual architects who share our commitment to silent quality and uncompromising precision.
      </p>

      <div className="flex flex-col gap-12">
        {partners.map((partner, idx) => (
          <div key={idx} className="pb-8 border-b border-outline-variant/30 flex flex-col gap-3">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <h3 className="font-display-md text-display-md text-primary font-bold">
                  {partner.name}
                </h3>
                <span className="font-label-caps text-label-caps text-tertiary text-xs mt-1 block">
                  {partner.role}
                </span>
              </div>
              <span className="font-label-caps text-label-caps text-on-surface-variant text-[11px] bg-surface-container px-3 py-1">
                {partner.location}
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              {partner.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
