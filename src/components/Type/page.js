"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const words = [
  "Price is varies 💎",
  "Karat Gold Store 🛍️",
  "24K - ~117.60 USD/g",
  "23K - ~113.46 USD/g",
  "22K - ~108.50 – 109.00 USD/g",
  "21K - ~103.60 USD/g",
  
];

export default function TypewriterGold() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let typingSpeed = deleting ? 50 : 120;

    const timeout = setTimeout(() => {
      if (!deleting && charIndex < currentWord.length) {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (deleting && charIndex > 0) {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (!deleting && charIndex === currentWord.length) {
        setTimeout(() => setDeleting(true), 1500);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex]);

  return (
    <div className="flex justify-center items-center h-20">
      <motion.span
        className="text-2xl md:text-3xl font-bold text-yellow-500"
        animate={{ opacity: [1, 0.6, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        {text}
        <span className="animate-pulse">|</span>
      </motion.span>
    </div>
  );
}
