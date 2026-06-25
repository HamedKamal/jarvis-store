"use client";

import React from "react";

export default function WithdrawPage() {
  return (
    <div className="w-full max-w-[800px] mx-auto px-margin-mobile md:px-0 py-section-gap">
      <span className="font-label-caps text-label-caps text-tertiary tracking-widest block mb-4">
        LEGAL
      </span>
      <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase mb-8">
        WITHDRAWAL FROM CONTRACT
      </h1>
      
      <div className="flex flex-col gap-6 font-body-md text-body-md text-on-surface-variant leading-relaxed">
        <p>
          You have the right to withdraw from this contract within 14 days without giving any reason, in accordance with standard consumer protection laws.
        </p>

        <p>
          The withdrawal period will expire 14 days from the day on which you acquire, or a third party other than the carrier and indicated by you acquires, physical possession of the last good.
        </p>

        <h2 className="font-display-md text-display-md text-primary uppercase mt-4">
          How to Exercise the Right of Withdrawal
        </h2>
        <p>
          To exercise the right of withdrawal, you must inform us (Jarvis Studio, Cairo, Egypt, support@jarvis.com) of your decision to withdraw from this contract by an unequivocal statement (e.g. an email). You may use the model withdrawal form below, but it is not obligatory.
        </p>

        <div className="bg-surface-container p-6 border border-outline-variant/30 font-mono text-xs my-4 leading-normal">
          <p className="font-bold mb-2">MODEL WITHDRAWAL FORM</p>
          <p>To: Jarvis Studio (support@jarvis.com)</p>
          <p>I/We (*) hereby give notice that I/We (*) withdraw from my/our (*) contract of sale of the following goods (*):</p>
          <p>Ordered on (*) / received on (*):</p>
          <p>Name of consumer(s):</p>
          <p>Address of consumer(s):</p>
          <p>Date:</p>
          <p className="mt-2 text-[10px] text-on-surface-variant/70">(*) Delete as appropriate.</p>
        </div>

        <h2 className="font-display-md text-display-md text-primary uppercase mt-4">
          Effects of Withdrawal
        </h2>
        <p>
          If you withdraw from this contract, we shall reimburse to you all payments received from you, including the costs of delivery (with the exception of the supplementary costs resulting from your choice of a type of delivery other than the least expensive type of standard delivery offered by us), without undue delay and in any event not later than 14 days from the day on which we are informed about your decision to withdraw.
        </p>
      </div>
    </div>
  );
}
