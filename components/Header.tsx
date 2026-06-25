"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";

const Header: React.FC = () => {
  const pathname = usePathname();
  const { setIsCartOpen, cartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "SHOP RINGER TEE", url: "/products/ringer-tee" },
    { title: "PRODUCT STORY", url: "/#product-story" },
    { title: "ABOUT", url: "/about" },
  ];

  return (
    <>
      <nav
        id="main-nav"
        className={`sticky top-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3 mx-auto"
            : "py-6 bg-[#0F1B2D] border-b border-white/10"
        }`}
        style={
          isScrolled
            ? {
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                background: "rgba(15, 27, 45, 0.72)",
                borderBottom: "1px solid rgba(255,255,255,0.15)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
              }
            : {}
        }
      >
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop w-full max-w-[1440px] mx-auto relative">
          
          {/* Mobile Menu Icon (hidden on desktop) */}
          <button aria-label="Menu" className="md:hidden text-[#F7F6F2] p-2">
            <span className="material-symbols-outlined">menu</span>
          </button>

          {/* Navigation Links (Desktop) */}
          <ul className="hidden md:flex items-center gap-stack-lg font-label-caps text-label-caps">
            {navLinks.map((link) => {
              const isActive = pathname === link.url;
              return (
                <li key={link.url}>
                  <Link
                    href={link.url}
                    className={`transition-colors duration-300 uppercase hover:text-[#F7F6F2] ${
                      isActive
                        ? "text-[#F7F6F2] border-b border-[#F7F6F2] pb-1"
                        : "text-[#F7F6F2]/75"
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Brand Logo */}
          <Link
            href="/"
            className="font-display-md text-display-md font-bold tracking-tighter text-[#F7F6F2] absolute left-1/2 -translate-x-1/2"
          >
            JARVIS
          </Link>

          {/* Trailing Icons */}
          <div className="flex items-center gap-stack-sm md:gap-stack-md text-[#F7F6F2]">
            <button aria-label="search" className="p-2 hover:opacity-70 transition-opacity">
              <span className="material-symbols-outlined">search</span>
            </button>

            <button aria-label="person" className="p-2 hover:opacity-70 transition-opacity hidden md:block">
              <span className="material-symbols-outlined">person</span>
            </button>

            <button aria-label="favorite" className="p-2 hover:opacity-70 transition-opacity hidden md:block">
              <span className="material-symbols-outlined">favorite</span>
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="shopping_bag"
              className="p-2 hover:opacity-70 transition-opacity relative"
            >
              <span className="material-symbols-outlined">shopping_bag</span>
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#C28a5c] rounded-full"></span>
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
