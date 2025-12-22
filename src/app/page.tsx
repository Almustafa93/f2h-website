"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, Zap, Shield, ChevronDown, Lock, Car, Flame, Globe, Cpu, PhoneCall, Tv, Droplets, Settings, Volume2, Clock, DoorClosed, Lightbulb, Signal, AlertTriangle, Layers, HeartPulse, Database, Network
} from 'lucide-react';
import { SOLUTIONS_DATA, CLIENTS, PROJECTS, CUSTOMERS } from '@/lib/data';
import { SectionHeading } from '@/components/SectionHeading';
import { SolutionCard } from '@/components/SolutionCard';
import { ProjectCard } from '@/components/ProjectCard';

const ICON_MAP: Record<number, React.ReactNode> = {
  1: <Shield className="w-8 h-8" />,
  2: <Lock className="w-8 h-8" />,
  3: <Car className="w-8 h-8" />,
  4: <Flame className="w-8 h-8" />,
  5: <Droplets className="w-8 h-8" />,
  6: <Flame className="w-8 h-8" />,
  15: <Cpu className="w-8 h-8" />,
  20: <Globe className="w-8 h-8" />,
  25: <PhoneCall className="w-8 h-8" />,
  26: <Tv className="w-8 h-8" />,
  30: <Zap className="w-8 h-8" />,
  40: <Settings className="w-8 h-8" />,
  45: <Volume2 className="w-8 h-8" />,
  50: <Clock className="w-8 h-8" />,
  55: <DoorClosed className="w-8 h-8" />,
  60: <Lightbulb className="w-8 h-8" />,
  65: <Signal className="w-8 h-8" />,
  70: <AlertTriangle className="w-8 h-8" />,
  75: <Layers className="w-8 h-8" />,
  80: <HeartPulse className="w-8 h-8" />,
  85: <Database className="w-8 h-8" />,
  90: <Network className="w-8 h-8" />,
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-purple">
    <div className="absolute inset-0 z-0">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-red/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-purple-light rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      <div className="absolute inset-0 bg-circuit opacity-10" />
    </div>

    <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-bold mb-8 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
          Leading in Smart Infrastructure
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-black text-white leading-tight mb-8">
          Building Iraq's <br />
          <span className="text-gradient">Digital Future</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/70 mb-12 leading-relaxed max-w-xl">
          We provide integrated solutions in fiber optic technologies, smart security, and advanced network systems to support digital transformation.
        </p>

        <div className="flex flex-wrap gap-5">
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-brand-red text-white text-lg font-black rounded-2xl shadow-2xl shadow-brand-red/20 flex items-center gap-4"
          >
            Explore Solutions <ArrowRight size={24} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-white/5 border border-white/10 text-white text-lg font-black rounded-2xl backdrop-blur-md hover:bg-white/10 transition-colors"
          >
            Contact Us
          </motion.button>
        </div>

        <div className="mt-16 flex items-center gap-10">
          <div className="text-white">
            <div className="text-4xl font-black mb-1">100%</div>
            <div className="text-sm text-white/50">Satisfaction</div>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="text-white">
            <div className="text-4xl font-black mb-1">+18</div>
            <div className="text-sm text-white/50">Provinces Covered</div>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="text-white">
            <div className="text-4xl font-black mb-1">24/7</div>
            <div className="text-sm text-white/50">Support</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative hidden lg:block"
      >
        <div className="relative z-10 w-full aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/5">
          <img
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            alt="Fiber Optic Tech"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/80 via-transparent to-transparent" />
        </div>

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-10 -left-10 z-20 glass-dark p-8 rounded-3xl shadow-2xl max-w-xs"
        >
          <Zap className="text-brand-red mb-4" />
          <h4 className="text-white font-bold text-xl mb-2">FTTH Tech</h4>
          <p className="text-white/60 text-sm">Gigabit internet speeds via fiber optic directly to your home.</p>
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-10 -right-10 z-20 glass p-6 rounded-2xl shadow-2xl"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-brand-red/20 rounded-xl flex items-center justify-center text-brand-red">
              <Shield />
            </div>
            <div className="text-brand-purple">
              <div className="text-sm font-bold">Smart Defense</div>
              <div className="text-xs text-brand-purple/60">24/7 Monitoring</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>

    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 animate-bounce">
      <ChevronDown size={32} />
    </div>
  </section>
);

