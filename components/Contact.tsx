
import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 md:py-96 bg-[#0a0a0a] text-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#ff4d00]/5 rounded-full blur-[150px] -z-0"></div>
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-white/5 rounded-full blur-[100px] -z-0"></div>

      <div className="swiss-grid relative z-10 px-4 md:px-0">
        <div className="col-span-12 lg:col-span-4">
          <div className="lg:sticky lg:top-48">
            <span className="text-[10px] font-black uppercase tracking-[1em] text-[#ff4d00] block mb-6 md:mb-12">06 / Connection</span>
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] md:leading-[0.8] mb-8 md:mb-12">
              Ready <br /> To <span className="text-[#ff4d00]">Scale?</span>
            </h2>
            <p className="text-zinc-500 text-base md:text-xl font-light leading-relaxed max-w-xs">
              Currently building at ElementPay and open to new opportunities and collaborations.
            </p>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-8 mt-16 md:mt-24 lg:mt-0">
          <div className="flex flex-col space-y-[1px] bg-zinc-800/30 border-y border-zinc-800/30">
            
            {/* Email Block */}
            <motion.a
              href={`mailto:${CONTACT.email}`}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="group block py-12 md:py-24 hover:bg-zinc-900/50 transition-all duration-700 px-4 md:px-12 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
                <div className="space-y-3 md:space-y-4 max-w-full overflow-hidden">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#ff4d00]">Direct Channel</span>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-black tracking-tighter uppercase group-hover:translate-x-2 transition-transform duration-700 break-all lg:break-normal">
                    {CONTACT.email.split('@')[0]}<span className="text-zinc-700">@</span>{CONTACT.email.split('@')[1]}
                  </h3>
                </div>
                <div className="shrink-0 w-12 h-12 md:w-24 md:h-24 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-[#ff4d00] group-hover:border-[#ff4d00] transition-all duration-500">
                  <ArrowUpRight className="w-6 h-6 md:w-12 md:h-12 group-hover:rotate-45 transition-transform" />
                </div>
              </div>
            </motion.a>

            {/* Phone Block */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group py-12 md:py-24 hover:bg-zinc-900/50 transition-all duration-700 px-4 md:px-12"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
                <div className="space-y-3 md:space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500">Secure Line</span>
                  <h3 className="text-lg md:text-3xl lg:text-4xl font-black tracking-tighter uppercase text-zinc-300 group-hover:text-white transition-colors">
                    {CONTACT.phoneNo}
                  </h3>
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 hidden md:block">Available 09:00 — 18:00 EAT</div>
              </div>
            </motion.div>

            {/* Location Block */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group py-12 md:py-24 hover:bg-zinc-900/50 transition-all duration-700 px-4 md:px-12"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
                <div className="space-y-3 md:space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500">Global Presence</span>
                  <h3 className="text-lg md:text-3xl lg:text-4xl font-black tracking-tighter uppercase text-zinc-300 group-hover:text-[#ff4d00] transition-colors">
                    {CONTACT.address}
                  </h3>
                </div>
                <div className="flex items-center gap-4 text-zinc-700">
                   <div className="w-2 h-2 bg-[#ff4d00] rounded-full animate-pulse"></div>
                   <span className="text-[10px] font-black uppercase tracking-widest">Open to opportunities</span>
                </div>
              </div>
            </motion.div>

            {/* LinkedIn Block */}
            {CONTACT.linkedin && (
              <motion.a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="group block py-12 md:py-16 hover:bg-zinc-900/50 transition-all duration-700 px-4 md:px-12"
              >
                <div className="flex items-center justify-between gap-6">
                  <div className="space-y-3 md:space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500">LinkedIn</span>
                    <h3 className="text-lg md:text-2xl lg:text-3xl font-black tracking-tighter uppercase text-zinc-300 group-hover:text-[#ff4d00] transition-colors">
                      anita-wambui-mwangi
                    </h3>
                  </div>
                  <div className="shrink-0 w-10 h-10 md:w-16 md:h-16 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-[#ff4d00] group-hover:border-[#ff4d00] transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5 md:w-8 md:h-8 group-hover:rotate-45 transition-transform" />
                  </div>
                </div>
              </motion.a>
            )}

            {/* GitHub Block */}
            {CONTACT.github && (
              <motion.a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="group block py-12 md:py-16 hover:bg-zinc-900/50 transition-all duration-700 px-4 md:px-12"
              >
                <div className="flex items-center justify-between gap-6">
                  <div className="space-y-3 md:space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500">GitHub</span>
                    <h3 className="text-lg md:text-2xl lg:text-3xl font-black tracking-tighter uppercase text-zinc-300 group-hover:text-[#ff4d00] transition-colors">
                      MWANGIANITAWAMBUI
                    </h3>
                  </div>
                  <div className="shrink-0 w-10 h-10 md:w-16 md:h-16 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-[#ff4d00] group-hover:border-[#ff4d00] transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5 md:w-8 md:h-8 group-hover:rotate-45 transition-transform" />
                  </div>
                </div>
              </motion.a>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
