"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[870px] min-h-[600px] flex items-end pb-section-gap">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh21Cj10njvYXFWhWetYS9PjCuJuP_a9GJBjt4j-aJzSw6X6aKDllEdEAv-vyauwfAL1DBRjV_Dl3dySnykXKwVeM6qLdDWTZylwroSneUuTtdD_l4oVJaQSm2AXTmjvIq045OgjSUpb56l4E8qS7pHqV44yhaTJt1nBQvpL2lqCN2bjYWQlqB00NZ_S-E5zH35N7C0BpV8QrD_RfB6kdBHXOkwMLLus2n28vnGj2ZJ8M8AENdSIs1OkNuI7D1sdqFGk6sywXdYo0"
            alt="Brutalist streetwear clothing fashion models shot"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-4 md:grid-cols-12 gap-gutter">
          <div className="col-span-4 md:col-span-8 lg:col-span-6 flex flex-col gap-stack-md text-on-primary">
            <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-primary/80">
              Fall/Winter 2024
            </span>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-xl md:text-headline-xl text-on-primary">
              ARCHITECTURAL<br />INTEGRITY.
            </h1>
            <p className="font-body-lg text-body-lg text-on-primary/90 max-w-md mt-stack-sm mb-stack-md">
              Redefining modern silhouettes through disciplined design and premium Egyptian textiles.
            </p>
            <div className="flex items-center gap-stack-md">
              <Link 
                href="/products/ringer-tee" 
                className="inline-flex items-center justify-center bg-surface text-primary px-8 py-4 font-label-caps text-label-caps uppercase hover:bg-surface-container-highest transition-colors duration-300 w-max"
              >
                Shop Ringer Tee
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Story Bento Grid */}
      <section id="product-story" className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="flex justify-between items-end mb-stack-lg border-b border-outline-variant/20 pb-4">
          <h2 className="font-display-md text-display-md text-primary uppercase">PRODUCT STORY</h2>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-12 gap-gutter md:grid-rows-[400px_400px]">
          
          {/* Card 1: Large Feature (Left) */}
          <Link 
            href="/products/ringer-tee"
            className="group relative col-span-4 md:col-span-5 md:row-span-2 bg-surface-container-low overflow-hidden"
          >
            <Image
              src="/assets/BLACK/atef-front.jpg"
              alt="Ringer Tee Hero Image"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors duration-500" />
            <div className="absolute bottom-margin-mobile md:bottom-margin-desktop left-1/2 -translate-x-1/2">
              <div className="bg-primary-container text-on-primary-container px-6 py-3 font-label-caps text-label-caps uppercase tracking-widest backdrop-blur-md whitespace-nowrap">
                THE RINGER TEE
              </div>
            </div>
          </Link>

          {/* Card 2: Top Right */}
          <Link 
            href="/products/ringer-tee"
            className="group relative col-span-4 md:col-span-7 bg-surface-container-low overflow-hidden h-[400px] md:h-auto"
          >
            <Image
              src="/assets/CREAMY-OLIVE/nour-front_1.jpg"
              alt="Premium Cotton Ringer Tee"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors duration-500" />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <div className="bg-primary-container text-on-primary-container px-6 py-3 font-label-caps text-label-caps uppercase tracking-widest backdrop-blur-md">
                PREMIUM COTTON
              </div>
            </div>
          </Link>

          {/* Card 3: Bottom Right Split 1 */}
          <Link 
            href="/products/ringer-tee"
            className="group relative col-span-2 md:col-span-4 bg-surface-container-low overflow-hidden h-[300px] md:h-auto"
          >
            <Image
              src="/assets/OLIVE-WHITE/gogo-front_1.jpg"
              alt="Relaxed Fit Ringer Tee"
              fill
              sizes="(max-width: 768px) 50vw, 30vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors duration-500" />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <div className="bg-primary-container text-on-primary-container px-4 py-2 font-label-caps text-label-caps uppercase tracking-widest backdrop-blur-md text-[10px] md:text-[12px]">
                RELAXED FIT
              </div>
            </div>
          </Link>

          {/* Card 4: Bottom Right Split 2 */}
          <Link 
            href="/products/ringer-tee"
            className="group relative col-span-2 md:col-span-3 bg-surface-container-low overflow-hidden h-[300px] md:h-auto"
          >
            <Image
              src="/assets/ROSE/nour-1.jpg"
              alt="Everyday Essential Ringer Tee"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors duration-500" />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <div className="bg-primary-container text-on-primary-container px-4 py-2 font-label-caps text-label-caps uppercase tracking-widest backdrop-blur-md text-[10px] md:text-[12px]">
                EVERYDAY ESSENTIAL
              </div>
            </div>
          </Link>

        </div>
      </section>

      {/* Shop All Colors Grid Section */}
      <section id="shop-colors" className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-section-gap border-t border-outline-variant/10">
        <div className="flex flex-col gap-stack-sm mb-stack-lg text-center md:text-left pb-4 border-b border-outline-variant/20">
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest text-[10px]">
            EXPLORE THE PALETTE
          </span>
          <h2 className="font-display-md text-display-md text-primary uppercase">SHOP ALL COLORS</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {[
            { name: "BLACK / WHITE", slug: "black-white", image: "/assets/BLACK/atef-front.jpg" },
            { name: "CREAMY / OLIVE", slug: "creamy-olive", image: "/assets/CREAMY-OLIVE/nour-front_1.jpg" },
            { name: "CREAMY / BURGUNDY", slug: "creamy-burgundy", image: "/assets/CREAMY-BURGUNDY/gogo-front.jpg" },
            { name: "OLIVE / WHITE", slug: "olive-white", image: "/assets/OLIVE-WHITE/gogo-front_1.jpg" },
            { name: "ROSE / WHITE", slug: "rose-white", image: "/assets/ROSE/nour-1.jpg" },
            { name: "ARMY / WHITE", slug: "army-white", image: "/assets/ARMY/atef-front_2.jpg" },
            { name: "BURGUNDY / WHITE", slug: "burgundy-white", image: "/assets/BURGUNDY/hana-front_1.jpg" }
          ].map((variant) => (
            <Link
              key={variant.slug}
              href={`/products/ringer-tee?variant=${variant.slug}`}
              className="group flex flex-col h-full"
            >
              {/* Card Image */}
              <div
                className="relative overflow-hidden aspect-[3/4] w-full bg-surface-container-low"
                style={{
                  borderRadius: "24px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                  transition: "box-shadow 0.3s ease",
                }}
              >
                <Image
                  src={variant.image}
                  alt={`THE RINGER TEE - ${variant.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />

                {/* Glass Quick Add overlay */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[250ms] ease-out px-3 pb-3 pointer-events-none group-hover:pointer-events-auto">
                  <div
                    className="w-full py-3 text-center font-label-caps text-primary text-[11px] tracking-widest"
                    style={{
                      backdropFilter: "blur(20px)",
                      background: "rgba(255,255,255,0.75)",
                      border: "1px solid rgba(255,255,255,0.45)",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                      borderRadius: "14px",
                    }}
                  >
                    QUICK SHOP
                  </div>
                </div>
              </div>

              {/* Card Info */}
              <div className="flex flex-col pt-3 px-1">
                <span className="font-label-caps text-label-caps text-on-surface-variant tracking-wider text-[10px]">
                  THE RINGER TEE
                </span>
                <h3 className="font-body-lg text-body-lg text-primary font-bold uppercase mt-1">
                  {variant.name}
                </h3>
                <span className="font-label-caps text-label-caps text-primary mt-1">
                  LE 700
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Statement */}
      <section className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-section-gap flex flex-col items-center text-center">
        <div className="max-w-3xl flex flex-col gap-stack-md">
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
            OUR PHILOSOPHY
          </span>
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary uppercase">
            ARCHITECTURAL INTEGRITY IN EVERY SILHOUETTE.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-stack-sm">
            Jarvis represents the intersection of premium Egyptian heritage and modern architectural streetwear. Every piece is crafted with uncompromising quality and structural discipline, designed for the discerning individual who values silent luxury.
          </p>
        </div>
      </section>
    </div>
  );
}
