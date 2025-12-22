"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeading = ({ title, subtitle, light = false }: { title: string, subtitle: string, light?: boolean }) => (
  <div className="mb-16 text-center">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-4xl md:text-5xl font-black mb-4 ${light ? 'text-white' : 'text-brand-purple'}`}
    >
      {title}
    </motion.h2>
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="h-1.5 bg-brand-red mx-auto rounded-full mb-6 w-20 will-change-transform"
    />
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
      className={`text-lg max-w-2xl mx-auto ${light ? 'text-white/70' : 'text-brand-purple/60'}`}
    >
      {subtitle}
    </motion.p>
  </div>
);
