"use client";

import React, { useState } from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed: ${email}`);
    setEmail("");
  };

  // SVGs for the exact list of social icons
  const iconInstagram = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01"/>
    </svg>
  );

  const iconTikTok = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
    </svg>
  );

  const iconFacebook = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0 -5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );

  const iconYouTube = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <rect width="20" height="15" x="2" y="4" rx="2.18" ry="2.18"/>
      <polygon points="10 8 10 15 15 11.5 10 8"/>
    </svg>
  );

  const iconThreads = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
      <path d="M12 8a2.5 2.5 0 0 0-2.5 2.5v1.5a2.5 2.5 0 0 0 5 0v-1.5A2.5 2.5 0 0 0 12 8z"/>
      <path d="M17 12v-1.5a5 5 0 0 0-10 0v1.5a5 5 0 0 0 9 3"/>
    </svg>
  );

  const iconTwitch = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9H9V6h2v5zm4 0h-2V6h2v5z"/>
    </svg>
  );

  return (
    <footer className="bg-[#0F1B2D] border-t border-white/10 pt-16 pb-12 w-full mt-auto text-[#F7F6F2]">
      <div className="max-width-container px-margin-mobile md:px-margin-desktop">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 gap-x-gutter mb-16">
          
          {/* Column 1: JARVIS */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h3 className="font-label-caps text-label-caps text-[#F7F6F2] tracking-wider font-bold">
              JARVIS
            </h3>
            <ul className="flex flex-col gap-3 font-body-md text-body-md">
              <li>
                <Link href="/about" className="text-[#F7F6F2]/70 hover:text-[#F7F6F2] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-[#F7F6F2]/70 hover:text-[#F7F6F2] transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/products/ringer-tee" className="text-[#F7F6F2]/70 hover:text-[#F7F6F2] transition-colors">
                  Shop Ringer Tee
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: SUPPORT */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h3 className="font-label-caps text-label-caps text-[#F7F6F2] tracking-wider font-bold">
              SUPPORT
            </h3>
            <ul className="flex flex-col gap-3 font-body-md text-body-md">
              <li>
                <Link href="/faqs" className="text-[#F7F6F2]/70 hover:text-[#F7F6F2] transition-colors">
                  FAQ's
                </Link>
              </li>
              <li>
                <Link href="/manage-preorders" className="text-[#F7F6F2]/70 hover:text-[#F7F6F2] transition-colors">
                  Manage Pre-orders
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="text-[#F7F6F2]/70 hover:text-[#F7F6F2] transition-colors">
                  Delivery info
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-[#F7F6F2]/70 hover:text-[#F7F6F2] transition-colors">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-[#F7F6F2]/70 hover:text-[#F7F6F2] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/withdraw" className="text-[#F7F6F2]/70 hover:text-[#F7F6F2] transition-colors">
                  Withdraw from Contract
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: SOCIAL */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            {/* SOCIAL row */}
            <div className="flex flex-col gap-4">
              <h3 className="font-label-caps text-label-caps text-[#F7F6F2] tracking-wider font-bold">
                SOCIAL
              </h3>
              <div className="flex items-center gap-3 text-[#F7F6F2]/70">
                <a href="https://instagram.com" className="hover:text-[#F7F6F2] transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Instagram">{iconInstagram}</a>
                <a href="https://tiktok.com" className="hover:text-[#F7F6F2] transition-colors" target="_blank" rel="noopener noreferrer" aria-label="TikTok">{iconTikTok}</a>
                <a href="https://facebook.com" className="hover:text-[#F7F6F2] transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Facebook">{iconFacebook}</a>
                <a href="https://youtube.com" className="hover:text-[#F7F6F2] transition-colors" target="_blank" rel="noopener noreferrer" aria-label="YouTube">{iconYouTube}</a>
                <a href="https://threads.net" className="hover:text-[#F7F6F2] transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Threads">{iconThreads}</a>
                <a href="https://twitch.tv" className="hover:text-[#F7F6F2] transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Twitch">{iconTwitch}</a>
              </div>
            </div>
          </div>

          {/* Column 4: SIGN UP NOW */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="font-label-caps text-label-caps text-[#F7F6F2] tracking-wider font-bold">
              SIGN UP NOW
            </h3>
            <p className="font-body-md text-body-md text-[#F7F6F2]/70">
              Stay in the loop with exclusive offers and product previews.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-row items-stretch w-full mt-2">
              <input
                type="email"
                required
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 border border-white/20 bg-white/5 text-[#F7F6F2] font-body-md placeholder:text-[#F7F6F2]/40 focus:outline-none focus:border-[#C28a5c] rounded-none"
              />
              <button
                type="submit"
                className="bg-[#C28a5c] text-[#F7F6F2] font-label-caps text-label-caps px-6 hover:bg-[#C28a5c]/85 transition-colors rounded-none border border-[#C28a5c] border-l-0"
              >
                SIGN UP
              </button>
            </form>
          </div>

        </div>

        {/* Copyright Line */}
        <div className="pt-8 border-t border-white/10">
          <p className="font-label-caps text-label-caps text-[#F7F6F2]/50 uppercase tracking-widest text-center md:text-left text-[11px]">
            © {new Date().getFullYear()} JARVIS. ALL RIGHTS RESERVED.{" "}
            <Link href="/business-enquiries" className="underline font-bold text-[#F7F6F2] hover:text-[#C28a5c] transition-colors">
              BUSINESS ENQUIRIES
            </Link>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
