"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { COMPANY_INFO } from '@/lib/data';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <MapPin size={32} />,
      title: "Our Office",
      content: COMPANY_INFO.address,
      delay: 0.1
    },
    {
      icon: <Phone size={32} />,
      title: "Phone",
      content: COMPANY_INFO.phone,
      delay: 0.2
    },
    {
      icon: <Mail size={32} />,
      title: "Email",
      content: COMPANY_INFO.email,
      delay: 0.3
    }
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-brand-purple rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-red rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a project in mind? Our expert team is ready to help you."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mt-16 items-start">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay }}
                className="group bg-white p-8 rounded-[2rem] shadow-lg hover:shadow-2xl border border-brand-purple/5 transition-all duration-300 flex items-center gap-8"
              >
                <div className="w-20 h-20 rounded-3xl bg-brand-purple/5 group-hover:bg-brand-red group-hover:text-white flex items-center justify-center text-brand-purple shrink-0 border border-brand-purple/10 transition-colors duration-300 shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-2xl font-black text-brand-purple mb-2">{item.title}</h4>
                  <p className="text-brand-purple/80 text-lg md:text-xl font-medium leading-relaxed">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 bg-gradient-to-br from-brand-purple to-slate-900 rounded-[3rem] shadow-2xl relative overflow-hidden text-white"
          >
            {/* Background pattern similar to circuit or dots could go here */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red opacity-10 rounded-full blur-[80px]" />

            <h3 className="text-3xl font-black mb-8 relative z-10">Send Us a Message</h3>

            <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white placeholder:text-white/40 focus:border-brand-red focus:bg-white/10 outline-none transition-all"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white placeholder:text-white/40 focus:border-brand-red focus:bg-white/10 outline-none transition-all"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white placeholder:text-white/40 focus:border-brand-red focus:bg-white/10 outline-none transition-all"
              />
              <textarea
                rows={4}
                placeholder="Your message..."
                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white placeholder:text-white/40 focus:border-brand-red focus:bg-white/10 outline-none transition-all resize-none"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-brand-red text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-brand-red/30 transition-all flex items-center justify-center gap-2"
              >
                <span>Send Request</span>
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