const TrustedBy = () => (
  <div className="py-12 bg-white border-y border-brand-purple/5 overflow-hidden">
    <div className="flex gap-20 animate-marquee whitespace-nowrap group items-center">
      {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client: any, idx) => (
        <div key={idx} className="flex items-center justify-center opacity-40 hover:opacity-100 transition-all duration-500 grayscale hover:grayscale-0">
          <div className="w-48 h-20 flex items-center justify-center relative">
            {client.isImage ? (
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-110"
              />
            ) : (
              <div className="w-16 h-16 bg-brand-purple/5 text-brand-purple rounded-2xl flex items-center justify-center font-black text-xl border border-brand-purple/10">
                {client.logo}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const CustomersRibbon = () => (
  <div className="bg-white overflow-hidden">
    <div className="py-16 bg-brand-purple text-center relative overflow-hidden">
      {/* Background decoration to match hero vibe */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 bg-circuit pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-red/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <span className="text-3xl md:text-4xl font-black tracking-[0.15em] text-white uppercase block mb-6 drop-shadow-lg">Our Prestigious Customers</span>
        <div className="w-24 h-1.5 bg-brand-red mx-auto rounded-full shadow-lg shadow-brand-red/50" />
      </div>
    </div>

    <div className="py-12 bg-brand-purple/5 border-b border-brand-purple/5 relative">
      <div className="flex gap-32 animate-marquee whitespace-nowrap group">
        {[...CUSTOMERS, ...CUSTOMERS].map((customer: any, idx) => (
          <div key={idx} className="flex items-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 scale-90 hover:scale-110">
            <span className="text-4xl font-black text-brand-purple tracking-tighter uppercase drop-shadow-sm">{customer.name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function HomePage() {
  return (
    <main className="bg-white">
      <Hero />
      <TrustedBy />

      {/* Brief About Section */}
      <section className="py-32 bg-white relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-[100px]" />
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white bg-white">
              <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80" alt="About F2H" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-red rounded-3xl -z-10 rotate-12" />
          </div>
          <div>
            <SectionHeading
              title="Who We Are"
              subtitle="Al Nafaath Optical (F2H) for General Trading, Internet Services, and IT."
            />
            <div className="space-y-6 mb-8 text-brand-purple/80 font-medium text-lg leading-relaxed">
              <p>
                Al-Nafaath Al-Dhoui (F2H) is a premier Iraqi company dedicated to digital infrastructure transformation. Registered in the Iraq Department of Companies and the Baghdad Chamber of Commerce, we specialize in executing large-scale Fiber-to-the-Home (FTTH) projects across every province in Iraq.
              </p>
              <p>
                Beyond networks, we provide cutting-edge IT services and smart integrated solutions designed for the future. We continuously invest in advanced technologies and strategic partnerships to deliver reliable, secure, and flexible services that meet the highest international standards.
              </p>
            </div>
            <motion.button
              whileHover={{ x: 10 }}
              className="group flex items-center gap-4 text-brand-red font-black text-lg"
            >
              Learn More About Us <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Featured Solutions */}
      <section className="py-32 bg-brand-purple/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-red/5 rounded-full blur-[150px] -z-10" />
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Smart Solutions"
            subtitle="Innovative technical services for the digital age."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SOLUTIONS_DATA.slice(0, 9).map((item, idx) => (
              <SolutionCard key={item.id} item={{ ...item, icon: ICON_MAP[item.id] || <Cpu /> }} index={idx} />
            ))}
          </div>
          <div className="mt-16 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/solutions'}
              className="px-10 py-5 bg-brand-purple text-white text-lg font-black rounded-2xl shadow-xl hover:bg-brand-red transition-colors"
            >
              View All Solutions
            </motion.button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-brand-purple relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit opacity-5" />
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeading
            title="Our Projects"
            subtitle="Building the backbone of Iraq's digital transformation."
            light
          />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {PROJECTS.map((project, idx) => (
              <ProjectCard key={project.id} project={project} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      <CustomersRibbon />
    </main>
  );
}
