"use client";

import React from "react";

export default function PrivacyPage() {
  return (
    <div className="w-full max-w-[800px] mx-auto px-margin-mobile md:px-0 py-section-gap">
      <span className="font-label-caps text-label-caps text-tertiary tracking-widest block mb-4">
        LEGAL
      </span>
      <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase mb-8">
        PRIVACY POLICY
      </h1>
      
      <div className="flex flex-col gap-6 font-body-md text-body-md text-on-surface-variant leading-relaxed">
        <p className="text-xs text-on-surface-variant/70">Last Updated: June 25, 2026</p>
        
        <p>
          Jarvis ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy describes how we collect, use, and share your personal information when you visit or make a purchase from our website.
        </p>

        <h2 className="font-display-md text-display-md text-primary uppercase mt-4">
          1. Information We Collect
        </h2>
        <p>
          When you make a purchase or attempt to make a purchase through the site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number.
        </p>

        <h2 className="font-display-md text-display-md text-primary uppercase mt-4">
          2. How We Use Your Information
        </h2>
        <p>
          We use the order information that we collect generally to fulfill any orders placed through the site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this information to:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Communicate with you regarding preorders or order status updates.</li>
          <li>Screen our orders for potential risk or fraud.</li>
          <li>Provide you with information or advertising relating to our products or services, when in line with the preferences you have shared with us.</li>
        </ul>

        <h2 className="font-display-md text-display-md text-primary uppercase mt-4">
          3. Sharing Your Information
        </h2>
        <p>
          We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Shopify to power our online store. We also use DHL and Aramex to ship your products.
        </p>

        <h2 className="font-display-md text-display-md text-primary uppercase mt-4">
          4. Data Retention
        </h2>
        <p>
          When you place an order through the site, we will maintain your order information for our records unless and until you ask us to delete this information.
        </p>
      </div>
    </div>
  );
}
