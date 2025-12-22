"use client";

import React from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import { ProjectCard } from '@/components/ProjectCard';
import { PROJECTS } from '@/lib/data';

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Our Projects" 
          subtitle="Showcasing our contributions to Iraq's digital and security infrastructure."
        />
        
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.id} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
