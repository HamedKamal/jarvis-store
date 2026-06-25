"use client";

import React from "react";
import Link from "next/link";

export default function RefundPolicyPage() {
  return (
    <div className="w-full max-w-[800px] mx-auto px-margin-mobile md:px-0 py-section-gap">
      <span className="font-label-caps text-label-caps text-tertiary tracking-widest block mb-4">
        SUPPORT
      </span>
      <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase mb-8">
        Refund & Return Policy
      </h1>
      
      <div className="flex flex-col gap-8 font-body-md text-body-md text-on-surface-variant leading-relaxed">
        <p className="font-body-lg text-body-lg text-primary">
          Thank you for choosing Jarvis. We value your trust and aim to provide a seamless shopping experience. If you are not completely satisfied with your purchase, we are here to help.
        </p>

        <h2 className="font-display-md text-display-md text-primary uppercase mt-4">
          1. Return Window
        </h2>
        <p>
          You have 14 days from the date of delivery to request a return or exchange.
        </p>

        <h2 className="font-display-md text-display-md text-primary uppercase mt-4">
          2. Eligibility Criteria
        </h2>
        <p>
          To qualify for a return, the item must meet the following conditions:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Condition</strong>: Unused, unwashed, and in the same condition as received.</li>
          <li><strong>Packaging</strong>: Must be in the original packaging with all tags attached.</li>
          <li><strong>Proof</strong>: Must include the original invoice or order number.</li>
        </ul>

        <h2 className="font-display-md text-display-md text-primary uppercase mt-4">
          3. Non-Returnable Items
        </h2>
        <p>
          We cannot accept returns for:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Items showing signs of wear, washing, or damage.</li>
          <li>Products missing original tags or packaging.</li>
          <li>Items marked as "Final Sale".</li>
          <li>Requests made after the 14-day window.</li>
        </ul>

        <h2 className="font-display-md text-display-md text-primary uppercase mt-4">
          4. Shipping Fees
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Return Shipping</strong>: The customer is responsible for return shipping costs.</li>
          <li><strong>Original Shipping</strong>: Initial delivery fees are non-refundable unless the return is due to a mistake from our side (e.g., wrong or defective item).</li>
        </ul>

        <h2 className="font-display-md text-display-md text-primary uppercase mt-4">
          5. Refund Process
        </h2>
        <p>
          Once we receive and inspect your item, we will notify you of the status. Approved refunds will be processed to your original payment method. Please allow a few business days for the amount to appear in your account, depending on your bank's policy.
        </p>

        <h2 className="font-display-md text-display-md text-primary uppercase mt-4">
          6. Damaged or Wrong Items
        </h2>
        <p>
          If your order arrives damaged or incorrect, please report it within 48 hours by sending:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Your Order Number.</li>
          <li>Clear photos of the defect/item.</li>
          <li>A brief description of the issue.</li>
        </ul>

        <h2 className="font-display-md text-display-md text-primary uppercase mt-4">
          7. Contact Us
        </h2>
        <p>
          For any inquiries or to start a return, please reach out to us:
        </p>
        <ul className="list-none space-y-2">
          <li>
            <strong>Email</strong>:{" "}
            <a href="mailto:info@jarviseg.com" className="text-primary font-bold hover:underline">
              info@jarviseg.com
            </a>
          </li>
          <li>
            <strong>Social Media</strong>: Direct message on our official pages.
          </li>
        </ul>
      </div>
    </div>
  );
}
