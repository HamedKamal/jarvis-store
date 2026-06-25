"use client";

import React, { useState } from "react";

export default function BusinessEnquiriesPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    type: "wholesale",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Enquiry submitted! We will contact you at ${formData.email} regarding your ${formData.type} request.`);
    setFormData({ name: "", company: "", email: "", type: "wholesale", message: "" });
  };

  return (
    <div className="w-full max-w-[800px] mx-auto px-margin-mobile md:px-0 py-section-gap">
      <span className="font-label-caps text-label-caps text-tertiary tracking-widest block mb-4">
        CONTACT
      </span>
      <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase mb-8">
        BUSINESS ENQUIRIES
      </h1>
      
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
        For wholesale distribution slots, stockist collaborations, press features, or design consulting, please submit our enquiries form or email <strong>business@jarvis.com</strong> directly.
      </p>

      {/* Enquiry Form */}
      <div className="bg-surface-container p-8 border border-outline-variant/30">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="px-4 py-3 border border-outline-variant bg-surface-container-lowest text-primary font-body-md focus:outline-none focus:border-primary rounded-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                Company / Organization
              </label>
              <input
                type="text"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="px-4 py-3 border border-outline-variant bg-surface-container-lowest text-primary font-body-md focus:outline-none focus:border-primary rounded-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="px-4 py-3 border border-outline-variant bg-surface-container-lowest text-primary font-body-md focus:outline-none focus:border-primary rounded-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                Enquiry Type
              </label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="px-4 py-3 border border-outline-variant bg-surface-container-lowest text-primary font-body-md focus:outline-none focus:border-primary rounded-none h-[46px]"
              >
                <option value="wholesale">Wholesale Distribution</option>
                <option value="stockist">Stockist Slot Application</option>
                <option value="press">Press / Media Coverage</option>
                <option value="collaboration">Design Collaboration</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-label-sm text-label-sm text-on-surface-variant uppercase">
              Message / Details
            </label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="px-4 py-3 border border-outline-variant bg-surface-container-lowest text-primary font-body-md focus:outline-none focus:border-primary rounded-none resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-on-primary font-label-caps text-label-caps py-4 hover:bg-primary-hover transition-colors rounded-none w-full md:w-max px-8"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}
