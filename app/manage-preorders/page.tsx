"use client";

import React, { useState } from "react";

export default function ManagePreordersPage() {
  const [orderNumber, setOrderNumber] = useState("");
  const [email, setEmail] = useState("");
  const [statusResult, setStatusResult] = useState<string | null>(null);

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate lookup based on data
    if (orderNumber.toUpperCase().includes("JV")) {
      setStatusResult(
        "Production Phase: Sourcing Nile Delta long-staple cotton yarn. Estimated ship date: July 12."
      );
    } else {
      setStatusResult(
        "Order found: In Queue. Your preorder is confirmed and raw fabric knitting begins shortly. Est. ships in 2 weeks."
      );
    }
  };

  return (
    <div className="w-full max-w-[800px] mx-auto px-margin-mobile md:px-0 py-section-gap">
      <span className="font-label-caps text-label-caps text-tertiary tracking-widest block mb-4">
        SUPPORT
      </span>
      <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase mb-8">
        MANAGE PRE-ORDERS
      </h1>
      
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
        Pre-orders are scheduled according to our zero-waste manufacturing runs. Input your credentials below to check your order's textile processing stage.
      </p>

      {/* Lookup Form */}
      <div className="bg-surface-container p-8 border border-outline-variant/30 mb-12">
        <h3 className="font-label-caps text-label-caps text-primary mb-6 font-bold">
          Pre-Order Tracking Status
        </h3>
        <form onSubmit={handleLookup} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                Order Number
              </label>
              <input
                type="text"
                required
                placeholder="e.g. JV-10948"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                className="px-4 py-3 border border-outline-variant bg-surface-container-lowest text-primary font-body-md focus:outline-none focus:border-primary rounded-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="e.g. name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 border border-outline-variant bg-surface-container-lowest text-primary font-body-md focus:outline-none focus:border-primary rounded-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-primary text-on-primary font-label-caps text-label-caps py-4 hover:bg-primary-hover transition-colors rounded-none w-full md:w-max px-8"
          >
            Check Pre-Order Status
          </button>
        </form>

        {statusResult && (
          <div className="mt-8 pt-6 border-t border-outline-variant/20">
            <h4 className="font-label-caps text-label-caps text-tertiary mb-2">Current Status</h4>
            <p className="font-body-md text-body-md text-primary font-bold">{statusResult}</p>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-6 font-body-md text-body-md text-on-surface-variant">
        <h2 className="font-display-md text-display-md text-primary uppercase mt-4">
          Pre-Order Terms
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Guaranteed Slots</strong>: Preorders guarantee slot placement. Once a release reaches its capacity caps, raw production is closed.</li>
          <li><strong>Release Timelines</strong>: Timelines are estimated based on Giza cotton harvests and custom looms. Minor delays may occur but are immediately communicated.</li>
          <li><strong>Refunds</strong>: You may cancel a preorder for a full refund at any time before shipping occurs.</li>
        </ul>
      </div>
    </div>
  );
}
