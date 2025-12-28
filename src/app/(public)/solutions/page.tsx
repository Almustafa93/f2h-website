"use client";

import React from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import { SolutionCard } from '@/components/SolutionCard';
import { SOLUTIONS_DATA } from '@/lib/data';
import { 
  Shield, Lock, Car, Flame, Globe, Cpu, PhoneCall, Tv, Droplets, Zap, Settings, Volume2, Clock, DoorClosed, Lightbulb, Signal, AlertTriangle, Layers, HeartPulse, Database, Network 
} from 'lucide-react';

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

export default function SolutionsPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Our Solutions" 
          subtitle="Comprehensive technical services tailored for modern infrastructure needs."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOLUTIONS_DATA.map((item, idx) => (
            <SolutionCard 
              key={item.id} 
              item={{...item, icon: ICON_MAP[item.id]}} 
              index={idx} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
