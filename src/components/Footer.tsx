"use client";

import React from 'react';
import Link from 'next/link';
import {
  Instagram, Facebook, Linkedin, Mail, Phone, MapPin, ArrowUpRight
} from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';

export const Footer = () => (
  <footer className="relative bg-brand-purple border-t border-white/5 pt-12 pb-6 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-30" />

    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-12 gap-8 items-start mb-10">
        {/* Brand Section */}
        <div className="md:col-span-5 space-y-4">
          <div className="inline-block">
            <img
              src="/logo.png"
              alt="F2H Logo"
              className="h-12 w-auto object-contain bg-white rounded-lg py-1 px-2 shadow-lg"
            />
          </div>
          <p className="text-white/50 text-sm leading-relaxed font-medium max-w-sm">
            Empowering Iraq's digital landscape with world-class connectivity and security infrastructure. Serving all 18 provinces with excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3 md:col-start-7">
          <h4 className="text-sm font-bold uppercase tracking-wider text-white/90 mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { name: 'About Us', href: '/about' },
              { name: 'Our Solutions', href: '/solutions' },
              { name: 'Success Partners', href: '/preferences' },
              { name: 'Get in Contact', href: '/contact' },
            ].map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-all flex items-center gap-2 group font-medium">
                  <span className="w-1 h-1 rounded-full bg-brand-red/0 group-hover:bg-brand-red transition-all" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="md:col-span-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-white/90 mb-4">Get In Touch</h4>
          <div className="space-y-3">
            <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-3 text-white/80 hover:text-brand-red transition-all group">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-all shadow-md shrink-0 border border-white/5 group-hover:border-transparent">
                <Phone size={14} />
              </div>
              <span className="text-sm font-bold group-hover:text-brand-red transition-colors">{COMPANY_INFO.phone}</span>
            </a>

            <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-3 text-white/80 hover:text-brand-red transition-all group">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-all shadow-md shrink-0 border border-white/5 group-hover:border-transparent">
                <Mail size={14} />
              </div>
              <span className="text-sm font-bold group-hover:text-brand-red transition-colors">{COMPANY_INFO.email}</span>
            </a>

            {/* Social Media */}
            <div className="pt-4 border-t border-white/5 mt-3">
              <div className="flex items-center gap-2">
                <SocialLink icon={<Facebook size={16} />} href="#" />
                <SocialLink icon={<Linkedin size={16} />} href="#" />
                <SocialLink icon={<Instagram size={16} />} href="#" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest">
          © {new Date().getFullYear()} Al Nafaath Al-Dhoui (F2H). All rights reserved.
        </p>
        <div className="flex items-center gap-2 text-[10px] text-white/20 font-bold uppercase tracking-[0.2em] group cursor-default">
          <span>Crafted by</span>
          <span className="text-brand-red opacity-50 group-hover:opacity-100 transition-opacity">Eventsy</span>
        </div>
      </div>
    </div>
  </footer>
);

const SocialLink = ({ icon, href }: { icon: React.ReactNode, href: string }) => (
  <a href={href} className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:bg-brand-red hover:text-white transition-all shadow-md hover:-translate-y-1">
    {icon}
  </a>
);
