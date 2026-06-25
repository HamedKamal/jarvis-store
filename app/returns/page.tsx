"use client";

import React from "react";

export default function ReturnsPage() {
  return (
    <div className="w-full max-w-[800px] mx-auto px-margin-mobile md:px-0 py-section-gap">
      <span className="font-label-caps text-label-caps text-tertiary tracking-widest block mb-4">
        SUPPORT
      </span>
      <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase mb-8">
        RETURNS & EXCHANGES
      </h1>
      
      <div className="flex flex-col gap-8 font-body-md text-body-md text-on-surface-variant leading-relaxed">
        <p className="font-body-lg text-body-lg">
          We want you to be completely satisfied with your Jarvis garments. If a piece does not meet your expectations, we offer returns and exchanges within 14 days of delivery.
        </p>

        <h2 className="font-display-md text-display-md text-primary uppercase mt-4">
          Return Guidelines
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Condition</strong>: Garments must be returned in their original condition—unworn, unwashed, and with all structural tag attachments intact.</li>
          <li><strong>Packaging</strong>: Please return items in their original protective recycled packaging.</li>
          <li><strong>Shipping costs</strong>: Return shipping costs are the responsibility of the customer, unless the item arrived damaged or defective.</li>
        </ul>

        <h2 className="font-display-md text-display-md text-primary uppercase mt-4">
          How to Initiate a Return
        </h2>
        <ol className="list-decimal pl-5 space-y-3">
          <li>
            Send an email to <strong>support@jarvis.com</strong> containing your order number (e.g. JV-10948) and the item(s) you wish to return.
          </li>
          <li>
            Specify the return reason or request an exchange for another size.
          </li>
          <li>
            Our support team will send you a pre-filled customs declaration form and DHL return shipping label within 24 hours.
          </li>
          <li>
            Hand the package to your local DHL carrier or drop it at a DHL service point.
          </li>
        </ol>

        <h2 className="font-display-md text-display-md text-primary uppercase mt-4">
          Refund Processing
        </h2>
        <p>
          Once your return is received and inspected at our Cairo warehouse, we will notify you of the status. Approved refunds will be credited back to your original payment method within 5-10 business days.
        </p>
      </div>
    </div>
  );
}
