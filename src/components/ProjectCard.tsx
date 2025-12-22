"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Building, ArrowRight, X } from 'lucide-react';
import { createPortal } from 'react-dom';

export const ProjectCard = ({ project, idx }: { project: any, idx: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <motion.div
        key={project.id}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        onClick={() => setIsOpen(true)}
        className="group relative h-[380px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 cursor-pointer"
      >
        <img
          src={project.image}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
          alt={project.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-purple via-brand-purple/70 to-transparent opacity-95 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red text-white text-[9px] font-black mb-3 w-max shadow-xl uppercase tracking-widest">
            {project.category}
          </div>
          <h3 className="text-2xl font-black text-white mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">{project.title}</h3>
          <div className="flex flex-wrap items-center gap-3 text-white text-xs mb-4 font-black">
            <div className="flex items-center gap-2 bg-brand-purple/50 px-2.5 py-1 rounded-xl backdrop-blur-md border border-white/20 shadow-lg shrink-0"><MapPin size={14} className="text-brand-red" /> {project.location}</div>
            <div className="flex items-center gap-2 bg-brand-purple/50 px-2.5 py-1 rounded-xl backdrop-blur-md border border-white/20 shadow-lg shrink-0"><Building size={14} className="text-brand-red" /> {project.client}</div>
          </div>
          <p className="text-white/80 text-xs line-clamp-2 max-w-2xl mb-4 font-bold leading-relaxed drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)] opacity-100">{project.description}</p>
          <motion.button
            whileHover={{ scale: 1.1, x: 5 }}
            className="w-10 h-10 rounded-xl bg-brand-red flex items-center justify-center text-white shadow-2xl shadow-brand-red/30"
          >
            <ArrowRight size={24} />
          </motion.button>
        </div>
      </motion.div>

      {/* Details Modal Portal */}
      {mounted && createPortal(
        <AnimatePresence>
          {isOpen && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-brand-purple/90 backdrop-blur-sm"
                onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative bg-white dark:bg-zinc-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row z-10"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="w-full md:w-2/5 h-64 md:h-auto relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/80 to-transparent md:hidden" />
                </div>

                <div className="w-full md:w-3/5 p-8 md:p-10 bg-white">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors z-10"
                  >
                    <X size={24} className="text-brand-purple" />
                  </button>

                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-xs font-black mb-6 uppercase tracking-widest">
                    {project.category}
                  </div>

                  <h2 className="text-3xl md:text-4xl font-black text-brand-purple mb-4 leading-tight">{project.title}</h2>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center gap-2 text-slate-500 font-bold text-sm">
                      <MapPin size={16} className="text-brand-red" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 font-bold text-sm">
                      <Building size={16} className="text-brand-red" />
                      {project.client}
                    </div>
                  </div>

                  <div className="prose prose-lg text-slate-600 leading-relaxed">
                    <p>{project.details || project.description}</p>
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
