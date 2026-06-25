"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionProps {
  title: string;
  iconName: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  iconName,
  defaultOpen = false,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-outline-variant/20 w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 font-label-caps text-label-caps text-primary uppercase text-left focus:outline-none"
      >
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-on-error-container">{iconName}</span>
          {title}
        </div>
        <span className="material-symbols-outlined text-on-error-container">
          {isOpen ? "remove" : "add"}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 pt-2 font-body-md text-body-md text-on-surface-variant">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
