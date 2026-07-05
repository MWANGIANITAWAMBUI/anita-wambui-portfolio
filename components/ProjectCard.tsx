import React, { useRef } from 'react';
import { Project } from '../types';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface Props {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<Props> = ({ project, index }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Immersive parallax for the image
  const y = useTransform(scrollYProgress, [0, 1], [-120, 120]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1.15, 1.05]);

  return (
    <div ref={containerRef} className="group relative w-full border-t border-zinc-200 py-24 md:py-40 hover:bg-white transition-colors duration-1000 px-4 md:px-0">
      <div className="swiss-grid items-center max-w-[1920px] mx-auto">
        
        {/* IMAGE SECTION - Massive presence */}
        <div className={`col-span-12 lg:col-span-9 ${!isEven ? 'lg:order-2' : ''}`}>
          {project.link && project.link !== '#' ? (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block relative aspect-[16/10] md:aspect-[21/9] overflow-hidden bg-zinc-200 shadow-2xl group-hover:shadow-[0_80px_120px_rgba(255,77,0,0.25)] transition-all duration-1000 rounded-sm"
            >
              <motion.div style={{ scale }} className="w-full h-full">
                <motion.img 
                  style={{ y }}
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-[160%] object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                />
              </motion.div>
              
              {/* Minimalist Overlay */}
              <div className="absolute inset-0 bg-[#ff4d00]/5 opacity-40 group-hover:opacity-0 transition-opacity duration-1000"></div>
              
              {/* Attention-grabbing Center Indicator */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700">
                 <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-[#ff4d00] text-white flex flex-col items-center justify-center scale-0 group-hover:scale-100 transition-all duration-700 delay-100 shadow-2xl">
                    <ArrowUpRight size={48} className="group-hover:rotate-45 transition-transform duration-500" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] mt-2">{project.isClientProject ? 'View Case Study' : 'View Project'}</span>
                 </div>
              </div>
            </a>
          ) : (
            <div className="block relative aspect-[16/10] md:aspect-[21/9] overflow-hidden bg-zinc-200 shadow-2xl rounded-sm">
              <motion.div style={{ scale }} className="w-full h-full">
                <motion.img 
                  style={{ y }}
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-[160%] object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                />
              </motion.div>
              <div className="absolute inset-0 bg-[#ff4d00]/5 opacity-40 group-hover:opacity-0 transition-opacity duration-1000"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700">
                 <div className="px-6 py-3 rounded-full bg-zinc-900/90 text-white flex items-center justify-center scale-0 group-hover:scale-100 transition-all duration-700 delay-100 shadow-2xl">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">Client Project · NDA</span>
                 </div>
              </div>
            </div>
          )}

          {/* DESCRIPTION MOVED BELOW THE IMAGE */}
          <div className="mt-12 px-4 md:px-8 xl:px-12">
            <p className="text-base md:text-lg text-zinc-500 font-light leading-relaxed italic border-l-2 border-zinc-100 pl-6 group-hover:border-[#ff4d00]/30 transition-colors">
              {project.description}
            </p>
          </div>
        </div>

        {/* TEXT CONTENT SECTION - Title + Technologies only */}
        <div className={`col-span-12 lg:col-span-3 mt-12 lg:mt-0 px-4 md:px-8 xl:px-12 ${!isEven ? 'lg:order-1' : ''}`}>
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="text-[12px] font-black text-[#ff4d00] uppercase tracking-[0.8em] whitespace-nowrap">0{index + 1}</span>
              <div className="flex-1 h-[1px] bg-zinc-100"></div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight text-zinc-900 group-hover:text-[#ff4d00] transition-colors duration-500">
                {project.title}
              </h3>
              
              <div className="flex flex-wrap gap-x-2 gap-y-1">
                {project.technologies.map(tech => (
                  <span key={tech} className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400">
                    {tech} <span className="text-zinc-200 ml-1">/</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Action link stays with title/technologies */}
            <div className="pt-6">
              {project.link && project.link !== '#' ? (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group/link inline-flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.5em] text-zinc-900 transition-all"
                >
                  <span className="border-b-2 border-zinc-900 group-hover/link:border-[#ff4d00] group-hover/link:text-[#ff4d00] pb-1 transition-all">
                    {project.isClientProject ? 'View Details' : 'View on GitHub'}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-zinc-900 group-hover/link:bg-[#ff4d00] group-hover/link:border-[#ff4d00] flex items-center justify-center transition-all">
                    <ArrowUpRight size={18} className="text-zinc-900 group-hover/link:text-white group-hover/link:rotate-45 transition-all duration-500" />
                  </div>
                </a>
              ) : (
                <span className="inline-flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.5em] text-zinc-400">
                  Client Project · NDA
                </span>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;