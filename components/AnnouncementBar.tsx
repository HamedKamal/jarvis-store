"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const announcements = [
  "ARCHITECTURAL INTEGRITY IN EVERY STITCH",
  "FREE SHIPPING ON ORDERS OVER 1500 LE",
  "5% OFF ON ORDERS OVER 3000 LE",
];

const AnnouncementBar: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#b07a4f] text-[#F7F6F2] font-label-caps text-[10px] tracking-[0.2em] py-2.5 uppercase w-full overflow-hidden flex justify-center items-center h-[34px] relative select-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -15, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute text-center font-bold"
        >
          {announcements[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AnnouncementBar;
