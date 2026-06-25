"use client";

import React from "react";

export default function AboutPage() {
  return (
    <div className="w-full max-w-[800px] mx-auto px-margin-mobile md:px-0 py-section-gap">
      <span className="font-label-caps text-label-caps text-tertiary tracking-widest block mb-4">
        OUR BRAND
      </span>
      <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase mb-8">
        THE JARVIS PHILOSOPHY
      </h1>
      
      <div className="flex flex-col gap-8 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
        <p>
          Jarvis represents the intersection of premium Egyptian heritage and modern architectural streetwear. Established with a single core principle—<strong>architectural integrity in every stitch</strong>—we craft garments designed for the discerning individual who values silent luxury and technical precision.
        </p>

        <h2 className="font-display-md text-display-md text-primary uppercase mt-4">
          Architectural Minimalism
        </h2>
        <p className="font-body-md text-body-md">
          Our silhouettes are inspired by brutalist geometry and clean lines. We believe garments should act as extensions of structure, creating confident shapes without relying on loud, fleeting logos or temporary trends. Every seam is intentional, every fold calculated.
        </p>

        <h2 className="font-display-md text-display-md text-primary uppercase mt-4">
          Egyptian Textile Heritage
        </h2>
        <p className="font-body-md text-body-md">
          Egypt is home to the world's most luxurious organic cottons. We source our textiles directly from heritage cotton growers in the Nile Delta. The yarn is woven to our custom weight specifications (up to 380gsm for basics and hoodies), ensuring a premium, heavy drape that retains its structural permanence.
        </p>

        <div className="border-l-2 border-tertiary pl-6 my-4 italic text-primary font-body-lg">
          "Silent luxury is not about being noticed; it is about being remembered for raw, tactile authenticity."
        </div>

        <p className="font-body-md text-body-md">
          Designed in our Cairo studio and built for urban environments worldwide. Thank you for participating in our structural journey.
        </p>
      </div>
    </div>
  );
}
