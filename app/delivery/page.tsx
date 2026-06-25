"use client";

import React from "react";

export default function DeliveryPage() {
  const shippingMethods = [
    {
      name: "DOMESTIC EXPRESS (EGYPT)",
      time: "1 - 2 Business Days",
      cost: "LE 50 (Free on orders over LE 1500)",
      carrier: "Aramex / Jarvis Courier",
    },
    {
      name: "DHL GLOBAL EXPRESS (EUROPE & NORTH AMERICA)",
      time: "2 - 4 Business Days",
      cost: "LE 400 / $25 (Free on orders over LE 1500 / $150)",
      carrier: "DHL Express",
    },
    {
      name: "DHL GLOBAL EXPRESS (REST OF WORLD)",
      time: "3 - 5 Business Days",
      cost: "LE 650 / $40 (Free on orders over LE 1500 / $150)",
      carrier: "DHL Express",
    },
  ];

  return (
    <div className="w-full max-w-[800px] mx-auto px-margin-mobile md:px-0 py-section-gap">
      <span className="font-label-caps text-label-caps text-tertiary tracking-widest block mb-4">
        SUPPORT
      </span>
      <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase mb-8">
        DELIVERY INFO
      </h1>
      
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
        We process and ship orders directly from our Cairo hub, utilizing DHL Express for global routing. Each shipment is packaged in structural, recycled cardboard boxes designed to protect the garments.
      </p>

      {/* Shipping Grid */}
      <div className="flex flex-col gap-6 mb-12">
        {shippingMethods.map((method, idx) => (
          <div key={idx} className="p-6 bg-surface-container border border-outline-variant/30 flex flex-col gap-4">
            <h3 className="font-label-caps text-label-caps text-primary font-bold tracking-wider">
              {method.name}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm font-body-md">
              <div>
                <span className="font-label-caps text-[10px] text-on-surface-variant block mb-1">Transit Time</span>
                <span className="font-bold text-primary">{method.time}</span>
              </div>
              <div>
                <span className="font-label-caps text-[10px] text-on-surface-variant block mb-1">Shipping Cost</span>
                <span className="font-bold text-primary">{method.cost}</span>
              </div>
              <div>
                <span className="font-label-caps text-[10px] text-on-surface-variant block mb-1">Carrier partner</span>
                <span className="font-bold text-primary">{method.carrier}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-6 font-body-md text-body-md text-on-surface-variant">
        <h2 className="font-display-md text-display-md text-primary uppercase mt-4">
          Tracking & Customs
        </h2>
        <p>
          Once your package is scanned at our fulfillment center, you will receive an automated email containing your DHL tracking link and customs documentation.
        </p>
        <p>
          <strong>International Customs & Duties</strong>: All shipments outside Egypt may be subject to import duties and taxes upon arrival. These charges are the responsibility of the customer and are calculated directly by the destination country's customs agency.
        </p>
      </div>
    </div>
  );
}
