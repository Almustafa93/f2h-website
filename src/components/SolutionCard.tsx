"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, X } from 'lucide-react';

import { createPortal } from 'react-dom';

export const SolutionCard = ({ item, index }: { item: any, index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        onClick={() => setIsOpen(true)}
        className="group relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer will-change-transform"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={item.image}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 will-change-transform"
            alt={item.title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/95 via-brand-purple/80 to-transparent transition-opacity duration-500" />
          <div className="absolute inset-0 bg-brand-purple/20 group-hover:bg-brand-red/20 transition-colors duration-500 mix-blend-overlay" />
        </div>

        <div className="relative z-10 h-full p-8 flex flex-col justify-end">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-white mb-6 transform -rotate-6 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500 shadow-xl">
            {item.icon}
          </div>

          <h3 className="text-2xl font-black text-white mb-3 leading-tight drop-shadow-lg">{item.title}</h3>

          <p className="text-white/80 font-medium text-sm leading-relaxed mb-6 line-clamp-2 max-w-[90%] drop-shadow-md">
            {item.shortDesc}
          </p>

          <div className="flex items-center gap-2 text-white font-black text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            View Details <ChevronRight size={16} className="text-brand-red" />
          </div>
        </div>
      </motion.div>

      {/* Details Modal Portal */}
      {mounted && createPortal(
        <AnimatePresence>
          {isOpen && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-brand-purple/60 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0"
                onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row z-10"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 z-20 p-2 bg-white/20 hover:bg-white/40 rounded-full backdrop-blur-md transition-colors text-brand-purple md:text-white"
                >
                  <X size={24} />
                </button>

                <div className="w-full md:w-2/5 h-64 md:h-auto relative">
                  <img src={item.image} className="w-full h-full object-cover" alt={item.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/90 to-transparent md:hidden" />
                </div>

                <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto">
                  <div className="w-16 h-16 bg-brand-purple/5 text-brand-purple rounded-2xl flex items-center justify-center mb-6">
                    {item.icon}
                  </div>

                  <h2 className="text-3xl md:text-4xl font-black text-brand-purple mb-6 leading-tight">{item.title}</h2>

                  <div className="prose prose-lg text-slate-600 leading-relaxed max-w-none">
                    <p>{item.details || item.shortDesc}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};
