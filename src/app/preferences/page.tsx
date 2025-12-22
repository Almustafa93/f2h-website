"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';
import { CLIENTS } from '@/lib/data';

export default function PreferencesPage() {
  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
        <div className="absolute top-10 right-10 w-96 h-96 bg-brand-red rounded-full blur-[100px]" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-purple rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          title="Our Partners"
          subtitle="Trusted by leading organizations across the region and beyond."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mt-16">
          {CLIENTS.map((client: any, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
              className="group bg-white h-[220px] p-6 rounded-[2rem] shadow-lg hover:shadow-2xl border border-brand-purple/5 hover:border-brand-purple/20 flex flex-col items-center justify-center transition-all duration-300 cursor-default"
            >
              <div className="w-full h-24 flex items-center justify-center mb-4 relative overflow-hidden">
                {client.isImage ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-[80%] max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100 transform group-hover:scale-110"
                  />
                ) : (
                  <span className="text-2xl font-black text-brand-purple opacity-50 group-hover:opacity-100 transition-opacity">
                    {client.logo}
                  </span>
                )}
              </div>

              <div className="text-center w-full relative">
                <h3 className="font-bold text-brand-purple text-sm md:text-base uppercase tracking-wider opacity-80 group-hover:opacity-100 transition-opacity">
                  {client.name}
                </h3>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-brand-red group-hover:w-12 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
