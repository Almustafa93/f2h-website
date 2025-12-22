"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Download } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { COMPANY_INFO, PROJECTS } from '@/lib/data';
import { ProjectCard } from '@/components/ProjectCard';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen relative overflow-hidden bg-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-40 left-0 w-[400px] h-[400px] bg-brand-purple/5 rounded-full blur-[100px] -z-10" />

      <section className="container mx-auto px-6 relative z-10">
        <SectionHeading
          title="About F2H"
          subtitle="Discover our journey, vision, and the values that drive Al Nafaath Optical Co."
        />

        <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-red/10 rounded-full blur-[80px]" />
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white bg-white">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1766349003709.png"
                alt="F2H Field Work"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-brand-purple p-8 rounded-3xl shadow-2xl z-20">
              <div className="text-4xl font-black text-brand-red mb-1">FTTH</div>
              <div className="text-sm text-white font-bold uppercase tracking-tight">Experts</div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <p className="text-2xl text-brand-purple leading-relaxed font-black">
              Al-Nafaath Al-Dhoui (F2H) for General Trading, Internet Services, and Information Technology is a premier Iraqi company dedicated to digital infrastructure transformation.
            </p>
            <p className="text-lg text-brand-purple/70 leading-relaxed font-medium">
              Registered in the Iraq Department of Companies and the Baghdad Chamber of Commerce, we specialize in executing large-scale Fiber-to-the-Home (FTTH) projects across every province in Iraq. Beyond networks, we provide cutting-edge IT services and smart integrated solutions designed for the future.
            </p>
            <p className="text-lg text-brand-purple/70 leading-relaxed font-medium">
              Since our inception, we have centered our operations on delivering services that are reliable, secure, and flexible. We continuously invest in advanced technologies and strategic partnerships with global and local leaders to solve complex technical challenges for our clients.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {['Reliable & Secure', 'FTTH Specialists', 'Smart Solutions', 'Flexible Service', 'Global Partnerships', 'Iraq-Wide Coverage'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-brand-purple font-black uppercase tracking-wider text-xs">
                  <CheckCircle className="text-brand-red shrink-0" size={18} />
                  {item}
                </div>
              ))}
            </div>

            <motion.a
              href="/files/F2H_Company_Profile.pdf"
              download
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-red text-white text-lg font-bold rounded-2xl shadow-xl shadow-brand-red/20 hover:bg-brand-red-light transition-all mt-8 cursor-pointer"
            >
              <Download size={24} />
              Download Company Profile
            </motion.a>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-12 mb-32">
          <motion.div
            whileHover={{ y: -10 }}
            className="p-10 bg-brand-purple/5 rounded-[3rem] text-brand-purple shadow-xl border border-brand-purple/10 border-b-8 border-brand-red"
          >
            <h4 className="text-3xl font-black mb-6 uppercase tracking-tight">Our Vision</h4>
            <p className="text-lg text-brand-purple/70 leading-relaxed font-medium">
              To lead the bridge into the era of fiber optic networks, smart solutions, and advanced communication systems. We strive to provide standardized, world-class technical developments that set the benchmark for quality in Iraq's digital landscape.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="p-10 bg-brand-purple rounded-[3rem] text-white shadow-2xl border-b-8 border-brand-red"
          >
            <h4 className="text-3xl font-black mb-6 uppercase tracking-tight">Our Mission</h4>
            <p className="text-lg text-white/90 leading-relaxed font-bold">
              To empower our clients to achieve their business objectives by maximizing the benefits of modern technology and providing the highest standards of service, ensuring seamless connectivity and security for every user.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <div className="rounded-3xl overflow-hidden h-[300px] border-4 border-white shadow-lg">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1766349011988.png"
              alt="Installation process"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-3xl overflow-hidden h-[300px] border-4 border-white shadow-lg">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1766349022420.png"
              alt="Fiber cable management"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Projects Section Added Here */}
        <section className="mt-32">
          <SectionHeading
            title="Our Projects"
            subtitle="Showcasing our contributions to Iraq's digital and security infrastructure."
          />
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            {PROJECTS.map((project, idx) => (
              <ProjectCard key={project.id} project={project} idx={idx} />
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
